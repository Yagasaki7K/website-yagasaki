const Services = () => {

    return(

        
        <>
            <section className="services section" id="services">
                <h2 className="section__title">Services</h2>
                <span className="section__subtitle">What I offer</span>

                <div className="services__container container grid">
                    {/* Services */}
                    <div className="services__content">
                        <div>
                            <i className="uil uil-brackets-curly services__icon"></i>
                            <h3 className="services__title">Front-end <br></br> Developer</h3>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="services__content">
                        <div>
                            <i className="uil uil-palette services__icon"></i>
                            <h3 className="services__title">Graphic <br></br> Design</h3>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="services__content">
                        <div>
                            <i className="uil uil-server services__icon"></i>
                            <h3 className="services__title">Hosting {`&`}<br></br> Register .com</h3>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="services__content">
                        <div>
                            <i className="uil uil-comment-question services__icon"></i>
                            <h3 className="services__title">Support {`&`}<br></br> Follow-up</h3>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="services__content">
                        <div>
                            <i className="uil uil-tachometer-fast services__icon"></i>
                            <h3 className="services__title">Fast Reload {`&`}<br></br> Optimization</h3>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Services