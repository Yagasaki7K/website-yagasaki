import BlogDetails from '/src/components/BlogDetails'
import HeaderBlog from '/src/components/HeaderBlog'
import FooterBlog from '/src/components/FooterBlog'

const Blog = () => {
    return (
        <>
            <BlogDetails>
                <HeaderBlog />

                <a href="/posts/enviando-um-email-usando-nextjs-ou-reactjs-com-fetch">
                    <div className="home">
                        <h3>07 de Outubro de 2022</h3>
                        <h2>Enviando um e-mail usando NextJS ou ReactJS com Fetch</h2>
                        <p>Essa semana me deparei com um problema, era um problema simples, enviar uma requisição para um endpoint (POST) para enviar ...</p>
                    </div>
                </a>
                <a href="/posts/habitos-desenvolvedores-produtivos">
                    <div className="home">
                        <h3>24 de Agosto de 2022</h3>
                        <h2>14 Hábitos de Desenvolvedores Altamente Produtivos</h2>
                        <p>O livro foi escrito por Zeno Rocha e foi resumido pelo Felipe Suri. Eu estava navegando na internet quando me deparei com esse livro ...</p>
                    </div>
                </a>
                <a href="/posts/jhennys-book-uma-homenagem-em-app">
                    <div className="home">
                        <h3>02 de Junho de 2022</h3>
                        <h2>Jhenny’s Book - Uma homenagem em app</h2>
                        <p>O ano era mais ou menos 2018, 2019. Eu tinha uma amiga com câncer terminal, ela gostava muito de animes e desenhos japoneses ...</p>
                    </div>
                </a>
                <a href="/posts/conheca-sobre-developer-relations">
                    <div className="home">
                        <h3>18 de Abril de 2022</h3>
                        <h2>Conheça sobre Developer Relations (#DevRel)</h2>
                        <p>Graças a uma live na Twitch pelo @NandoSangenetto em entrevista com a @Pachicodes, atual DevRel da Github - e uma das membras ...</p>
                    </div>
                </a>
                <a href="/posts/front-end-back-end-full-stack-o-que-e-e-para-onde-ir">
                    <div className="home">
                        <h3>05 de Março de 2022</h3>
                        <h2>Front-end, Back-end, Fullstack, o que é e para onde ir?</h2>
                        <p>Front-end, back-end, fullstack, mobile developer, o que são esses nomes e para onde seguir?</p>
                    </div>
                </a>
                <a href="/posts/minha-experiencia-com-o-desenvolvimento-do-blog-com-nextjs">
                    <div className="home">
                        <h3>28 de Agosto de 2020</h3>
                        <h2>Minha experiência com o desenvolvimento do blog com NextJS</h2>
                        <p>Vou contar a minha experiência que tive ao desenvolver esse blog - o blog passado - e isso vai contar até mesmo quando eu tive o contato ...</p>
                    </div>
                </a>
                <a href="/posts/como-conseguir-experiencia-sendo-junior-iniciante">
                    <div className="home">
                        <h3>11 de Janeiro de 2020</h3>
                        <h2>Como conseguir experiência sendo Júnior/Iniciante</h2>
                        <p>Na área de desenvolvimento é uma coisa incrível, aonde você olha tem algum desenvolvedor fazendo sua função para alguma empresa ...</p>
                    </div>
                </a>
                <a href="/posts/primeiramente-deixe-me-apresentar-eu-sou-anderson">
                    <div className="home">
                        <h3>04 de Janeiro de 2020</h3>
                        <h2>Primeiramente deixe-me apresentar, eu sou Anderson ...</h2>
                        <p>Primeiramente deixa eu me apresentar, eu sou Anderson Marlon e incrementei o alter-ego Yagasaki na minha vida, além de ser um nome ...</p>
                    </div>
                </a>
                <a href="/posts/3-lugar-no-hackathon-pela-ambev-em-parceria-com-a-shawee">
                    <div className="home">
                        <h3>31 de Julho de 2019</h3>
                        <h2>3º Lugar no Hackathon pela AMBEV em parceria com a Shawee</h2>
                        <p>Nos dias 11, 12 e 13 de dezembro, participei do meu primeiro hackathon como Desenvolvedor Web, o Hackeando a Cervejaria do Futuro ...</p>
                    </div>
                </a>
                <a href="/posts/marketing-talks-cps01-foi-marcado-por-clima-informal-e-conteudo-direto-ao-ponto">
                    <div className="home">
                        <h3>31 de Julho de 2019</h3>
                        <h2>Marketing Talks #CPS01 foi marcado por clima informal e conteúdo direto ao ponto</h2>
                        <p>Nesta terça-feira, 30 de julho, aconteceu a primeira edição do “Marketing Talks”, promovido pela La Torre Marketing ... </p>
                    </div>
                </a>
                <a href="/posts/aplicativo-que-cria-clone-virtual-do-usuario-faz-sucesso-no-brasil">
                    <div className="home">
                        <h3>17 de Agosto de 2017</h3>
                        <h2>Aplicativo que cria clone virtual do usuário faz sucesso no Brasil</h2>
                        <p>Chatbot aprende tudo sobre a pessoa e torna-se uma espécie de “consciência” ou melhor amigo ...</p>
                    </div>
                </a>
            </BlogDetails>
            <FooterBlog/>
        </>
    )
}

export default Blog