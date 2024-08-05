---
title: Uma Coisa Que Nunca Te Explicaram Sobre TypeScript
excerpt: 'Há algo no TypeScript que você provavelmente entendeu errado, algo sobre tsconfig.json. Vamos resolver isso!'
image: https://github.com/cat-milk/Anime-Girls-Holding-Programming-Books/blob/master/Typescript/Chito_Saving_Burning_Mastering_Typescript.png?raw=true
tags: ['Typescript']
date: '2024-08-06'
---

![](https://github.com/cat-milk/Anime-Girls-Holding-Programming-Books/blob/master/Typescript/Chito_Saving_Burning_Mastering_Typescript.png?raw=true)

Tenho usado [TypeScript](https://www.typescriptlang.org/) há mais de três anos e, no geral, tem sido uma ótima experiência. Com o tempo, o atrito no uso foi diminuindo até chegar a zero, tornando-me muito mais produtivo ao escrever tipos ou mesmo ao abordar problemas com uma perspectiva orientada a tipos. Embora eu esteja longe de ser um verdadeiro mago dos tipos, ouso me considerar proficiente na linguagem, tendo passado por diversas ginásticas de tipos, tipos condicionais, genéricos aninhados e contemplando a sagrada diferença entre `type` e `interface`. Sinceramente, pensei que entendia a linguagem muito bem.

Até que percebi que não. Veja, há uma coisa em particular sobre TypeScript que eu entendi completamente errado, e acredito que você também. E não é algum caso extremo que você nunca ouviu falar e provavelmente nunca usará. Muito pelo contrário. É algo com o qual você, e qualquer outro desenvolvedor TypeScript, interagiu diretamente centenas de vezes, algo que esteve bem debaixo do nosso nariz o tempo todo.

**Estou falando sobre o `tsconfig.json`.**

E não, isso não é sobre como ele pode se tornar complexo (confesso que não consigo explicar `target` e `module` sem pensar um pouco). Em vez disso, é algo bastante simples. É sobre o que o `tsconfig.json` _realmente faz_.

"_Bem, é um arquivo de configuração, ele configura o TypeScript, duh._" Certo! Ele faz isso, mas não da maneira que você esperaria. Deixe-me mostrar para você.

## Bibliotecas, testes e a verdade

Há um grande exemplo por trás de cada grande descoberta. Vou fazer o meu melhor para que este seja ambos.

Vamos escrever uma aplicação frontend simples. E quero dizer realmente simples, sem frameworks, sem dependências. `Simples`.

```typescript
// src/app.ts
const greetingText = document.createElement('p')
greetingText.innerText = 'Hello, John!'

document.body.appendChild(greetingText)
```

Crie um elemento de parágrafo e cumprimente o John. Simples. Até agora, tudo bem.

Mas de onde vem o `document`? Você pode dizer que é uma variável global em JavaScript e, por todos os meios, você estaria certo. Só tem uma coisa. Nós não estamos em JavaScript. Ainda não, de fato. Estamos olhando para algum código TypeScript no nosso IDE. Ele teria que ser compilado para se tornar JavaScript, ir para o navegador, e para o navegador expor o `document` globalmente. Então, como o TypeScript conhece o `document`, sua presença e seus métodos?

O TypeScript faz isso carregando uma biblioteca de _definição padrão_ chamada `lib.dom`. Pense nela como um arquivo `.d.ts` contendo vários tipos para descrever os globais do JavaScript, porque é exatamente isso que ela é. Você pode ver isso por si mesmo segurando Ctrl (CMD no Mac) e clicando no objeto `document`. Mistério resolvido.

Como nossa aplicação é, naturalmente, a melhor coisa desde o pão fatiado, vamos adicionar alguns testes automatizados para ela. Para este passo, vamos trair nossa noção de simplicidade e instalar um framework de testes chamado **Vitest**. Em seguida, escrevemos o próprio teste:

```typescript
// src/app.test.ts
it('greets John', async () => {
  await import('./app')
  const greetingText = document.querySelector('p')
  expect(greetingText).toHaveText('Hello, John!')
})
```

Quando tentarmos executar este teste, o TypeScript interferiria com um erro:

```typescript
Cannot find name 'it'. Do you need to install type definitions for a test runner?
```

Dói admitir, mas o compilador tem razão. De onde `it` viria? Não é um global como `document`, tem que vir de algum lugar. Bem, na verdade, é bastante comum para os frameworks de teste estenderem o objeto global e exporem funções como `it` e `expect` globalmente para que você possa acessá-las em cada teste sem precisar importá-las explicitamente.

Seguimos uma seção convenientemente presente na documentação do nosso framework de testes e habilitamos o `it` global modificando o `tsconfig.json`:

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "types": ["vitest/globals"]
  },
  "include": ["src"]
}
```

Usando `compilerOptions.types`, estamos pedindo ao TypeScript para _carregar tipos adicionais_, neste caso de `vitest/globals`, que declaram a função global `it`. O compilador sorri para nossos esforços e deixa o teste passar, fazendo-nos sentir particularmente bem sobre nós mesmos e toda essa questão das linguagens estritamente tipadas.

Mas não. Tão. Rápido.

## O Problema

Vamos dar um pequeno passo ao lado, mas prometo que tudo fará sentido no final.

Deixe-me perguntar: O que acontece se você referenciar um código inexistente no TypeScript? Isso mesmo, uma linha vermelha ondulada e o erro `Cannot find name`, é o que acontece. Acabamos de ver isso ao tentar chamar `it()` em um teste.

Volte para o módulo `app.ts` e adicione uma referência a uma variável global inexistente chamada `test`:

```typescript
// src/app.ts
// ...application code.

