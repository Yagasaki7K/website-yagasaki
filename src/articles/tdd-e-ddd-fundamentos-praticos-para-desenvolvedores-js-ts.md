---
title: TDD e DDD - Fundamentos Práticos para Desenvolvedores JS/TS
excerpt: 'Neste artigo, você vai entender os fundamentos de TDD e DDD com clareza, exemplos diretos, sem jargão, e com comentários úteis para revisar no futuro. Ideal para quem trabalha com JavaScript/TypeScript e quer escrever código testável, limpo e guiado por regras de negócio'
image: https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
tags: ['Typescript', 'TDD', 'DDD']
date: '2025-06-27'
---

![](https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

> Neste artigo, você vai entender **os fundamentos de TDD e DDD** com clareza, exemplos diretos, sem jargão, e com comentários úteis para revisar no futuro. Ideal para quem trabalha com JavaScript/TypeScript e quer escrever **código testável, limpo e guiado por regras de negócio**. Esse artigo também é uma ótima referência de bolso para revisar sempre que precisar, independente da linguagem.

---

## Parte 1: TDD (Test-Driven Development / Desenvolvimento Orientado a Testes)

### O que é TDD?

**TDD é escrever testes antes do código.**
Você escreve um teste que falha, faz ele passar com o mínimo de código, e depois refatora.

### Ciclo Red → Green → Refactor:

1. **Red** – Escreva um teste que falha.
2. **Green** – Implemente o mínimo para fazer o teste passar.
3. **Refactor** – Limpe o código sem quebrar os testes.

### Exemplo simples:

```javascript
// RED
it('should sum two numbers', () => {
  expect(sum(2, 3)).toBe(5);
});

// GREEN
function sum(a, b) {
  return a + b;
}

// REFACTOR (ex: adicionar tipos, validar entradas)
```

### Por que usar TDD?

* Garante que o código faz o que deve fazer.
* Ajuda a escrever código mais limpo e desacoplado.
* Reduz bugs em produção.

### Princípios chaves:

* Testes guiam o design do código.
* Escrevemos **apenas o código necessário** para passar os testes.
* Refatoramos com confiança, porque os testes garantem que não quebramos nada.

### TL;DR do TDD:

> **TDD é falhar primeiro, depois fazer passar, depois melhorar.**

---

## 🛠️ Parte 2: DDD (Domain-Driven Design / Design Orientado a Domínio)

### O que é DDD?

**DDD é uma forma de desenhar sistemas centrados na lógica do negócio.**

Você modela o software baseado no domínio que está resolvendo: agendamentos, pagamentos, pedidos, etc. O foco é o "mundo real", não o banco de dados nem a API.

### Conceitos fundamentais:

#### 1. Domínio

O problema central que o software resolve. Ex: sistema de reservas.

#### 2. Modelos de Domínio

Representações no código da lógica de negócio. Ex: classes como `User`, `Appointment`, com regras internas.

#### 3. Linguagem Ubíqua (Ubiquitous Language)

A equipe técnica e de negócio usam **os mesmos termos**. O código reflete isso.

```javascript
// Ruim:
user.doActionY(invoice);

// Melhor:
user.payInvoice(invoice);
```

#### 4. Contextos Delimitados (Bounded Contexts)

Cada parte do sistema tem um contexto claro e separado. Ex: "Pagamento" não é o mesmo que "Logística".

#### 5. Camadas (arquitetura típica DDD)

* **Domain**: Regras de negócio, entidades, agregados.
* **Application**: Casos de uso (orquestram as regras do domínio).
* **Infrastructure**: Banco de dados, APIs externas, etc.
* **Interface**: Controllers, GraphQL, REST, etc.

### Benefícios:

* Regras de negócio ficam claras e organizadas.
* Fácil de evoluir sem bagunça.
* Melhor comunicação entre devs e o time de negócio.

### TL;DR do DDD:

> **DDD é sobre entender o negócio profundamente e deixar isso claro no seu código.**

---

## 🤝 Ligando TDD + DDD

* **DDD** define **o que** você vai escrever (modelagem).
* **TDD** define **como** você vai escrever (teste guiado).

### Exemplo:

```javascript
// Casos de uso:
class ScheduleAppointment {
  constructor(private repository: AppointmentRepository) {}

  execute({ date, userId }) {
    if (this.repository.exists(date)) {
      throw new Error('Conflict');
    }
    const appointment = new Appointment(date, userId);
    this.repository.save(appointment);
    return appointment;
  }
}

// Teste:
it('should not allow scheduling on same date', () => {
  // ...
});
// TDD garante que o ScheduleAppointment funciona como esperado.
```

---

## 🌟 Conclusão

* Use **TDD** para escrever código que você confia e consegue refatorar sem medo.
* Use **DDD** para garantir que seu sistema está alinhado com a real necessidade do usuário.
* Juntos, eles te ajudam a construir sistemas escaláveis, testáveis e com código que parece conversas.

---

**Salve esse artigo como referência de bolso para revisão.**

Qualquer dúvida, volte aqui, e lembre-se: *código que conversa é código que vive.*
