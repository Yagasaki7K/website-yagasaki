---
slug: github-desktop-vs-wsl
title: Github Desktop vs WSL
description: Quando se trata de ter dois ambientes, os problemas são maiores, mas é melhor do que ter um problema maior do que eles que possa tomar muito de seu tempo.
authors:
  name: Anderson Marlon
  title: Software Developer na Stone Co.
  url: https://github.com/yagasaki7k
  image_url: https://github.com/yagasaki7k.png
---

![](https://images.unsplash.com/photo-1555532538-dcdbd01d373d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=964&q=80 "Florian Krumm")

> _"Quando se trata de ter dois ambientes, os problemas são maiores, mas é melhor do que ter um problema maior do que eles que possa tomar muito de seu tempo."_

Inicialmente vou apresentar a situação em que trabalho hoje. Tenho um computador com uma Geforce GTX 1660, i7–3770, 24GB de RAM, 1 HD 1TB e 1 SSD 256GB com Windows 10 Pro.

Ah, mas você é desenvolvedor, porque não usa alguma Distro Linux?
O único problema é que direto mexo com Adobe Photoshop e gosto muito de jogos que não possuiem compatibilidade com Linux como jogos que estão na Steam, Epic Games, Ubisoft, EA Play, enfim, o que leva muita dor de cabeça para tentar se adaptar.

### Tá, mas então, que tal um Dual Boot?

O problema do dual boot é que já fiz ele cerca de três vezes na minha vida. O que mais me quebra é ter que ficar desligando e ligando pra pegar certas coisas ou fazer certas edições — como trabalho em alguns projetos solos, dependo do Photoshop para fazer edições rápidas e que já tenho facilidade no manejo — e sem falar que nas três vezes aconteceu um problema com um seguinte cara: O tal do GRUB corrumpido.

Essa é a maior dor de cabeça que existe, um GRUB corrompido, para quem não sabe, ocorre quando você troca muito de sistema e existe a incompatibilidade deles em comunicarem entre si, identificarem que são sistemas diferentes, o que acaba acontecendo deles se corromperem. Sim, se corromperem, os dois sistemas vão pro saco. ~ Espero estar certo sobre essa linha de pensamento, se eu estiver equivocado, me corrijam.

O que gera uma mega dor de cabeça, arquivos inrecuperáveis, enfim. Minha solução para isso, foi WSL.

WSL é o Windows com um Subsystem do Linux no próprio sistema, permitindo eu mexer no Terminal do Ubuntu (ou qualquer outra distro Linux instalada) e usufruir como se estivesse usando uma máquina Linux.

Tá, mas vai ao que importa.

### Qual é o problema do Github Desktop vs WSL?

Ao colocar projetos do Github no WSL, não existe problema algum. Mas você pedir para que o Github Desktop (Windows), veja os arquivos do Linux (WSL) e que façam os commits, todo bonitinho, tem um problema.

O Windows e Linux não se conversam, a maneira de gerar um arquivo é diferente, a leitura de documentos, dependendo, é diferente, então acaba que gerando vários conflitos. E um deles é que existe a grande probabilidade ~ aconteceu comigo, no meu caso ~ dele (Windows) gerar arquivos que jamais foram modificados ou criados e que só vão servir para poluir a aplicação e atrapalhar sua vida, já que não é possível remover eles (exceto pela CLI) e se deixar eles guardados (Stage Commits), eles vão atrasar você de trocar de brench. Resumindo, um saco.

A solução para isso? Criar o mesmo repositório no Windows e fazer essa manobra nada agradável, mas que me poupará de várias dores de cabeça com o Github Desktop.

Criando o projeto no Windows, fazendo os commits no WSL e manipulando as cherry-picks no Windows, fica muito mais fácil.

### E por que você não usa o Git no Terminal direto e para de usar o Github Desktop? Facilitaria sua vida, não?

Sim, facilitaria, não iria precisar de dois projetos no mesmo dispositivo e essa manobra sem sentido. Não é falta de profissionalismo da minha parte em decorar os comandos do git, muito pelo contrário, o problema é que sou alguém mais front-end, vamos assim dizer e ~ muitos vão me hatear por isso ~ mas, nesse aspecto, prefiro o visual e principalmente quando existem conflitos, problemas de versionamento, acompanhar a árvore de commits para ver quem subiu, quem não atropelou ninguém o Github Desktop facilita em muito minha vida.

Sem falar que já me evitou inúmeras vezes de subir arquivos indesejavéis ou que se quer foram alterados e estão subindo mesmo assim.

É muito melhor ~ no meu ponto de vista ~ ser mais visual e trabalhar corretamente, do que simplesmente ser cool e oldschool e viver batendo cabeça por fazer merda, se matar em fazer uma cherry-pick ou alterar as ordens de commit.

Mas enfim, essa foi apenas uma experiência que gostei de compartilhar e espero que sirva para inspirar ou qualquer coisa do tipo. Se quiser conversar um pouco a respeito, estarei tanto no Twitter como @Yagasaki7K como no Discord através da [Kalify Developers](https://discord.gg/jhSepmE7nN).