test
```

Não definimos `test`. Não é um global do navegador e certamente não existe em nenhuma das bibliotecas padrão do TypeScript. É um erro, um bug, deveria ficar vermelho.

Só que não fica. Como a linha vermelha ondulada não aparece sob o código, um poder percorre você. ~Autoridade~. _Confusão_. Para piorar as coisas, não só o TypeScript não produz um erro aqui, mas ele realmente tenta ser útil, sugerindo que você tipifique `test`, mostrando sua assinatura de chamada e dizendo que vem de algum namespace `TestApi`. Mas isso é um tipo do **Vitest**, como isso é possível...

Este código compilaria? Claro. Funcionaria no navegador? Não. Ele lançaria um erro como um arremessador experiente em seu dia mais brilhante. Como pode? Não é o propósito inteiro de usar TypeScript evitar erros como este?

O `test` aqui é o que eu chamo de uma _definição fantasma_. É uma definição de tipo válida que descreve algo que simplesmente não existe. _Mais uma travessura do TypeScript_, você diria. _Não se apresse em culpar a ferramenta_, eu digo. Aqui está o que está acontecendo.

## (Mais de) uma configuração para governar todas
Mova o módulo de teste `app.test.ts` do diretório `src` para um novo diretório chamado `test`. Abra-o. Espere, isso é um erro de tipo em `it` de novo? Nós não consertamos isso já adicionando `vitest/globals` ao nosso `tsconfig.json`?

A questão é que o TypeScript não sabe o que fazer com o diretório `test`. Na verdade, o TypeScript nem sabe que ele existe, já que tudo o que apontamos em `tsconfig.json` é `src`:

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "types": ["vitest/globals"]
  },
  "include": ["src"]
}
```

