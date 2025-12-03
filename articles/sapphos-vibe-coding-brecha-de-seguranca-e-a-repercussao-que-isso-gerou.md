---
title: Caso Sapphos - Vibe coding, brecha de segurança e a repercussão que isso gerou nas redes sociais
excerpt: "Sapphos, aplicativo de relacionamento voltado para o público feminino, possuía falha grave em seu código capaz de expor fotos e documentos das usuárias. Time responsável trabalha em nova versão mais segura."
image: https://images.unsplash.com/photo-1593526613712-7b4b9a707330?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
tags: ["Cybersegurança", "App", "Vibe Coding"]
date: "2025-09-09"
---

![](https://images.unsplash.com/photo-1593526613712-7b4b9a707330?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

# Sapphos: Segurança, Ego e Falta de Profissionalismo

> Este texto está mais próximo de um artigo de opinião sobre o ocorrido, as providências tomadas e o meu ponto de vista.

## O que é o Sapphos?

O **Sapphos** é um aplicativo de relacionamentos voltado para mulheres lésbicas, funcionando de forma semelhante ao Tinder.
Na teoria, e segundo diversas pessoas da própria comunidade, é considerado o melhor espaço para esse público. O motivo?

- Exige **documento no cadastro** para validação.
- Permite interação **exclusiva entre mulheres lésbicas**, sem interferência de outros gêneros.

## O que aconteceu?

Na **segunda-feira, 07 de agosto**, três desenvolvedores (dois brasileiros e um americano) descobriram uma **brecha grave de segurança** no app.

Com uma simples alteração de **ID na URL** — que nem sequer estava em formato seguro como `uuid` ou `base64` — era possível acessar informações completas de qualquer perfil, incluindo:

- Foto de perfil
- Imagem de verificação de documento
- Nome completo
- Data de nascimento
- Entre outros dados sensíveis

![](<https://tm.ibxk.com.br/2025/09/09/09022032896005.jpg?ims=fit-in/800x500/filters:quality(70)>)

## A reação da empresa

Ao invés de **agradecer o informe** — que não foi um ataque, apenas uma demonstração responsável do problema —, a Sapphos:

- Denunciou e processou o desenvolvedor que reportou a falha.
- Classificou o caso como um “ataque de grupo de homens cis”.

![](https://pbs.twimg.com/media/G0WjgPcWoAESfiX?format=jpg&name=large)

Vale destacar que o desenvolvedor **não expôs dados de nenhum usuário**. Ele apenas demonstrou a falha de forma anônima, sem cobrar nada pelo serviço (apesar de trabalhar na área de cybersecurity, com relatos de cobrança de R$200/hora em consultorias).

Mesmo assim, a empresa publicamente efetuou um ataque de gênero e o processou, um ato que pode se voltar contra a própria empresa — afinal, esse tipo de falha **fere diretamente a LGPD**.

![](<https://tm.ibxk.com.br/2025/09/09/09023120811029.jpg?ims=fit-in/800x500/filters:quality(70)>)

## Reação da comunidade

A comunidade classificou a Sapphos como uma empresa de **“vibe coding”**, que priorizou ego e ideologia em vez de **profissionalismo e segurança**.

Diversos relatos mostram que:

- O aplicativo **foi lançado sem revisão adequada**.
- A falha era **simples e evitável**.
- Bastava uma requisição na API para obter dados completos de qualquer usuário.

Segundo a própria empresa, o app tinha cerca de **40 mil downloads**, o que aumenta ainda mais a gravidade da exposição.

Atualmente, o caso é citado como uma das **maiores referências de falha de segurança recente**, resultado por utilizar do vibe coding - ato de gerar código através de IA - e sem revisar. Além da falha, não só pelo técnico, mas pela forma **ridicularizada e ofensiva** com que trataram quem tentou ajudar.

Atualmente, vários desenvolvedores e usuários estão movendo **processos baseados na LGPD** contra a empresa.

## Meu ponto de vista

O que mais chama atenção aqui não é apenas a falha em si, mas a **postura da empresa**:

- **Falta de profissionalismo**
- **Ego inflado**
- **Transformação indevida em ataque de gênero**

Se fosse uma mulher apontando a falha, provavelmente ainda assim a empresa buscaria deslegitimar a crítica.

O fechamento do app e a troca da rota da API foram medidas inúteis. Se os dados já haviam sido expostos, essas ações não impedem o problema real.

No fim, o que poderia ter sido resolvido com um simples **“obrigado pelo reporte”** e uma correção, agora ficará marcado como um caso de **arrogância, despreparo e desconfiança da comunidade**.

A reputação, que poderia ter sido fortalecida com transparência, acabou sendo destruída antes mesmo do aplicativo realmente decolar.

Fontes do Vazamento:

- [https://x.com/acgfbr/status/1965159646014177659](https://x.com/acgfbr/status/1965159646014177659)
- [https://x.com/vxunderground/status/1965156656943403150](https://x.com/vxunderground/status/1965156656943403150)
- [https://x.com/Reeshasx/status/1965140901661196499](https://x.com/Reeshasx/status/1965140901661196499)
