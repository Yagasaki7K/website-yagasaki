const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__bg">
                    <div className="footer__container container grid">
                        <div>
                            <h1 className="footer__title">Anderson Marlon</h1>
                            <span className="footer__subtitle">Front-end Developer</span>
                        </div>

                        <ul className="footer__links">
                            <li>
                                <a href="#services" className="footer__link">Services</a>
                            </li>
                            <li>
                                <a href="#portfolio" className="footer__link">Portfolio</a>
                            </li>
                            <li>
                                <a href="#contact" className="footer__link">Contact Me</a>
                            </li>
                        </ul>

                        <div className="footer__socials">
                            <a href="https://instagram.com/yagasaki.dev" target="_blank" className="footer__social">
                                <i className="uil uil-instagram"></i>
                            </a>
                            <a href="https://github.com/Yagasaki7K" target="_blank" className="footer__social">
                                <i className="uil uil-github"></i>
                            </a>
                            <a href="https://twitter.com/Yagasaki7K" target="_blank" className="footer__social">
                                <i className="uil uil-twitter"></i>
                            </a>
                        </div>
                    </div>

                    <p className="footer__copy">&#169; - 2022 - Anderson "Yagasaki" Marlon - All right reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Footer