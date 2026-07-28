---
title: Como Montar um Prompt Matador para Criar Projetos SaaS com IA
excerpt: 'Montei um mega prompt que uso com o Claude/Cursor para sair do zero a uma arquitetura completa. Aqui vou explicar cada parte essencial. Antes de tudo, use o modelo OTIMO para seus prompts. Sem isso, você vai ter uma IA adivinhando sua intenção ao invés de entender.'
image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags: ["Saas", "Desenvolvimento", "Prompt"]
date: "2026-07-28"
---

![](https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

# Como Montar um Prompt Matador para Criar Projetos SaaS com IA

Montei um mega prompt que uso com o Claude/Cursor para sair do zero a uma arquitetura completa. Aqui vou explicar cada parte essencial.

## O Modelo OTIMO

Antes de tudo, use o modelo OTIMO para seus prompts. Sem isso, você vai ter uma IA adivinhando sua intenção ao invés de entender.

- **O** — Objetivo
- **T** — Tom / Papel
- **I** — Instruções específicas
- **M** — Material / Contexto
- **O** — Output esperado

## Defina o Papel da IA

Não mande a IA "criar um site". Diga quem ela é. No meu prompt, por exemplo: "Atue como Product Designer, Software Architect, UX Writer, SEO Strategist e Full Stack Senior Engineer." Quanto mais específico o papel, melhor o resultado.

## Visão do Produto

A IA precisa entender o porquê antes do como. Defina o que o produto faz, qual o objetivo principal, como será monetizado e o que não é prioridade. Clareza aqui é horas economizadas depois.

## Público-alvo Detalhado

Defina who before how. Exemplo: "Devs júnior, pleno e sênior se preparando para entrevistas técnicas, treinando inglês técnico, buscando perguntas por stack específica." Público vago é produto vago.

## Arquitetura de Conteúdo

Liste temas e categorias antes de pedir código. A IA precisa entender a estrutura de dados antes de criar componentes. No meu prompt defini 15 temas principais, 24 stacks, 3 senioridades e 7 tipos de página.

## MVP vs Futuro

Separe explicitamente o que vai e o que não vai no MVP. Por exemplo, no MVP: home, simuladores, banco mockado, SEO básico. Fora do MVP: login obrigatório, IA em tempo real, editor de código, pagamento. A IA executa o que você permite. Se não delimitar, ela especifica tudo.

## Modelo de Dados Detalhado

Defina a estrutura das entidades antes de pedir código. Exemplo de modelo de pergunta: id, slug, title, question, expected_answer, explanation, category, theme, stack, difficulty, seniority, tags, answer_type, estimated_time.

## Stack Técnica Declarada

Não deixe a IA "escolher" a stack. Declare o que você quer usar: "Stack: Elysia + Bun, TanStack SSR, Tailwind, Stripe, TurboRepo monorepo, Eden Treaty para API." Isso evita surpresas e garante coerência entre todos os arquivos gerados.

## Skills como Ferramentas

O segredo do meu prompt são as skills instaladas no agent. Antes de programar, instalo: revenue-centric-design (marclou), animations (emilkowalski), grill-me (stress test de decisões) e frontend-design.

## Separe Setup de Desenvolvimento

No final do prompt, adicione: "Não comece a programar ainda. Apenas faça o setup, crie as skills, organize o README e as docs." Isso cria uma base sólida antes de gerar qualquer linha de código.

Um prompt bem estruturado transforma a IA de uma ferramenta reativa em um parceiro estratégico. Dedique tempo para definir cada elemento - o retorno em qualidade e velocidade de desenvolvimento compensa.*