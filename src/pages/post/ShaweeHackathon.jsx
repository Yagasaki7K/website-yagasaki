import BlogDetails from '../../components/BlogDetails'
import HeaderBlog from '../../components/HeaderBlog'
import FooterBlog from '../../components/FooterBlog'
import Helmet from 'react-helmet'

const Image = 'https://images.unsplash.com/photo-1603143967105-ee1d3ff98399?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&w=6000'

const Title = '3º Lugar no Hackathon pela AMBEV em parceria com a Shawee'
const Description = 'Nos dias 11, 12 e 13 de dezembro, participei do meu primeiro hackathon como Desenvolvedor Web, o Hackeando a Cervejaria do Futuro ...'

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

                    <p>Nos dias 11, 12 e 13 de dezembro, participei do meu primeiro hackathon como Desenvolvedor Web, o Hackeando a Cervejaria do Futuro. O Hackathon, organizado pela Ambev em parceria com a Shawee.</p>

                    <p>Tínhamos como desafios: Cervejaria Flexível e Sustentável e Produto Perfeito. Minha equipe acabou entre os finalistas, levando o terceiro lugar do evento.</p>

                    <p>Nosso projeto foi o Hopyeast, onde utilizamos técnicas de Engenharia Genética para obter inovação. Foi uma experiência desafiadora e agregadora de bastantes aprendizados, desenvolver uma solução viável para um problema em um final de semana me proporcionou reflexões sobre meu modo de trabalho, sobre organização e foco. Aprendizados que levarei sempre comigo para os próximos desafios da minha trajetória profissional.</p>

                    <p>Agradeço ao meu time, Laura Camargos Pimenta, Eric Coimbra e Gabriela Cavalcanti sem eles não teríamos chegado ao pódio.</p>

                    <p>Você pode ver o site oficial do <a href="https://hackathon-ambev.netlify.app/" target="_blank">projeto nesse link</a></p>

                    <center>
                        <iframe width="80%" height="480" src="https://www.youtube.com/embed/KOVlXuQGAzY" title="HACKA AMBEV: Grandes soluções para a Cervejaria do Futuro" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </center>
                </div>
            </BlogDetails>
            <FooterBlog/>
        </>
    )
}

export default Post