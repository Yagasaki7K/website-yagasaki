import BlogDetails from '../../components/BlogDetails'
import HeaderBlog from '../../components/HeaderBlog'
import FooterBlog from '../../components/FooterBlog'
import Helmet from 'react-helmet'

const Image = 'https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&w=6000'

const Title = 'Marketing Talks #CPS01 foi marcado por clima informal e conteúdo direto ao ponto'
const Description = 'Nesta terça-feira, 30 de julho, aconteceu a primeira edição do “Marketing Talks”, promovido pela La Torre Marketing ...'

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
                    <p className="date">31 de Julho de 2019 | Imagem: Unsplash |&nbsp;
                    <a href="/">Anderson "Yagasaki" Marlon</a></p>
                    <h1>{Title}</h1>
                    <i>{Description}</i>

                    <p>Nesta terça-feira, 30 de julho, aconteceu a primeira edição do “Marketing Talks”, promovido pela La Torre Marketing. “Ficamos muito felizes com o engajamento do público, é muito importante que o setor se reúna para rever alguns paradigmas e pensar no futuro”, diz Thiago la Torre, idealizador do evento.</p>

                    <p>O evento contou com 55 inscritos do ecossistema de marketing: empresários da região, proprietários de agências de publicidade, profissionais de marketing e entusiastas. Nesta edição ocorreram cinco talks de 15 minutos, o tema central foi a saturação do marketing digital e a importância da pesquisa e planejamento. “Modelo extremamente dinâmico com talks curtos e focados. Gostei também do clima informal e da acessibilidade aos palestrantes após os talks.”, comentou um dos respondentes da pesquisa de satisfação, realizada de forma anônima.</p>

                    <p>Palestraram no evento: Javier Casademunt, diretor da ESADE no Brasil e consultor do Banco Interamericano de Desenvolvimento; Thiago La Torre, fundador da La Torre Marketing e autor do livro “A Mentalidade de Marketing”; Matheus Schimdt, diretor de criação da La Torre Marketing e co-autor do livro; Veridiana Mellilo, diretora de relacionamento da La Torre Marketing, e Emerson BZ, professor universitário e empreendedor.</p>

                    <p>Foram parceiros do evento: Sociall, Draco Gin e FullBrands.</p>

                    <p>Fonte: <a href="https://www.otempo.com.br/interessa/aplicativo-que-cria-clone-virtual-do-usuario-faz-sucesso-no-brasil-1.1511795" target="_blank">La Torre Marketing</a></p>

                    <center>
                        <img src="https://latorremarketing.com.br/news/wp-content/uploads/2019/08/La-Torre-Marketing-Talks-12-2-1024x684.jpg" width="50%"/>
                        <img src="https://latorremarketing.com.br/news/wp-content/uploads/2019/08/La-Torre-Marketing-Talks-4-1-1024x682.png" width="50%"/>
                        <img src="https://latorremarketing.com.br/news/wp-content/uploads/2019/08/La-Torre-Marketing-Talks-10-1-1024x684.jpg" width="50%"/>
                        <img src="https://latorremarketing.com.br/news/wp-content/uploads/2019/08/La-Torre-Marketing-Talks-8-1-1024x683.jpg" width="50%"/>
                    </center>
                </div>
            </BlogDetails>
            <FooterBlog/>
        </>
    )
}

export default Post