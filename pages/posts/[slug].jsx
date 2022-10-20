import { useRouter } from 'next/router'

import BlogDetails from '/src/components/BlogDetails'
import HeaderBlog from '/src/components/HeaderBlog'
import FooterBlog from '/src/components/FooterBlog'
import Head from 'next/head'
import Link from 'next/link'

const Image = 'https://images.unsplash.com/photo-1514575110897-1253ff7b2ccb?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy'
const Icon = '/src/images/yagasaki7k.jpg'

const Title = 'Aplicativo que cria clone virtual do usuário faz sucesso no Brasil'
const Description = '“Chatbot aprende tudo sobre a pessoa e torna-se uma espécie de “consciência” ou melhor amigo”'

export async function getStaticProps() {
    const DataAPI = await fetch('https://yagasakiblogs.up.railway.app/blog/posts')
    const data = await DataAPI.json()
    return {
        props: {
            data
        }
    }
}

export async function getStaticPaths() {
    const request = await fetch('https://yagasakiblogs.up.railway.app/blog/posts')
    const posts = await request.json()
    const paths = posts.map(client => ({
        params: { slug: client.slug.toString() },
    }))

    return {
        paths,
        fallback: false
    }
}

const Post = ({ data }) => {
    const router = useRouter()
    const { slug } = router.query

    return (
        <>
            <BlogDetails>
                <HeaderBlog />
                {
                    data && data.map((post, index) => (
                        post.slug === slug ? (
                            <div key={index}>
                                <Head>
                                    <meta name="author" content='Anderson "Yagasaki" Marlon' />
                                    <meta name="description" content={post.description} />
                                    <meta property="og:title" content={post.title} />
                                    <meta property="og:description" content={post.description} />
                                    <meta property="og:site_name" content="Anderson Marlon // Software Developer" />
                                    <meta property="og:url" content="https://yagasaki.vercel.app/" />
                                    <meta property="og:image" content="/images/yagasaki7k.jpg" />
                                    <meta property="og:type" content="Website" />
                                    <meta property="og:image:width" content="1200" />
                                    <meta property="og:image:height" content="627" />
                                    <meta name="twitter:card" content="summary" />
                                    <meta name="twitter:site" content={post.title} />
                                    <meta name="twitter:creator" content='Anderson "Yagasaki" Marlon' />
                                    <meta name="twitter:title" content={post.title} />
                                    <meta name="twitter:description" content={post.description} />
                                    <meta name="twitter:image:src" content="/images/yagasaki7k.jpg" />
                                </Head>

                                <img src={post.header} className="header-post" />

                                <div className="post">
                                    <p className="date">{post.date} | Imagem: Unsplash |&nbsp;
                                        <Link href="/"><a>{post.author}</a></Link></p>
                                    <h1>{Title}</h1>
                                    <i>{Description}</i>

                                    <p style={{whiteSpace: "pre-wrap"}}>{post.post}</p>

                                    {
                                        post.fonte ? <p>Fonte: <Link href={post.fontelink}><a target="_blank" rel="noreferrer">{post.fonte}</a></Link></p> : null
                                    }

                                    {
                                        post.image1 ? <img src="https://latorremarketing.com.br/news/wp-content/uploads/2019/08/La-Torre-Marketing-Talks-12-2-1024x684.jpg"/> : null
                                    }

                                    {
                                        post.image2 ? <img src="https://latorremarketing.com.br/news/wp-content/uploads/2019/08/La-Torre-Marketing-Talks-10-1-1024x684.jpg"/> : null
                                    }

                                    {
                                        post.ytid ? <iframe width="550" height="480" src={'https://www.youtube.com/embed/' + post?.ytid} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : null
                                    }
                                </div>
                            </div>
                        ) : null
                    ))
                }
            </BlogDetails>
            <FooterBlog />
        </>
    )
}

export default Post