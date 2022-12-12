import Link from 'next/link'
import BlogDetails from "./BlogDetails"

const HeaderBlog = () => {
    return (
        <BlogDetails>
            <nav>
                <ul>
                    <Link href="/"><li>Portfólio</li></Link>
                    <Link href="/blog"><li>Blog</li></Link>
                    <Link href="/blog"><img src="https://github.com/Yagasaki7K.png" alt="Yagasaki7K" /></Link>
                    <Link href="https://github.com/Yagasaki7K" target="_blank" rel="noreferrer"><li>Github</li></Link>
                    <Link href="https://discord.gg/jhSepmE7nN" target="_blank" rel="noreferrer"><li>Discord</li></Link>
                </ul>
            </nav>
        </BlogDetails>
    )
}

export default HeaderBlog