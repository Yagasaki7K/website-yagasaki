import BlogHomeDetails from "./BlogHomeDetails"

export const BlogHome = () => {
    return(
    <BlogHomeDetails>
        <h2 className="title">Blog</h2>
         <div className="content">
                <div className="blog-content">
                <a href="/blog/posts/replika"><img src="/assets/blog-post-1.jpg" className="1"/>
                <h2>Aplicativo que cria clone virtual do usuário faz sucesso no Brasil</h2></a>
                <p>E se você pudesse criar um clone virtual seu?
                Parece ficção científica, mas não é. Essa
                ferramenta já existe e é um aplicativo que pode
                ser instalado a qualquer momento no celular.
                Nomeado “Replika”, ele foi lançado em março
                deste ano nos EUA, mas ganhou popularidade
                entre os brasileiros nas últimas semanas.</p>
                </div>
                
                <div className="blog-content">
                <a href="/blog/posts/marketing-talks"><img src="/assets/blog-post-2.jpg" className="1"/>
                <h2>Marketing Talks #CPS01 foi marcado por clima informal e conteúdo direto ao ponto</h2></a>
                <p>Nesta terça-feira, 30 de julho, aconteceu a
                primeira edição do “Marketing Talks”, promovido
                pela La Torre Marketing. “Ficamos muito felizes
                com o engajamento do público, é muito
                importante que o setor se reúna para rever
                alguns paradigmas e pensar no futuro”, diz
                Thiago la Torre, idealizador do evento.</p>
                </div>

                <div className="blog-content">
                <a href="/blog/posts/apresenta"><img src="/assets/blog-post-3.jpg" className="1"/>
                <h2>Primeiramente deixe-me apresentar, eu sou Anderson</h2></a>
                <p>Primeiramente deixa eu me apresentar, eu sou Anderson Marlon 
                e incrementei o alter-ego Yagasaki na minha vida, além de 
                ser um nome bem raro no Japão, fica mais fácil encontrar 
                meu material na web, uma forma de identificador, apelido, 
                o que quiser chamar. Por que Japão? Porque adoro animes, 
                drift e a cultura em si, isso inclui ninjas, samurais e a 
                cultura aesthetic.</p>
                </div>
            </div>
    </BlogHomeDetails>
    )
}

export default BlogHome