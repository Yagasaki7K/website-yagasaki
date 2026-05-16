---
title: Além do npm run build - 7 Estratégias Avançadas para Acelerar seu Next.js App
excerpt: 'Se você chegou até aqui, provavelmente já conhece o básico: o next/image é incrível, o next build já otimiza bastante coisa e o lazy loading ajuda a não travar a página. Mas, sejamos honestos, o que separa um site "ok" de um site que realmente performa são os detalhes.'
image: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags: ["Performance", "Frontend", "Next.js"]
date: "2026-05-16"
---

![](https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

Se você chegou até aqui, provavelmente já conhece o básico: o `next/image` é incrível, o `next build` já otimiza bastante coisa e o `lazy loading` ajuda a não travar a página. Mas, sejamos honestos, o que separa um site "ok" de um site que realmente performa são os detalhes.

Nos últimos anos, especialmente trabalhando com clientes do MeuBoi e Astriia, dois projetos que tive a honra de estar a frente do desenvolvimento, percebi que as otimizações de superfície resolvem apenas parte do problema. A verdadeira mágica acontece quando você vai além do óbvio e começa a tratar performance como uma feature do produto, não como um checklist.

Neste guia, vou compartilhar 7 estratégias práticas que usei para reduzir drasticamente o LCP (Largest Contentful Paint) e melhorar o Core Web Vitals de aplicações Next.js em produção. O foco aqui não é teoria, é código funcionando.

---

## 1. `next/image`: Você está usando errado (e eu também já usei)

### O que é o `next/image`?

É um componente nativo do Next.js que substitui a tag `<img>` tradicional. Ele faz automaticamente várias otimizações: redimensiona imagens para o tamanho correto, converte para formatos modernos (como WebP) e carrega apenas quando o usuário está prestes a ver a imagem.

**Problema comum**: Muita gente usa o `next/image` sem configurar corretamente dois parâmetros essenciais: `priority` e `sizes`. Isso faz com que o navegador baixe imagens maiores do que o necessário ou carregue imagens que não são prioritárias, piorando o tempo de carregamento.

### Solução

**Erro #1: `priority` nas imagens erradas.**

Apenas imagens **acima da dobra** (a parte da tela que o usuário vê sem rolar) merecem `priority`. Colocar `priority` numa imagem que só aparecerá depois de scrollar é desperdício de recurso.

**Erro #2: Esquecer o `sizes` em layouts responsivos.**

Se você tem uma imagem que ocupa 100% da largura no mobile, mas apenas 50% no desktop, o atributo `sizes` diz ao navegador qual tamanho esperar. Sem isso, o navegador pode baixar uma imagem gigante desnecessariamente.

Exemplo de uso otimizado:

```tsx
import Image from 'next/image'

export function HeroImage() {
  return (
    <Image
      src="/hero.jpg"
      width={1200}
      height={600}
      priority
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
      className="rounded-lg"
      alt="Hero banner"
    />
  )
}
```

**Bônus:** Se você está servindo imagens de um CMS externo (WordPress, Contentful, etc.), use `loader` personalizado para aproveitar as otimizações de entrega deles:

```tsx
const customLoader = ({ src, width, quality }) => {
  return `https://meucms.com/${src}?w=${width}&q=${quality || 75}`
}

<Image loader={customLoader} src="meu-arquivo.jpg" width={800} height={600} alt="..." />
```

---

## 2. Cache Inteligente: Não deixe o navegador trabalhar sozinho

### O que é cache e por que ele importa?

Cache é uma técnica de armazenar cópias de arquivos (como imagens, CSS, JavaScript) para que o navegador não precise baixá-los novamente em visitas futuras. Pense como uma "memória temporária".

**Problema**: Por padrão, o Next.js já aplica algumas regras de cache, mas elas são genéricas. Você pode melhorar drasticamente a performance configurando diferentes "tempos de validade" para diferentes tipos de arquivo. Por exemplo: uma foto de perfil pode ficar armazenada por meses, enquanto uma página de preços deve ser revalidada a cada hora.

### Solução

### Cache no Middleware

O `middleware.ts` é um arquivo especial do Next.js que intercepta cada requisição antes de ela chegar na página. Use-o para adicionar cabeçalhos HTTP específicos.

```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Para imagens e fontes: cache agressivo (1 ano)
  if (request.nextUrl.pathname.match(/\.(jpg|jpeg|gif|png|webp|woff2)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }

  // Para a página inicial: 1 hora no CDN, 1 dia no navegador
  if (request.nextUrl.pathname === '/') {
    response.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')
  }

  return response
}
```

**Explicação dos termos:**
- `public`: qualquer intermediário (CDN, proxy) pode armazenar em cache.
- `max-age=31536000`: o arquivo é considerado "fresco" por 1 ano.
- `immutable`: o arquivo nunca muda, então o navegador nunca precisa verificar novamente.
- `s-maxage=3600`: armazena em CDN por 1 hora.
- `stale-while-revalidate=86400`: se o cache expirar, serve o conteúdo antigo enquanto busca o novo em segundo plano (por 1 dia).

### Cache de dados com React Cache e SWR

Para dados que vêm de uma API (ex: lista de produtos), você pode armazenar em cache no servidor:

```typescript
// app/api/posts/route.ts
export async function GET() {
  const res = await fetch('https://api.example.com/posts', {
    next: { revalidate: 60 } // ISR: revalida a cada 60 segundos
  })
  return res.json()
}
```

E no front-end, use **SWR** (Stale-While-Revalidate) para exibir dados antigos enquanto busca novos:

```tsx
import useSWR from 'swr'

