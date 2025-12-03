---
title: Como mover o WSL para outra unidade do disco
excerpt: "Uma maneira de transferir os arquivos do WSL sem perder nada de praticidade, os arquivos e os programas do seu WSL."
image: https://safebooru.org//samples/3910/sample_57a2cf4f2a509b52a4ae16da4b454ed390ff9f32.jpg?4086516
tags: ["WSL", "Intermediário", "Windows"]
date: "2024-12-24"
---

![](https://safebooru.org//samples/3910/sample_57a2cf4f2a509b52a4ae16da4b454ed390ff9f32.jpg?4086516)

Quando nós criamos um WSL ele é salvo no Windows dentro da pasta C:\Users\NOME-DO-SEU-USUARIO\AppData\Local\Packages\CanonicalGroupLimited.UbuntuonWindows_79rhkp1fndgsc\LocalState e dependendo da quantidade de aplicativos e serviços que você instalar no WSL o espaço usado pode ficar bem grande. Então, existe uma maneira de você migrar esses dados para outra unidade de disco do seu computador. Para isso precisamos seguir os passos abaixo.

## Chocolatery

Primeiro instale o Chocolatey digitando o código abaixo no Windows Terminal ou no PowerShell, você vai precisar desse utilitário.

```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

## LxRunOffline

Agora que já temos o Chocolatery instalado, vamos usá-lo para instalar o LxRunOffline, que é um utilitário completo para gerenciar o Windows Subsystem for Linux (WSL).

```bash
choco install lxrunoffline
```

## Verificando as distros instaladas

Com o lxrunoffline já instalado vamos ver quais distros Linux estão instaladas no nosso Windows.

```bash
wsl -l -v
```

## Movendo a distro para outra unidade do disco

Certifique-se de que a distro não esteja em execução, para ter certeza, de que vão está todas as distros encerradas, rode o comando abaixo:

```bash
wsl --shutdown
```

Para mover todo o conteúdo da distro Linux para outra unidade, usamos o comando abaixo:

```bash
lxrunoffline move -n Ubuntu -d D:\wsl\Ubuntu
```

Onde D:\wsl\Ubuntu é a pasta de destino.

Esse comando move o arquivo ext4.vhdx o HD virtual do Linux.

Pronto, agora você ganhou espeço na sua unidade C:\

Obsevação: Não mova mais de uma distro para a mesma pasta, isso causará um conflito. Então a minha recomendação é criar a pasta D:\wsl, e dentro dela, uma pasta para cada distro.
