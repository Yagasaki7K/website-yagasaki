const Qualification = () => {

    return(
        <>
            <section className="qualification section">
                <h2 className="section__title">Qualification</h2>
                <span className="section__subtitle">My personal journey</span>

                <div className="qualification__container container">
                    <div className="qualification__sections">
                        {/* Content Education */}

                        <div className="qualification__content" data-content id="education">
                            <div className="qualification__button button--flex qualification__active" data-target='#education'>
                                <i className="uil uil-graduation-cap qualification__icon"></i>
                                Education
                            </div>

                            {/* Qualification 1 */}
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title"> 
                                    <span className="qualification__rounder"></span> Computer Science (CS50)</h3>
                                    <span className="qualification__subtitle">Online - Harvard</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i> Mar, 2022
                                    </div>
                                    <hr></hr>
                                </div>
                            </div>

                            {/* Qualification 1 */}
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title"> 
                                    <span className="qualification__rounder"></span> NodeJS, ReactJS and React Native</h3>
                                    <span className="qualification__subtitle">Online - Rocketseat</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i> Mar, 2020
                                    </div>
                                    <hr></hr>
                                </div>
                            </div>

                            {/* Qualification 1 */}
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title"> 
                                    <span className="qualification__rounder"></span> Building with PHP, HTML, CSS and JS</h3>
                                    <span className="qualification__subtitle">Online - Udemy</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i> Jan, 2019
                                    </div>
                                    <hr></hr>
                                </div>
                            </div>

                            {/* Qualification 1 */}
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title"> 
                                    <span className="qualification__rounder"></span> High School</h3>
                                    <span className="qualification__subtitle">Profª Cecília Pereira - High School</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i> Dec, 2014
                                    </div>
                                    <hr></hr>
                                </div>
                            </div>


                        </div>

                        {/* Content Work */}

                        <div className="qualification__content" data-content id="work">
                            <div className="qualification__button button--flex" data-target='#work'>
                                <i className="uil uil-briefcase-alt qualification__icon"></i>
                                Work
                            </div>
                            {/* Qualification 1 */}
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title"> 
                                    <span className="qualification__rounder"></span> Systems Development Analyst</h3>
                                    <span className="qualification__subtitle">Cenário Capital</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i> Apr, 2021 - Sep, 2021
                                    </div>
                                    <hr></hr>
                                </div>
                            </div>

                            {/* Qualification 1 */}
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title"> 
                                    <span className="qualification__rounder"></span> Front-end Developer</h3>
                                    <span className="qualification__subtitle">Marry Perry Paris</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i> Jul, 2020 - Oct, 2020
                                    </div>
                                    <hr></hr>
                                </div>
                            </div>

                            {/* Qualification 1 */}
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title"> 
                                    <span className="qualification__rounder"></span> Brazilian Army</h3>
                                    <span className="qualification__subtitle">11ª Bda Inf L - Communications</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i> Mar, 2016 - Mar, 2017
                                    </div>
                                    <hr></hr>
                                </div>
                            </div>

                            {/* Qualification 1 */}
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title"> 
                                    <span className="qualification__rounder"></span> IT Teacher - Acessa Escola</h3>
                                    <span className="qualification__subtitle">Profª Cecília Pereira - High School</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i> Jan, 2012 - Dec, 2014
                                    </div>
                                    <hr></hr>
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