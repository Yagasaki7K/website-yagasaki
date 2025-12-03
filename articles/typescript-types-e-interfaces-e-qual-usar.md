---
title: TypeScript - Types vs. Interfaces e qual usar escolher no próximo projeto?
excerpt: "Veja o que é um tipo, interfaces e qual usar no TypeScript."
image: https://github.com/cat-milk/Anime-Girls-Holding-Programming-Books/blob/master/Typescript/Chito_Saving_Burning_Mastering_Typescript.png?raw=true
tags: ["TypeScript", "Iniciante"]
date: "2024-05-07"
---

![](https://github.com/cat-milk/Anime-Girls-Holding-Programming-Books/blob/master/Typescript/Chito_Saving_Burning_Mastering_Typescript.png?raw=true "Nye Evans")

O TypeScript é uma linguagem de programação popular que adiciona anotações de tipo ao JavaScript. Ele fornece recursos como interfaces e tipos que ajudam os desenvolvedores a escrever código mais robusto e fácil de manter. No TypeScript, tanto os types quanto as interfaces são usados para definir a estrutura dos dados. Embora sejam semelhantes em funcionalidade, eles têm algumas diferenças que os desenvolvedores devem estar cientes ao escolher qual usar.

## O que é um Type no TypeScript?

Um type no TypeScript é uma maneira de definir a forma dos dados. Ele é usado para descrever os tipos de variáveis, parâmetros de função e valores de retorno de função. Os tipos são declarados usando a palavra-chave `type` seguida por um nome e uma definição. Aqui está um exemplo:

```typescript
type Pessoa = {
    name: string;
    age: number;
    address: string;
};
```

Neste exemplo, definimos um tipo `Pessoa` que tem três propriedades: `name`, `age` e `address`. A propriedade nome é uma `string`, a propriedade `age` é um `número` e a propriedade `address` é uma string.

## O que é uma Interface no TypeScript?

Uma interface no TypeScript é outra maneira de definir a forma dos dados. Ela é usada para descrever os tipos de objetos, classes e funções. As interfaces são declaradas usando a palavra-chave `interface` seguida por um nome e uma definição. Aqui está um exemplo:

```typescript
interface IPessoa {
    name: string;
    age: number;
    address: string;
}
```

Neste exemplo, definimos uma interface `IPessoa` que tem as mesmas três propriedades que o tipo `Pessoa`. A sintaxe é um pouco diferente, mas a funcionalidade é a mesma.

## Diferenças entre Types e Interfaces

A principal diferença entre tipos e interfaces é como elas são usadas. Os tipos são usados para criar novos nomes para tipos existentes, enquanto as interfaces são usadas para definir a estrutura de objetos, classes e funções. Aqui estão algumas outras diferenças:

- Os alias de type podem ser usados para criar tipos de união ou tipos de interseção, enquanto as interfaces não podem.
- Os types podem ser usados para definir tuplas, enquanto as interfaces não podem.
- Os types podem ser usados para definir tipos de função, enquanto as interfaces não podem.
- As interfaces podem estender outras interfaces, enquanto os types não podem.

## Qual Deve Ser Usado?

Em geral, os types são mais úteis para definir tipos de dados simples como strings, números e booleans. As interfaces são mais úteis para definir tipos de dados complexos como objetos, classes e funções. No entanto, a escolha entre tipos e interfaces depende do seu caso de uso específico e preferência pessoal.

## Conclusão

Types e interfaces são recursos importantes no TypeScript. Eles fornecem aos desenvolvedores a capacidade de definir a estrutura de dados em seus programas. Embora sejam semelhantes em funcionalidade, eles têm algumas diferenças que devem ser consideradas ao escolher qual usar. Em geral, os types são melhores para tipos de dados simples, enquanto as interfaces são melhores para tipos de dados complexos.
