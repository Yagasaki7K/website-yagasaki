const Contact = () => {
    return (
        <>
            <section className="contact section" id="contact">
                <h2 className="section__title">Contact Me</h2>
                <span className="section__subtitle">Get in touch</span>

                <div className="contact__container container grid">
                    <div>
                    <div className="contact__information">
                            <i className="uil uil-phone contact__icon"></i>

                            <div>
                                <h3 className="contact__title">Call me</h3>
                                <span className="contact__subtitle">+55 19 99801-8174</span>
                            </div>
                        </div>

                        <div className="contact__information">
                            <i className="uil uil-envelope contact__icon"></i>
                            <div>
                                <h3 className="contact__title">E-mail</h3>
                                <span className="contact__subtitle">anderson18.marlon@gmail.com</span>
                            </div>
                        </div>

                        <div className="contact__information">
                            <i className="uil uil-map-marker contact__icon"></i>
                            <div>
                                <h3 className="contact__title">Location</h3>
                                <span className="contact__subtitle">Brazil, Campinas - São Paulo</span>
                            </div>
                        </div>
                    </div>

                    <form action="" className="contact__form grid">
                        <div className="contact__inputs grid">
                            <div className="contact__content">
                                <label htmlFor="" className="contact__label">Name</label>
                                <input type="text" className="contact__input" />
                            </div>
                            <div className="contact__content">
                                <label htmlFor="" className="contact__label">Email</label>
                                <input type="email" className="contact__input" />
                            </div>
                            <div className="contact__content">
                                <label htmlFor="" className="contact__label">Subject</label>
                                <input type="text" className="contact__input" />
                            </div>
                            <div className="contact__content">
                                <label htmlFor="" className="contact__label">Message</label>
                                <input type="textarea" name="" id="" cols="0" rows="7" className="contact__input" />
                            </div>

                            <div>
                                <a href="mailto:anderson18.marlon@gmail.com" className="button button--flex">
                                    Send Message <i className="uil uil-message button__icon"></i>
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact