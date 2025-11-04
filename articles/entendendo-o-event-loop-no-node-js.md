---
title: Entendendo o Event Loop no Node.js
excerpt: 'Vamos falar um pouco sobre o Event Loop, como ele funciona e o que ele resolve? O JavaScript é, por natureza, uma linguagem single-threaded. Isso significa que ele consegue executar apenas uma operação por vez** dentro do seu loop principal. E aí vem a grande questão: como o Node.js consegue lidar com operações assíncronas sem travar a execução do código?'
image: https://images.unsplash.com/photo-1613018274564-bec35a774995?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
tags: ['Node.js', 'Event Loop', 'Tutorial']
date: '2025-09-30'
---

![](https://images.unsplash.com/photo-1613018274564-bec35a774995?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

Vamos falar um pouco sobre o Event Loop, como ele funciona e o que ele resolve?

O **JavaScript** é, por natureza, uma linguagem **single-threaded**. Isso significa que ele consegue executar **apenas uma operação por vez** dentro do seu loop principal.

E aí vem a grande questão: **como o Node.js consegue lidar com operações assíncronas sem travar a execução do código?**

A resposta está no **Event Loop**.

## O que é o Event Loop?

O **Event Loop** é o mecanismo que permite ao Node.js gerenciar tarefas assíncronas sem bloquear a thread principal.  
Ele funciona em conjunto com o **kernel do sistema operacional**:

- O código JavaScript principal agenda tarefas (chamadas assíncronas, timers, etc.).
- O Node.js delega essas operações para o kernel, que é **multi-threaded** e consegue lidar com várias coisas em paralelo.
- Quando o kernel termina uma dessas operações, ele avisa o Node.js.
- O Event Loop então pega a **callback** associada e coloca na **fila de execução** (pool queue).
- Assim, o JavaScript executa essa callback **quando a thread principal estiver livre**, sem travar outras operações.

## Como o Event Loop é iniciado?

Quando o Node.js inicializa:

1. Ele começa a executar seu código.
2. Esse código pode agendar tarefas assíncronas (como `setTimeout`, promises, I/O, etc.).
3. O Event Loop entra em ação e passa a organizar a execução dessas tarefas de forma eficiente.

## As fases do Event Loop

O Event Loop é dividido em fases.  
Cada fase possui uma **fila FIFO (First In, First Out)** de callbacks a serem executadas.

As principais fases são:

### 1. **Timers**
Executa callbacks agendadas por:
- `setTimeout()`
- `setInterval()`

### 2. **Callbacks Pendentes**
Nesta fase, o Node.js lida com **operações de I/O** (como leitura de arquivos ou requisições de rede) que não puderam ser executadas imediatamente na fase anterior.

### 3. **Idle, Prepare**
Fases internas utilizadas pelo Node.js.  
Não costumam ser relevantes para quem está desenvolvendo.

### 4. **Poll**
É uma das fases mais importantes:

- Recupera novos eventos de I/O.
- Executa callbacks relacionadas a I/O (quase todas, exceto as de fechamento, timers e `setImmediate()`).
- **Pode bloquear**: se não houver timers ou callbacks de `setImmediate()` pendentes, o Event Loop **aguarda** novos eventos de I/O antes de prosseguir.

### 5. **Check**
Fase dedicada a callbacks agendadas com **`setImmediate()`**.

Quando você usa `setImmediate()`, está basicamente dizendo:  
*"Execute essa tarefa assim que o Event Loop chegar na fase `check`, no final deste ciclo."*

### 6. **Close**
Última fase do Event Loop.  
Aqui o Node.js lida com callbacks relacionadas ao **fechamento de recursos**, como sockets ou conexões que foram encerradas.

## Por que isso importa?

Com o **Event Loop**, o Node.js consegue:

- **Não bloquear** a thread principal.
- Lidar com milhares de requisições simultâneas.
- Extrair mais **performance** e **estabilidade** mesmo em cenários de alta carga.

## Onde aprender mais?

Este artigo foi um resumo simplificado.  
Para se aprofundar, consulte a documentação oficial do Node.js:

[Documentação do Event Loop, Timers e NextTick](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick)

### Conclusão

O **Event Loop** é o coração do Node.js.  
Ele é o que permite que o JavaScript, mesmo sendo single-threaded, se torne poderoso o bastante para lidar com aplicações **assíncronas, performáticas e escaláveis**.

Saber o que é o Event Loop vai tornar seu código TS/JS melhor.

Porque você vai saber utilizar Promises corretamente e vai otimizar suas operações CPU Bound. Vai saber usar melhor o sistema de filas da sua aplicação.

Isso é relevante pra você se destacar com um Dev Senior Node.
