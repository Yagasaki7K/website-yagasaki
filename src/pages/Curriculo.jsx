import CurriculumDetails from '../components/CurriculumDetails'

function Curriculum() {

    return (
        <CurriculumDetails>
            <div className="LeftContent">
                <a href="/"><img className="firstImage" src="https://github.com/Yagasaki7k.png" /></a>

                <div className="ContentText">
                    <h4>Anderson Marlon // 葛城 矢ヶ崎</h4>
                    <ul>
                        <li>Desenvolvedor de Sistemas Front-end</li>
                    </ul>

                    <p>Desenvolvedor com experiências em Javascript, React, NextJS, Typescript, Styled Components, SASS, Firebase, Sanity.io, GraphQL (em desenvolvimento) e Docker</p>
                </div>

                <footer>
                    <a href="https://twitter.com/Yagasaki7K" target="_blank">
                        <i className="uil uil-twitter"></i>
                        <p>Twitter</p>
                        <i className="uil uil-external-link-alt"></i>
                    </a>

                    <a href="https://github.com/Yagasaki7K" target="_blank">
                        <i className="uil uil-github"></i>
                        <p>GitHub</p>
                        <i className="uil uil-external-link-alt"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/andersonmarlon/" target="_blank">
                        <i className="uil uil-linkedin"></i>
                        <p>Linkedin</p>
                        <i className="uil uil-external-link-alt"></i>
                    </a>

                </footer>
            </div>

            <div className="RightContent">
                {/* Github Projects */}
                <div className="content">
                <h1 className="title">Afirmação Pessoal</h1>
                    <p className="description">Analista de Desenvolvimento de Software e Desenvolvedor Front-end com experiência na construção de sistemas e aplicações escaláveis nas indústrias de Tecnologia Financeira (Fintech), Sistema de Afiliados, Cervejaria, Saúde, Jornalismo, Sustentabilidade, Vendas / Empreendedorismo, Podcasts e Cenário de Esporte Eletrônico.</p>

                    <a href="/curriculum" className="curriculum">Click here to see English Resume</a>
                    <br/><br/>
                    <a href="/src/docs/AndersonMarlonPTBR.pdf" className="curriculum" target="_blank">Download do Currículo (PDF)</a>
                </div>

                <div className="content">
                <h1 className="title">Experiências Profissionais</h1>
                    <strong>ANALISTA DE DESENVOLVIMENTO DE SISTEMAS</strong> <br/> na Cenário Capital
                    <p>Abril 2021 — Setembro 2021</p>
                    <i>Carta de Recomendação por Alexandre Carvalho Rezende (CEO) pode ser requisitada</i>

                    <p>A Cenário Capital https://cenariocapital.com.br/ é uma companhia brasileira Fundada em 2008 com expertise em marketing digital e foco analítico em diferentes modalidades de negócios digitais. Ajudamos brasileiros a tomarem as melhores decisões, com informações e soluções digitais, através de suas diversas marcas do grupo!</p>

                    <ul>
                        <li>Responsável pelo desenvolvimento do site e e-mails marketings do projeto.</li>
                        <li>Novas features e desenvolvimento da homepage</li>
                        <li>Desenvolvimento do sistema de questionário de análise para o cliente usando NextJS e Typescript</li>
                        <li>Desenvolvimento de notificação de push usando Javascript via Google Developers</li>
                        <li>Scrum / Kabam durante o desenvolvimento e a finalização do projeto</li>
                        <li>Instalação e reparo no Google Analytics / Facebook Ads nos monitoramentos da equipe de marketing</li>
                        <li>DevOps na instalação, building e cache do sistema.</li>
                        <li>Projeto disponível em <a href="https://credits.com.br/" target="_blank">https://credits.com.br/</a></li>
                    </ul>
                </div>

                <div className="content">
                    <hr />
                    <strong>ASSISTENTE DE MARKETING JÚNIOR / DESENVOLVEDOR FRONT-END </strong> <br/>
                    na Marry Perry Paris
                    <p>Julho 2020 – Outubro 2020</p>

                    <p>
                        Fui responsável pelo desenvolvimento de várias landing pages para a empresa, incluindo o site principal, site de modo de uso de cada produto e vários outros seguimentos para a comunicação com o cliente.
                        
                        Fui designado como Desenvolvedor Junior durante a criação de um sistema que durou apenas dois meses até o término do contrato, o projeto seria uma plataforma de afiliados para a empresa que foi descontinuado posteriormente, usando Arquitetura MVC, MySQL e NodeJS – posteriormente o projeto foi alterado para Laravel
                    </p>

                    <ul>
                        <li>Desenvolvimento de landing page de vendas</li>
                        <li>Desenvolvimento do website</li>
                        <li>Landing page de modo de uso de cada produto farmacêutico</li>
                        <li>Desenvolvimento de plataforma de afiliados usando Laravel e MySQL</li>
                        <li>Desenvolvimento da versão aprimorada da plataforma usando NodeJS e React</li>
                    </ul>
                </div>

                <div className="content">
                    <hr />
                    <strong>DESENVOLVIMENTO FRONT-END</strong> <br/>
                    at Shawee no Hackathon AMBEV - Flexible and Sustainable Brewery 
                    <p>Dezembro 2020</p>

                    <ul>
                        <li>Desenvolvimento de landing page</li>
                        <li>Apresentação do projeto na área de cervejaria</li>
                        <li>Solução de substituíção da matéria prima da cerveja para um reator econômico e sustentável</li>
                        <li>Terceiro lugar no evento da AMBEV (Equipe Hopyeast)</li>
                    </ul>
                    <hr />
                </div>

                <div className="content">
                    <h1 className="title">Prestação de Serviços {`&`} Projetos Pessoais</h1>
                    <strong>FUNDADOR {`&`} CTO</strong> <br/> da Kalify Inc
                    <p>Agosto de 2013 — Atualmente</p>

                    <ul>
                        <li>Novos recursos e desenvolvimento de homepage com React, NextJS e Vite</li>
                        <li>Criação de banco de dados com Firebase e Sanity.io</li>
                        <li>Gerador de senhas para usuários com criptografia</li>
                        <li>Criação de interface do usuário seguindo o wireframe do Figma</li>
                        <li>Criando BOTs para Discord</li>
                        <li>Enciclopédia para desenvolvedores iniciantes (4chell)</li>
                        <li>Gerenciamento da comunidade de desenvolvedores / Aperture Laboratories</li>
                        <li>Criando eventos e ajudando a comunidade</li>
                        <li>Desenvolvimento da primeira página de consumo da Newsletter Filipe Deschamps</li>

                        <li>Projeto disponível em <a href="https://kalifyinc.vercel.app/" target="_blank">https://kalifyinc.vercel.app/</a></li>

                        <li>Projeto disponível em <a href="https://findyourpet.vercel.app/" target="_blank">https://findyourpet.vercel.app/</a></li>

                        <li>Projeto disponível em <a href="https://aperturelabs.vercel.app/" target="_blank">https://aperturelabs.vercel.app/</a></li>

                        <li>Projeto disponível em <a href="https://newsletterchamps.vercel.app/" target="_blank">https://newsletterchamps.vercel.app/</a></li>

                        <li>Projeto disponível em <a href="https://webessentials.com.br/" target="_blank">https://webessentials.com.br/</a></li>
                    </ul>
                </div>

                <div className="content">
                    <hr/>
                    <strong>DESENVOLVEDOR FRONT-END</strong> <br/> na 2BEBOT
                    <p>Maio 2022 — Atualmente</p>

                    <ul>
                        <li>Novos recursos e desenvolvimento de portal/dashboard</li>
                        <li>Mudança de recurso e melhoria de UX</li>
                        <li>Barra de pesquisa e filtro de dados provenientes da API</li>
                        <li>Conversão de HTML para PDF</li>
                    </ul>
                </div>

                <div className="content">
                    <hr/>
                    <strong>DESENVOLVEDOR FRONT-END</strong> <br/> na ABREF
                    <p>Março 2020 — Maio 2020</p>

                    <ul>
                        <li>Novos recursos e desenvolvimento de página inicial</li>
                        <li>Instalação e reparo em Google Analytics/Facebook Ads no acompanhamento da equipe de marketing</li>
                        <li>DevOps na instalação, construção e armazenamento do sistema</li>
                    </ul>
                </div>

                <div className="content">
                <hr />
                    <strong>DESENVOLVEDOR FRONT-END</strong> <br/> na YouConnectStart
                    <p>Março 2020 — Maio 2020</p>

                    <ul>
                        <li>Desenvolvimento de landing page para agências</li>
                        <li>Novos recursos e desenvolvimento de página inicial</li>
                        <li>Instalação e reparo em Google Analytics/Facebook Ads no acompanhamento da equipe de marketing</li>
                        <li>DevOps na instalação, construção e armazenamento do sistema</li>
                    </ul>
                    <hr/>
                </div>

                <div className="content">
                    <h1 className="title">Certificados</h1>
                    <p>
                        <strong>Web Moderno com Javascript + Projetos (JS/Typescript/React/Node/ESNext) </strong>
                        pela COD3R - Agosto 2022
                    </p>
                    <p>
                        <strong>Workshop Figma </strong>
                        pela Design Culture - Abril 2022
                    </p>
                    <p>
                        <strong>Introdução e Curso Completo em Ciência da Computação </strong>
                        pela Harvard - Março 2022
                    </p>
                    <p>
                        <strong>Participação, Proud Tech </strong>
                        pela Softplan - Março 2022
                    </p>
                    <p>
                        <strong>Participação, Agile Days </strong>
                        pela Instituto de Gestão e Tecnologia da Informação (IGTI) - November 2021
                    </p>
                    <p>
                        <strong>Participação, Masterclass Github Actions </strong>
                        pela Azure na Prática - Janeiro 2021
                    </p>
                    <p>
                        <strong>Participação, Hackathon </strong>
                        pela Shawee, AMBEV Hackathon - Dezembro 2020
                    </p>
                    <p>
                        <strong>Linux Terminal </strong>
                        pelo Profº Diego Mariano - Outubro 2020
                    </p>
                    <p>
                        <strong>Introdução ao sistema operacional Linux </strong>
                        pelo Profº Diego Mariano - Outubro 2020
                    </p>
                    <p>
                        <strong>Introdução ao banco de dados MySQL </strong>
                        pelo Profº Diego Mariano - Outubro 2020
                    </p>
                    <p>
                        <strong>Criando Páginas da Web Dinâmicas com PHP </strong>
                        pelo Profº Diego Mariano - Outubro 2020
                    </p>
                    <p>
                        <strong>Facebook Blueprint do Basico ao Avançado </strong>
                        pela Faculdade do Marketing Digital - Julho 2020
                    </p>
                    <p>
                        <strong>11ª Edição - Semana Omnistack </strong>
                        pela Rocketseat - Março 2020
                    </p>
                    <p>
                        <strong>Introdução ao Git e Controle de Versão </strong>
                        pela Digital Innovation One - Fevereiro 2020
                    </p>
                    <p>
                        <strong>Introdução ao Github e comandos essenciais </strong>
                        pela Digital Innovation One - Fevereiro 2020
                    </p>
                    <p>
                        <strong>Contribuidor do Arctic Code Vault </strong>
                        pela Github Archive Program - Fevereiro 2020
                    </p>
                    <p>
                        <strong>Lógica de programação essencial </strong>
                        pela Digital Innovation One - Fevereiro 2020
                    </p>
                    <p>
                        <strong>Programação para Internet com HTML5 e CSS3 </strong>
                        pela Digital Innovation One - Fevereiro 2020
                    </p>
                    <p>
                        <strong>Programação Web para Divulgação Científica </strong>
                        pelo Profº Diego Mariano - Janeiro 2020
                    </p>
                    <p>
                        <strong>Web Design com PHP, HTML, CSS e JS </strong>
                        pela Udemy - Janeiro 2020
                    </p>
                    <p>
                        <strong>Ilustração e Design Gráfico para a Web </strong>
                        pela Bradesco - May 2017
                    </p>
                    <p>
                        <strong>Web Design e Design Gráfico </strong>
                        pela MacPoli Cursos - Dezembro 2014
                    </p>
    
                </div>
            </div>
        </CurriculumDetails>
    )
}

export default Curriculum
