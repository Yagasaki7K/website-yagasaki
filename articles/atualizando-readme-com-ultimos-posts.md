---
title: Como atualizar seu README do Github com as últimas publicações de Blog ou Dev.to
excerpt: "Deixe seu README atualizado automaticamente usando Github Actions"
image: https://safebooru.org//samples/3476/sample_194dcdd9525a9333cf8fee32ef0d96540f99ff51.jpg?3615216
tags: ["Utilidade", "Github", "Blog"]
date: "2024-05-16"
---

![](https://safebooru.org//samples/3476/sample_194dcdd9525a9333cf8fee32ef0d96540f99ff51.jpg?3615216)

Essa era uma questão muito engraçada que eu tinha nesse blog. Imagina que toda vez que eu fazia um
artigo novo, eu era obrigado, a publicar manualmente no Twitter, Linkedin, e ainda atualizar
no README pessoal do Github, chega até dar canseira né?

Mas as coisas foram evoluindo. O motivo? Encontrei um projeto em que transforma um README em
um [tabuleiro de xadrez], mas o que é de tão divertido nele? A gente cita comandos no
tabuleiro nas issues do projeto, o Github Actions entende isso, e atualiza e depois gira
a mesa para que o outro lado jogue.

Bacana, não é? Graças a isso. Porque não atualizar o meu README pessoal, toda vez
que tiver uma publicação nova, não faz mais sentido? Ai, eu só fico focado em
atualizar no Twitter/X e no Linkedin, certo?

É ai que surgiu essa proposta maravilhosa, claro que eu vim correndo dar a notícia
para vocês e tem muita coisa ainda que precisa melhorar.

# Transforme seus artigos em RSS.

Se você estiver usando um blog que você mesmo criou, seja next com template de blog usando
markdown, seja Docusaurus ou qualquer outro método que não seja um CDN (Dev.to ou Medium),
pegue todo o seus artigos e transforme em RSS.

Nesse caso, se você estiver usando Dev.To ou Medium, vá para o [próximo tópico](#github-actions)

**Como vamos fazer isso?**

Vou utilizar do exemplo que estamos utilizando Next, então tente ver a melhor maneira de você
abordar isso com a tecnologia em que você está usando - tenha brio.

Vamos explicar o código que eu fiz, passo a passo.

Primeiro eu fiz as importações necessárias, e estou utilizando Typescript.
Lembrando que estou usando a geração de API do Next, que fica dentro de `api/hello.ts`, por exemplo.

```ts
import { Feed } from "feed";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import calculateReadingTime from "@/utils/calculateReadingTime";
import { Frontmatter, PostProps } from "..";
```

Vamos lá, o que é o mais importante aqui? É o `feed`, já que ele é o responsável por transformar os nossos artigos em `.xml`.
O comando `fs` e `path` é do bun/node para pegar os arquivos `.mdx`, `matter` é uma ferramenta para markdown, `calculateReadingTime`
é uma função que eu escrevi para calcular quanto tempo de leitura tem um artigo e `Frontmatter` e `PostProps` são types do
Typescript.

Depois disso, precisamos setar a configuração do cabeçalho, qual será o título desse XML, por exemplo:

```ts
const feed = new Feed({
    title: "yagasaki.dev/Blog",
    description: "I enjoy turning solutions into code. I'm a tech enthusiast and love staying up to date with all the latest cutting-edge features.",
    id: "http://yagasaki.dev/",
    link: "http://yagasaki.dev/",
    language: "pt-br",
    image: "https://github.com/Yagasaki7K.png",
    favicon: "https://github.com/Yagasaki7K.png",
    copyright: '© 2014 - 2024 Anderson "Yagasaki" Marlon',
    updated: new Date(), // optional, default = today
    generator: "Feed", // optional, default = 'Feed for Node.js'
    feedLinks: {
        json: "https://yagasaki.dev/api/rss",
    },
    author: {
        name: "Anderson Marlon",
        email: "anderson18.marlon@gmail.com",
        link: "https://yagasaki.dev",
    },
});
```

Criamos feed, escolhemos nosso título, informamos a descrição, o id, o link para o site original, a linguagem dos artigos, a imagem
de apresentação do XML se necessário junto com o favicon, o copyright, quando que aquilo vai ser atualizado, então ele sempre vai
pegar a data de hoje, o tipo de gerador, o link e o autor. Correto?

Agora vamos gerar o método para que ao acessar o site e o endereço que estamos procurando, que no caso de nosso arquivo, será
algo como `localhost:3000/api/rss`.

```ts
export default async function handler(req: any, res: any) {
    if (req.method === "GET") {
        const posts = getPosts();
        const rss = await generateRSS(posts);
        res.setHeader("Content-Type", "text/xml");
        res.status(200).send(rss);
    } else {
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
        res.status(500).send("Internal Server Error");
    }
}
```

Informamos o handler de `req` e `res` como `any`, por preguiça mesmo, mas como é muita coisa inclusa, você
pode estar pesquisando a melhor maneira de fazer isso, já que estamos passando duas props que são de requisição e resposta
do servidor.

Perguntamos que se for um método get, ele vai pegar as publicações, todas elas, e vai passar para o RSS, essas funções estarão logo abaixo.
Não se preocupe agora, depois disso, ele vai devolver um `text/xml` e retornar `200`. Certo?

Se estiver errado, ele vai pegar qual erro que é e vai mandar a mensagem.

# Como pegamos todos os artigos?

No caso do meu site, não vou explicar muito, mas deixarei o código ai para você tentar entender, já
que cada um tem uma maneira de fazer. No caso, estou indo na pasta `articles`, pegando os arquivos e
configurando eles por ordem de data e depois setando todo mundo como deve ser.

```ts
function getPosts(): PostProps[] {
    const files = fs.readdirSync(path.join("article"));

    return files.map((filename) => {
        let slug = filename.replace(".mdx", "");

        const markdownWithMeta = fs.readFileSync(path.join("article", filename), "utf-8");

        const { data: frontmatter, content: markdownContent } = matter(markdownWithMeta);
        const readingTime = calculateReadingTime(markdownContent);

        // Ensure frontmatter object includes all required properties
        const formattedFrontmatter: Frontmatter = {
            slug, // Ensure slug is included
            title: frontmatter.title || "", // Include title
            image: frontmatter.image || "", // Include image
            authors: frontmatter.authors || [], // Include authors
            tags: frontmatter.tags || [], // Include tags
            date: frontmatter.date || "", // Include date
            excerpt: frontmatter.excerpt || "", // Include excerpt
        };

        return {
            slug,
            frontmatter: formattedFrontmatter,
            readingTime,
            date: frontmatter.date, // Include the date property
            content: markdownContent, // Include the content property
        };
    });
}
```

Agora chegamos a um ponto importante. Porque lembra que configuramos o cabeçalho do nosso XML? Agora é necessário
passar a configuração de todas as publicações para dentro deles, ou seja, dentro do cabeçalho, teremos vários itens
e é esses itens que serão as publicações, então fiz da seguinte maneira.

```ts
async function generateRSS(posts: PostProps[]): Promise<string> {
    const rssItems: PostProps[] = [];

    posts.forEach((post) => {
        feed.addItem({
            title: post.frontmatter.title,
            id: post.slug,
            link: `https://yagasaki.dev/article/${post.slug}`,
            description: post.frontmatter.excerpt,
            date: new Date(post.frontmatter.date),
            author: [
                {
                    name: 'Anderson "Yagasaki" Marlon',
                },
            ],
            contributor: [
                {
                    name: 'Anderson "Yagasaki" Marlon',
                },
            ],
        });

        // Assuming PostProps has similar structure to what is being added to the feed
        rssItems.push({
            slug: post.slug,
            frontmatter: post.frontmatter,
            readingTime: post.readingTime,
            date: post.frontmatter.date,
            content: "", // or whatever content field should be
        });
    });

    return feed.rss2();
}
```

E pronto. O que acontece é que ao acessar `localhost:3000/api/rss`, ele irá me dar um text/xml em tela com todas
as informações corretinhas. Só que atualmente, usando esse código, só consigo ver em modo de desenvolvimento essa tela,
não sei o que anda pegando - como estou fazendo esse artigo na correria - ainda estou analisando o porquê da Vercel,
não conseguir encontrar os artigos em `articles`.

Então, o que estou fazendo atualmente? Estou gerando manualmente um arquivo chamado `article.xml` na raiz do projeto,
usando as configurações que são mostradas no `/api/rss` e informando no Github Actions.

# Github Actions

Agora a parte interessante, a automatização de tudo.

A primeira coisa que você deve fazer no seu README.md é colocar a seguinte coisa.

```md
### 📕 Latest Blog Posts

