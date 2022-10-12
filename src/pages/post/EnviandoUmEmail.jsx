import BlogDetails from '../../components/BlogDetails'
import HeaderBlog from '../../components/HeaderBlog'
import FooterBlog from '../../components/FooterBlog'
import Helmet from 'react-helmet'

const Image = 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'

const Title = 'Enviando um e-mail usando NextJS ou ReactJS com Fetch'
const Description = `“Um desafio seguido de muita quebra de cabeça e depois, o alivio. Obrigado The Programmer's Hangout!”`

const FirstCode = `<form action="" onSubmit={(e) => e.preventDefault()}> { ... conteúdo ... } </form>`
const SecondCode = `{(e) => e.preventDefault()}`

const Post = () => {
    return (
        <>
            <BlogDetails>
                <HeaderBlog />

                <Helmet>
                    <title>{Title}</title>
                    <meta name="title" content={Title}/>
                    <meta name="description" content={Description}/>
                    <meta property="og:title" content={Title}/>
                    <meta property="og:description" content={Description}/>
                    <meta property="og:image" content={Image}/>

                    <meta property="twitter:title" content={Title}/>
                    <meta property="twitter:description" content={Description}/>
                    <meta property="twitter:image" content={Image}/>
                </Helmet>

                <img src={Image} className="header-post"/>

                <div className="post">
                    <p className="date">07 de Outubro de 2022 | Imagem: Unsplash |&nbsp;
                    <a href="/">Anderson "Yagasaki" Marlon</a></p>
                    <h1>{Title}</h1>
                    <i>{Description}</i>

                    <p>Essa semana me deparei com um problema, era um problema simples, enviar uma requisição para um endpoint (POST) para enviar o nome do usuário e o e-mail dele, a famosa Newsletter. Em tese não tem muito segredo nesse código, você precisa pegar os valores do <code>input</code> e passar para o corpo da requisição para enfim depois, enviar em um formato JSON (comunicação universal).</p>

                    <p>A questão é que eu estava com um problema tão grande com o NextJS a respeito de enviar a requisição, que toda as vezes que eu clicava em enviar, ele retornava "Failed to fetch", não entendi o porquê, isso porque estava usando <code>console.log(error)</code> e ele apenas informava isso e nada mais.</p>

                    <p>Graças a um usuário do Discord (gosha#6801), me informou que pelo fato de estar enviando uma requisição utilizando <code>form</code>, não dava tempo de enviar a requisição, já que todas as vezes, ele dava refresh na página e cancelava.</p>

                    <p>A resposta para isso? Era utiliza o <code>form action="" onSubmit={SecondCode}</code> e dar um <code>window.location.href="/"</code> quando terminasse a execução.</p>

                    <p>O que o código faz? Ao dar submit, ao invés dele dar refresh, ele apenas enviará e irá dar um "pausebreak", não dando continuidade na questão de refresh, assim ficará a sua mercê do que quer fazer em seguida.</p>

                    <p>Foi de primeira, na lata, certeira. E agora, documento isso para servir de lição não apenas para mim, mas para qualquer um que estiver com dificuldade de utilizar uma requisição em NextJS ou até mesmo em React.</p>

                    <p>Abaixo, foi o código utilizado para enviar uma requisição, caso queira reaproveitar, é só substituir o <code>API_URL</code> pela URL do servidor que você deseja enviar:</p>

                    <p>
                    Corpo do formulário: <br/>
                    <code>
                        {FirstCode}
                    </code>
                    </p>

                    <p>
                    Corpo da requisição:
                    </p>
                    
                    <div className="center">
                        <img src="../../images/fetch.png" alt="Código 1"/>
                    </div>
                    
                    <p>
                        Vale lembrar que os <code>alert</code> são apenas para informar o usuário do que aconteceu. Simplesmente pegar o dado e redirecionar ele sem avisar, faria com que ele ficasse em duvida se a mensagem foi enviada mesmo ou não.
                    </p>

                    <p>
                        Quanto ao <code>JSON.stringify(submit)</code>, pegamos o valor do submit que nada mais que o corpo da requisição, já pegando os valores dos inputs baseado no ID (você pode capturar esses dados e colocar dentro de um <code>useState</code> se for algo mais dinâmico ainda e redirecionar os valores dos States ao invés do <code>getElementByID</code> direto, como eu fiz).
                    </p>

                    <div className="center">
                        <img src="../../images/fetch2.png" alt="Código 2" />
                    </div>

                    <p>
                        Essa foi minha experiência, não estou acostumado, quebrei bastante a cabeça e espero que possa ajudar o meu eu do futuro e também a vocês. Qualquer dúvida estou a disposição no Twitter como <a href="https://twitter.com/Yagasaki7K" target="_blank">@Yagasaki7K</a>.
                    </p>
                </div>
            </BlogDetails>
            <FooterBlog/>
        </>
    )
}

export default Post