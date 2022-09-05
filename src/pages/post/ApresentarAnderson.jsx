import BlogDetails from '../../components/BlogDetails'
import HeaderBlog from '../../components/HeaderBlog'
import FooterBlog from '../../components/FooterBlog'
import Helmet from 'react-helmet'

const Image = 'https://images.unsplash.com/photo-1621693733036-e00dc554e19e?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&w=6000'

const Title = 'Primeiramente deixe-me apresentar, eu sou Anderson ...'
const Description = 'Primeiramente deixa eu me apresentar, eu sou Anderson Marlon e incrementei o alter-ego Yagasaki na minha vida, além de ser um nome ...'

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
                    <p className="date">04 de Janeiro de 2020 | Imagem: Unsplash |&nbsp;
                    <a href="/">Anderson "Yagasaki" Marlon</a></p>
                    <h1>{Title}</h1>
                    <i>{Description}</i>

                    <p>Primeiramente deixa eu me apresentar, eu sou Anderson Marlon e incrementei o alter-ego Yagasaki na minha vida, além de ser um nome bem raro no Japão, fica mais fácil encontrar meu material na web, uma forma de identificador, apelido, o que quiser chamar. Por que Japão? Porque adoro animes, drift e a cultura em si, isso inclui ninjas, samurais e a cultura aesthetic.</p>

                    <p>Bom, como isso tudo surgiu? Em 2005 tive autorização de mexer no meu primeiro computador, não lembro das configurações, mas lembro dele ser um Windows 96 e eu tinha apenas oito anos de idade na época; Ali começou o meu amor pela tecnologia, pelo hardware e software. Mas foi lá em 2012 que a coisa saiu de apenas jogar para começar a desenvolver, eu ainda estava no Ensino Médio e vários cursos foi apresentado na sala por um palestrante, bom, eu nasci sobre uma doutrina de que tudo aquilo ou era enganação ou era um curso bem caro, mas decidi arriscar e me inscrevi para fazer Web Design e Design Gráfico pela MEC Poli, um curso com duração de dezoito meses e felizmente, não era tão caro, o meu comprometimento foi além e dali em diante, minha paixão aumentou ainda mais.</p>

                    <p>Depois que eu terminei o curso comecei a desenvolver meu primeiro blog, chamava-se Uchihanime, ah velhos tempos, mas ele foi deletado com o tempo, eu achava o design dele muito ruim e não era de ficar acumulando experiências pela rede, eis então que senti falta e decidi melhorar em tudo e criei o Onigiri Hardcore, o objetivo dos dois blogs era espalhar conhecimentos de jogos, atualizações, séries e cinema, o Onigiri Hardcore durou bastante tempo e hoje conta com o Design e outros itens do projeto salvos no meu Behance (meu portfólio de Design Gráfico), já que o projeto foi descontinuado.</p>

                    <p>Fui acumulando experiências e com a vida surgiu muitas oportunidades, uma delas, em Julho de 2013, foi ser Operador da Sala de Informática no Ensino Médio, eu basicamente era o Tio do Computador que ajudava as crianças do Ensino Fundamental, isso contava com reparos e administração de redes também.</p>

                    <p>Em 2016 entrei para o Exército e fui responsável pela manutenção de rede, som e rádios da Companhia de Comando da 11ª Brigada de Infantaria Leve em Campinas, depois deram a oportunidade de eu desenvolver um novo brasão para a Companhia usando como base documentações do Exército e alguns traços da Base Administrativa já existente, assim como também pude desenvolver o painel de instruções para segurança do armamento — ainda presente até nos dias de hoje sobre a caixa de disparo da Companhia do Exército.</p>

                    <p>Fiquei cerca de dois anos em experiência autônoma melhorando em Design Gráfico como em Desenvolvedor Front-End, tive oportunidades e concluí vários cursos na área, sendo eles: Ilustração e Design Gráfico para Web pela Bradesco (Maio de 2017), Web Design: Construção de Website com PHP, HTML, CSS e Javascript pela Udemy (Janeiro de 2019), Programação Web para Divulgação Científica pelo Professor Diego Mariano (Janeiro de 2019), Programação para Internet com HTML5 e CSS3, Lógica de Programação Essencial, Introdução ao GitHub e comandos essenciais para trabalhar em equipe e Introdução ao Git e Controles de Versões pela Digital Innovation One Inc. (Fevereiro de 2020) e vai se acumulando até os dias de hoje. Além também de ter participado da 11ª Edição da Semana Omnistack da Rocketseat onde tiver a chance de aprender sobre NodeJS, ReactJS e React Native. Todas essas experiências e certificações estão disponíveis no meu Linkedin.</p>

                    <p>E atualmente estou a desenvolver vários projetos com uma organização, da qual eu fundei, chamada Kalify, lá, sou responsável por desenvolver o Web Essentials, um website com listas de programas essenciais para o computador, principalmente após uma formatação, assim ao invés de ficar pulando de site em site na busca desses programas, você encontrar tudo em um único lugar — com Dark Mode incluso. Outros projetos você poderá encontrar no site do Kalify ou no meu GitHub.</p>

                    <p>Esse sou eu, tem muitas outras coisas que foram desenvolvidas, foram evoluindo e você pode ir acompanhando tudo isso através das minhas redes sociais e incluindo através desse blog</p>
                </div>
            </BlogDetails>
            <FooterBlog/>
        </>
    )
}

export default Post