<!-- BLOG-POST-LIST:START -->
<!-- BLOG-POST-LIST:END -->
```

A variável `BLOG-POST-LIST:START` será responsável por começar a lista, enquanto a variável `BLOG-POST-LIST:END`,
será responsável por finalizar essa listagem, usando como base, o RSS que a gente criou.

Beleza, entendido? Pode salvar seu README.md e vamos ao que interessa.

Crie uma pasta nesse projeto que está o README.md que se chamará `.github/workflows` e dentro dele, teremos o arquivo
`update-blog-posts.yaml`, esse será o código responsável para fazer a automação.

Vamos lembrar do seguinte. Se você estiver usando dev.to, informe o seu perfil que o dev.to irá gerar o RSS automaticamente
para você, enquanto, se você for de blog pessoal, você deve informar o local em que está o arquivo `xml` que a gente gerou.

Como no caso, ainda estou na gambiarra - prometo que vou arrumar isso -, estou apontando diretamente o arquivo no meu projeto do Github.

Caso queira saber depois como arrumei, é só acompanhar os updates no [yagasaki7k/website-yagasaki](https://github.com/Yagasaki7K/website-yagasaki)

```yaml
name: Latest blog post workflow
on:
    schedule: # Run workflow automatically
        - cron: "0 * * * *" # Runs every hour, on the hour
    workflow_dispatch: # Run workflow manually (without waiting for the cron to be called), through the GitHub Actions Workflow page directly
