---
title: Conheça o meu bun/yarn commit e facilite a sua vida
excerpt: "Uma maneira de atualizar, buildar e subir os commits de maneira simples, direta e sem complicações."
image: https://images.unsplash.com/photo-1629654291663-b91ad427698f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
tags: ["Script", "Desenvolvimento", "Programação"]
date: "2024-04-16"
---

![](https://images.unsplash.com/photo-1629654291663-b91ad427698f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "Gabriel Heinzer")

Imagine o seguinte cenário, você precisa, nessa respectiva ordem, todos os dias que subir um commit seguir uma simples rotina de, verificar se as dependências
estão atualizadas, depois verificar se algo foi quebrado através do `build`, subir os arquivos que foram alterados e depois commitá-los, certo? Isso é muito
custoso e você toda hora tem que ficar colocando a data e hora que aquilo aconteceu para ficar bem bonitinho, não é mesmo?

Então segue a ideia comigo.

```json
"scripts": {
    "commit": "bun update &&
    bun run vercel &&
    read -p 'Descriptions Commit: ' message &&
    git add . &&
    echo -n \"$message - \" &&
    node getTime.js | xargs -I {} git commit -m \"$message - {}\" &&
    git push"
},

// package.json via Bun
```

Entendeu nada? Então eu te explico em cada detalhe.

Esse é um arquivo conhecido como package.json, ele está disponível sempre que a gente vai construir um projeto usando Vite, React, Next, enfim, ele fica
responsável por colocar cada dependência que o desenvolvedor vai usar. E por isso, ele tem que estar sempre atualizado.

Nele, adicionamos na aba scripts, o comando "commit", que toda vez que a gente der `yarn commit`, `npm commit` ou `bun commit`, ele será acionado. Mas
o que ele faz? Primeiramente, ele irá verificar - no nosso caso do bun - se existe atualizações de dependências. Se tiver, ele irá executar o `bun update` e
irá atualizar tudo para a gente, deixando redondinho.

Após isso, ele irá rodar o `bun run vercel`, que no meu caso específico para o bun, ele irá rodar `"vercel": "next build"`, que é o `build` da aplicação
em Next que estou desenvolvendo, então adapte-se ao que for melhor para você, existem casos que só o `yarn build`, `npm build` ou `bun build`, irá resolver.

Depois que ele rodar os dois e der tudo certo, ele vai simplesmente pedir para escrever a mensagem que eu quero em seguida, no caso, deixei detalhado que era
a descrição do commit para eu não me perder caso eu estivesse distraído, no meu caso, posso colocar como exemplo, `Added: Slug Page`.

Com a mensagem escrita, ele irá adicionar os arquivos para o Github através do `git add .`, vai colocar a nova mensagem, e vai chamar o `getTime.js` que
nada mais é que um arquivo em Javascript para colocar a data e a hora do commit, eu vou deixar ele disponível aqui embaixo - ele deve ficar na raíz do projeto. Após isso, ele irá mesclar os dois no `git commit -m`, e vai dar um `git push` para o repositório.

```Javascript
const now = new Date();
const day = now.getDate().toString().padStart(2, '0');
const month = (now.getMonth() + 1).toString().padStart(2, '0');
const hours = now.getHours().toString().padStart(2, '0');
const minutes = now.getMinutes().toString().padStart(2, '0');
const formattedDate = `${day}-${month} ${hours}:${minutes}`;

console.log(formattedDate);

// getTime.js
```

Se tudo estiver de acordo e nenhum erro acontecer, tudo passará liso. Em casos do `yarn`, quando vamos dar o upgrade, ele geralmente pede para confirmar quais
dependências queremos atualizar ou se será todas, dando o seguinte comando: `yarn upgrade-interactive --latest`, ai é só a gente apertar `A` para selecionar todos, e em seguida dar `Enter` para continuar e ele irá instalar e continuar todo o roteiro que a gente criou.

```json
"scripts": {
    "commit": "yarn upgrade-interactive --latest &&
    yarn build && read -p 'Descriptions Commit: ' message &&
    git add . &&
    echo -n \"$message - \" &&
    node getTime.js | xargs -I {} git commit -m \"$message - {}\" &&
     git push"
},

// package.json via Yarn
```

```json
"scripts": {
    "commit": "npm update &&
    npm build &&
    read -p 'Descriptions Commit: ' message &&
    git add . &&
    echo -n \"$message - \" &&
    node getTime.js | xargs -I {} git commit -m \"$message - {}\" &&
    git push"
},

// package.json via NPM
```

O que achou da ideia? Tem alguma sugestão para deixar esse script melhor ou até mesmo mais sofisticado? Se inventou alguma nova artimanha,
ou até mesmo está com dúvida, deixe seu grito lá no [Twitter/X](https://twitter.com/Yagasaki7k) e a gente evolui juntos!
