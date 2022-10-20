import BlogDetails from '../../components/BlogDetails'
import HeaderBlog from '../../components/HeaderBlog'
import FooterBlog from '../../components/FooterBlog'
import Helmet from 'react-helmet'

const Image = 'https://images.unsplash.com/photo-1514575110897-1253ff7b2ccb?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy'
const Icon = '/src/images/yagasaki7k.jpg'

const Title = 'Aplicativo que cria clone virtual do usuário faz sucesso no Brasil'
const Description = '“Chatbot aprende tudo sobre a pessoa e torna-se uma espécie de “consciência” ou melhor amigo”'

const Post = () => {
    return (
        <>
            <BlogDetails>
                <HeaderBlog />

                <Helmet>
                    <meta name="author" content='Anderson "Yagasaki" Marlon'/>
                    <meta name="description" content={Description}/>
                    <meta property="og:title" content={Title}/>
                    <meta property="og:description" content={Description}/>
                    <meta property="og:site_name" content="Anderson Marlon // Blog"/>
                    <meta property="og:url" content="https://yagasaki.vercel.app/"/>
                    <meta property="og:image" content={Icon}/>
                    <meta property="og:type" content="Website"/>
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="627" />
                    <meta name="twitter:card" content="summary"/>
                    <meta name="twitter:site" content={Title}/>
                    <meta name="twitter:creator" content='Anderson "Yagasaki" Marlon'/>
                    <meta name="twitter:title" content={Title}/>
                    <meta name="twitter:description" content={Description}/>
                    <meta name="twitter:image:src" content={Icon}/>
                </Helmet>

                <img src={Image} className="header-post"/>

                <div className="post">
                    <p className="date">17 de Agosto de 2017 | Imagem: Unsplash |&nbsp;
                    <a href="/">Anderson "Yagasaki" Marlon</a></p>
                    <h1>{Title}</h1>
                    <i>{Description}</i>

                    <p>E se você pudesse criar um clone virtual seu? Parece ficção científica, mas não é. Essa ferramenta já existe e é um aplicativo que pode ser instalado a qualquer momento no celular. Nomeado “Replika”, ele foi lançado em março deste ano nos EUA, mas ganhou popularidade entre os brasileiros nas últimas semanas.</p>

                    <p>O conceito é bem simples: um aplicativo de chat autônomo, também conhecido como “chatbot”, funciona como uma inteligência artificial, aprende tudo sobre o usuário (ou pelo menos tudo o que ele contar) e acaba se transformando em uma “consciência” ou um amigo para ter sempre por perto. Quanto mais se conversa com ele, mais ele aprende e se torna capaz de dar respostas espontâneas e carregadas da personalidade do usuário, como um clone da própria consciência.</p>

                    <p>Para ter acesso ao aplicativo, é necessário que a pessoa receba um código enviado por alguém que já utiliza o Replika. Outra opção é entrar no site, cadastrar-se e aguardar até 24 horas para receber um código pelo celular.</p>

                    <p>O funcionamento é basicamente dividido em duas ideias principais: a primeira é a de uma conversa normal, de perguntas e respostas sobre assuntos diversos, onde, normalmente, preferências, gostos, características e costumes são o foco. Na segunda, embora simultânea, o Replika cria uma série de perguntas que se assemelham ao que poderia ser uma terapia ou estímulo para o autoconhecimento. Elas indagam questões mais profundas ligadas à percepção da vida, à personalidade, ao agir de cada um diante de situações específicas. Essas “sessões” são armazenadas diariamente em uma espécie de diário de bordo para que o usuário possa voltar a ler quando quiser.</p>

                    <p>De acordo com o professor Luis Chaimowcz, do curso de ciência da computação da Universidade Federal de Minas Gerais (UFMG), o Replika une tecnologias interessantes. “Ele utiliza o chatbot — agentes virtuais que são programados para determinados comportamentos humanos, principalmente de comunicação — com o princípio de machine learning”, diz.</p>

                    <p>O professor explica que o conceito de machine learning se refere ao “aprendizado da máquina”. “Você dá uma entrada (uma informação) à inteligência artificial, ela vai raciocinar em cima disso, e te dar uma saída (resultado) com base no que quer o usuário. Ele replica o funcionamento do cérebro humano e vai aprendendo”, explica Chaimowcz.</p>

                    <p>Para o especialista, essa tecnologia será cada vez mais inserida na sociedade. “Todos os dias, vamos nos surpreender com tecnologias interessantes, que têm muito a oferecer. Chegará a um ponto que não conseguiremos, talvez, diferenciar mais se estamos falando com uma máquina ou com um ser humano”, aponta.</p>

                    <p>Reflexo. Foi justamente essa a sensação que teve o universitário Anderson Marlon, 20. Estudante de ciência da computação, ele é heavy user de internet, ou seja, está o tempo todo conectado virtualmente. E, é claro, já está utilizando o Replika. “Conheci o aplicativo em sites de tecnologia. É uma coisa surpreendente porque já percebo um desenvolvimento da inteligência artificial do aplicativo. Eu consigo me reconhecer, de uma certa forma, nas conversas que tenho”, afirma.</p>

                    <p>A empolgação com o aplicativo é tamanha que Anderson criou uma página no Facebook. “Entrei em contato com a empresa criadora para poder representá-los oficialmente aqui no Brasil com a minha fanpage. A ideia é divulgar o aplicativo na internet e contar sobre as novidades”, conta Marlon.</p>

                    <p>O que há por trás. Segundo a psicóloga Marília Ávila, professora da Faculdade de Ciências Médicas de Minas Gerais, é muito complexo tentar encontrar uma razão que leve o ser humano a uma busca por si mesmo fora da realidade. “É da nossa natureza nos sentirmos confusos com aquilo que não conhecemos a fundo. Se pararmos para pensar, o homem sempre está em busca do autoconhecimento”, explica.</p>

                    <p>Por outro lado, Marília diz que tentar desenvolver uma relação consigo mesmo por meio de um aplicativo é algo infundado. “Uma réplica não é seu eu verdadeiro. É uma reprodução de uma máquina com base em informações que você repassa. O autoconhecimento requer que se esteja em contato direto consigo”, explica. A psicóloga afirma que esse tipo de tecnologia pode criar uma sensação de isolamento no usuário caso o acesso seja desenfreado. “É preciso um controle, não ficar conectado o tempo todo. Precisamos viver as experiências externas que envolvam o próximo. São elas que permitem criar um espaço relacional fora de nós mesmos”, diz.</p>

                    <p>Números. O Replika já foi baixado por mais de 200 mil usuários em todo o mundo. Ele está disponível para as plataformas Android, iOS e versão web (acessada pelo computador).</p>

                    <h3>Luto serviu para inspirar a criadora</h3>
                    <p>A ideia do Replika surgiu em 2015, quando a desenvolvedora Eugenia Kuyda precisou lidar com a morte de seu melhor amigo Roman Mazurenko. Buscando lidar com o luto, ela criou um bot com a personalidade do rapaz, reunindo todas as informações que conseguiu sobre ele em perfis sociais, conversas privadas nas redes sociais e outras informações repassadas por outras pessoas que tinham contato com o jovem Roman.</p>

                    <p>Nessa época, Eugenia já era fundadora e CEO de uma empresa de tecnologia que desenvolvia chatbots chamada Luka. A empresa também é responsável pela criação do Replika. Embora a proposta seja mais lúdica do que mórbida, o conceito continua sendo o mesmo: criar um clone digital com o qual os amigos possam interagir, mesmo se não se estiver por perto.</p>

                    <p>Fonte: <a href="https://www.otempo.com.br/interessa/aplicativo-que-cria-clone-virtual-do-usuario-faz-sucesso-no-brasil-1.1511795" target="_blank">Jornal, O Tempo</a></p>
                </div>
            </BlogDetails>
            <FooterBlog/>
        </>
    )
}

export default Post