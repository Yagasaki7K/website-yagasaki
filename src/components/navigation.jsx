import React from 'react'
import Link from '@docusaurus/Link'

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="navigation_left">
                <Link href="/">
                    <img src="https://github.com/Yagasaki7K.png" alt="Yagasaki7K" />
                    <h2>ソフトウェア開発者</h2>
                </Link>
            </div>
            <div className="navigation_right">
                <Link href="/blog">Blog</Link>
                <Link href="/about">About</Link>
                <Link href="https://github.com/Yagasaki7K">GitHub</Link>
                <Link href="https://twitter.com/Yagasaki7K">Twitter</Link>
                <Link href="/taekwondo">TKD</Link>
            </div>
        </div>
    )
}

export default Navigation