import { useEffect } from "react";

const Skills = () => {

    useEffect(() => {
        const skillsContent = document.querySelectorAll('skills__content');
        const skillsHeader = document.querySelectorAll('.skills__header');
        let index = 0;

        function toggleSkills() {
            let itemClass = this.parentNode.className

            for (index = 0; index < skillsContent.clientHeight; index++) {
                skillsContent[index].className = 'skills__content skills__close'
            }

            if (itemClass === 'skills_content skills_close') {
                this.parentNode.className = 'skills__content skills__open'
            }
        }

        skillsHeader.forEach((el) => {
            el.addEventListener('click', toggleSkills)
        })

    }, []);
    
    return (
        <>
            <section className="skills section" id="skills">
                <h2 className="section__title">Skills</h2>
                <span className="section__subtitle">My technical level</span>

                <div className="skills__container container grid">
                    <div>

                        {/* Skill */}
                        <div className="skills__content skills__open">
                            <div className="skills__header">
                                <i className="uil uil-brackets-curly skills__icon"></i>

                                <div>
                                    <h1 className="skills__title">Front-end Developer</h1>
                                    <span className="skills__subtitle">More than 4 years</span>
                                </div>

                                <i className="uil uil-angle-down skills__arrow"></i>
                            </div>

                            <div className="skills__list grid">
                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">HTML</h3>
                                        <span className="skills__number">98%</span>
                                    </div>

                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__html"></span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">CSS</h3>
                                        <span className="skills__number">90%</span>
                                    </div>

                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__css"></span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">Javascript</h3>
                                        <span className="skills__number">76%</span>
                                    </div>

                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__js"></span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">React</h3>
                                        <span className="skills__number">68%</span>
                                    </div>

                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__react"></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Skill 2 */}
                        <div className="skills__content skills__close">
                            <div className="skills__header">
                                <i className="uil server-alt skills__icon"></i>

                                <div>
                                    <h1 className="skills__title">Back-end Developer</h1>
                                    <span className="skills__subtitle">More than 2 years</span>
                                </div>

                                <i className="uil uil-angle-down skills__arrow"></i>
                            </div>

                            <div className="skills__list grid">
                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">Firebase</h3>
                                        <span className="skills__number">49%</span>
                                    </div>
                                        
                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__node"></span>
                                    </div>
                                </div>

                                <div className="skills__data"> 
                                    <div className="skills__titles">
                                        <h3 className="skills__name">NodeJS</h3>
                                        <span className="skills__number">42%</span>
                                    </div>

                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__firebase"></span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">PHP</h3>
                                        <span className="skills__number">41%</span>
                                    </div>

                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__php"></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Skill 3 */}
                        <div className="skills__content skills__close">
                            <div className="skills__header">
                                <i className="uil uil-palette skills__icon"></i>

                                <div>
                                    <h1 className="skills__title">Graphic Design</h1>
                                    <span className="skills__subtitle">More than 4 years</span>
                                </div>

                                <i className="uil uil-angle-down skills__arrow"></i>
                            </div>

                            <div className="skills__list grid">
                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">Adobe Photoshop</h3>
                                        <span className="skills__number">72%</span>
                                    </div>

                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__photoshop"></span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">Adobe Figma</h3>
                                        <span className="skills__number">57%</span>
                                    </div>

                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__figma"></span>
                                    </div>
                                </div>

                                <div className="skills__data">
                                    <div className="skills__titles">
                                        <h3 className="skills__name">Adobe XD</h3>
                                        <span className="skills__number">42%</span>
                                    </div>

                                    <div className="skills__bar">
                                        <span className="skills__percentage skills__xd"></span>
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

export default Skills