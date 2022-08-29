import BlogDetails from '../../components/BlogDetails'
import HeaderBlog from '../../components/HeaderBlog'
import FooterBlog from '../../components/FooterBlog'
import Helmet from 'react-helmet'

const Image = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&w=6000'

const Title = 'Front-end, Back-end, Fullstack, o que é e para onde ir?'
const Description = 'Front-end, back-end, fullstack, mobile developer, o que são esses nomes e para onde seguir?'

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
                    <p className="date">05 de Março de 2022 | Imagem: Unsplash |&nbsp;
                    <a href="/">Anderson "Yagasaki" Marlon</a></p>
                    <h1>{Title}</h1>
                    <i>{Description}</i>

                    <p>Front-end, back-end, fullstack, mobile developer, o que são esses nomes e para onde seguir?</p>

                    <p>É uma questão simples, mas para quem está começando vejo que tem muita dificuldade em olhar aonde quer ir e o que fazer.</p>

                    <p>Em uma publicação no Twitter, através da @kalifyinc e do @sseraphini, eu anunciei que iria fazer uma mentoria gratuita e ajudar muitas pessoas a encontrar seu lugar no mundo de desenvolvimento. É uma questão simples, mas muita gente fica indecisa, não tem orientação e muito mais fica perdida em descobrir aonde é o seu devido lugar.</p>

                    <p>Para alguns desenvolvedores que sabe aonde ir, como ir e o que fazer esse questionamento fica até curioso, mas vamos lá, inicialmente, vamos aos principios básicos. O que é front-end, back-end, fullstack e mobile developer.</p>

                    <h3>Front-end</h3>
                    <p>Imaginemos um restaurante, certo? Acho que essa é a melhor analogia que existe para explicar a situação. Temos a área de serviço, aonde os clientes chegam, pedem o cardápio, fazem o seu pedido, temos a área da cozinha e os garçons.</p>

                    <p>Entenda que o front-end referente ao restaurante, ele é a área de serviço, ele é a costumização do ambiente para receber o cliente e deixar tudo atrativo para que o cliente possa usar o ambiente. Ele é o layout interativo, aquele design bonito, aquela página foda, tudo funciona ali, esse é o front-end, o cara responsável por deixar o restaurante mais bonito.</p>

                    <p>Por isso chamamos ele de "client - cliente do inglês".</p>

                    <h3>Back-end</h3>
                    <p>Quando um cliente faz alguma solicitação, ela é passada para o garçom (API) que vai até a cozinha (back-end), faz o que precisa ser feito e depois devolve o que cliente solicitou ao front-end.</p>
                    
                    <p>Então ele é o responsável pela cozinha, tudo que acontece debaixo dos panos, seja para receber informações de um CPF de um cidadão e devolver ao front, seja para pegar informações de um cliente, uma receita de bolo que esteja no banco de dados, o nome de restaurantes e seus pedidos no iFood, tudo isso.</p>

                    <p>Por isso chamamos ele de "server - servidor do inglês", porque ele serve as informações ao front.</p>

                    <h3>Fullstack</h3>
                    <p>Imaginou todo o restaurante né? Isso é lindo de se ver, mas e o desenvolvedor fullstack? Qual é a função dele? Já que temos o restaurante em mãos, pense em uma pessoa só tomando conta de tudo isso? Vai lá, fala com o cliente, pega o pedido, leva pra cozinha, prepara o prato e depois volta, muito trabalhoso para uma pessoa só, não é mesmo? Mas existe. Ele seria meio que o dono da banquinha de cachorro quente, ele conhece ambas as áreas e se der problema ele sabe resolver.</p>

                    <p>Mas também existe aqueles que são mais comparados a um trailer de lanche na chapa, porque é mais fácil entender que a complexidade dele é bem menor, mas não deixa de ser um fullstack, diferente de tentar agir dessa maneira em um restaurante grande e chique.</p>

                    <p>Por isso ele se chama de fullstack, full de completo e stack de pilha. Ele ou ela é uma pilha completa.</p>

                    <h3>Mobile</h3>
                    <p>O desenvolvedor mobile não tem segredo. Diante de todo o cenário, pouquíssimas pessoas possuem um computador em casa, comparado ao nível de pessoas que possuem um celular, é muito mais favorável transformar toda a estrutura em um aplicativo de celular. Principalmente se o  aplicativo, em questões de restaurante, seja um aplicativo de pedidos, cardápio e muito mais, ele é o cara que vai transformar todo aquele restaurante, aquela comunicação em uma versão menor, portátil, mas que consegue atender o cliente da mesma maneira que uma versão de desktop. Um exemplo disso é o iFood.</p>

                    <p>Conseguiram entender as diferenças? A questão é, qual você se identifica mais? Uma pessoa que consegue pegar um projeto de design e transformá-lo em site? Uma pessoa que recebe informações do cliente e entrega para ele uma série de informações, como uma Pokédex? Ou uma pessoa que consegue dominar tudo isso? Ou o melhor, tudo isso e transformar também em uma versão mobile?</p>

                    <p>Escolha o melhor cenário, não faz diferença se você ficar pulando de um para o outro até encontrar o seu ambiente preferido. Porque independente de tudo, você vai saber entender como funciona ambos os lados e isso te transforma em um profissional ainda melhor.</p>

                    <h3>MINHA OPINIÃO É!</h3>
                    <p>Tome cuidado! Porque aquele é muito bom em uma coisa, geralmente não é boa em outra e aquele que tenta ser especialista em ambos, acaba se tornando mediano.</p>

                    <p>Existem sim pessoas que dominam ambas as áreas e são excelentes fullstacks, mas não ache que isso irá funcionar do dia para a noite e muito menos de um mês para o outro. Estude, dedique-se, se esforce e siga um roadmap (um caminho de aprendizagem) para guiar você melhor nessa jornada.</p>

                    <p>E por isso, recomendamos fortemente o <a href="https://roadmap.sh" target="_blank">Roadmap SH</a>.</p>

                    <h3>Mentoria, auxílio, desenvolvimento auto-didata</h3>
                    <p>O mundo de desenvolvimento é grande e nem sempre você conseguirá resolver tudo sozinho, por isso, eu separei para você um lugar incrível. </p>
                    
                    <p>Conheça a nossa comunidade de desenvolvedores no Brasil, conhecida como Aperture Laboratories, é um lugar incrível, cheio de informações, pessoas para te ajudar, dicas, cursos compartilhados pela comunidade, vagas compartilhadas por uma equipe de desenvolvimento,  pessoas do RH e muito evento que acontece em várias vezes no mês e anunciamos tudo lá.</p>

                    <p>Ficou interessado em entrar? Só clicar nos links abaixo e eu te vejo lá! Não deixe de seguir @KalifyInc e @Yagasaki7K no Twitter para receber várias novidades e dicas!</p>

                    <a href="https://discord.gg/jhSepmE7nN" target="_blank">Discord da Comunidade</a>
                </div>
            </BlogDetails>
            <FooterBlog/>
        </>
    )
}

export default Post