permissions:
    contents: write # To write the generated contents to the readme

jobs:
    update-readme-with-blog:
        name: Update this repo's README with latest blog posts
        runs-on: ubuntu-latest
        steps:
            - name: Checkout
              uses: actions/checkout@v4
            - name: Pull in dev.to posts
              uses: gautamkrishnar/blog-post-workflow@v1
              with:
                  feed_list: "https://dev.to/feed/yagasaki7k" ## Change here to URL xml or your feed of dev.to
```

Você só precisa alterar o `feed_list` e nada mais. A não ser que queira que ele fique verificando em mais tempo,
é só mudar a regra do `cron` e ser feliz.

Após colocado isso, e salvo, você deverá liberar as configurações necessárias do Action no projeto, localizada em `Settings/Actions`.

![image](https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fnv472sk8a660ba0vvpy8.png)

Depois disso, se você quiser que o `cron` faça o trabalho, é só aguardar. Senão, você pode pedir para gerar o `workflow` manualmente,
ao clicar em `Latest blog post workflow` e `Run workflow`

![image](https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F1d925sm78467m19e7hrj.png)

E voilà, seu README estará sempre atualizado com base nas suas publicações, seja no seu site pessoal ou seja em seu dev.to.

Curtiu? Compartilhe esse artigo com seus amigos e qualquer dúvida ou dificuldade, você pode estar me chamando lá no [Twitter/X](https://twitter.com/Yagasaki7K) e eu estarei a disposição para te ajudar!
