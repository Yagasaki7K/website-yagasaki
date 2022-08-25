import BlogDetails from '../../components/BlogDetails'
import HeaderBlog from '../../components/HeaderBlog'
import FooterBlog from '../../components/FooterBlog'
import Helmet from 'react-helmet'

const Image = 'https://images.unsplash.com/photo-1614813231574-843cb1fb940b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

const Title = '14 Hábitos de Desenvolvedores Altamente Produtivos'
const Description = 'O livro foi escrito por Zeno Rocha e foi resumido pelo Felipe Suri.'

const Post = () => {
    return (
        <>
            <BlogDetails>
                <HeaderBlog />

                <Helmet>
                    <title>{Title}</title>
                    <meta name="title" content={Title} />
                    <meta name="description" content={Description} />
                    <meta property="og:title" content={Title} />
                    <meta property="og:description" content={Description} />
                    <meta property="og:image" content={Image} />

                    <meta property="twitter:title" content={Title} />
                    <meta property="twitter:description" content={Description} />
                    <meta property="twitter:image" content={Image} />
                </Helmet>

                <img src={Image} className="header-post" />

                <div className="post">
                    <p className="date">24 de Agosto de 2022 | Imagem: Unsplash |&nbsp;
                        <a href="/">Anderson "Yagasaki" Marlon</a></p>
                    <h1>{Title}</h1>
                    <i>{Description}</i>

                    <p>Eu estava navegando na internet quando me deparei com esse livro. <strong>14 Hábitos de Desenvolvedores Altamente Produtivos</strong>, escrito pelo Zeno Rocha, não cheguei a fazer a aquisição dele, mas encontrei um breve resumo do Felipe Suri e decidi compartilhar alguns desses hábitos, não colocarei os catorze aqui, já que prefiro selecionar os mais importantes para mim, que futuramente servirá como um lembrete e acredito que servirá também para você.</p>

                    <p>O link do livro original em português pela Amazon estará no final desse artigo</p>

                    <hr />
                    <h2>Foco nos fundamentos</h2>
                    <quote><b>"Você pode praticar arremessos oito horas por dia, mas se sua técnica estiver errada, tudo o que você se tornará será muito bom em arremessar da maneira errada. Pratique os fundamentos e o nível de tudo o que você fizer vai subir."</b> - Michael Jordan.</quote>

                    <p>A ideia principal é que, aprender os fundamentos vai te preparar para o futuro. Se você deseja se tornar um ótimo desenvolvedor, é importante entender os principais conceitos, como algorítimos, lógica, redes, acessibilidade, segurança e experiência do usuário. Você não precisa necessariamente deles, para criar a sua primeira aplicação, mas conhecê-los vai te ajudar a criar os próximos dez aplicativos complexos que você criará no futuro.</p>

                    <i>Gaste um tempo pesquisando quais são os conceitos fundamentais em seu campo. Pegue um pedaço de papel e divida-o em duas colunas. No lado esquerdo, liste todo o conhecimento que você já possui. No lado direito, liste todo o conhecimento que você ainda precisa adquirir. Planeje um horário dedicado do seu dia para estudar esses conceitos.</i>

                    <p>Para escolher uma nova linguagem, tenha confiança de que ela é a melhor escolher possível, busque entender a teoria por trás de cada recurso. Para aprender uma linguagem, tente reescrever algum projeto já feito em outra linguagem, pois assim seu foco será todo em entender a linguagem e não em resolver o problema da aplicação.</p>

                    <hr />
                    <h2>Ensinar é igual a aprender</h2>
                    <quote><b>"Poder não vem do conhecimento adquirido, mas do conhecimento compartilhado."</b> - Bill Gates.</quote>

                    <p>Caso você decida ensinar alguém, não será fácil, você vai querer desistir muitas vezes.
                        <br /> Segundo diversos estudos, o medo número um das pessoas é falar em público.</p>

                    <strong>5 atos das apresentações do Zeno Rocha:</strong>

                    <li>Ato 1 - O convite: Tudo começa com um e-mail aleatório. De repente chega uma notificação em seu e-mail, é de um organizador de eventos que está animado com o trabalho que você faz. Ele pede para que você vá no evento que ele está organizando para você compartilhar o seu conhecimento. Você aceita esse convite.</li>

                    <li>Ato 2 - Cai a ficha: Algum tempo depois, você olha o seu calendário e percebe o quão rápido aquele evento está se aproximando. Você entra em pânico quando percebe que ainda nem começou a trabalhar a sua apresentação. Você sabe que precisa preparar algo, porém sempre aparece algo mais importante para fazer.</li>

                    <li>Ato 3 - Surtando: Os dias se passaram e chegou a semana do evento. Você ainda não conseguiu preparar seu conteúdo. Você começa a se arrepender e se perguntas *"Por que eu aceitei esse convite? Que desculpa posso dar? Sou apenas um desenvolvedor, não sou palestrante!"*. Agora, as passagens de avião já foram compradas, a reserva do hotel, feita e a organização do evento já anunciou seu nome e você não pode voltar atrás. Então de alguma forma você encontra tempo e prepara o seu conteúdo.</li>

                    <li>Ato 4 - A hora da verdade: O dia do evento chegou. Você está prestes a apresentar-se para centenas de pessoas. Você está com medo e se sente uma fraude. Mas você não pode recuar, você apenas enfrenta a situação e tenta fazer o seu melhor.</li>

                    <li>Ato 5 - Vamos fazer de novo: A sua apresentação termina. Sua adrenalina está extremamente alta. Algumas pessoas te procuram nos corredores e perguntam sobre algumas ideias que você compartilhou. Você se sente incrível e sente que causou impacto na vida de outras pessoas. Alguns meses depois você se submete a outro evento e tudo acontece de novo.</li>

                    <p>No fim das contas, que tira o proveito da situação de ensinar outras pessoas, é você, que aprendeu mais alguma coisa no meio dessa situação toda.</p>

                    <i>Encontre um evento online e submeta uma apresentação. Abra um software de compartilhante de tela e registre-se fazendo alguma coisa. Crie um blog e compartilhe um artigo. Escolha qualquer tópico que você deseja aprender e tente ensiná-lo.</i>

                    <hr />
                    <h2>Hábitos do dia-a-dia</h2>
                    <quote><b>"Tudo que precisa ser dito já foi dito. Mas, como ninguém estava ouvindo, tudo deve ser dito novamente."</b> - Austin Kleon.</quote>

                    <p>Há uma linha tênue entre intensidade e burnout (esgotamento profissional). Muitos de nós já cruzamos essa linha e é muito difícil voltar.</p>

                    <p>Quando este tipo de comportamento [passar horas extras no escritório] se torna normal, você deve parar e prestar atenção ao que realmente está acontecendo.</p>

                    <p>Quebrar as regras. Fazer o que quiser. Esses conceitos são todos admirados por nós. No fundo, todos nós queremos ser rebeldes. Disciplina. Consistência. Persistência. Esses conceitos não são nada sexy, mas são a chave para jogar jogos infinitos.</p>

                    <p>Pesquisa de James Carse: Jogos finitos vs Jogos infinitos.</p>

                    <p>O jogo finito é definido como tendo jogadores conhecidos, regras fixas e objetivos preestabelecidos.</p>

                    <p>O jogo infinito, por outro lado, é definido como aquele em que existem jogadores conhecidos e desconhecidos, as regras são mutáveis e o objetivo não é vencer, é continuar jogando. Como não há vencedores e perdedores, o que acontece é que os jogadores abandonam o jogo quando ficam sem vontade ou sem recursos para jogar, o que os leva a serem substituídos por outros jogadores.</p>

                    <p>Quando há um jogador finito contra um jogador finito, o sistema é estável. Quando há um jogador infinito contra um jogador infinito, o sistema também é estável. Os problemas começam quando o jogo é de um jogador finito contra um jogador infinito, pois o jogador finito está jogando para ganhar e o jogador infinito está jogando para permanecer no jogo.</p>

                    <p>A programação é um jogo finito. O objetivo é continuar jogando, visto que você não pode vencer na programação, você só pode continuar evoluindo.</p>

                    <p>Programadores que jogam o jogo finito, estão focados em bônus no final do ano.</p>

                    <p>Programadores não devem fazer estimativas com dias perfeitos, pois sempre terá alguma distração durante o seu dia.</p>

                    <p>Não trabalhe durante a noite, isso não te dará clareza para pensar no outro dia.</p>

                    <p>Os melhores programadores, geralmente são mais disciplinados, sempre são organizados.</p>

                    <p>Os bons programadores, investem tempo em se comunicar bem e com clareza.</p>

                    <hr />
                    <h2>Faça o seu futuro eu</h2>
                    <quote><b>"Quando você sentir necessidade de fazer um comentário, primeiro tente reestruturar o código de modo que qualquer comentário se torne supérfluo."</b> - Martin Fowler.</quote>

                    <p>Até os melhores programadores do mundo, já escreveram código ruins no passado.</p>

                    <p>A razão pelo qual escrevemos código ruim ou enviamos commits meia boca está relacionada com o que estamos passando naquele dia em específico.</p>

                    <p>Nós geralmente escrevemos código para o "eu atual". Mas na verdade, precisamos escrever para o "eu do futuro".</p>

                    <p>Da próxima vez que for escrever uma linha de código se pergunte: "O futuro eu, entenderá o que essa linha faz?"</p>

                    <i>Abra um projeto atual em que você esteja trabalhando. Existe alguma refatoração que você possa fazer para facilitar a vida do seu eu do futuro?</i>

                    <p>Quando você faz uma pequena modificação no inicio de um projeto, pode mudar significativamente o fim dele.</p>

                    <p>Busque os seguintes passos:</p>

                    <p>1. Escrever código simples com nomes significativos da variáveis/métodos e classes. Não assuma que outras pessoas entenderão nomes abreviados que não significam muito ou alguns termos que podem mudar com o tempo.</p>

                    <p>2. Ter bons testes automatizados. Isso fornecerá documentação adicional sobre seu código e também ajudará qualquer pessoa que precise trabalhar nele no futuro.</p>

                    <p>3. Use ferramenta de controle de versão como documentação. A medida que o projeto evolui, são feitas alterações e correções de bugs o tempo todo. No futuro, quando se tornar um código legado, ninguém conseguirá entender as decisões e alterações feitas naquele momento, se não estiverem documentadas. O histórico de commits e pull request são uma boa ferramenta para explicar os porquês.</p>

                    <hr />
                    <h2>Disciplina vs Motivação</h2>
                    <quote><b>"Não espere estar motivado todos os dias para chegar lá e fazer as coisas acontecerem. Você não estará. Não conte com a motivação. Conte com a disciplina."</b> - Jocko Willink.</quote>

                    <p>O trabalho normal de um programador não é suficiente para mostrar todo o seu potencial. Geralmente estamos vinculados a restrições tecnológicas da empresa.</p>

                    <p>Você possui tempo suficiente, não deixe de ser uma pessoa melhor em busca de ser um programador melhor, faça ambos ao mesmo tempo.</p>

                    <i>Pense nas habilidades que você acha que poderiam ser melhoradas. Você pode planejar um tempo extra para desenvolvê-las? Até mesmo 10 minutos por dia podem fazer a diferença.</i>

                    <hr />
                    <h2>Domine o lado sombrio da força</h2>
                    <quote><b>"Nomeado deve ser o seu medo, antes de bani-lo, você pode."</b> - Yoda.</quote>

                    <p>Segundo um estudo da Evans Data Corporation (EDC), a partir de 2019, já existiam 26 milhões de desenvolvedores de software em todo o mundo. É muito importante que o densenvolvedor saiba também entender o lado do negócio, isso é uma habilidade rara.</p>

                    <p>Dicas para conhecer o Lado sombrio (o lado dos negócios):</p>

                    <p><b>Economize tempo:</b> Mesmo que você gaste dezenas de horas planejando antes de começar a trabalhar em uma funcionalidade específica, você sempre descobrirá novas implicações e casos extremos que afetam suas implementações. Quanto melhor você entender o negócio, melhor será para resolver esses problemas. Quando você encontra essa exceção á regra, é mais provável que você já saiba a resposta e assim evite ter que agenda uma reunião com o especialista para encontrar uma solução.</p>

                    <p><b>Evite código complexo:</b> Sempre queremos criar o código mais abstrato, flexível, extensível e reutilizável possível. Queremos tanto que ás vezes desenvolvemos uma aplicação excessivamente complexa. Essas implementações nunca serão estendidas ou reutilizadas, gerando um cemitério de códigos. Há certas coisas que nunca serão estendidas, porque esse simplesmente não é o foco da aplicação. Quando você possui experiência de negócio, você está em uma posição muito melhor para determinar qual parte da base de código precisa de mais atenção do que outras.</p>

                    <p><b>Priorize melhor:</b> Se tivermos um prazo para a próxima semana, a implementação será muito diferente da prevista para amanhã. Essa é apenas a realidade do trabalho. Com um melhor conhecimento de negócios, é mais fácil priorizar as micro-decisões que você precisa tomar ao programar. Você pode prever em que parte é mais importante gastar tempo. Você pode se colocar no lugar do usuário e sentir sua dor. Além disso, quando você souber quais são as funcionalidades de negócio mais criticas, provavelmente escreverá um código de alta qualidade nessa área, o que impedirá assim refatoração futura.</p>

                    <p><u>Uma pessoa que sabe programar é poderosa, uma pessoa que sabe programar e sabe como negócios funcionam é imparável.</u></p>

                    <i>Elabora uma lista de termos mais comuns usados no seu ambiente de trabalho. Converse com seus colegas para entender suas áreas. Como é o funil de vendas? Quais nichos de marketing estão sendo visados? Quais são as perguntas mais comuns do suporte ao cliente? Qual é a diferença entre o seu produto e o dos concorrentes?</i>

                    <hr />
                    <h2>Projetos paralelos</h2>
                    <quote><b>"Fracasso e invenção são gêmeos inseparáveis. Para inventar você precisa experimentar, e se você sabe com antecedência que isso vai funcionar, então não é um experimento."</b> - Scott Galloway.</quote>

                    <p>Grandes startups, começaram sendo projetos paralelos. Projetos paralelos podem ser uma tremenda oportunidade para aumentar seu portifólio.</p>

                    <p>Perguntas a se fazer antes de iniciar um projeto em paralelos: Um projeto significa que você vai precisar renunciar o seu tempo pessoal para trabalhar nele, portanto, a coisa mais importante a se perguntar é: "Eu realmente gosto deste assunto?"</p>

                    <p>Se a resposta for "não", há chance de que você não tenha prazer em realizar aquele projeto e deixará ele pela metade.</p>

                    <p>Leva tempo para um projeto paralelo ganhar tração, então a próxima coisa que você deve se perguntar é: "Estou disposto a passar pelo menos cinco anos trabalhando nessa ideia?" Ter uma ideia é uma coisa, ter a capacidade de executá-la é outra, portanto, você deve se perguntar: "Posso executar essa ideia complemente sozinho?"</p>

                    <p>Se a reposta for "não", considere aprender uma nova habilidade ou convidar um amigo para preencher as lacunas.</p>

                    <p>Dizer "sim" para uma ideia significa dizer "não" a várias outras ideias, então pergunte a si mesmo: "Essa ideia em particular é melhor do que outras que eu tive no passado? Existe alguma outra ideia que poderia usar melhor o meu tempo?"</p>

                    <p>Entender para quem você está construindo essa solução é vital. Se você não conhece seu público, é improvável que você entenda as necessidades desse público, então pergunte a si mesmo: "Tenho esse problema pessoalmente ou estou resolvendo para outra pessoa?"</p>

                    <p>E a última pergunta é: "Por que estou animado com essa ideias agora?"</p>

                    <i>Nos próximos dias, preste atenção aos aplicativos que você mais usa. Falta alguma coisa neles? Você seria capaz de criar uma versão melhor disso? Tenha um bloco de notas dedicado para todas as suas ideias de projetos paralelos e leve as notas para todos os lugares com você. Quanto estiver pronta, escolha uma dessas ideias e tente.</i>

                    <hr />
                    <h2>Escute mais, fale menos</h2>
                    <quote><b>"Sábios falam poque têm algo a dizer. Tolos porque têm que dizer alguma coisa."</b> - Platão.</quote>

                    <p>Uma empresa é composta por uma variedade de profissionais. Às vezes, as decisões são tomadas com números e outras com sentimentos. Uma empresa não é um logotipo, não é um prédio, é simplesmente uma aglomeração de pessoas, se você quiser se tornar eficaz lá, precisará se comunicar bem, mesmo se for introvertido.</p>

                    <p>Um equívoco que muitas pessoas comentem é acreditar que precisamos ouvir para responder, enquanto na realidade, precisamos ouvir para entender. Todo mundo que você conhece, está travando uma batalha que você não conhece, seja gentil, sempre.</p>

                    <i>Na próxima reunião, escolha praticar suas habilidades de escuta. Em vez de ser o primeiro a dizer algo, espere até que todos compartilhem suas ideias e seja o último a falar. Isso dará a todos os outros a sensação de serem ouvidos, e você terá o benefício de ouvir as ideias de todos antes de compartilhar suas próprias opiniões.</i>

                    <hr />
                    <h2>Especialista vs. Generalista</h2>
                    <quote><b>"O próxima Bill Gates não criará um sistema operacional. O próximo Larry Page ou Sergey Brin não criará um mecanismo de busca. Se você está copiando essas caras, você não está aprendendo com eles."</b> - Peter Thiel.</quote>

                    <p>Depois de chegar "no rank" Sênior, surge um novo dilema: que caminho você deve seguir?</p>

                    <li>Tornar-se um especialista, alguém ciente de todos os detalhes de um determinado assunto?</li>
                    <li>Tornar-se um generalista, alguém capaz de abordar uma variedade de assuntos diferentes?</li>
                    <p>A resposta dependerá de uma auto-análise. Você precisará entender em qual caminho você mais se encaixa.</p>

                    <i>Examine seu dia de trabalho. Examine sua semana de trabalho. Quais são as partes que mais te deixam animado? Que tipo de trabalho você prefere fazer? Examine sua empresa. Examine sua equipe. No que eles estão com mais dificuldades? Existe alguma coisa com a qual você possa ajudar?</i>

                    <hr />
                    <h2>Controle suas variáveis</h2>
                    <quote><b>"A única coisa sobra a qual você às vezes tem controle é a sua perspectiva. Você não tem controle sobre sua situação. Mas você tem a escolha sobre vê-la."</b> - Chris Pine.</quote>

                    <p>Nós não possuímos controle sobre variáveis que são criadas e alteradas por outras pessoas. Não possuímos controle algum sobre essas variáveis, mas mesmo assim ela nos afeta.</p>

                    <p>Variáveis que você pode controlar:</p>

                    <li>Seus pensamentos.</li>
                    <li>Quem são seus amigos.</li>
                    <li>O que você come e bebe.</li>
                    <li>Como você gasta o seu dinheiro.</li>
                    <li>O que você faz com o seu tempo.</li>
                    <li>Como você trata seu corpo.</li>
                    <li>Quanto você aprecia as coisas que você já tem.</li>

                    <p>Variáveis que você não pode controlar:</p>

                    <li>O clima.</li>
                    <li>A economia.</li>
                    <li>A saúde pública.</li>
                    <li>Como as pessoas tratam você.</li>
                    <li>O que as pessoas pensam de você.</li>
                    <li>O que as pessoas gostam ou não.</li>
                    <li>O que aconteceu no passado.</li>

                    <i>Quais são as variáveis com as quais você está preocupado agora? Quantas delas estão fora do seu alcance?</i>

                    <hr />
                    <h2>Pare de esperar</h2>
                    <quote><b>"Sofremos mais frequentemente na imaginação do que na realidade."</b> - Seneca.</quote>

                    <p>Uma característica presente em quase todos os seres humanos é nunca estarmos satisfeitos com a vida. E não há nada de errado, desejar um futuro melhor é um princípio básico do ser humano.</p>

                    <p>O problema em querer mudar é a palavra "mas":</p>

                    <li>"Este país é horrível, preciso me mudar urgente, mas não sei outro idioma."</li>

                    <li>"Eu tenho uma ideia incrível, preciso colocar em prática, mas eu não tenho tempo."</li>

                    <p>A única coisa que impede você de conseguir algo é você mesmo. Quando você começar a se perguntar como resolver esses problemas (como a falta de tempo por exemplo), verá que por trás de cada desculpa existe uma alternativa.</p>

                    <quote><b>"E agora que o fim está próximo. E então eu encaro a cortina final. Meu amigo, eu vou dizer isso claramente. Vou expor o meu caso, pois dele eu tenho certeza. Eu vivi uma vida cheia. Eu viajei por toda e qualquer estrada. E mais, muito mais que isso, Eu fiz do meu jeito."</b> - Frank Sinatra.</quote>

                    <hr />

                    <p>
                        Agradeço imensamente ao Zeno Rocha por ter escrito esse livro e ao Felipe Suri pelo resumo.
                    </p>
                </div>
            </BlogDetails>
            <FooterBlog />
        </>
    )
}

export default Post