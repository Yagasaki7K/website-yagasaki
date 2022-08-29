import BlogDetails from "./BlogDetails"

const HeaderBlog = () => {
    return (
        <BlogDetails>
            <nav>
                <ul>
                    <a href="/"><li>Portfólio</li></a>
                    <a href="/blog"><li>Blog</li></a>
                    <a href="/blog"><img src="https://github.com/Yagasaki7K.png" alt="Yagasaki7K" /></a>
                    <a href="https://github.com/Yagasaki7K" target="_blank"><li>Github</li></a>
                    <a href="https://discord.gg/jhSepmE7nN" target="_blank"><li>Discord</li></a>
                </ul>
            </nav>
        </BlogDetails>
    )
}

export default HeaderBlog