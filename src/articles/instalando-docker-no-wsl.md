---
title: Aprenda a instalar e usar o Docker no WSL de uma vez
excerpt: 'A solução definitiva para instalar e usar o Docker no Windows Subsystem Linux (WSL)'
image: https://safebooru.org//samples/4180/sample_1748929975d7bd94cf16fc9c29c9bfb8adcc2fc9.jpg?4366213
tags: ['Docker', 'DevOps', 'Iniciante']
date: '2024-05-22'
---

![](https://safebooru.org//samples/4180/sample_1748929975d7bd94cf16fc9c29c9bfb8adcc2fc9.jpg?4366213)

Algum tempo atrás estava com dificuldade para realmente entender como instalar o Docker pelo WSL. Será
que era instalando o pacote de dependências? Será que era fazendo o download do aplicativo e usando
apenas no lado do Windows? 

Eis que surge a solução.

Este guia passo a passo ajudará você a começar a desenvolver com contêineres remotos configurando o Docker Desktop para
Windows com o WSL 2 (Subsistema do Windows para Linux, versão 2).

O Docker é uma ferramenta usada para criar, implantar e executar aplicativos usando contêineres. Os contêineres permitem
que os desenvolvedores empacotem um aplicativo com todas as partes necessárias (bibliotecas, estruturas, dependências
etc.) e enviem tudo isso como um pacote. O uso de um contêiner garante que o aplicativo seja executado da mesma forma,
independentemente de configurações personalizadas ou das bibliotecas instaladas anteriormente no computador que o
executa, que poderiam ser diferentes do computador usado para escrever e testar o código do aplicativo. Isso permite que
os desenvolvedores se concentrem em escrever código sem se preocupar com o sistema no qual o código será executado.

## Instalando o Docker Desktop

O primeiro passo que temos que seguir é, instalar o Docker Desktop no lado do Windows, já que ele será responsável por
fazer ser o core dos projetos, o motivo de não conseguirmos isso do lado do WSL diretamente, como era uma das
primeiras abordagens que eu tentei, é que o WSL é restrito de muitas coisas por baixo dos panos e inviabiliza
o acesso do Docker como bem entende.

Então, baixe o [Docker Desktop](https://docs.docker.com/docker-for-windows/wsl/#download) e siga as instruções de
instalação. Lembre-se de que você deve ter o Windows Subsystem Linux (WSL) instalado, antes de começar a fazer essa
configuração.

Depois de instalado, inicie o Docker Desktop no menu Iniciar do Windows e selecione o ícone do Docker no menu ícones ocultos da barra de tarefas. Clique com o botão direito do mouse no ícone para exibir o menu de comandos do Docker e selecione “Configurações”.

![](https://learn.microsoft.com/pt-br/windows/wsl/media/docker-starting.png)

Verifique se “Usar o mecanismo baseado em WSL 2” está marcado em **Configurações > Gerais**.

![](https://learn.microsoft.com/pt-br/windows/wsl/media/docker-running.png)

Selecione entre as distribuições do WSL 2 instaladas nas quais você deseja habilitar a integração do Docker acessando: **Configurações > Recursos > Integração do WSL**.

![](https://learn.microsoft.com/pt-br/windows/wsl/media/docker-dashboard.png)

Para confirmar se o Docker foi instalado, abra uma distribuição do WSL, seja pelo Terminal do Windows ou até mesmo pelo
Terminal do Visual Studio, escolhemos, por exemplo o Ubuntu, e exiba a versão e o número do build inserindo: `docker --version`

Teste se a instalação funciona corretamente executando uma imagem interna simples do Docker usando: `docker run hello-world`

E voílà! Se estiver funcionando, então estamos no passo que queriamos e conseguimos instalar o Docker no WSL.

Qualquer dúvida que tiver, pesquise pelo erro que aparecer e tente entender o que está acontecendo, qualquer coisa,
use como base a [documentação original](https://learn.microsoft.com/pt-br/windows/wsl/tutorials/wsl-containers) para
entender qual etapa você pode ter errado e como entender outras abstrações.

Qualquer dúvida também, não hesite em me chamar no [Twitter/X](https://twitter.com/Yagasaki7K).

Obrigado por ler até aqui!