---
id: guia-de-contribuicao
title: Guia de Contribuição
sidebar_label: Guia de Contribuição
---

Contribuições são sempre bem-vindas, não importa o tamanho. Antes de contribuir,
por favor, leia o [código de conduta](./codigo-de-conduta.md) e siga as instruções abaixo:

## Estilo de Comunicação Recomendado

1. Sempre inclua capturas de tela para mudanças visuais.
2. Sempre forneça uma descrição detalhada no Pull Request. Não deixe nada ambíguo para o revisor.
3. Sempre revise seu código primeiro. Certifique-se de executar o projeto localmente e testá-lo antes de solicitar uma revisão.
4. Comunique-se sempre no repositório do GitHub. Seja em uma issue ou no pull request, manter as linhas de comunicação abertas e visíveis para todos na equipe ajuda a todos ao seu redor.

## Configuração

1. [Fork](https://docs.github.com/pt/get-started/quickstart/fork-a-repo) o repositório em que você está trabalhando de [github/open-sauced](https://github.com/yagasaki7K/website-kalify) para a sua própria conta do GitHub.
2. Clone o repositório forked para a sua máquina local.
3. Verifique o README do projeto para determinar como executar o projeto localmente. Para muitos de nossos repositórios, você encontrará as direções explicando como rodar o projeto localmente.

Você também pode usar os comandos do shell abaixo para começar assim que tiver feito o fork do repositório.
Certifique-se de substituir `<seu-nome>` pelo seu nome de usuário do GitHub.

```shell
git clone https://github.com/<your-name>/website-kalify
cd website-kalify
npm install
```

```shell
git clone https://github.com/<your-name>/open-sauced
cd open-sauced
npm ci
```

## Buildando
ara gerar uma versão pronta para produção do seu código, execute:

```shell
npm run build
```

## Testando

Para executar o conjunto de testes, use o seguinte comando (verifique se existe no package.json):
```shell
# the tests will run in watch mode by default
npm test
```
Como os testes são executados no modo de observação por padrão, alguns usuários podem encontrar erros sobre muitos arquivos abertos. Nesse caso, pode ser benéfico [instalar o watchman](https://facebook.github.io/watchman/docs/install.html).

Para obter mais informações sobre como testar React e JavaScript, confira este curso [Testando JavaScript](https://testingjavascript.com/).

## Aplicando guia de estilo do Lint

Para verificar se há erros de formatação e linting no código, execute o seguinte comando (verifique se existe no package.json):

```shell
npm run lint
```

Esses erros também serão exibidos durante o desenvolvimento, mas não impedirão a compilação do código.

Para corrigir os erros de formatação e linting, execute o seguinte comando (verifique se existe no package.json):

```shell
npm run format
```

Esses comandos usam [ESLint](https://eslint.org/) para verificar e corrigir o código.

Se você esquecer de executar este comando, as verificações automatizadas de PR também executarão esses comandos, mas o PR será bloqueado se houver algum erro.

## Solicitações pull

**_Acolhemos ativamente suas solicitações pull, mas é preferível vincular seu trabalho a um problema existente._**

1. Bifurque o repositório e crie seu branch a partir do branch padrão.
2. Dê ao seu ramo um nome que descreva o trabalho que você está realizando. ou seja, adiciona algo novo ou corrige dispositivos móveis
3. Se você adicionou código que deveria ser testado, adicione testes.
4. Se você alterou as APIs, atualize a documentação.
5. Se você fizer alterações visuais, serão necessárias capturas de tela.
6. Certifique-se de que o conjunto de testes seja aprovado.
7. Certifique-se de abordar quaisquer avisos de fiapos.
8. Se você melhorar o código existente, informe-nos na descrição do seu PR.
9. São necessários uma descrição e título do PR. O título deve começar com: "feat:" ou "fix:"
10. [Link para um problema](https://help.github.com/en/github/writing-on-github/autolinked-references-and-urls) no projeto. Código não solicitado é bem-vindo, mas é necessário um problema para anunciar suas intenções. PRs sem um problema vinculado serão marcados como inválidos e fechados.

### Validação de relações públicas

Exemplos de títulos de relações públicas válidos:

- correção: erro de digitação correto.
- talento: Adicionar suporte para o Node 12.
- refatorar!: Eliminar o suporte para o Node 6.

_Observe que como os títulos PR possuem apenas uma linha, você deve usar o ! sintaxe para alterações significativas._

Consulte [Commits Convencionais](https://www.conventionalcommits.org/en/v1.0.0/) para mais exemplos.

Você também pode experimentar commits convencionais fazendo:

```shell
npm run push
```

Usar o comando `npm run push` é um substituto interativo para `git commit`. Ele impõe a especificação convencional de commits para escrever mensagens de commit, tornando mais fácil para desenvolvedores e mantenedores entenderem as mudanças feitas em um commit específico.

Supondo que você esteja lidando com alterações de código e as adicione usando `git add`, quando estiver pronto para confirmar, existem 2 maneiras de proceder: `git commit` ou `npm run push`. O segundo método é o preferido, pois fazer um `git push` subsequente e depois abrir um PR garantiria que o título estivesse em conformidade com nossos padrões.

### Trabalho em progresso

O GitHub tem suporte para solicitações pull de rascunho, que desabilitarão o botão de mesclagem até que o PR seja marcado como pronto para mesclagem.

## Equipe open source da Kalify

A equipe de suporte da Kalify é uma equipe que existe para criar um caminho para fazer contribuições para este projeto e outros projetos de código aberto. Espera-se que todos os membros da equipe de triagem sigam este guia: [TRIAGE_GUIDE.md](./kalify-open-source.md)

> **Não há requisitos mínimos para se tornar membro da Kalify Open Sourcec.**

Para aqueles interessados em se envolver no projeto ou apenas no código aberto em geral, solicite um convite para a equipe através da comunidade no Discord

## Financiamento

Kalify Inc faz parte dos patrocinadores do GitHub através do dono do projeto. Se você quiser contribuir, consulte a [página do patrocinador](https://github.com/sponsors/yagasaki7k) para obter detalhes sobre como os fundos são distribuídos.

## Comunidade

Você tem dúvidas? Participe da conversa em nosso [Discord](https://discord.gg/jhSepmE7nN).

## Dicas de codificação

- Faça perguntas se estiver preso.
- Sempre use [rel="noreferrer" em todos os links target="\_blank"](https://web.dev/external-anchors-use-rel-noopener/).

## Licença

Ao contribuir para o projeto da Kalify Inc, você concorda que suas contribuições serão licenciadas
por uma Licença específica. Essas informações podem ser encontradas no arquivo `LICENSE` do repositório para o qual você está contribuindo.