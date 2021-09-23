import ContactMeDetails from '../components/ContactMeDetails'

export const ContactMe = () => {

    return(
        <ContactMeDetails>
            <div className="leftContent">
                <a href="/">
                    <img src="/assets/logo.png"/>
                </a>
                <h2>ENTRE EM CONTATO</h2>
                <p className="adress">Campinas, São Paulo - Brasil</p>
                <p>+55 19 9 9801-8174</p>
                <p className="email">anderson18.marlon@gmail.com</p>
                <a href="mailto:anderson18.marlon@gmail.com" className="button">ENVIAR UM E-MAIL</a>
                <a href="https://wa.me/+5519998018174?text=Olá!%20Anderson,%20tudo%20bom?%20Gostaria%20de%20fazer%20um%20orçamento%20com%20você." 
                className="button">ENVIAR UM ZAP!</a>
            </div>
            
            <div className="rightContent">
                <div className="content">
                    <div className="socialMedia">
                        <a href="https://www.linkedin.com/in/andersonmarlon/" target="_blank"><i className="fab fa-linkedin"></i></a>
                        <a href="https://twitter.com/Yagasaki7K" target="_blank"><i className="fab fa-twitter"></i></a>
                        <a href="https://instagram.com/Yagasaki.dev" target="_blank"><i className="fab fa-instagram"></i></a>
                        <a href="https://github.com/Yagasaki7K" target="_blank"><i className="fab fa-github"></i></a>
                    </div>

                    <div className="contentCopyright">
                        <p className="copyright">COPYRIGHTS © 2021 — <a href="https://github.com/Yagasaki7K" target="_blank">
                            ANDERSON MARLON // DEV & DESIGN</a> — ALL RIGHTS RESERVED.
                        </p>

                        <p className="copyright2">This site is built and hosted on <a href="https://vercel.com/" target="_blank">Vercel</a>. 
                        The source code is hosted on <a href="https://github.com/Yagasaki7K" target="_blank">Github</a>.</p>
                    </div>
                </div>
            </div>
        </ContactMeDetails>
    )
}

export default ContactMe