---
title: Como instalar o Ragnarok LATAM no Linux via Proton (usando Heroic)
excerpt: 'Se você é das antigas e jogou Ragnarok, deve ter ficado sabendo que o Ragnarok Latam, criado pela Gravity, está de volta e trazendo nostalgia a todos.'
image: https://safebooru.org//images/9/da5915ef1cbc7c1b6c995883053ca6c70b164d42.jpg?8321
tags: ['Games', 'Linux', 'Dicas']
date: '2025-03-06'
---

![](https://safebooru.org//images/9/da5915ef1cbc7c1b6c995883053ca6c70b164d42.jpg?8321)

Se você é das antigas e jogou Ragnarok, deve ter ficado sabendo que o Ragnarok Latam, criado pela Gravity, está de volta
e trazendo nostalgia a todos.

Se você quer rodar o **Ragnarok LATAM** no Linux, dá pra fazer funcionar perfeitamente com o **Heroic Games Launcher** e **Proton GE**. Este passo a passo foi testado e comprovado — tudo graças ao **aleex5**, que descobriu esse método e compartilhou com a comunidade.

---

## 🛡️ Heroic

### ✅ Pré-requisitos

- **Heroic Games Launcher** instalado

<details>
<summary>Clique para ver como instalar</summary>

Se você ainda não tiver o Flatpak instalado:

```bash
sudo apt install flatpak
```

Adicione o repositório Flathub:
```bash
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

Instale o Heroic:
```bash
flatpak install flathub com.heroicgameslauncher.hgl
```

> A versão Flatpak do Heroic Games Launcher é preferível, pois garante atualizações rápidas, maior controle de permissões e desempenho superior em relação ao APT e Snap, que podem ter versões desatualizadas ou sobrecarga de desempenho. Além disso, por ser a versão "Oficial" do app, é recomendada pelos próprios desenvolvedores.
</details>

- **Proton GE** (Proton GloriousEggroll)

---

## 📥 Instalando o Proton GE no Heroic

1. Abra o **Heroic Games Launcher**
2. Vá em `Configurações` → `Wine Manager`
3. Na aba **Proton-GE**, baixe a versão **GE-Proton9-27**
   (Versões mais novas também podem funcionar)

---

## 🎮 Instalando o Ragnarok no Heroic

1. No Heroic, clique em **ADD GAME**
2. Preencha o campo **Game/App Name** com **Ragnarok**
3. Expanda a seção **Show Wine Settings**
4. Selecione **GE-Proton9-27** em **Wine Version**
5. Clique em **Run Installer First** (Importante: escolha o Proton **antes** de rodar o `.exe`)
6. Selecione o instalador `.exe` do **Ragnarok LATAM** que você baixou
7. Rode o instalador normalmente
8. Após a instalação, localize o executável do jogo:

Caminho padrão:
```yaml
~/path/to/prefix/Prefixes/default/Ragnarok/pfx/drive_c/Gravity/Ragnarok/Ragnarok.exe
```

9. Finalize a instalação

---

## ⚙️ Configurando o Wine (Proton)

1. No Heroic, vá até as **Configurações** do jogo
2. Clique em **Wine Config (winecfg)**
3. Na aba **Aplicativo**, clique em **Add application...** e selecione `Ragexe.exe` no caminho `Gravity/Ragnarok/Ragexe.exe`
4. Com o `Ragexe.exe` selecionado, defina o modo de compatibilidade como **Windows 7**
5. Clique em **Aplicar** e depois em **OK**

### 📝 Passos opcionais

1. Instale as fontes do Windows clicando em **Winetricks**
2. Instale o pacote `corefonts`

> **Importante:**
> Algumas pessoas relataram que precisaram deletar o arquivo `dbghelp.dll` da pasta `System32`, localizada em:
>
> ```
> ~/path/to/prefix/Prefixes/default/Ragnarok/pfx/drive_c/Windows/System32
> ```
> para o jogo rodar corretamente. Vale a tentativa se algo não funcionar!

---

## 🚀 Rodando o Ragnarok

Agora é só abrir o jogo normalmente pelo Heroic.
Se tudo estiver configurado certo, o Ragnarok vai iniciar sem problemas!

---

## 🙌 Agradecimentos

Agradecimento especial ao **@aleex5**, que descobriu essa configuração e compartilhou com a galera — salvando a comunidade Linux que queria reviver esse clássico!

---

## 🤝 Contribuição

Para contribuir, basta mandar um PR no seguinte repositório:
[https://github.com/RyuunosukeDS3/ragnarok-latam-linux-guide](https://github.com/RyuunosukeDS3/ragnarok-latam-linux-guide)
