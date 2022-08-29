import BlogDetails from '../../components/BlogDetails'
import HeaderBlog from '../../components/HeaderBlog'
import FooterBlog from '../../components/FooterBlog'
import Helmet from 'react-helmet'

const Image = 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&w=6000'

const Title = 'Conheça sobre Developer Relations (#DevRel)'
const Description = 'Graças a uma live na Twitch pelo @NandoSangenetto em entrevista com a @Pachicodes, atual DevRel da Github - e uma das membras ...'

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
                    <p className="date">18 de Abril de 2022 | Imagem: Unsplash |&nbsp;
                    <a href="/">Anderson "Yagasaki" Marlon</a></p>
                    <h1>{Title}</h1>
                    <i>{Description}</i>

                    <p>Graças a uma live na Twitch pelo @NandoSangenetto em entrevista com a @Pachicodes, atual DevRel da Github - e uma das membras da Aperture Laboratories - pude ter uma noção e uma visão geral do que era um assunto um tanto como complexo e perdido para mim, mas que foi esclarecedor graças a essa live, o que é um Dev Rel!</p>

                    <p>Vamos por partes, tive referências de vários projetos, livros e artigos para chegar nessa linha de raciocínio que compartilho com vocês e claro, deixo tudo mais fácil de se entender.</p>

                    <h3>O que é um Dev Rel?</h3>

                    <p>Imagine que a empresa quer construir um relacionamento autêntico com a comunidade de desenvolvedores, então a pessoa responsável por cuidar do Twitter dessa empresa tem que ser autêntica, se preocupar com os desenvolvedores e com as tecnologias com as quais a empresa trabalha.</p>

                    <p>Os DevRels, vem de Developer Relations, ou seja, relacionamentos entre desenvolvedores e empresas. Uma das nomeclaturas que muitas empresas usam para se referir a esses relacionamentos é o DevRel, Community Manager, Tech Evangelist, Developer Advocate, enfim, existem vários outros.</p>

                    <p>A responsabilidade desse membro é criar conteúdo para a comunidade, seja através de artigos, palestras, podcasts, vídeos, entre outros. Ou seja, ter sua marca, fazer parte da comunidade.</p>

                    <p>Geralmente esses membros respondem perguntas da comunidade, fazem perguntas para gerar um engajamento maior e ajudar outros desenvolvedores, eles escutam o que as comunidades estão falando, o que pode ser aprimorado, o que pode ser alterado, o que é que está em alta, enfim, são os responsáveis por fazer a ponte entre a empresa e o desenvolvedor nas comunidades. Eles pegam essas informações, e alinham com a empresa para deixar o produto mais amigável ao desenvolvedor - principalmente se for um recurso para esse nicho em específico.</p>

                    <p>Deu para ter um pouco do entendimento da jogada?</p>

                    <h3>Como fazer parte desse meio?</h3>
                    <p>Um dos pontos é, seja uma desenvolvedora ou desenvolvedor que realmente faz parte da comunidade, comece escrevendo artigos. Você pode usar o Medium, Twitter, Dev.To, Notion ou até mesmo seu próprio blog, mas escreva, construa o seu perfil na comunidade e seja reconhecido aos poucos. Você pode escrever sobre o que está aprendendo ou ensinar algo que acabou de aprender ou até mesmo que saiba bem a tempos.</p>

                    <p>Esse é um dos pontos em que nem eu entrei ainda e acho difícil, ainda mais na velocidade em que se consomem conteúdos e as comunidades se conversam, mas, planeje fazer palestras, seja em meetings, conferências, organize com a prefeitura da sua cidade - não se desanime se houver poucas pessoas interessadas - compartilhe conhecimento, seja reconhecido, mostre que através dos seus artigos, você é capaz de lecionar ou guiar pessoas para que sejam desenvolvedoras e que sejam capazes de compartilhar isso com a sociedade.</p>

                    <p>Seja ativo na comunidade, seja através do Discord, Twitter, Twitch ou Dev.to, faça a sua marca, compartilhe conhecimento, saiba se conectar e ajudar outros desenvolvedores, isso gerará uma reputação em cima de seu perfil, um certo peso, em que as pessoas vão atrás de você para conseguir conhecimento e não ficar horas procurando na internet. Então seja ativo.</p>

                    <p>E lembre-se continue escrevendo códigos, você tem sim uma conexão com a comunidade, é muito mais fácil se conectar com um desenvolvedor através desse meio, mas não esqueça que se manter atualizado também é parte fundamental desse trajeto.</p>

                    <p>Infelizmente não existem tantas vagas na área atualmente no Brasil, mas como nós nos espelhamos muito com o que existe lá fora, é uma possibilidade grande para ser um dos pioneiros.</p>

                    <p>Então estude, se esforce, crie seu público e leia, temos a recomendação do livro <a href="https://learn.samjulien.com/getting-started-in-developer-relations" target="_blank">Getting Started in Developer Relations</a> de Sam Julien (em inglês) como uma leitura para começar a se aventurar nessa área e conhecer mais a fundo.</p>

                    <p>E um exemplo disso, sou eu mesmo, sendo Fundador e CEO da <a href="https://discord.gg/jhSepmE7nN" target="_blank">Aperture Laboratories</a>, uma comunidade brasileira de desenvolvimento onde através do Discord e do Twitter faço perguntas, cativo o pessoal, e sempre deixo o ambiente mais amigável para aprender e ensinar outros desenvolvedores.</p>
                </div>
            </BlogDetails>
            <FooterBlog/>
        </>
    )
}

export default Post