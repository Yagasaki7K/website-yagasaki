import React from 'react'
import Link from '@docusaurus/Link'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_left">
                <strong>Copyright</strong>
                <p>
                    © {new Date().getFullYear()}{" "}
                    <Link href="/">Anderson "Yagasaki" Marlon</Link>
                </p>
            </div>
            <div className="footer_center">
                <strong>Contact</strong>
                <Link href="mailto:anderson18.marlon@gmail.com">Email</Link>
                <Link href="https://linkedin.com/in/andersonmarlon">LinkedIn</Link>
                <Link href="https://twitter.com/Yagasaki7K">Twitter</Link>
                <Link href="https://api.whatsapp.com/send?phone=5519998018174">
                    Whatsapp
                </Link>
            </div>
            <div className="footer_right">
                <strong>My Work</strong>
                <Link href="/blog">Blog</Link>
                <Link href="https://github.com/Yagasaki7K">GitHub</Link>
                <Link href="https://behance.net/yagasaki">Behance</Link>
            </div>
        </div>
    )
}

export default Footer