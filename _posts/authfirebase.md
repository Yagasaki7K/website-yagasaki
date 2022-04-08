---
title: 'Att: Fazendo autenticação com Google/Firebase com ReactJS/NextJS'
excerpt: 'Quero ensinar a você como fazer uma autenticação com Google usando a própria documentação da empresa e NextJS ou ReactJS como framework dessa aplicação, além de seguir como um guia para mim, irá seguir de ensino para muitas pessoas ...'
coverImage: '/assets/blog/covers/authfirebase.jpg'
date: '2022-04-08'
author:
  name: Anderson Marlon
  picture: 'https://github.com/Yagasaki7K.png'
ogImage:
  url: '/assets/blog/covers/authfirebase.jpg'

---

Hoje tive a triste tarefa - porém difícil para muitos e quase nunca praticado por mim -, de fazer uma autenticação do Google. O intuíto da vez era para meu projeto com a [Kalify Inc](https://kalify.netlify.com/), o AlôGarapa, mas vou poupar detalhes por enquanto, ao menos até o lançamento ser oficializado.

Mas, aonde eu quero chegar? Quero ensinar a VOCÊ como fazer uma autenticação com Google usando a própria documentação da empresa e NextJS ou ReactJS como framework dessa aplicação, além de seguir como um guia para mim para aplicações futuras, irá servir de ensino para muitas pessoas que estão começando agora e querem uma coisa bonita na aplicação. Vamos aos tópicos:

- [Configuração](#configuração)
- [Instalação](#instalação)
- [Voilà!](#Voilà!)

## Configuração
O primeiro passo é acessar o site de configuração do Google Developers e criar uma aplicação, se você preferir, você pode criar primeiro no site do Firebase e depois acessar as credenciais no Google Cloud Plataform, seguindo a documentação do Google Developers. Mas lembre-se, será uma aplicação para web e caso você esteja no Firebase, você pode pular para a parte de Autenticação e já selecionar o Google como uma das formas de autenticação.

Os links são esses: 
- [https://developers.google.com/](https://developers.google.com/)
- [https://firebase.google.com/](https://firebase.google.com/)

Depois de ter feito sua aplicação web e mencionado que ela será usada em uma aplicação web, vamos pegar a credencial dela (ID do Cliente) na página da aplicação, algo como: <small>707708825727-3pqn2rfcl6n1konc9rq3ssp184b44o68.apps.googleusercontent.com</small> em [Google Cloud Plataform: Credentials](https://console.cloud.google.com/apis/credentials)

Não esqueça de importar no <small>head</small> da página esses dois scripts, vou explicando cada um no seu tempo.

```html
<script src="https://accounts.google.com/gsi/client" async defer></script>
<script src="https://unpkg.com/jwt-decode/build/jwt-decode.js"></script>
```

## Instalação
Criaremos o nosso escopo acima do <small>return</small>, já que é uma função javascript e seguindo a documentação, teremos algo como:

```javascript
function handleCredentialResponse(response) {
        const data = jwt_decode(response.credential)
        setUsername(data)

        if (username != null) {
            if (response.type === 'success') {
                window.location.href('/home')
            } else {
                console.log('Login falhou');
                alert('Login falhou, tente novamente!');
                window.location.reload()
            }
        }
    }

    const ActionLoginGoogle = () => {
        google.accounts.id.initialize({
            client_id: "843679913436-v4ob24vtnbv0ojjdcmpt5o22l7fko6a6.apps.googleusercontent.com",
            callback: handleCredentialResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("ActionLoginGoogle"),
            {   
                theme: "outline", 
                size: "large",
                type:"standard",
                shape:"pill",
                theme:"outline",
                text:"signin_with",
                locale:"pt-BR",
                logo_alignment:"left"
            }
          );
        google.accounts.id.prompt();
    }
    
    useEffect(() => {
        ActionLoginGoogle();
    }, handleCredentialResponse, [])
```

Como nossa aplicação está em React/Nextjs, nós não usaremos <small>window.onload</small>, já que o React/NextJS não aceita bem a particularidade window. Então, vamos chamar essas funções dentro de um useEffect - não esqueça de importar.

Colocamos as duas funções para o lado de fora e simplesmente chamamos ela para ser executada, o que permite que quando o usuário acessar a aplicação, ela será executada uma vez, até a interação do usuário.

Agora, vamos a explicação de cada parte do código.

Inicialmente temos a função <small>handleCredentialResponse</small>, que recebe como parâmetro o response, que é o que o Google retorna depois da autenticação ter sido executada com sucesso.

Temos o <small>ActionLoginGoogle</small> que é a função que será executada quando o usuário acessar a aplicação e dentro dela acontece duas coisas.
Uma é o initialize, que é responsável de verificar o ID da sua aplicação, fazer a comunicação e retornar o response para o callback.

E temos o <small>renderButton</small> que nada mais é que a parte visual do esquema do Google, um simples botão de login.

Temos também o id.prompt, mas não vamos usar ele e muito menos remover ele, já que é uma configuração de OneTap Login e que é necessário uma chave SSL para rodar.

Criaremos um <small>< button id="ActionLoginGoogle" onClick={ActionLoginGoogle}></ button></small>, ele será o cara que vai renderizar o layout disponibilizado pelo Google, lembre-se que ele tem que estar na parte HTML da aplicação, se for na mesma página que está sendo feita a configuração e tudo mais, ele ficará dentro do <small>return()</small>.

Dentro dele temos o id <small>google.accounts.id.renderButton</small> que é a parte visual do botão, que é o que o Google disponibiliza para o usuário e o onClick que é a função que será executada quando o usuário clicar no botão.

Depois disso, chamamos um a um no useEffect e voilà!

## Voilà!

A aplicação já está rodando, funcionando e tudo dentro dos conformes, você só precisará utilizar a parte de callback para redirecionar o usuário para o lugar adequado da resposta da aplicação, geralmente para uma outra página. 

O que eu acabei fazendo dentro do escopo do <small>handleCredentialResponse</small>, eu primeiramente decodifiquei a resposta usando o JWT Decode (uma biblioteca que você deve instalar no Head ou através do NPM/Yarn, mas nesse artigo deixei no head) 

Na linha do <small>const data = jwt_decode(response.credential)</small> nesse caso, eu peguei as informações do usuário que é um objeto. Verifiquei se o objeto não estava vazio e em seguida eu guardei essas informações em um localStore do usuário e redirecionei ele para uma outra janela, existem várias outras maneiras de se armazenar essas informações, inclusive usando um <small>useState</small> e depois você redireciona ele para uma página de acesso que faz essa verificação do usuário e caso for negativo, devolve ele para a página inicial para fazer o login.

Caso você queira informações mais detalhadas de cada função, chamada e etc da configuração, aplicação e desenvolvimento dessa aplicação, você pode estar conferindo através do vídeo (no final desse artigo), existe um tutorial da Jake da Rocketseat explicando detalhe por detalhe em 40 minutos ensinando desde o começo, configuração da aplicação, instalação, configuração do callback, configuração do OneTap Login e muito mais.

E você também pode fazer a configuração da maneira que achar melhor através do [Code Generator do Google](https://developers.google.com/identity/gsi/web/tools/configurator), uma maneira mais dinâmica de estilizar o botão do Google. E claro, caso você queira tenha dificuldades e queira saber como configurar a formatação do CG do Google para o Javascript ao invés do HTML, [nesse link e em seu devido tempo](https://youtu.be/92RkvBuIcts?t=1836) você entenderá bem melhor.

Espero que esse artigo tenha ajudado, qualquer dúvida você pode estar me perguntando na comunidade da Aperture Laboratories no [Discord](https://discord.gg/nyTRNSV) ou através do meu Twitter [@Yagasaki7K](https://twitter.com/Yagasaki7K). Não sou perfeito, eu falho, se tiver alguma coisa que queiram que eu adicione pra melhorar, converse comigo, qualquer coisa que errei também, pode me comunicar e eu vou estar corrigindo. 

Obrigado pela atenção, carinho e o seu tempo investido para tentar aprender mais e mais!

<div align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/92RkvBuIcts" title="YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>