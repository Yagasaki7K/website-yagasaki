import IntroduceMeDetails from "./IntroduceMeDetails"

export const IntroduceMe = () => {
    return(
        <IntroduceMeDetails>
            <div className="introduce-me">
                <img src="/assets/me.jpg"/>
                <div className="resize">
                    <h1 id="introduce">Anderson "Yagasaki" Marlon</h1>
                    <p>
                        Nascido e residente da cidade de Campinas, interior de São <br/>
                        Paulo, <a href="https://yagasaki7k.github.io/website-happybirthday/" target="_blank">24 anos</a>, 
                        ex-Soldado da Companhia de Comando da 11ª <br/>
                        Brigada de Infantaria Leve (2016).
                    </p>

                    <p>
                        Atuando na área de Desenvolvimento Web e Design Gráfico <br/>
                        desde Dezembro de 2014 através da MacPoli Cursos.
                    </p>

                    <p>
                        Classificado em <a href="https://www.linkedin.com/feed/update/urn:li:activity:6746850035104833536/" target="_blank">3º Lugar no Hackathon </a>
                        da Ambev organizado pela 
                        Shawee {`->`} Cervejaria Flexível e Sustentável
                    </p>

                    <button>Currículo (PDF)</button> | <button>Projetos | Github</button>
                </div>
            </div>
        </IntroduceMeDetails>
    )
}

export default IntroduceMe