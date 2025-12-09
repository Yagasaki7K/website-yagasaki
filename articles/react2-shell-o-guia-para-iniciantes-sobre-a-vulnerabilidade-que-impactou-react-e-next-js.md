---
title: React2Shell - O Guia Para Iniciantes Sobre a Vulnerabilidade Que Impactou React e Next.js
excerpt: "Na semana passada, o ecossistema JavaScript foi sacudido por uma vulnerabilidade crítica que rapidamente ganhou destaque mundial: React2Shell. Mesmo quem está apenas começando a aprender React ou Next.js já deve ter visto o nome circulando por aí. E para você não ficar perdido, vamos explicar, de forma simples e direta, o que é essa falha, por que ela é tão séria e como você pode proteger seus projetos."
image: https://i.pinimg.com/originals/bc/87/e5/bc87e5124f8d2cfe810d403adc96ad01.gif
tags: ["Segurança", "Nextjs", "Reactjs"]
date: "2025-12-09"
---

![](https://i.pinimg.com/originals/bc/87/e5/bc87e5124f8d2cfe810d403adc96ad01.gif)

Na semana passada, o ecossistema JavaScript foi sacudido por uma vulnerabilidade crítica que rapidamente ganhou destaque mundial: React2Shell. Mesmo quem está apenas começando a aprender React ou Next.js já deve ter visto o nome circulando por aí. E para você não ficar perdido, vamos explicar, de forma simples e direta, o que é essa falha, por que ela é tão séria e como você pode proteger seus projetos.

## O que é o React2Shell?

React2Shell é uma vulnerabilidade encontrada na implementação de React Server Components (RSC) — um recurso que permite executar parte da lógica do React no servidor. Essa falha foi classificada com severidade máxima (CVSS 10) e permite que um invasor execute código arbitrário diretamente no servidor.

Simplesmente alguém pode enviar uma requisição maliciosa para sua aplicação e ganhar acesso ao ambiente de execução. Sem senha. Sem autenticação. Sem truques avançados.

## Por que isso afeta tantos projetos?

Porque a vulnerabilidade não está apenas no React em si, mas em frameworks que usam RSC, principalmente:

- Next.js (especialmente com o App Router)
- Outros frameworks que implementam RSC
- Bundlers com suporte a RSC, como integrações com Webpack, Vite, Turbopack e Parcel

Muitas aplicações criadas com as configurações padrão já estavam automaticamente vulneráveis.

## Como saber se sua aplicação está vulnerável

Você deve verificar duas coisas:

### 1. Versão do React / pacotes RSC
Certifique-se de que você está usando uma versão corrigida de:

- react-server-dom-webpack
- react-server-dom-turbopack
- react-server-dom-vite
- react-server-dom-parcel

As versões vulneráveis incluem várias das séries 19.0.x, 19.1.x e 19.2.0.

### 2. Versão do Next.js
Diversas versões do Next.js 15.x e 16.x foram afetadas. As equipes publicaram correções rapidamente, então você deve atualizar para a versão mais recente disponível.

## Como atualizar para corrigir a vulnerabilidade

### Atualizando React e pacotes RSC

```bash
npm update react react-dom
npm update react-server-dom-webpack react-server-dom-turbopack
```

ou, se preferir garantir versões acima das vulneráveis:

```bash
npm install react@latest react-dom@latest
npm install react-server-dom-webpack@latest react-server-dom-turbopack@latest
```

### Atualizando Next.js

```bash
npm install next@latest
```

Após atualizar:

1. Rebuild do projeto

```bash
npm run build
```
2. Redeploy completo
Isso garante que nenhuma versão antiga permaneça no ambiente de produção.

## Mitigações temporárias (opcional)

Caso você não possa atualizar imediatamente:

* Use um WAF (Web Application Firewall) para bloquear cargas maliciosas relacionadas a RSC.
* Desabilite ou limite o uso de Server Actions e RSC quando possível.
* Monitore seus logs para detectar erros incomuns envolvendo serialização/desserialização.

React2Shell é, sem dúvida, uma das vulnerabilidades mais sérias já vistas no ecossistema React. Ela afeta projetos reais, em produção, e já foi explorada ativamente por atacantes. Uma das falhas recentes foi usar da vulnerabilidade para acessar carteiras digitais e até conteúdos sensíveis no banco de dados.

A boa notícia é que as equipes do React e do Next.js responderam rapidamente, e a atualização é simples — em muitos casos, uma linha no terminal resolve o problema. No caso da Vercel, por exemplo, você consegue, através do site oficial, pedir para o bot adicionar um pull request com essa atualização de correção, assim, é só você autorizar o merge e evitar ficar vulnerável.

Se você está começando agora no desenvolvimento web, essa situação serve como um lembrete valioso:

"Manter dependências atualizadas é tão importante quanto escrever o código em si."