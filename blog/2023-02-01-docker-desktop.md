---
slug: rodando-docker-no-windows-sem-docker-desktop
title: Rodando Docker no Windows sem Docker Desktop
description: Essa publicação aborda como fazer isso no Windows 10, mas deve funcionar com Windows 11 e qualquer WSL que suporte a execução do Docker. Digo "deveria" porque não experimentei pessoalmente todas as distros, mas não há nada sobre isso que indique que não funcionará em outras distros.
authors:
    name: Anderson Marlon
    title: Software Developer na Stone Co.
    url: https://github.com/yagasaki7k
    image_url: https://github.com/yagasaki7k.png
---

![](https://images.unsplash.com/photo-1595587637401-83ff822bd63e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=901&q=80 "Dominik Lückmann")

> _"Essa publicação aborda como fazer isso no Windows 10, mas deve funcionar com Windows 11 e qualquer WSL que suporte a execução do Docker. Digo "deveria" porque não experimentei pessoalmente todas as distros, mas não há nada sobre isso que indique que não funcionará em outras distros."_

Anteriormente eu havia escrito um artigo no [TabNews](https://www.tabnews.com.br/Yagasaki/instalando-o-docker-no-wsl-2-sem-o-docker-desktop) sobre como fazer para rodar o Docker no Windows sem a necessidade do Docker Desktop. Hoje, novamente, alguns meses depois, trago uma melhoria dessa evolução. E muito mais instruída para que você não fique perdido em como rodar a aplicação por debaixo dos panos.

O processo para rodar contêineres Windows é muito fácil, você precisa primeiro habilitar essa funcionalidade. Faça isso em um terminal administrativo usando PowerShell:

```powershell
Enable-WindowsOptionalFeature -Online -FeatureName Containers
```

Você provavelmente vai precisar reiniciar. Se ele reclamar, você pode precisar primeiro habilitar a funcionalidade de Hyper-V:

```powershell
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
```

Então instale o Docker. Estou usando o [Scoop](https://scoop.sh/), porque ele já traz também o `dockerd.exe` através do Windows, sem precisar de interação direta no WSL, mas você pode usar outro método se preferir, baixando esses executáveis diretamente no site do Docker. O Rancher Desktop trará o `docker.exe`, mas não o `dockerd.exe`, então não é suficiente para este passo, mesmo que você o tenha instalado.

Lembrando que o Scoop é usado fora de um terminal administrativo.

_Pra ganhar o docker.exe e o dockerd.exe_

```powershell
scoop install docker
```

Então, em um terminal administrativo (WSL por exemplo), instale e configure o serviço do Docker:

_Cria o Serviço NT Docker_

```powershell
dockerd --register-service
```

_Configura o serviço para iniciar manualmente assim ele não inicia com o Windows_

```powershell
Set-Service docker -StartupType Manual
```

_Inicia o serviço_

```powershell
Start-Service docker
```

_Checa se o pipe foi criado_

```powershell
Get-Item //./pipe/docker_engine
```

_Verifica se o Docker está funcionando no terminal de admin_

```powershell
docker info
```

Até esse momento você precisou de um terminal administrativo para usar o Docker, mas agora vamos permitir que seu usuário faça o acesso por um terminal normal. O Docker usa o named pipe `//./pipe/docker_engine` para se comunicar. Alguns tutoriais indicam mexer nas ACLs deste pipe, mas isso não é o ideal. A melhor opção é alterar o arquivo de configuração do Docker e deixá-lo controlar o acesso, assim (de novo no terminal administrativo):

_Configura o Docker para funcionar com o usuário atual sem precisar de um terminal admin_

```powershell
mkdir $env:ProgramData\docker\config
@{ group = "docker-users" } | ConvertTo-Json | Out-File $env:ProgramData\docker\config\daemon.json
```

_Coloca usuário atual no grupo `docker-users`, se ele já não existe e já está lá_

```powershell
$dockerUsers = Get-LocalGroup docker-users -ErrorAction SilentlyContinue
if (!($dockerUsers)) {
    dockerUsers = New-LocalGroup docker-users
    Add-LocalGroupMember -Group $dockerUsers -Member $(whoami)
} else {
    if (!(Get-LocalGroupMember $dockerUsers | ? { $_.Name -eq $(whoami) })) {
        Add-LocalGroupMember -Group $dockerUsers -Member $(whoami)
    }
}
```

_Reinicia o serviço do Docker_

```powershell
Stop-Service docker
Start-Service docker
```

E a partir daí você já pode usar o Docker direto pelo terminal não-administrativo:

```powershell
docker info
docker ps
docker build ...
```

Lembrando que você não vai poder usar o Rancher (ou qualquer outro runtime de contêineres) enquanto o serviço do Docker estiver rodando. Para usá-lo, pare o serviço primeiro:

```powershell
Stop-Service docker
```

E, quando for usar contêineres Windows, primeiro inicie o serviço:

```powershell
Start-Service docker
```

É isso. Simples, né? Espero que tenha ajudado.

Caso você ainda queira revisar a primeira versão [desse artigo](https://www.tabnews.com.br/Yagasaki/instalando-o-docker-no-wsl-2-sem-o-docker-desktop).
