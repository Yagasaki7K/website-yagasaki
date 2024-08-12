---
title: Entenda Programação Orientada a Objetos de Maneira Simplificada (POO)
excerpt: 'Se você ainda não sabe, provavelmente te ensinaram errado.'
image: https://safebooru.org//samples/3233/sample_dd8ac0057c4f68ecd35569215ec138566e3f6905.jpg?3360979
tags: ['Intermediário', 'Programação', 'Objetos']
date: '2024-08-13'
---

![](https://safebooru.org//samples/3233/sample_dd8ac0057c4f68ecd35569215ec138566e3f6905.jpg?3360979)

A Programação Orientada a Objetos (POO) é, na verdade, mais simples do que parece. Se você ainda não a compreende, é
possível que a explicação que você recebeu tenha sido inadequada.

# Programação Funcional

Vamos começar entendendo o que pode tornar o código complexo ao longo do tempo. Imagine que criamos um arquivo
TypeScript contendo uma função que realiza diversas tarefas.

```typescript
function deveresDeCasa() {
    if (acordar) {
        arrumarCama();
        escovarOsDentes();
        tomarCafeDaManha();
    }

    if (acordado && comido) {
        tomarBanho();
        seArrumar();
        sairParaTrabalhar();
    }
}
```

Esse código funciona? Sim. Mas é o mais recomendável? Não. O problema é que toda a funcionalidade está dentro de um
único escopo. Embora seja relativamente fácil de entender inicialmente, com o tempo, o código se torna complexo e
difícil de manter.

Então, qual seria uma solução para esse problema? A primeira abordagem seria dividir o código em funções separadas. Em
vez de usar condições como `if (acordar) {}`, poderíamos transformar em funções como `function Acordar() {}`. Dessa
forma, toda a funcionalidade relacionada a acordar, como arrumar a cama, escovar os dentes e tomar café da manhã,
ficaria contida dentro de `Acordar()`. Isso facilita a manutenção do código, garantindo que essas ações sejam realizadas
apenas no contexto adequado.

No entanto, isso ainda não resolve completamente o problema. Se tivermos uma função chamada `Rotina`, ela poderia
facilmente se encher de dezenas de outras funções, o que nos levaria de volta ao problema inicial de excesso de
condições e complexidade.

```typescript
// acordar.ts

class Acordar {
    public arrumarCama() {}
    public escovarOsDentes() {}
    public tomarCafeDaManha() {}
}
```

A vantagem dessa abordagem é que o código fica organizado, separado em arquivos distintos, e com o uso restrito a uma
classe específica. Isso evita que funções sejam chamadas fora de ordem ou em contextos inadequados.

Podemos então criar uma instância dessa classe para utilizar as funcionalidades encapsuladas:

```typescript
// index.ts

const periodoDaManha = new Acordar();

periodoDaManha.arrumarCama;
```

Mas será que POO é só isso? E quanto a conceitos como herança, polimorfismo e encapsulamento? Vamos explorar esses
conceitos para ver como eles nos ajudam a escrever um código mais limpo e eficiente.

## Herança
Herança é um dos pilares da POO e nos permite estender funcionalidades de uma classe para outra. Por exemplo,
`escovarOsDentes()` não é algo que fazemos apenas ao acordar; podemos fazer isso após o almoço, antes de dormir, etc.

Para evitar repetição de código (princípio **DRY - Don't Repeat Yourself**), podemos criar uma classe genérica para escovar
os dentes e utilizá-la em várias outras classes.

```typescript
// common.ts
export class EscovarOsDentes {
    public escovar() {
        console.log('Escovando os dentes');
    }
}
```

No arquivo `acordar.ts`, podemos estender essa funcionalidade:


```typescript
// acordar.ts

import { EscovarOsDentes } from './common';

class Acordar extends EscovarOsDentes {
    public arrumarCama() {}
    public tomarCaféDaManha() {}
}
```

Se tivermos uma função similar para a rotina noturna, poderíamos estender a classe `EscovarOsDentes` da mesma forma,
garantindo que o código seja reutilizado de maneira eficiente.

```typescript
// index.ts

const periodoDaManha = new Acordar();
const periodoDaNoite = new Dormir();

periodoDaManha.escovar();
periodoDaNoite.escovar();
```

## Polimorfismo e Encapsulamento
Polimorfismo e encapsulamento são conceitos que permitem maior flexibilidade e segurança no código.

O polimorfismo nos permite tratar objetos de diferentes classes de forma unificada, nunca sabemos como um ato de
`fazerSom()` pode vir de maneiras diferentes dependendo do animal.

Enquanto o encapsulamento protege o estado interno dos objetos, expondo apenas o necessário - usando `private` ao invés
da `public` e ficando reservada apenas dentro da classe.

### Polimorfismo
O polimorfismo é a capacidade de uma função ou método agir de forma diferente com base na classe do objeto que a invoca.
Por exemplo, podemos ter diferentes classes derivadas de uma classe base, onde cada uma delas implementa um método de
forma diferente, mas todas compartilham a mesma interface.

```typescript
class Animal {
    public fazerSom() {
        // Método genérico que será sobrescrito
    }
}

class Cachorro extends Animal {
    public fazerSom() {
        console.log('Latido');
    }
}

class Gato extends Animal {
    public fazerSom() {
        console.log('Miau');
    }
}

const animais: Animal[] = [new Cachorro(), new Gato()];

animais.forEach(animal => animal.fazerSom());
```

No exemplo acima, `fazerSom()` é polimórfico, pois se comporta de maneira diferente dependendo do tipo do objeto.

Dessa maneira, posso usuar a mesma classe, com resultados diferentes em situações diferentes.

### Encapsulamento
O encapsulamento, por sua vez, envolve esconder a implementação interna de uma classe e expor apenas o necessário para o
uso externo. Isso permite que o código seja mais modular e que mudanças internas na classe não afetem o restante do
código.

```typescript
class ContaBancaria {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    public depositar(valor: number) {
        this.saldo += valor;
    }

    public sacar(valor: number) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log('Saldo insuficiente');
        }
    }

    public consultarSaldo() {
        return this.saldo;
    }
}
```

Aqui, `saldo` é um atributo privado, acessível apenas dentro da classe `ContaBancaria`. As operações de depósito e saque
são controladas através de métodos públicos, garantindo que o saldo não seja manipulado diretamente de fora da classe.

# Instância na Programação Orientada a Objetos
Uma instância em Programação Orientada a Objetos (POO) refere-se a um objeto específico criado a partir de uma classe.
Quando criamos uma classe, estamos definindo um molde ou um modelo para objetos, mas esse molde, por si só, não
representa algo concreto até que uma instância seja criada.

Pense em uma classe como o plano de uma casa. Ela descreve como a casa deve ser construída, quais são os cômodos,
quantas janelas tem, etc. Mas o plano, por si só, não é uma casa real. Para que isso aconteça, precisamos construir uma
casa baseada nesse plano. Essa casa construída, que é uma manifestação física do plano, é a instância da classe.

Quando criamos uma instância de uma classe, estamos essencialmente construindo um objeto que segue o modelo daquela
classe, com suas próprias propriedades e métodos. Isso permite que várias instâncias de uma mesma classe coexistam, cada
uma com suas características específicas.

Por exemplo, considerando a classe `Acordar` que discutimos anteriormente:

```typescript
// acordar.ts

class Acordar {
    public arrumarCama() {}
    public escovarOsDentes() {}
    public tomarCafeDaManha() {}
}

// index.ts
const PeriodoDaManha = new Acordar();
```

Aqui, `PeriodoDaManha` é uma instância da classe `Acordar`. Isso significa que podemos chamar os métodos dessa
instância, como `PeriodoDaManha.arrumarCama`, e essa chamada irá executar o comportamento definido na classe `Acordar`.

# Por que usar Instâncias?
- **Isolamento de Estado**: Cada instância tem seu próprio estado. Isso significa que, se alterarmos o estado de uma
  instância, as outras não serão afetadas. Isso é particularmente útil em cenários onde precisamos de múltiplos objetos
  funcionando de maneira independente, mas baseados na mesma estrutura.

- **Reutilização de Código**: Podemos criar várias instâncias de uma mesma classe sem precisar reescrever o código da
  classe. Isso torna o código mais modular e reutilizável.

- **Polimorfismo**: Através do polimorfismo, podemos criar instâncias de diferentes classes que compartilham métodos
  comuns, mas que implementam esses métodos de maneira diferente. Isso nos permite escrever código mais flexível e
  genérico.

Em resumo, instanciar uma classe é a maneira como criamos objetos específicos baseados em um modelo genérico, permitindo
que nosso código seja mais estruturado, modular e flexível.

Ficou complicado? Vamos simplificar.

Vamos explorar o conceito de instância em Programação Orientada a Objetos usando algumas analogias para tornar o
entendimento mais claro.

# A Classe como uma Receita, a Instância como o Bolo
Imagine que uma classe é como uma receita de bolo. A receita descreve todos os passos necessários para fazer o bolo: os
ingredientes, as quantidades, o modo de preparo, etc. No entanto, a receita em si não é um bolo; é apenas um guia de
como fazer um.

Agora, quando você segue a receita e realmente faz o bolo, você tem algo concreto que pode comer. Esse bolo é a
instância da receita. Você pode fazer vários bolos usando a mesma receita, e cada bolo será uma instância separada da
mesma classe.

- **Classe**: Receita de Bolo.
- **Instância**: Um bolo específico que você fez seguindo a receita.

Você precisa aplicar todos os três? Herança, Polimorfismo e Encapsulamento? Não. Você só precisa lhe dar com isso,
quando realmente precisa lhe dar com isso.

Os três são metodologias que vai se adaptando a sua necessidade, você pode simplesmente ter uma classe composta apenas
de herança, assim, como, você precisa deixar reservado um certo item na classe? Pode-se usar um encapsulamento e assim
vai, então não se prenda a quando criar uma classe, exigir que se use as três regras, sendo que uma só basta. Tudo
depende exclusivamente da sua necessidade.

> Tudo bem Anderson, mas você não explicou o uso do `constructor` dentro da `ContaBancaria`, fiquei um pouco perdido
> nisso.

Vamos usar a analogia do projeto da casa para entender o conceito de um **constructor** em Programação Orientada a
Objetos, seguido de um exemplo em TypeScript.

## A Classe como Projeto de Casa com Personalização
Imagine que, além de um projeto básico de casa, você possa adicionar personalizações, como a cor das paredes e o tipo de
piso. O constructor é como uma seção no projeto onde você define essas personalizações. Quando você decide construir uma
casa (criar uma instância), você pode passar essas preferências, e a casa construída terá essas características
específicas.

- **Classe**: Projeto de uma casa.
- **Constructor**: A parte do projeto onde você especifica as personalizações (como cor e tipo de piso).
- **Instância**: A casa construída com as personalizações definidas.

Vamos ver como isso funciona em código:

```typescript
// Definindo a classe Casa
class Casa {
    // Propriedades da classe
    cor: string;
    tipoDePiso: string;

    // Constructor para inicializar as propriedades ao criar uma instância
    constructor(cor: string, tipoDePiso: string) {
        this.cor = cor;
        this.tipoDePiso = tipoDePiso;
    }

    // Método para descrever a casa
    descricao() {
        console.log(`Esta casa tem paredes na cor ${this.cor} e piso de ${this.tipoDePiso}.`);
    }
}

// Criando uma instância da classe Casa
const minhaCasa = new Casa('azul', 'madeira');

// Usando o método para descrever a instância criada
minhaCasa.descricao();
```

### Explicação do Exemplo
- **Classe `Casa`**: Define um modelo de casa com duas propriedades: `cor` e `tipoDePiso`.

- **Constructor**: Quando criamos uma nova instância de `Casa` usando `new Casa('azul', 'madeira')`, o constructor é
chamado. Ele pega os valores passados ('azul' e 'madeira') e os atribui às propriedades `cor` e `tipoDePiso` da
instância.

- **Instância `minhaCasa`**: Esta é a casa específica construída a partir do projeto `Casa`, com paredes azuis e piso de
  madeira.

**Método `descricao`**: Este método imprime uma descrição da casa usando as propriedades da instância. Quando chamamos
minhaCasa.descricao(), a saída será:

`Esta casa tem paredes na cor azul e piso de madeira.`

O **constructor** em uma classe é o método especial que define como uma instância da classe deve ser inicializada. Ele
permite que você passe valores específicos ao criar uma instância, personalizando-a de acordo com suas necessidades,
como escolher a cor das paredes e o tipo de piso na construção de uma casa.

É isso, espero que tenham gostado. Salve esse artigo para revisões futuras, pois eu sei que você vai precisar voltar
aqui mais tarde (:
