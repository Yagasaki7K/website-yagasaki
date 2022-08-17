import BlogDetails from '../../components/BlogDetails'
import HeaderBlog from '../../components/HeaderBlog'
import FooterBlog from '../../components/FooterBlog'
import Helmet from 'react-helmet'

const Image = 'https://images.unsplash.com/photo-1508344928928-7165b67de128?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&w=6000'

const Title = 'Como conseguir experiência sendo Júnior/Iniciante'
const Description = 'Na área de desenvolvimento é uma coisa incrível, aonde você olha tem algum desenvolvedor fazendo sua função para alguma empresa ...'

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
                    <p className="date">11 de Janeiro de 2020 | Imagem: Unsplash |&nbsp;
                    <a href="/">Anderson "Yagasaki" Marlon</a></p>
                    <h1>{Title}</h1>
                    <i>{Description}</i>

                    <p>Na área de desenvolvimento é uma coisa incrível, aonde você olha tem algum desenvolvedor fazendo sua função para alguma empresa, startup ou dando conta com os freelas. Mas por quê isso não acontece com você? Eu entendo perfeitamente seu ponto de vista, seja você, um Júnior que está a muito tempo sem um trabalho, um desenvolvedor que não consegue nem freelas ou um iniciante que acabou de fazer seu portfólio e acredita que o mundo realmente precisa te contratar pelas suas linhas de código. Mas vamos com calma.</p>

                    <p>Quando terminei meu curso de Web Design / Design Gráfico em Dezembro de 2014, não me empolguei logo de primeira em sair desenvolvendo, eu era novo, estava no Ensino Médio e tinha muita coisa pela frente. Em 2015, entrei no Colégio Técnico da Unicamp (Cotuca) e comecei a fazer Informática para Internet, um curso técnico sobre desenvolvimento de software, inicialmente eu pensei que seria inteiramente para desenvolvimento de sistema através da web, mas engano meu. Tive muita dificuldade com o curso, mas aprendi muita coisa referente aos Bits, HTTPs, IPs, como funcionava lógica de programação e como desenvolver em Delphi e Pascal, traduzindo, aprendi o que era o baixo nível.</p>

                    <p>Depois disso tive que interromper o curso para fazer o Alistamento Militar Obrigatório — que de obrigatório não tive nada, já que eu era voluntário — o que foi uma baita experiência e recomendo para todos, isso inclusive melhorou meus aspectos de comunicação, entender como funciona cada procedimento e vários outros quesitos que vou deixar para outra publicação.</p>

                    <p>Depois que eu saí do Exército fiquei dois anos sem emprego, até mudar de cidade — uma baita loucura — e começar a trabalhar em um restaurante a 622km da minha casa. Isso ampliou muito meu entendimento de como funciona a cabeça do cliente, como funciona cada processo de um restaurante, a preparação, o procedimento, a metodologia para criação de um hamburguer, precificação e muito mais.</p>

                    <p>Só então, depois disso, quando voltei para Campinas por conta da pandemia, eu comecei a trabalhar como Desenvolvedor Front-End de verdade. Pois nesse período onde eu fazia várias outras coisas, eu aumentei meu portfólio, melhorei meu Github e fui conhecendo processos e pessoas.</p>

                    <p>Não se sinta mal por não conseguir um emprego nessa área ainda, talvez lhe falte experiência em outros âmbitos, talvez, comunicativo, melhorar em um aspecto da linguagem ou qualquer outra coisa, melhore a si mesmo para que os outros possam receber essa melhoria.</p>

                    <p>Entenda que todo currículo que a gente entrega, inicialmente vai para o RH — que raramente vai entender de fato o que um projeto precisa — quando essa pessoa do Recursos Humanos mostra para o responsável pelo projeto, aí chega os termos técnicos, as avaliações mais acirradas, mas se seu portfólio não chamar atenção nem para o avaliador inicial, como vai chegar até o responsável pelo projeto?</p>

                    <h3>Impressione!</h3>
                    <p>Para impressionar não precisa de muito, você só precisa melhorar seu portfólio, aumentar seus repositórios com conteúdos de qualidade e espalhar experiência. Porque às vezes, a experiência que você está precisando, pode não vir de outro emprego, como eu fiz, mas de um novo projeto que você ainda não desenvolveu, um objetivo que não te prendeu, um obstáculo que não te deixou mais de três horas estudando para entender como funciona e o que precisa ser feito para dar certo.</p>

                    <h3>Tenha confiança</h3>
                    <p>Faça as pessoas acreditarem que você é capaz de fazer ou desenvolver. Caso você realmente não tenha essa habilidade, não tem problema, mostre a elas que você tem capacidade de aprender e vontade de absorver aquilo como experiência na sua vida.</p>

                    <h3>E acima de tudo, mantenha-se atualizado</h3>
                    <p>De nada adianta tentar impressionar, se você está usando metodologias ou ensinamentos antigos e também colocá-los em prática é um bom caminho para se conseguir experiência e entendimento das tecnologias e funcionalidades. Participe de comunidades, grupos no Discord e envolva-se com a comunidade, peça gentilmente para ouvir a história de um Junior, um Pleno ou um Sênior para você ver o que ele passou, o que deixou de passar e o que ele/ela fez para chegar onde chegou, use as histórias como guias, não como a rota definitiva da sua vida.</p>
                </div>
            </BlogDetails>
            <FooterBlog/>
        </>
    )
}

export default Post