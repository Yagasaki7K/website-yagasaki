import HiAndersonDetails from './HiAndersonDetails';
import { ReactTypical } from '@deadcoder0904/react-typical'

export const HiAnderson = () => {
    return (
        <HiAndersonDetails>
            <div className="homeBackground">
                <div className="container">
                    <h1>Eu sou <ReactTypical
                        steps={[
                        'Anderson Marlon 👨🏽‍💻', 4000,
                        'Yagasaki 🔰', 4000,
                        'Desenvolvedor 🔮', 4000,
                        'Front-end 💻', 4000,
                        'Vencedor Hackathon 🥉', 4000,
                        'Sonserina 🧙🏽', 4000,
                        'Gamer 🎮', 4000,
                    ]}
                        loop={Infinity}
                        wrapper="div"
                    /></h1>
                    <h2>Dev Front-End {"&"} Design Gráfico</h2>

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
            </div>
        </HiAndersonDetails>
    )
}

export default HiAnderson