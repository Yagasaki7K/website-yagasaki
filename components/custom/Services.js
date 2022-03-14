import { useEffect } from "react";

const Services = () => {

    useEffect(() => {
        const modalViews = document.querySelectorAll('modal-views');
        const modalBtns = document.querySelectorAll('.services__button');
        const modalCloses = document.querySelectorAll('.services__modal-close');

        let modal = function(modalClick) {
            modalViews[modalClick].classList.add('active-modal')
        }

        modalBtns.forEach((modalBtn, index) => {
            modalBtn.addEventListener('click', () => {
                modal(index);
            })
        })

        modalCloses.forEach((modalClose, index) => {
            modalClose.addEventListener('click', () => {
                modalViews.forEach((modalview) => {
                    modalview.classList.remove('active-modal');
                })
            })
        })
    }, []);

    return(
        <>
            <section className="services section" id="services">
                <h2 className="section__title">Services</h2>
                <span className="section__subtitle">What I offer</span>

                <div className="services__container container grid">
                    {/* Services 1 */}
                    <div className="services__content">
                        <div>
                            <i className="uil uil-grid services__icon"></i>
                            <h3 className="services__title">UI/UX <br></br> Design</h3>
                        </div>

                        <span className="button button--flex button--small button--link services__button">
                            View More
                            <i className="uil uil-arrow-right button__icon"></i>
                        </span>

                        <div className="services__modal">
                            <div className="services__modal-content">
                                <h4 className="services__modal-title">UI/UX <br></br> Designer</h4>
                                <i className="uil uil-times services__modal-close"></i>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I develop the user interface</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Web page development</p>
                                    </li>
                                    
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I create UX element interactions</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I position your company brand</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Services 2 */}
                    <div className="services__content">
                        <div>
                            <i className="uil uil-arrow services__icon"></i>
                            <h3 className="services__title">Front-end <br></br> Design</h3>
                        </div>

                        <span className="button button--flex button--small button--link services__button">
                            View More
                            <i className="uil uil-arrow-right button__icon"></i>
                        </span>

                        <div className="services__modal">
                            <div className="services__modal-content">
                                <h4 className="services__modal-title">UI/UX <br></br> Designer</h4>
                                <i className="uil uil-times services__modal-close"></i>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I develop the user interface</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Web page development</p>
                                    </li>
                                    
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I create UX element interactions</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I position your company brand</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Services 3 */}
                    <div className="services__content">
                        <div>
                            <i className="uil uil-pen services__icon"></i>
                            <h3 className="services__title">UI/UX <br></br> Design</h3>
                        </div>

                        <span className="button button--flex button--small button--link services__button">
                            View More
                            <i className="uil uil-arrow-right button__icon"></i>
                        </span>

                        <div className="services__modal">
                            <div className="services__modal-content">
                                <h4 className="services__modal-title">UI/UX <br></br> Designer</h4>
                                <i className="uil uil-times services__modal-close"></i>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I develop the user interface</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Web page development</p>
                                    </li>
                                    
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I create UX element interactions</p>
                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I position your company brand</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services