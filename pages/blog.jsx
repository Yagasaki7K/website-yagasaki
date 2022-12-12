import Link from 'next/link'

import BlogDetails from '/src/components/BlogDetails'
import HeaderBlog from '/src/components/HeaderBlog'
import FooterBlog from '/src/components/FooterBlog'

const Blog = () => {
    return (
        <>
            <BlogDetails>
                <HeaderBlog />

                <Link href="https://medium.com/@yagasaki7k/react-email-de-zeno-rocha-666fd27ed5ce" target="_blank">
                    <div className="home">
                        <h3>06 de Dezembro de 2022</h3>
                        <h2>React Email de Zeno Rocha</h2>
                        <p>Zeno Rocha imaginou aquilo que todo desenvolvedor front-end estava cansado de tentar desenvolver. Ou até mesmo sair das ...</p>
                    </div>
                </Link>

                <Link href="https://medium.com/@yagasaki7k/ilustra%C3%A7%C3%A3o-vs-intelig%C3%AAncia-artificial-85f77cbe527" target="_blank">
                    <div className="home">
                        <h3>02 de Dezembro de 2022</h3>
                        <h2>Ilustração vs Inteligência Artificial</h2>
                        <p>Estava navegando no Twitter e vi, não uma, não duas, mas várias reclamações de artistas sobre “pessoas que pagaram para ter ...</p>
                    </div>
                </Link>

                <Link href="https://medium.com/@yagasaki7k/github-desktop-vs-wsl-774809289376" target="_blank">
                    <div className="home">
                        <h3>18 de Novembro de 2022</h3>
                        <h2>Github Desktop vs WSL</h2>
                        <p>Quando se trata de ter dois ambientes, os problemas são maiores, mas é melhor do que ter um problema maior do que eles que ...</p>
                    </div>
                </Link>

                <Link href="https://medium.com/@yagasaki7k/enviando-um-e-mail-usando-nextjs-ou-reactjs-com-fetch-1715f09d98eb" target="_blank">
                    <div className="home">
                        <h3>07 de Outubro de 2022</h3>
                        <h2>Enviando um e-mail usando NextJS ou ReactJS com Fetch</h2>
                        <p>Essa semana me deparei com um problema, era um problema simples, enviar uma requisição para um endpoint (POST) para enviar ...</p>
                    </div>
                </Link>

                <Link href="https://medium.com/@yagasaki7k/14-h%C3%A1bitos-de-desenvolvedores-altamente-produtivos-fff40618f763" target="_blank">
                    <div className="home">
                        <h3>24 de Agosto de 2022</h3>
                        <h2>14 Hábitos de Desenvolvedores Altamente Produtivos</h2>
                        <p>O livro foi escrito por Zeno Rocha e foi resumido pelo Felipe Suri. Eu estava navegando na internet quando me deparei com esse livro ...</p>
                    </div>
                </Link>

                <Link href="https://medium.com/@yagasaki7k/conhe%C3%A7a-sobre-developer-relations-devrel-6641347df01b" target="_blank">
                    <div className="home">
                        <h3>18 de Abril de 2022</h3>
                        <h2>Conheça sobre Developer Relations (#DevRel)</h2>
                        <p>Graças a uma live na Twitch pelo @NandoSangenetto em entrevista com a @Pachicodes, atual DevRel da Github - e uma das membras ...</p>
                    </div>
                </Link>

                <Link href="https://medium.com/@yagasaki7k/front-end-back-end-fullstack-o-que-%C3%A9-e-para-onde-ir-b8b27bced711" target="_blank">
                    <div className="home">
                        <h3>05 de Março de 2022</h3>
                        <h2>Front-end, Back-end, Fullstack, o que é e para onde ir?</h2>
                        <p>Front-end, back-end, fullstack, mobile developer, o que são esses nomes e para onde seguir?</p>
                    </div>
                </Link>

                <Link href="https://medium.com/@yagasaki7k/minha-experi%C3%AAncia-com-o-desenvolvimento-do-blog-com-nextjs-9473cf92f783" target="_blank">
                    <div className="home">
                        <h3>28 de Agosto de 2020</h3>
                        <h2>Minha experiência com o desenvolvimento do blog com NextJS</h2>
                        <p>Vou contar a minha experiência que tive ao desenvolver esse blog - o blog passado - e isso vai contar até mesmo quando eu tive o contato ...</p>
                    </div>
                </Link>

                <Link href="https://medium.com/@yagasaki7k/como-conseguir-experi%C3%AAncia-sendo-j%C3%BAnior-iniciante-bcb0cce4bbac" target="_blank">
                    <div className="home">
                        <h3>11 de Janeiro de 2020</h3>
                        <h2>Como conseguir experiência sendo Júnior/Iniciante</h2>
                        <p>Na área de desenvolvimento é uma coisa incrível, aonde você olha tem algum desenvolvedor fazendo sua função para alguma empresa ...</p>
                    </div>
                </Link>

                <Link href="https://medium.com/@yagasaki7k/primeiramente-deixe-me-apresentar-eu-sou-anderson-3f448a5b8707" target="_blank">
                    <div className="home">
                        <h3>04 de Janeiro de 2020</h3>
                        <h2>Primeiramente deixe-me apresentar, eu sou Anderson ...</h2>
                        <p>Primeiramente deixa eu me apresentar, eu sou Anderson Marlon e incrementei o alter-ego Yagasaki na minha vida, além de ser um nome ...</p>
                    </div>
                </Link>

                <Link href="https://medium.com/@yagasaki7k/3%C2%BA-lugar-no-hackathon-pela-ambev-em-parceria-com-a-shawee-48a937f9c913" target="_blank">
                    <div className="home">
                        <h3>31 de Julho de 2019</h3>
                        <h2>3º Lugar no Hackathon pela AMBEV em parceria com a Shawee</h2>
                        <p>Nos dias 11, 12 e 13 de dezembro, participei do meu primeiro hackathon como Desenvolvedor Web, o Hackeando a Cervejaria do Futuro ...</p>
                    </div>
                </Link>

                <Link href="https://medium.com/@yagasaki7k/marketing-talks-cps01-foi-marcado-por-clima-informal-e-conte%C3%BAdo-direto-ao-ponto-4be8adcafab4" target="_blank">
                    <div className="home">
                        <h3>31 de Julho de 2019</h3>
                        <h2>Marketing Talks #CPS01 foi marcado por clima informal e conteúdo direto ao ponto</h2>
                        <p>Nesta terça-feira, 30 de julho, aconteceu a primeira edição do “Marketing Talks”, promovido pela La Torre Marketing ... </p>
                    </div>
                </Link>

                <Link href="https://medium.com/@yagasaki7k/aplicativo-que-cria-clone-virtual-do-usu%C3%A1rio-faz-sucesso-no-brasil-91b34c9ea3d6" target="_blank">
                    <div className="home">
                        <h3>17 de Agosto de 2017</h3>
                        <h2>Aplicativo que cria clone virtual do usuário faz sucesso no Brasil</h2>
                        <p>Chatbot aprende tudo sobre a pessoa e torna-se uma espécie de “consciência” ou melhor amigo ...</p>
                    </div>
                </Link>

            </BlogDetails>
            <FooterBlog />
        </>
    )
}

export default Blog