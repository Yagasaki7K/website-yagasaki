---
title: Como usar o Redis para contar acessos em páginas estáticas
excerpt: 'Usando Redis para servir de contador de visitantes em blog/sites'
image: https://safebooru.org//samples/4619/sample_50a876f6c9a277321d808b921c060b94862be53d.jpg?4921012
tags: ['Redis', 'Iniciante']
date: '2024-05-29'
---

![](https://safebooru.org//samples/4619/sample_50a876f6c9a277321d808b921c060b94862be53d.jpg?4921012)

Recentemente me deparei com o seguinte cenário no [Onigiri Hardcore](https://onigirihardcore.com.br/). Como posso mostrar para patrocinadores
ou até mesmo para gestão de evento que o portal de notícias é um possível sucesso e que posso me cadastrar
como imprensa ou algo do tipo? Sem depender de Analytics, sem depender de serviços prontos.

Para quem não sabe, o **Onigiri Hardcore** é um portal de notícias e já participou de diversos eventos em Campinas como
imprensa, fazendo cobertura sobre o evento e tudo mais. Só que evoluímos de lá para cá e começamos a nos tornar independentes.

E como a gente faz essa métrica?

Existem diversas soluções para fazermos isso, como o **Onigiri Hardcore** utiliza de markdown - assim como esse blog - 
para criar as notícias, não temos um banco de dados. Então não faria sentido criar um banco só para isso. Mas,
caso tivesse, era só criar uma collection ou referenciar e fazer o mesmo esquema, mas ao invés de ser uma
publicação, só adicionaria +1 no banco utilizando um campo de visualizações ou algo do tipo.

Podemos utilizar do Github API para fazermos alterações no README, sempre que alguém acessar a página.

Podemos utilizar de outras APIs ou até mesmo APIs próprias para isso.

E uma das alternativas que me chegou é, utilize o Redis.

Eu já trabalhei com ele anteriormente em um projeto da Rocketseat, assim como já vi vários exemplos
utilizando ele para fazer estilo de contador sem ficar sobrecarregando banco de dados e coisas do tipo, e eu
pensei. Porque não?

## Como usar o Redis para contar acessos em páginas estáticas

Inicialmente, se você não tiver um projeto em Next.js, crie um novo.

```bash
npx create-next-app@latest visit-counter
cd visit-counter
```

Por exemplo. 

Instale o Redis nele e instale também - de forma global - a CLI do Redis - no caso, estou usando Ubuntu,
então verifique a [documentação oficial](https://redis.io/docs/latest/get-started/) para entender como funciona a instalação no seu dispositivo.

```bash
npm install redis
```

```bash
sudo apt update
sudo apt install redis-server
sudo systemctl enable redis-server.service
sudo systemctl start redis-server.service
```

CLI instalada, Next configurado, vamos começar. Antes, de tudo, você também pode utilizar o [Redis Insight](https://redis.io/insight/)
para conseguir visualizar através de uma interface gráfica, o seu banco de dados.

Caso você não queira, você pode utilizar o Redis CLI, e executar o seguinte comando:

```bash
redis-cli
```

E em seguida para visualizar as informações em nosso cenário

```bash
get totalVisits
hgetall monthlyVisits
```

Vamos criar a conexão com o Redis em `src/lib/redis.js`

```javascript
import { createClient } from 'redis';

const client = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
});

client.on('error', (err) => {
  console.error('Redis client not connected to the server:', err);
});

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

client.connect();

export default client;
```

Depois, vamos criar uma Rota de API para registrar as visitas em `pages/api/visit.js`

```javascript
import client from '../../src/lib/redis';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Garantir que o cliente está conectado
            if (!client.isOpen) {
                await client.connect();
            }

            const now = new Date();
            const yearMonth = `${now.getFullYear()}-${now.getMonth() + 1}`;

            await client.incr('totalVisits');
            await client.hIncrBy('monthlyVisits', yearMonth, 1);

            console.log('Visit recorded');
            res.status(200).json({ message: 'Visit recorded' });
        } catch (error) {
            console.error('Error recording visit', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

```

E em seguida, vamos criar a rota para obter as contagens de visitas em `pages/api/visits.js`

```javascript
import redisClient from '../../src/lib/redis';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const totalVisits = await redisClient.get('totalVisits');
        const monthlyVisits = await redisClient.hGetAll('monthlyVisits');

        res.status(200).json({ totalVisits, monthlyVisits });
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

```

E após isso, registrar as visitas em `pages/_app.js` para isso rodar independente da página
que for acessada.

```javascript
import React, { useEffect } from 'react';
import '../styles/globals.css'

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {

    useEffect(() => {
        fetch('/api/visit', {
            method: 'POST',
        });
    }, []);

    return (
        <>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
```

Bacana, não é mesmo? Dessa maneira, conseguimos ter as seguintes informações, por enquanto.

- Total de visitas realizadas naquele mês
- Total de visitas realizadas separadas por mês.

Claro que existe alguns problemas ainda e otimizações a serem feitas, mas essa é apenas a ponta
do iceberg para você ter noção do que é o Redis e sua funncionalidade.

Que tipos de situações temos que adicionar ainda? Por exemplo, a cada F5, a atualização sobe
e eu não gostaria que isso acontecesse, pois o usuário pode simplesmente ficar
apertando F5 várias e várias vezes para ganhar visualização e isso não é o ideal.

Assim como também queremos filtrar qual é a página em que o usuário está acessando, seria bacana, não é mesmo?
Saber que em determinada página tem X acessos e na outra Y e assim por diante. São algumas costumizações
a serem feitas.

## E como faço para rodar esse projeto?

Inicialmente, suba o projeto na [Vercel](https://vercel.com/) com a sua conta cadastrada e configure
seu ambiente de desenvolvimento para receber as variáveis de ambiente como:

```bash
REDIS_URL=redis://your_redis_cloud_url
```

Em seguida, crie uma conta no [Redis Cloud](https://app.redislabs.com/#/) e configura sua nova instância gratuita para conseguir ter
acesso e registro no banco em que cadastramos. Pegue a `URL` da instância e grave no seu `.env.local` dentro do `REDIS_URL`.

Essas adaptações ainda irão ser alterada para o cenário do **Onigiri Hardcore**, aonde você pode estar acompanhando através
do [repositório oficial do Github](https://github.com/Yagasaki7K/website-onigirihardcore). Caso queira ajudar, fique à vontade para criar uma pull request e mandar
sua alteração/sugestão.

Se tiver com alguma dúvida ou dificuldade, não hesite em me chamar no [X/Twitter](https://twitter.com/yagasaki7k).

Obrigado por ler até aqui!