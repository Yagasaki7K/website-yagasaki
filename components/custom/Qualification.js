const Qualification = () => {

    const tabs = document.querySelectorAll('[data-target]');
    const tabContents = document.querySelectorAll('[data-content]');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target);

            tabContents.forEach(tabContent => {
                tabContent.classList.remove('qualification__active')
            })

            target.classList.add('qualification__active');

            tab.forEach(tab => {
                tab.classList.remove('qualification__active')
            })

            tab.classList.add('qualification__active')
        })
    })

    return(
        <>
            <section className="qualification section">
                <h2 className="section__title">Qualification</h2>
                <span className="section__subtitle">My personal journey</span>

                <div className="qualification__container container">
                    <div className="qualification__tabs">
                        <div className="qualification__button button--flex qualification__active" data-target='#education'>
                            <i className="uil uil-graduation-cap qualification__icon"></i>
                            Education
                        </div>

                        <div className="qualification__button button--flex" data-target='#work'>
                            <i className="uil uil-briefcase-alt qualification__icon"></i>
                            Work
                        </div>
                    </div>

                    <div className="qualification__sections">
                        {/* Content Education */}

                        <div className="qualification__content qualification__active" data-content id="education">
                            {/* Qualification 1 */}
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Computer Enginner</h3>
                                    <span className="qualification__subtitle">Peru - University</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i>
                                        2009 - 2014
                                    </div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                </div>
                            </div>

                            {/* Qualification 2 */}
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Computer Enginner</h3>
                                    <span className="qualification__subtitle">Peru - University</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i>
                                        2009 - 2014
                                    </div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                </div>
                            </div>

                            {/* Qualification 3 */}
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Computer Enginner</h3>
                                    <span className="qualification__subtitle">Peru - University</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i>
                                        2009 - 2014
                                    </div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                </div>
                            </div>

                            {/* Qualification 4 */}
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Computer Enginner</h3>
                                    <span className="qualification__subtitle">Peru - University</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i>
                                        2009 - 2014
                                    </div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                </div>
                            </div>

                            {/* Qualification 5 */}
                            <div className="qualification__data">
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>

                                <div>
                                    <h3 className="qualification__title">Computer Enginner</h3>
                                    <span className="qualification__subtitle">Peru - University</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i>
                                        2009 - 2014
                                    </div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Work */}

                        <div className="qualification__content" data-content id="work">
                            {/* Qualification 1 */}
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Computer Enginner</h3>
                                    <span className="qualification__subtitle">Peru - University</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i>
                                        2009 - 2014
                                    </div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                </div>
                            </div>

                            {/* Qualification 2 */}
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Computer Enginner</h3>
                                    <span className="qualification__subtitle">Peru - University</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i>
                                        2009 - 2014
                                    </div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                </div>
                            </div>

                            {/* Qualification 3 */}
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Computer Enginner</h3>
                                    <span className="qualification__subtitle">Peru - University</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i>
                                        2009 - 2014
                                    </div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                </div>
                            </div>

                            {/* Qualification 4 */}
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Computer Enginner</h3>
                                    <span className="qualification__subtitle">Peru - University</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i>
                                        2009 - 2014
                                    </div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                </div>
                            </div>

                            {/* Qualification 5 */}
                            <div className="qualification__data">
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>

                                <div>
                                    <h3 className="qualification__title">Computer Enginner</h3>
                                    <span className="qualification__subtitle">Peru - University</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i>
                                        2009 - 2014
                                    </div>

                                    <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Qualification