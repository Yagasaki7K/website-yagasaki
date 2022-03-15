const Testimonial = () => {
    return (
        <>
            <section className="testimonial section">
                <h2 className="section__title">Testimonial</h2>
                <span className="section__subtitle">My client saying</span>

                <div className="testimonial__container container">
                        {/* Testimonial 3 */}
                        <div className="testimonial__content">
                            <div className="testimonial__data">
                                <div className="testimonial__header">
                                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFnDCcC3SoOIg/profile-displayphoto-shrink_100_100/0/1633303665770?e=1652918400&v=beta&t=byp0zqHrx3fDJPw7pekCksVlXHbuS4hKvZqVfnYj_kk" alt="Rosilene Sakanaka" className="testimonial__img" />

                                    <div>
                                        <h3 className="testimonial__name">
                                            <a href="https://www.linkedin.com/in/rosilene-k-s-69b9b2213/" target="_blank">
                                            Rosilene Sakanaka
                                            </a>
                                        </h3>
                                        <span className="testimonial__client">Client</span>
                                    </div>
                                </div>

                                <div>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                </div>
                            </div>

                            <div className="testimonial__description">
                                <p>
                                Hardworking, creative, competent, dedicated, punctual and responsible.
                                 Excellent professional who always seeks the best options to offer 
                                 to customers without losing the quality of service!
                                </p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="testimonial__content">
                            <div className="testimonial__data">
                                <div className="testimonial__header">
                                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGZ3UjAXOXDyA/profile-displayphoto-shrink_100_100/0/1597270384321?e=1652918400&v=beta&t=km8pPIyPyroNvxO9rbKoueUwQYaG_Y7tsDtj5ZkrcwI" alt="Pedro Henrique" className="testimonial__img" />

                                    <div>
                                        <h3 className="testimonial__name">
                                            <a href="https://www.linkedin.com/in/pedro-henrique-de-santis-783071185/" target="_blank">
                                            Pedro Henrique
                                            </a>
                                        </h3>
                                        <span className="testimonial__client">Client</span>
                                    </div>
                                </div>

                                <div>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                    <i className="uil uil-star testimonial__icon-star"></i>
                                </div>
                            </div>

                            <div className="testimonial__description">
                                <p>
                                Anderson is an excellent professional, very dedicated. <br></br>Always looking to learn, be agile in tasks.
                                </p>
                            </div>
                        </div>

                        
                    </div>
            </section>
        </>
    )
}

export default Testimonial