Como mencionei antes, a forma como a configuração do TypeScript funciona não é totalmente óbvia (pelo menos para mim). Por muito tempo eu pensei que a opção `include` representava quais módulos incluir na compilação, e `exclude`, respectivamente, controla quais módulos excluir. Se consultarmos a [documentação do TypeScript](https://www.typescriptlang.org/tsconfig#include) sobre o assunto, leremos isso:

_`include`, especifica um array de nomes de arquivos ou padrões para incluir no programa._

A forma como passei a entender o que `include` faz é ligeiramente diferente e mais específica do que o que está declarado na documentação.

> # A opção _include_ controla a quais módulos aplicar esta configuração do TypeScript.

Você leu certo. Se um módulo TypeScript está localizado fora dos diretórios listados na opção `include`, aquele `tsconfig.json` _não terá efeito nenhum sobre aquele módulo_. Respectivamente, a opção exclude permite filtrar quais padrões de arquivo não devem ser afetados pela configuração atual.

Ok, então adicionamos `test` ao `include` e seguimos com nosso dia, qual é o grande problema?

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "types": ["vitest/globals"]
  },
  "include": ["src", "test"]
}
```

**Onde a maioria dos desenvolvedores erram**. Adicionar novos diretórios ao `include` expande essa configuração para afetar _todos eles_. Embora essa mudança resolva os tipos do framework de teste em `test`, ela vazará para todos os módulos `src`! 

Você acabou de transformar todo o seu código-fonte em uma mansão assombrada, liberando centenas de tipos fantasmagóricos. Coisas que não existem serão tipificadas, coisas tipificadas podem entrar em conflito com outras definições, e a experiência geral com TypeScript se degradará drasticamente, especialmente à medida que sua aplicação crescer ao longo do tempo.

Então, qual é a solução? Devemos criar vários `tsconfig.json` para cada diretório? 

Na verdade, sim, você deve. Mas não para _cada_ diretório, e sim para cada _ambiente_ onde seu código deve ser executado.

## Runtimes e preocupações
Por trás dos bastidores de uma aplicação web moderna há uma mistura de módulos. O código-fonte imediato da sua aplicação deve ser compilado, minificado, dividido em códigos, agrupado e enviado para seus usuários. Existem também arquivos de teste, que são módulos TypeScript também, nunca para serem compilados ou enviados para ninguém. Pode haver também histórias do Storybook, testes do Playwright, talvez um script customizado `*.ts` ou dois para automatizar coisas—todos úteis, todos com _intenções diferentes_ e destinados a rodar em _ambientes diferentes_.

Mas para que escrevemos nossos módulos importa. Isso também importa para o TypeScript. Por que você acha que ele fornece o tipo _Document_ por padrão? Porque ele sabe que você provavelmente está desenvolvendo uma aplicação web. Desenvolvendo um servidor Node.js? Seja gentil e declare essa intenção instalando `@types/node`. O compilador não pode adivinhar por você, você precisa _dizer a ele o que deseja_.

E você comunica essa intenção através do `tsconfig.json`. Mas não apenas o de nível raiz. O TypeScript pode lidar muito bem com configurações aninhadas. Porque ele foi projetado para isso. Tudo o que você precisa fazer é ser explícito sobre suas intenções.

```typescript
# The root-level configuration to apply TypeScript
# across the entire project. This mostly contains only references.
- tsconfig.json

# The base configuration that all the other configurations
# extend upon. Describe the shared options here.
- tsconfig.base.json

# The source files configuration.
- tsconfig.src.json

# The build configuration.
- tsconfig.build.json

# Configuratin for integration tests.
- tsconfig.test.json

