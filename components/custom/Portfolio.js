const Portfolio = () => {

    let swiper = new Swiper('.portfolio-container', {
        cssMode: true,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        mousewheel: true,
        keyboard: true,
        });

    return (
        <>
            <section className="portfolio section" id="portfolio">
                <h2 className="section__title">Portfolio</h2>
                <span className="section__subtitle">Most recent work</span>

                <div className="portfolio__container container swiper-container">
                    <div className="swiper-wrapper">
                        {/* Portfolio 1 */}
                        <div className="portfolio__content grid swiper-slide">
                            <img src="/assets/img/portfolio1.jpg" alt="Portfolio" className="portfolio__img" />

                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Modern Website</h3>
                                <p className="portfolio__description">
                                    Website adaptable to all devices with ui components and animated interactions.
                                </p>

                                <a href="" className="button button--flex button--small portfolio__button">
                                    Demo <i className="uil uil-arrow-right button__icon"></i>
                                </a>
                            </div>
                        </div>

                        {/* Portfolio 2 */}
                        <div className="portfolio__content grid swiper-slide">
                            <img src="/assets/img/portfolio1.jpg" alt="Portfolio" className="portfolio__img" />

                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Modern Website</h3>
                                <p className="portfolio__description">
                                    Website adaptable to all devices with ui components and animated interactions.
                                </p>

                                <a href="" className="button button--flex button--small portfolio__button">
                                    Demo <i className="uil uil-arrow-right button__icon"></i>
                                </a>
                            </div>
                        </div>

                        {/* Portfolio 3 */}
                        <div className="portfolio__content grid swiper-slide">
                            <img src="/assets/img/portfolio1.jpg" alt="Portfolio" className="portfolio__img" />

                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Modern Website</h3>
                                <p className="portfolio__description">
                                    Website adaptable to all devices with ui components and animated interactions.
                                </p>

                                <a href="" className="button button--flex button--small portfolio__button">
                                    Demo <i className="uil uil-arrow-right button__icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-button-next">
                        <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
                    </div>

                    <div className="swiper-button-prev">
                        <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
                    </div>

                    <div className="swiper-pagination"></div>
                </div>
            </section>
            
            <script src="https://unpkg.com/swiper@8.0.7/swiper-bundle.min.js"/>
        </>
    )
}

export default Portfolio