function Posts() {
  const { data } = useSWR('/api/posts', fetcher, {
    revalidateOnFocus: false, // não recarrega ao focar na aba
    dedupingInterval: 60000   // se a mesma requisição for chamada várias vezes em 60s, usa o cache
  })
  // ...
}
```

---

## 3. Core Web Vitals: O que o Lighthouse não te conta

### O que são Core Web Vitals?

São **métricas criadas pelo Google** para medir a experiência real de um usuário em um site. Elas afetam diretamente o ranqueamento no Google. As três mais importantes são:

- **LCP (Largest Contentful Paint)**: tempo que o maior elemento visível da página (uma imagem, um bloco de texto) leva para aparecer. Ideal: até 2,5 segundos.
- **CLS (Cumulative Layout Shift)**: mede se os elementos da página "pulam" de lugar enquanto carregam (ex: um botão move tudo para baixo). Ideal: próximo de 0.
- **FID (First Input Delay)**: tempo que o site leva para responder ao primeiro clique ou toque do usuário. Ideal: menos de 100 milissegundos.

**Problema**: O Lighthouse (ferramenta do Google DevTools) simula um ambiente ideal. Na vida real, com internet lenta ou dispositivos fracos, os números podem ser muito piores.

### Solução

### Monitoramento real com a API `web-vitals`

Instale a biblioteca oficial do Google:

```bash
npm install web-vitals
```

No arquivo `app/layout.tsx` (ou `pages/_app.tsx`), adicione:

```tsx
import { useReportWebVitals } from 'next/web-vitals'

export function ReportWebVitals() {
  useReportWebVitals((metric) => {
    if (metric.label === 'web-vital') {
      // Envia para seu analytics (Google Analytics, Plausible, etc.)
      console.log(metric.name, metric.value, metric.rating)
    }
  })
}
```

Isso captura os dados reais de cada visita e permite que você veja onde sua aplicação está sofrendo.

### Melhorando o CLS (Cumulative Layout Shift)

O CLS acontece quando um elemento é carregado depois que a página já foi exibida, empurrando o conteúdo para baixo. A solução é **reservar espaço antecipadamente**.

Exemplo: um vídeo que carrega assincronamente:

```tsx
<div className="relative aspect-video bg-gray-100">
  {isLoading ? (
    <div className="animate-pulse w-full h-full" />
  ) : (
    <video src={src} controls className="absolute inset-0 w-full h-full" />
  )}
</div>
```

O truque está no `aspect-video` (ou uma altura fixa) – isso impede que o conteúdo pule quando o vídeo carregar.

---

## 4. Fontes: O elo mais fraco (e mais fácil de otimizar)

### O problema com fontes externas

Fontes do Google Fonts, Typekit, etc. são **bloqueantes de renderização** por padrão. Ou seja, o navegador só mostra o texto depois que baixa a fonte. Isso atrasa o LCP.

**Solução**: usar `next/font`, que já aplica `display: swap` (mostra uma fonte de fallback imediatamente e substitui depois que a fonte real carregar).

### Solução

```tsx
// app/layout.tsx
import { Inter, Roboto_Mono } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // fallback imediato
  preload: true,   // carrega antes
})

