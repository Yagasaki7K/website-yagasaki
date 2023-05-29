---
slug: o-minimo-que-voce-precisa-saber-para-iniciar-um-projeto-em-typescript
title: O mínimo que você precisa saber para iniciar um projeto em TypeScript
image: https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
description: É normal questionar se TypeScript é ou não uma linguagem de programação por algumas razões. Primeiramente, TypeScript é um superset de JavaScript, o que significa que é uma extensão da sintaxe e recursos da linguagem JavaScript.
authors:
    name: Anderson Marlon
    title: Software Developer na Linx
    url: https://github.com/yagasaki7k
    image_url: https://github.com/yagasaki7k.png
---

![](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80 "Scott Graham")

> _"É normal questionar se TypeScript é ou não uma linguagem de programação por algumas razões. Primeiramente, TypeScript é um superset de JavaScript, o que significa que é uma extensão da sintaxe e recursos da linguagem JavaScript."_

## Afinal, TypeScript é uma linguagem de programação?

É normal questionar se TypeScript é ou não uma linguagem de programação por algumas razões. Primeiramente, **TypeScript é um superset de JavaScript**, o que significa que é uma extensão da sintaxe e recursos da linguagem JavaScript.

No entanto, é importante entender que, embora o TypeScript compile em JavaScript, ele é uma **linguagem de programação** de alto nível que possui suas próprias características, como a tipagem estática, sua própria sintaxe, recursos e compilador.

## Passo a passo para iniciar um projeto
1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Abra um terminal e navegue até o diretório onde você deseja criar o seu projeto.
3. Execute o seguinte comando para criar um novo projeto com o npm:
```bash
npm init
```

4. Em seguida, instale o TypeScript como uma dependência de desenvolvimento:
```bash
npm install -g typescript
```

5. Crie um arquivo de configuração do TypeScript chamado tsconfig.json. Este arquivo contém as opções de configuração do TypeScript para o seu projeto. Você pode criar este arquivo manualmente ou executar o seguinte comando para criar um arquivo padrão:
```bash
npx tsc --init
```

Agora você pode começar a escrever código TypeScript em arquivos com a extensão `.ts`

## O que é tipagem estática?

A tipagem estática é uma característica do TypeScript que permite **definir o tipo de dados de uma variável durante a sua declaração**. Isso ajuda a identificar erros de tipos em tempo de compilação, antes que o código seja executado, evitando assim erros de programação que podem causar bugs e afetar o funcionamento do software.

Em JavaScript, podemos definir uma variável com a palavra-chave "const" sem especificar seu tipo.
```JS
const idade = 21;
```

Já em TypeScript, podemos definir o tipo da variável "idade" como "number", da seguinte forma:
```JS
const idade: number = 21;
```

Isso significa que a variável "idade" só pode armazenar valores do tipo "number". Caso tentemos atribuir um valor de um tipo diferente a essa variável, como por exemplo uma string, o TypeScript detectará um erro em tempo de compilação e sinalizará um aviso.

No entanto, é importante ressaltar que mesmo que o código não apresente erros de compilação, ainda podem ocorrer comportamentos inesperados durante a execução. Precisamos lembrar que todo o código TypeScript é removido no processo de compilação e o servidor em produção rodará o código JavaScript resultante.
Portanto, declarar um tipo em TypeScript não implica que um valor de tipo diferente aparecerá na variável durante a execução do programa.

## Tipos de Dados: Primitivos e Não-Primitivos
Os tipos de dados primitivos são valores básicos e simples que representam dados diretamente. Esses tipos incluem `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, e `bigint`.

Por outro lado, os tipos de dados não primitivos são complexos e não representam diretamente valores, mas sim referências a objetos que contêm valores. Esses tipos incluem `object`, `array`, `function`, e `class`.

## Type VS Interface
Essa é uma discussão imensa na comunidade e por isso decidi exemplificar o que são e deixar você decidir como usar.

Basicamente, um type é uma forma de definir uma estrutura de dados, que pode ser usado para definir o tipo de uma variável, função, parâmetro ou qualquer outra coisa que tenha um tipo.
```JS 
export type Metrics = "px" | "em" | "rem" | "vh" | "vw" | "%";
```

Já uma interface é uma forma de definir uma estrutura de dados que descreve a forma ou formato que um objeto deve ter. Ela define um conjunto de propriedades que um objeto deve ter, bem como os tipos dessas propriedades.

As interfaces podem ser usadas para descrever objetos, classes, funções e outros tipos de estruturas de dados.
```JS
export interface Genre {
  id: number;
  name: string;
}
```

## As principais diferenças entre os dois são:
- **Flexibilidade**: Type é mais flexível e permite a definição de tipos complexos, como uniões (demonstrado no exemplo acima), tipos de diferença e inferência de tipos.
Já as interfaces são mais restritas e têm como objetivo principal definir a estrutura de objetos.

- **Herança**: Tanto as interfaces quanto os tipos são capazes de oferecer herança, porém as interfaces possuem uma sintaxe mais amigável e suportam a união de diversas interfaces em uma única, enquanto os tipos usam o operador Union para criar um novo tipo a partir da união de outros tipos existentes.

- **Nomenclatura**: Em geral, interfaces são usadas para representar objetos, enquanto type é usado para representar qualquer tipo de dados, incluindo objetos.
  
```JS
type Animal = {
  name: string;
  eat: (food: string) => void;
}

type Dog = Animal & {
  breed: string;
  bark: () => void;
}
```

```JS
interface Animal {
  name: string;
  eat(food: string): void;
}

interface Dog extends Animal {
  breed: string;
  bark(): void;
}
```

## Como tipar Objetos e Funções

Para tipar objetos, podemos utilizar interfaces. Interfaces são uma forma de definir um conjunto de propriedades e tipos que um objeto deve ter. Por exemplo, para definir um objeto que representa uma pessoa com nome e idade, podemos fazer:

```JS
interface Pessoa {
  nome: string;
  idade: number;
}
```

Neste exemplo, definimos a interface Pessoa com duas propriedades: nome, que é uma string, e idade, que é um número. Agora, podemos utilizar essa interface para tipar um objeto que representa uma pessoa:

```JS
const pessoa: Pessoa = {
  nome: "Justin",
  idade: 30
};
```

Assim, garantimos que o objeto pessoa possui as propriedades e tipos definidos na interface Pessoa.

Para tipar uma função, é necessário especificar os tipos dos seus parâmetros e também o tipo do seu retorno. Por exemplo, para definir uma função que recebe dois parâmetros numéricos e retorna a soma desses valores, podemos fazer:

```JS
function soma(a: number, b: number): number {
  return a + b;
}
```

Neste exemplo, utilizamos a sintaxe : number para especificar que a função retorna um valor numérico.

## Referências
Ao escrever este artigo, foi dada a devida importância em utilizar fontes confiáveis de informação, visando garantir a precisão e a relevância do conteúdo abordado. 
A única fonte utilizada foi a [documentação oficial do TypeScript](https://www.typescriptlang.org/docs/).