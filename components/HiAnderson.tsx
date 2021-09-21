import HiAndersonDetails from './HiAndersonDetails';
import { Parallax } from 'react-parallax';
import Typical from 'react-typical';

export const HiAnderson = () => {
    return (
        <HiAndersonDetails>
            <Parallax bgImage="/assets/home-bg.jpg" bgImageAlt="Anderson Marlon" 
            className="homeBackground" strength={600}>
                <div className="container">
                    <h1>Eu sou <Typical
                        steps={[
                        'Anderson Marlon 👨🏽‍💻', 3000,
                        'Yagasaki 🔰', 3000,
                        'Desenvolvedor 🔮', 3000,
                        'Front-end 💻', 3000,
                        'Vencedor Hackathon 🥉', 3000,
                        'Sonserina 🧙🏽', 3000,
                        'Gamer 🎮', 3000,
                    ]}
                        loop={Infinity}
                        wrapper="p"
                    /></h1>
                    <h2>Dev Front-End & Design Gráfico</h2>

                    <div className="socialMedia">
                        <a href="https://www.linkedin.com/in/andersonmarlon/" target="_blank"><i className="fab fa-linkedin"></i></a>
                        <a href="https://twitter.com/Yagasaki7K" target="_blank"><i className="fab fa-twitter"></i></a>
                        <a href="https://instagram.com/Yagasaki.dev" target="_blank"><i className="fab fa-instagram"></i></a>
                        <a href="https://github.com/Yagasaki7K" target="_blank"><i className="fab fa-github"></i></a>
                    </div>

                    <div className="hero">
                    <a href="#introduce" className="scroll-down">
                        <div className="mouse">
                            <span></span>
                        </div>
                        <div className="arrow">
                            <span></span>
                        </div>
                    </a>
                </div>
                </div>
            </Parallax>
        </HiAndersonDetails>
    )
}

export default HiAnderson