export default function RootLayout({ children }) {
  return (
    <html className={inter.className}>
      {/* ... */}
    </html>
  )
}
```

---

## 5. Scripts de terceiros: O câncer silencioso da web

### O que são scripts de terceiros?

Google Tag Manager, Hotjar (gravação de sessões), Intercom (chat), Facebook Pixel – todos eles adicionam código JavaScript externo ao seu site. Cada um faz requisições, baixa arquivos e pode bloquear a interatividade da página.

**Problema**: muitos devs colocam esses scripts no `<head>` ou carregam todos de uma vez, sem critério. Isso mata a performance.

### Solução

Next.js 13+ oferece o componente `Script` com estratégias inteligentes:

```tsx
import Script from 'next/script'

export default function Analytics() {
  return (
    <>
      {/* Essencial – carrega imediatamente antes de qualquer interação */}
      <Script src="/essential.js" strategy="beforeInteractive" />
      
      {/* Pode esperar – carrega depois da página estar interativa */}
      <Script src="https://www.googletagmanager.com/gtag/js" strategy="afterInteractive" />
      
      {/* Totalmente preguiçoso – só carrega quando o usuário interage ou o navegador está ocioso */}
      <Script src="https://js.hotjar.com/..." strategy="lazyOnload" />
    </>
  )
}
```

**Dica extra:** Use **Partytown** (do Builder.io) para isolar scripts de terceiros em web workers. Isso evita que eles bloqueiem a thread principal (onde o JavaScript roda). Requer configuração adicional, mas vale muito a pena para projetos com muitos scripts.

---

## 6. Server Components: Nem tudo precisa ser cliente

### O que são Server Components?

No Next.js App Router (a versão mais nova), os componentes são **servidores por padrão**. Isso significa que eles rodam no servidor, geram HTML e enviam pronto para o navegador. **Zero JavaScript** vai para o cliente.

**Problema**: muita gente ainda força todos os componentes a serem "Client Components" (colocando `'use client'` no topo), o que faz o navegador baixar e executar código desnecessário.

### Solução

Regra prática:
- **Server Component** sempre que possível (busca de dados, layout, conteúdo estático, listagem)
- **Client Component** apenas quando precisar de interatividade (useState, useEffect, eventos de clique, formulários)

```tsx
// Server Component (padrão no App Router)
async function ProductList() {
  const products = await db.products.findMany() // consulta direta ao banco
  
  return (
    <div>
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}

// Client Component apenas para interatividade
'use client'
function AddToCartButton({ productId }) {
  const [isAdded, setIsAdded] = useState(false)
  return (
    <button onClick={() => {
      addToCart(productId)
      setIsAdded(true)
    }}>
      {isAdded ? 'Adicionado' : 'Comprar'}
    </button>
  )
}
```

O resultado? Menos JavaScript no cliente, menos hidratação (o processo de "ativar" a página), mais performance. E o melhor: você não precisa sacrificar interatividade.

---

## 7. Bundle Analysis e o poder do `next build --profile`

### O que é bundle e por que analisá-lo?

"Bundle" é o arquivo final que o navegador baixa – a união de todo o seu código JavaScript, bibliotecas e dependências. Quanto maior o bundle, mais lento o site.

**Problema**: você pode estar incluindo bibliotecas gigantes sem saber (ex: `moment.js` tem 28KB gzip, `lodash` inteiro tem mais de 20KB). Às vezes, só uma função de uma biblioteca já vale o custo, mas você pode substituir por uma alternativa menor.

### Solução

Instale a ferramenta de análise:

```bash
npm install @next/bundle-analyzer
```

Configure no `next.config.js`:

```javascript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // suas configurações
})
```

Execute a análise:

```bash
ANALYZE=true npm run build
```

Isso abrirá duas páginas HTML no navegador: `client.html` (código que roda no navegador) e `server.html` (código que roda no servidor). Você verá visualmente quais bibliotecas estão ocupando mais espaço.

**Exemplo real (projeto Astriia):** encontramos que `moment.js` (28KB gzip) podia ser substituído por `dayjs` (4KB gzip), e que `lodash` inteiro podia ser substituído por imports individuais (`import debounce from 'lodash/debounce'`). Isso reduziu o bundle inicial em 40%.

---

Nenhuma dessas técnicas é complicada isoladamente. O desafio é tornar a verificação de performance um hábito: configure o bundle analyzer, monitore os Core Web Vitals reais, e sempre questione "esse script de terceiro é realmente necessário?".

Comece aplicando uma estratégia por semana. Daqui a um mês, seu Next.js app vai estar não apenas mais rápido, mas mais robusto – e seus usuários vão perceber a diferença antes mesmo de você falar sobre ela.

Se você aplicou alguma dessas dicas e teve um resultado interessante, me conta. Vou adorar saber o que funcionou para você.