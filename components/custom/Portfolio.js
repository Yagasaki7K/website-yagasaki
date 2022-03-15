import { useEffect } from "react";

const Portfolio = () => {

    return (
        <>
            <section className="portfolio section" id="portfolio">
                <h2 className="section__title">Portfolio</h2>
                <span className="section__subtitle">Most recent work</span>

                <div className="portfolio__container container">
                        {/* Portfolio */}
                        <div className="portfolio__content grid">
                            <img src="/assets/portfolio1.png" alt="Portfolio" className="portfolio__img" />

                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Web Essentials</h3>
                                <p className="portfolio__description">
                                    A website to find essential tools and software for your computer
                                </p>

                                <a href="https://webessentials.com.br/" target="_blank" className="button button--flex button--small portfolio__button">
                                    Go to website <i className="uil uil-arrow-right button__icon"></i>
                                </a>
                            </div>
                        </div>

                        {/* Portfolio */}
                        <div className="portfolio__content grid">
                            <img src="/assets/portfolio2.png" alt="Portfolio" className="portfolio__img" />

                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Aperture Laboratories</h3>
                                <p className="portfolio__description">
                                    Brazilian programming and development community website
                                </p>

                                <a href="https://aperturelabs.vercel.app/" target="_blank" className="button button--flex button--small portfolio__button">
                                    Go to website <i className="uil uil-arrow-right button__icon"></i>
                                </a>
                            </div>
                        </div>

                        {/* Portfolio */}
                        <div className="portfolio__content grid">
                            <img src="/assets/portfolio3.png" alt="Portfolio" className="portfolio__img" />

                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Be The Hero</h3>
                                <p className="portfolio__description">
                                    A experience for OmniStack 11.0 - A Be The Hero Project
                                </p>

                                <a href="week-omnistack-v11.vercel.app" target="_blank" className="button button--flex button--small portfolio__button">
                                Go to website <i className="uil uil-arrow-right button__icon"></i>
                                </a>
                            </div>
                        </div>

                        {/* Portfolio */}
                        <div className="portfolio__content grid">
                            <img src="/assets/portfolio4.png" alt="Portfolio" className="portfolio__img" />

                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Cartões de Créditos</h3>
                                <p className="portfolio__description">
                                    Website of the national and international credit card center affiliated with Cenário
                                </p>

                                <a href="https://creditis.com.br/" target="_blank" className="button button--flex button--small portfolio__button">
                                    Go to website <i className="uil uil-arrow-right button__icon"></i>
                                </a>
                            </div>
                        </div>

                        {/* Portfolio */}
                        <div className="portfolio__content grid">
                            <img src="/assets/portfolio5.png" alt="Portfolio" className="portfolio__img" />

                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Hackathon Ambev Project</h3>
                                <p className="portfolio__description">
                                    Ìntroduction through website for the Ambev Hackathon
                                </p>

                                <a href="https://hackathon-ambev.netlify.app/" target="_blank" className="button button--flex button--small portfolio__button">
                                    Go to website <i className="uil uil-arrow-right button__icon"></i>
                                </a>
                            </div>
                        </div>

                    </div>
            </section>
        </>
    )
}

export default Portfolio