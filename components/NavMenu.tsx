import Link from 'next/link'
import NavMenuDetails from './NavMenuDetails'

export const NavMenu = () => {
    return(
        <NavMenuDetails>
                <Link href="#">
                    <a>
                        <img src="/assets/logo.png"/>
                    </a>
                </Link>

                <ul>
                    <Link href="#">
                        <a>
                            <li>Início</li>
                        </a>
                    </Link>
                    <Link href="#">
                        <a>
                            <li>Sobre Mim</li>
                        </a>
                    </Link>
                    <Link href="#">
                        <a>
                            <li>Portfólio</li>
                        </a>
                    </Link>
                    <Link href="#">
                        <a>
                            <li>Contato</li>
                        </a>
                    </Link>
                    <Link href="/blog">
                        <a>
                            <li>Blog</li>
                        </a>
                    </Link>
                </ul>
        </NavMenuDetails>
    )
}

export default NavMenu