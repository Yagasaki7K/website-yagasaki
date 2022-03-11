const About = () => {
    return (
        <>
            <section className="about section" id="about">
                <h2 className="section__title">About Me</h2>  
                <span className="section__subtitle">My introduction</span>  

                <div className="about__container container grid">
                    <img src="/assets/about.jpg" alt="About" className="about__img" />    

                    <div className="about__data">
                        <p className="about__description">
                        Web Developer with extensive knowledge and years of experience,
                        working in web technologies and UI/UX design, delivering fast
                        with quality work.    
                        </p>

                        <div className="about__info">
                            <div>
                                <span className="about__info-title">05+</span>
                                <span className="about__info-name">Years <br></br> experience</span>
                            </div>

                            <div>
                                <span className="about__info-title">50+</span>
                                <span className="about__info-name">Completed <br></br> projects</span>
                            </div>

                            <div>
                                <span className="about__info-title">+05</span>
                                <span className="about__info-name">Companies <br></br> worked</span>
                            </div>
                        </div>

                        <div className="about__buttons">
                            <a download="" href="/assets/pdf/AndersonENUS.pdf" className="button button--flex">
                                Download CV<i className="uil uil-download-alt button__icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About