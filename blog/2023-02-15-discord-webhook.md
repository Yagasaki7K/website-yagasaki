---
slug: recebendo-mensagens-de-commit-no-discord-webhook
title: Recebendo mensagens de commit no Discord (Webhook)
description: Comunicação com sua equipe ou grupo de amigos que estão desenvolvendo é um pequeno passo para alcançar ainda mais o sucesso. Com o Webhook do Discord, isso fica mais fácil, todo mundo sabe o que acontece e quando acontece e claro, tudo direitinho
authors:
    name: Anderson Marlon
    title: Software Developer na Stone Co.
    url: https://github.com/yagasaki7k
    image_url: https://github.com/yagasaki7k.png
---

![](https://images.unsplash.com/photo-1584344794229-b3cfd1622f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80 "Photo by Markus Spiske on Unsplash")

> _"Comunicação com sua equipe ou grupo de amigos que estão desenvolvendo é um pequeno passo para alcançar ainda mais o sucesso. Com o Webhook do Discord, isso fica mais fácil, todo mundo sabe o que acontece e quando acontece e claro, tudo direitinho"_

Imagine que você está trabalhando em um projeto com sua equipe e você precisa enviar uma mensagem para o grupo toda vez que um commit é feito no repositório. Isso é possível com o Webhook do Discord. E qual é a vantagem disso? COMUNICAÇÃO. Seja para receber informações do commit, seja para informar a equipe - sem precisar ficar indo até o Github - para informar que uma pull request foi aberta, informar que uma issue foi fechada, essas coisas ...

## O que é Webhook?

Webhook é um recurso que permite que você receba mensagens de eventos de terceiros. Ou seja, no nosso caso, iremos receber mensagens do Github e enviar pelo Discord automaticamente, sem precisar de muitas permissões e sem precisar ficar indo até o Github para ver o que aconteceu, além de ser uma forma de comunicação rápida e direta, sem ter que ficar dando permissão pra tudo.

## Configurando

Primeiro, você precisa criar um Webhook no Discord. Para isso, você precisa ter permissão de administrador no servidor. Depois, vá em Configurações do Servidor > Webhooks e clique em Criar Webhook. Você pode dar um nome e uma imagem para o Webhook, mas não é obrigatório. Depois, você vai receber um link para o Webhook, que será algo como `https://discord.com/api/webhooks/1234567890/1234567890`. Esse link é o que você vai usar para enviar as mensagens.

Agora, você precisa criar o Webhook no Github. Para isso, vá em Settings > Webhooks > Add webhook. Você vai precisar de um nome para o Webhook, o link que você recebeu do Discord e um segredo. O segredo é uma senha que você vai usar para validar que a mensagem que está chegando é realmente do Github, a não ser que você compartilhou isso com outra pessoa, mas não é necessário essa senha. Adicione o link que recebeu e no final coloque `/github`, ficando algo como `https://discord.com/api/webhooks/1234567890/1234567890/github` isso é extramente importante. Depois, você vai precisar selecionar os eventos que você quer receber. No nosso caso, vamos selecionar apenas o Push. Depois, troque o Content Type por Application/JSON e clique em Update Webhook.

Agora, você precisa fazer um commit no repositório para testar se está tudo funcionando. Depois, você vai receber uma mensagem no Discord. Se você não receber, verifique se você configurou tudo corretamente e se você tem permissão de administrador no servidor do Discord.

Para receber mais informações como issue e pull request, você deverá colocar para ouvir todos os eventos daquele repositório ao invés de apenas o Push. Para isso, vá em Settings > Webhooks > Edit e selecione todos os eventos.

Percebeu como é fácil configurar um simples webhook? Mas atente-se, pessoas mal intencionadas podem enviar outro tipo de mensagem para o seu servidor se tiverem acesso a esse link, então tome cuidado. Abaixo, vou deixar um exemplo de como ficou o primeiro push que fiz no repositório do Onigiri Hardcore lá no servidor da Kalify.

<p align="center"><img src="https://user-images.githubusercontent.com/23272064/219360650-94538eef-075e-45e1-bba4-6aa4db759ea5.png" alt="Webhook Discord"/></p>
