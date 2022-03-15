const HeaderMain = () => {

    if (typeof window !== 'undefined') {
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        const navClose = document.getElementById('nav-close');

        if (navToggle) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.add('show-menu');
            })
        }

        if (navToggle) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.remove('show-menu');
            })
        }

        const navLink = document.querySelectorAll('.nav__link');

        function linkAction() {
            const navMenu = document.getElementById('nav-menu');
            navMenu.classList.remove('show-menu');
        }

        navLink.forEach(n => n.addEventListener('click', linkAction));
        } else {
        console.log('You are on the server')

        // Dark Mode Functionality

        const themeButton = document.getElementById('theme-button');
        const darkTheme = 'dark-theme';
        const iconLight = 'uil-sun'
        const iconDark = 'uil-moon'

        const selectedTheme = localStorage.getItem('selected-theme')
        const selectedIcon = localStorage.getItem('selected-icon')

        const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
        const getCurrentIcon = () => themeButton.classList.contains(iconLight) ? iconDark : iconLight

        if (selectedTheme) {
            document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
            themeButton.body.classList[selectedIcon === iconDark ? 'add' : 'remove'](iconLight)
        }

        themeButton.addEventListener('click', () => {
            document.body.classList.toggle(darkTheme)
            themeButton.classList.toggle(iconLight)

            localStorage.setItem('selected-theme', getCurrentTheme())
            localStorage.setItem('selected-icon', getCurrentIcon())
        })
      }

    return(
        <>
            <header className="header" id="header">
                <nav className="nav container">
                    <a href="#" className="nav__logo">Anderson Marlon</a>

                    <div className="nav__menu1" id="nav-menu">
                        <ul className="nav__list grid">
                            <li className="nav__item">
                                <a href="#home" className="nav__link">
                                    <i className="uil uil-estate nav__icon"></i> Home
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" className="nav__link">
                                    <i className="uil uil-user nav__icon"></i> About
                                </a>
                            </li> 
                            <li className="nav__item">
                                <a href="#skills" className="nav__link">
                                    <i className="uil uil-file-alt nav__icon"></i> Skills
                                </a>
                            </li> 
                            <li className="nav__item">
                                <a href="#services" className="nav__link">
                                    <i className="uil uil-briefcase-alt nav__icon"></i> Services
                                </a>
                            </li> 
                            <li className="nav__item">
                                <a href="#portfolio" className="nav__link">
                                    <i className="uil uil-scenery nav__icon"></i> Portfolio
                                </a>
                            </li> 
                            <li className="nav__item">
                                <a href="#contact" className="nav__link">
                                    <i className="uil uil-message nav__icon"></i> Contact
                                </a>
                            </li> 
                        </ul>
                        <i className="uil uil-times nav__close nav__icon" id="nav-close"></i>
                    </div>

                    <div className="nav__btns">
                        {/* Dark Mode */}
                        <i className="uil uil-moon change-theme" id="theme-button"></i>

                        <div className="nav__togle" id="nav-toggle">
                            <i className="uil uil-apps"></i>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default HeaderMain