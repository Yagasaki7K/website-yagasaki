import BlogDetails from '../../components/BlogDetails'
import HeaderBlog from '../../components/HeaderBlog'
import FooterBlog from '../../components/FooterBlog'
import Helmet from 'react-helmet'

const Image = 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&w=6000'

const Title = 'Jhenny’s Book - Uma homenagem em app'
const Description = 'O ano era mais ou menos 2018, 2019. Eu tinha uma amiga com câncer terminal, ela gostava muito de animes e desenhos japoneses ...'

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
                    <p className="date">02 de Junho de 2022 | Imagem: Unsplash |&nbsp;
                    <a href="/">Anderson "Yagasaki" Marlon</a></p>
                    <h1>{Title}</h1>
                    <i>{Description}</i>

                    <p>O ano era mais ou menos 2018, 2019. Eu tinha uma amiga com câncer terminal, ela gostava muito de animes e desenhos japoneses, fissurada em jogar e passar horas e horas jogando, sequer eu vi o rosto dela alguma vez, meu primo a conhecia um pouco mais tempo, desde a época em que ela fazia live.</p>

                    <p>Ela parou de sair de casa devido a queda de cabelo e na cidade dela ninguém se importava com politicamente corretamento, pessoas trocavam de calçada quando a viam, pessoas saiam do restaurante “com nojo” de estar no mesmo lugar com alguém que aos poucos se desfazia e lutava para sobreviver.</p>

                    <p>Ela chegou a falecer e eu soube através de amigos e uma publicação no Facebook, havia dias que ela não mandava mensagem e eu não tinha nenhum contato com a família dela e muito menos amigos mais próximos.</p>

                    <p>Antes dela falecer, eu estava empenhado em ser desenvolvedor, ainda está longe de eu chegar aonde eu quero estar e bom, perguntei para ela, se ela quisesse ter um aplicativo com seu nome, ela aceitou e deu a proposta de ser um aplicativo sobre livros, ela não foi muito a fundo, mas eu entendi que compartilhar informações e conteúdo seria uma coisa interessante.</p>

                    <p>Eu aceitei a proposta, mas não dei prosseguimento, somente ano retrasado fiz alguns esboços, não tinha muito conhecimento técnico e criei o Jhenny’s Book, inicialmente seria apenas um avaliador de livros.</p>

                    <center><img src="/src/images/jhennysbook.png" width="80%" alt="Jhennys Book"/></center>

                    <p>Atualmente em 2022, meu primo veio tocar em seu nome novamente, Jhenny, sinto falta dela, ao mesmo tempo surgiu uma avalanche de ideias e bom, desenvolvi o que eu havia prometido para ela, não é um site de sinopse e avaliação de livros, mas achei uma ideia melhor baseado na inicial, um site para fazer download de livros e alcançar quem não tem oportunidade de ter acesso a esse conteúdo. Espero que ela tenha sorrido, aonde quer que esteja.</p>

                    <p>Você pode acessar e conferir o conteúdo em: <a href="https://jhennysbook.vercel.app/" target="_blank">https://jhennysbook.vercel.app/</a></p>

                    <p>Se você quiser que algum título seja adicionado, entre em nosso Discord e solicite: <a href="https://discord.gg/CFhzRE6ztp" target="_blank">https://discord.gg/CFhzRE6ztp</a></p>

                    <p>Novas features serão lançadas futuramente, além de sistema de busca, filtro e toda a organização necessária para tornar o ambiente melhor, moderno e que faça pessoas se conectarem e terem acesso com mais facilidade a livros</p>

                    <p>Obrigado Jhenny, espero que goste!</p>
                </div>
            </BlogDetails>
            <FooterBlog/>
        </>
    )
}

export default Post