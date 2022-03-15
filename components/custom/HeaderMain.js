import { useEffect } from "react";

const HeaderMain = () => {

    useEffect(() => {
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
    }, [])

    return(
        <>
            <header className="header" id="header">
                <nav className="nav container">
                    <a href="#" className="nav__logo">Anderson Marlon</a>

                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list grid">
                            <li className="nav__item">
                                <a href="/blog" className="nav__link">
                                    <i className="uil uil-estate nav__icon"></i> Blog
                                </a>
                            </li>
                        </ul>
                        <i className="uil uil-times nav__close nav__icon" id="nav-close"></i>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default HeaderMain