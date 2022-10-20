import Link from 'next/link'
import BlogDetails from "./BlogDetails"

const HeaderBlog = () => {
    return (
        <BlogDetails>
            <nav>
                <ul>
                    <Link href="/"><a><li>Portfólio</li></a></Link>
                    <Link href="/blog"><a><li>Blog</li></a></Link>
                    <Link href="/blog"><a><img src="https://github.com/Yagasaki7K.png" alt="Yagasaki7K" /></a></Link>
                    <Link href="https://github.com/Yagasaki7K"><a target="_blank" rel="noreferrer"><li>Github</li></a></Link>
                    <Link href="https://discord.gg/jhSepmE7nN"><a target="_blank" rel="noreferrer"><li>Discord</li></a></Link>
                </ul>
            </nav>
        </BlogDetails>
    )
}

export default HeaderBlog