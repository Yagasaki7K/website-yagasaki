---
slug: dando-update-no-node-js-um-tutorial-fácil-e-rápido
title: Dando update no NodeJS - um tutorial fácil e rápido
description: Realizar o update NodeJS com certa frequência é o melhor caminho para ter acesso a todas as novidades que são lançadas de tempos em tempos no software.
authors:
    name: Anderson Marlon
    title: Software Developer na Stone Co.
    url: https://github.com/yagasaki7k
    image_url: https://github.com/yagasaki7k.png
---

![](https://images.unsplash.com/photo-1512908390106-b1af96afe5cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80 "Kira auf der Heide")

> _"Realizar o update NodeJS com certa frequência é o melhor caminho para ter acesso a todas as novidades que são lançadas de tempos em tempos no software. "_

Afinal, assim como acontece com outras tecnologias de código-aberto, o NodeJS está em constante evolução, seja para aumentar a estabilidade e segurança da ferramenta ou, então, para corrigir bugs e adicionar novas features. 

Sim, saber como atualizar Node é importantíssimo. A boa notícia é que existem muitos métodos que podem ser usados com esse propósito – portanto, não há desculpas para ficar para trás. Para ajudá-lo nessa missão, reunimos algumas das maneiras mais simples e eficazes para realizar o update NodeJS para a versão mais recente em máquinas Linux, Windows e MacOS.

Antes de começarmos, temos uma dica: verifique qual versão do NodeJS você está usando atualmente. Isso pode ser feito executando `node -v` em um terminal! 

## Três formas de dar update NodeJS em máquinas Linux
Quando o assunto é atualizar Node Linux, há três formas principais com as quais isso pode ser feito. Na sequência, daremos detalhes sobre cada uma delas.

## Usando nvm
O Node Version Manager, mais conhecido como NVM, é de longe a melhor maneira para se dar update NodeJS em máquinas Linux.

Para isso, você precisará de um compilador de C++, do pacote build-essential e da biblioteca libssl-dev. Rode um update primeiro para depois instalar os pacotes, de acordo com os comandos abaixo: 

Atualização:
`sudo apt-get update`

Instalação dos pacotes:
`sudo apt-get install build-essential checkinstall libssl-dev`

Para instalar ou atualizar o NVM, por sua vez, você pode conseguir o script de instalação usando o cURL:
`curl -o https://raw.githubusercontent.com/creationix/nvm/v0.35.2/install.sh | bash`

Após fechar e abrir o terminal, você poderá verificar se a instalação foi um sucesso rodando:
`nvm -v`

Se tudo tiver ocorrido da forma esperada, o comando irá retornar a versão do nvm. Depois de configurar, você verá que dar update NodeJS será bem mais fácil! 

Além disso, você pode verificar quais versões estão atualmente instaladas com o comando no terminal `nvm ls` e ver o que está disponível para instalação usando o `nvm ls-remote`.

Baixe, instale e compile versões mais recentes do NodeJS com `nvm install #.#.#`. Lembrando que é preciso substituir os #s pela versão do NodeJS desejada.

Já para verificar qual é a versão mais recente, basta acessar o site do NodeJS.

## Usando um gerenciador de pacotes
Se o NVM não funcionou para você ou prefere um jeito mais tranquilo, um gerenciador de pacotes é agora o seu melhor caminho.

O Node Package Manager, ou NPM, pode te ajudar a descobrir, compartilhar e usar código, junto com dependências. E o melhor de tudo é que o NodeJS já vem com o NPM pré-instalado, porém, ele é atualizado com mais frequência que o Node.

Para verificar qual é a sua versão atual, basta rodar `npm -v` no terminal. Na sequência, rode `npm install npm@latest g` para instalar a versão mais recente (caso já não esteja usando-a) e `npm –v` novamente, para ter certeza de que a atualização deu certo. 

Após essa etapa, será o momento de finalmente realizar o sonhado update NodeJS. E, para isso, você precisará instalar um módulo do NPM chamado “n”.

Portanto, para limpar o cache do NPM, instalar o módulo “n” e instalar a mais recente versão do NodeJS, rode as seguintes linhas de código no seu terminal:

`sudo npm cache clean -f`

`sudo npm install -g n`

`sudo n stable`

Para você instalar a versão mais recente, seja estável ou não, rode `sudo n latest`. Outra alternativa é rodar `n #.#.#`, para atualizar NodeJS para uma versão específica.

## Usando pacotes binários
Vamos ser honestos, você provavelmente não quer seguir este caminho…

Mas, se as outras opções não deram certo e você estiver desesperado, existe a possibilidade de ir para a [página oficial de downloads](https://nodejs.org/en/download/) para conseguir um pacote binário 32-bit ou 64-bit para dar update NodeJS ou instalar.

Você pode instalar o pacote pelo próprio browser, mas, caso prefira usar o terminal, tenha em mente que a versão específica do Node pode mudar enquanto atualizações forem lançadas.
`wget https://nodejs.org/dist/node-latest.tar.gz`

Para descompactar o arquivo, você precisará instalar o pacote xz-utils. Portanto, rode o seguinte comando no seu terminal:  
`sudo apt-get install xz-utils`

Já para instalar o pacote binário em /usr/local, rode:
`tar -C /usr/local –strip-componentes 1 -xJf node-latest.tar.gz`

Agora que você tem o Node e o NPM em mãos, considere dar uma nova chance para a opção 2 na próxima vez que for atualizar Node Linux.

## Update NodeJS no Windows e no macOS
Agora que já explicamos como atualizar Node no Linux, partiremos para a segunda parte deste conteúdo, que é voltada para quem utiliza Windows ou MacOS. 

Você pode começar essa jornada acessando a [página de downloads do Node](https://nodejs.org/en/download/), afinal, lá é possível encontrar pacotes binários para atualizar Node Windows e para o MacOS.

Usar os pré-instaladores, com extensão .msi para o Windows e .pkg para o macOS, é o melhor caminho para tornar o processo de instalação e update do NodeJS muito mais fácil e eficiente! Basta fazer o download, rodar o arquivo e deixar o instalador cuidar de todo o resto! Com cada update instalado, as novas versões do NodeJS e do NPM vão repor as versões mais velhas.

Alternativamente, os usuários de macOS podem também usar a opção do npm e do módulo “n” e os usuários Windows, caso possuam WSL, também usar a opção do npm e do módulo “n”.