# Configuration for end-to-end tests.
- tsconfig.e2e.test.json
```

Woah, isso é muita configuração! Bem, isso também são muitas intenções: desde os arquivos-fonte até vários níveis de testes até a build de produção. Tudo destinado a ser seguro em termos de tipo. E você os torna seguros usando a propriedade [`references`](https://www.typescriptlang.org/docs/handbook/project-references.html) da configuração do TypeScript!

A mágica começa no `tsconfig.json` de nível raiz. Fique tranquilo, _esta é a única configuração que o TypeScript irá captar_. Todas as outras configurações se tornam referências da configuração de nível raiz, aplicando-se apenas aos arquivos que correspondem ao seu `include`.

Isso é como um tsconfig.json de nível raiz se parece:

```typescript
// tsconfig.json
{
  "references": [
    // Source files (e.g. everything under "./src").
    { "path": "./tsconfig.src.json" },
    // Integration tests (e.g. everything under "./tests").
    { "path": "./tsconfig.test.json" },
    // E2E tests (e.g. everything under "./e2e").
    { "path": "./tsconfig.e2e.test.json" }
  ]
}
```

Como você está usando o campo `references`, todas as configurações referenciadas devem definir `compilerOptions.composite` como `true`. Aqui está um exemplo de `tsconfig.src.json` para os arquivos-fonte:

```typescript
// tsconfig.src.json
{
  // Inherit the reused options.
  "extends": "./tsconfig.json",
  // Apply this configuration only to the files
  // under the "./src" directory.
  "include": ["./src"],
  "compilerOptions": {
    "composite": true,
    "target": "es2015",
    "module": "esnext",
    // Support JSX for React applications.
    "jsx": "react"
  }
}
```

> **Você usa uma configuração separada para os arquivos-fonte e para a build porque configurações com `compilerOptions.composite` não podem ser executadas diretamente. Você aponta o `tsc` para o específico `-p tsconfig.build.json` para builds.**

Fica um pouco mais complicado para configurações que se cruzam, como aquela para testes de integração, que deve se aplicar apenas aos arquivos em `./tests` enquanto ainda permite importar o código-fonte testado. E para isso você utiliza mais uma vez a propriedade de `references`!

```typescript
// tsconfig.test.json
{
  "extends": "./tsconfig.json",
  "include": ["./tests"],
  "references": [{ "path": "./tsconfig.src.json" }],
  "compilerOptions": {
    "composite": true,
    "target": "esnext",
    "module": "esnext",
    // Include test-specific types.
    "types": ["@types/node", "vitest/globals"]
  }
}
```

### A propriedade references diz ao TypeScript para incluir a configuração dada na verificação de tipo, sem permitir que a configuração atual afete os arquivos incluídos.

## include vs references
Ambas as propriedades `include` e `references` envolvem os arquivos "visíveis" para o TypeScript, mas o fazem de maneiras diferentes. Vamos recapitular essa diferença:

- `include` controla quais arquivos são _afetados_ por esta configuração.
- `references` controla quais arquivos são _visíveis_ para esta configuração, mas não são afetados por ela.

A configuração de teste de integração (`tsconfig.test.json`) ilustra essa diferença perfeitamente. Você deseja que essa configuração se aplique apenas aos arquivos de teste no diretório `./tests`, então é isso que você fornece em `include`. Mas você também quer ser capaz de importar o código-fonte testado nesses arquivos, o que significa que o TypeScript precisa conhecer esse código. Você _referencia_ a configuração dos arquivos-fonte (`tsconfig.src.json`) em `references`, o que expande transitivamente a visão do TypeScript para os arquivos incluídos lá, sem afetá-los pela configuração dos testes de integração.

## A parte prática
Para melhor ou pior, estamos nos movendo para uma era onde as ferramentas de desenvolvimento são abstraídas de nós. É justo esperar que seu framework de escolha lide com essa selva de configurações para você. Na verdade, alguns frameworks já fazem isso. Tome o [Vite](https://github.com/vitejs/vite/tree/1c031723a821d654e9aed44e43a0a5fa47c240da/packages/create-vite/template-react-ts) como exemplo. Estou bastante confiante de que você pode encontrar uma configuração multi-configuração para TypeScript em praticamente qualquer outro projeto.

Mas eu quero que você entenda que o TypeScript ainda é sua ferramenta, abstraída ou não, e você faria bem em aprender mais sobre ela, entendê-la melhor e usá-la corretamente.