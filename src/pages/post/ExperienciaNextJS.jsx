import BlogDetails from '../../components/BlogDetails'
import HeaderBlog from '../../components/HeaderBlog'
import FooterBlog from '../../components/FooterBlog'
import Helmet from 'react-helmet'

const Image = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&w=6000'

const Title = 'Minha experiência com o desenvolvimento do blog com NextJS'
const Description = 'Vou contar a minha experiência que tive ao desenvolver esse blog - o blog passado - e isso vai contar até mesmo quando eu tive o contato pela primeira vez com o NextJS.'

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
                    <p className="date">28 de Agosto de 2020 | Imagem: Unsplash |&nbsp;
                    <a href="/">Anderson "Yagasaki" Marlon</a></p>
                    <h1>{Title}</h1>
                    <i>{Description}</i>

                    <p>Vou contar a minha experiência que tive ao desenvolver <s>esse blog</s> - o blog passado - e isso vai contar até mesmo quando eu tive o contato pela primeira vez com o NextJS.</p>

                    <p>Eu tinha visto um tutorial sobre criar um blog com NextJS e MongoDB como contador de visitas pela Rocketseat. Achei interessante e até usei no primeiro evento da Aperture Laboratories, na edição Mercury, muita gente aprendeu, tirou dúvidas e viu como era simples desenvolver e para mim, foi a maior bagunça mais bem explicada que eu tive, um desastre, pessoalmente falando. Mas como muita gente gostou, não me importei e várias pessoas carregam o selo de ter participado desse evento.</p>

                    <p>Eu até tempos atrás nunca havia mexido com NextJS depois disso, comecei a trabalhar com VueJS pela facilidade e somente esses tempos, em Abril para ser mais exato, eu havia entrado para a Cenário Capital e meu maior medo, se tornou o meu maior desafio. Enfrentar React e NextJS, levei uma dor de cabeça, muito tempo de estresse, frustrações, até finalmente chegar aonde eu estou hoje, cinco meses depois, e eu consegui auxiliar, criar e desenvolver uma aplicação em NextJS, atualmente, super recomendo e não tenho meta nenhuma de trocar de tecnologia tão cedo.</p>

                    <p>A aplicação, um site de comparadores de cartão de crédito pela Cenário Capital, você pode conferir ela em https://cartaodecreditos.com.br/ e foi uma baita experiência, um nível de adaptação e entender código dos outros que não achei que conseguiria a tempo.</p>

                    <p>Hoje, cinco meses depois, coloquei na minha cabeça que eu tinha que montar meu próprio blog, ficar dependendo de sites como Polywork, Medium, Linkedin, Twitter é um negócio muito separado e eu preciso é de foco, um lugar para compartilhar e ficar apenas ali, sendo algo meu e único e dessa vez em código aberto - não seria justo com quem está aprendendo agora.</p>

                    <p>O blog foi desenvolvido com o template do NextJS para blogs, não tem muito segredo, o design dele foi apenas reformulado em questão de cores, não mexi muito na estética e deixei as coisas em português, incluindo a formatação da data, daí para frente só alegria, exceto por uma questão. Replicar a página inicial.</p>

                    <p>A página inicial do site não é o blog, é um antigo portfólio que muitos admiram, falam bem e elogiam, apesar de secretamente ter sido um template, agora as coisas serão diferentes, porquê serei obrigado a remontar ele, fazer o desenvolvimento do zero, agora usando NextJS e Typescript, é um grande desafio que virá pela frente e com muitas dores de cabeça, certamente, mas valerá a pena.</p>

                    <p>É isso, a parte do blog é fácil, montar, reutilizar alguns elementos e aproveitar isso, mas para mim, criar a página inicial foi a mais, e com certeza, vou carregar essas experiências para o resto da vida e você pode conferir esse progresso diretamente no meu GitHub.</p>
                </div>
            </BlogDetails>
            <FooterBlog/>
        </>
    )
}

export default Post