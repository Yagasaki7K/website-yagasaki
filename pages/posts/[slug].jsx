import { useRouter } from 'next/router'

import BlogDetails from '/src/components/BlogDetails'
import HeaderBlog from '/src/components/HeaderBlog'
import FooterBlog from '/src/components/FooterBlog'
import Head from 'next/head'
import Link from 'next/link'

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

    const thumbnail = '/images/yagasaki7k.jpg'

    return (
        <>
            <BlogDetails>
                <HeaderBlog />
                {
                    data && data.map((post, index) => (
                        post.slug === slug ? (
                            <div key={index}>
                                <Head>
                                    <title>{post.title}</title>
                                    <meta name="author" content='Anderson "Yagasaki" Marlon' />
                                    <meta name="description" content={post.description} />
                                    <meta property="og:title" content={post.title} />
                                    <meta property="og:description" content={post.description} />
                                    <meta property="og:site_name" content="Anderson Marlon // Software Developer" />
                                    <meta property="og:url" content="https://yagasaki.vercel.app/" />
                                    <meta property="og:image" content={thumbnail} />
                                    <meta property="og:type" content="Website" />
                                    <meta property="og:image:width" content="1200" />
                                    <meta property="og:image:height" content="627" />
                                    <meta name="twitter:card" content="summary" />
                                    <meta name="twitter:site" content={post.title} />
                                    <meta name="twitter:creator" content='Anderson "Yagasaki" Marlon' />
                                    <meta name="twitter:title" content={post.title} />
                                    <meta name="twitter:description" content={post.description} />
                                    <meta name="twitter:image:src" content={thumbnail} />
                                </Head>

                                <img src={post.header} className="header-post" alt={post.title}/>

                                <div className="post">
                                    <p className="date">{post.date} | Imagem: Unsplash |&nbsp;
                                        <Link href="/"><a>{post.author}</a></Link>
                                    </p>

                                    <h1>{post.title}</h1>
                                    <i>{post.description}</i>

                                    <p style={{whiteSpace: "pre-wrap"}}>{post.post}</p>

                                    {
                                        post.fonte ? <p>Fonte: <Link href={post.fontelink}><a target="_blank" rel="noreferrer">{post.fonte}</a></Link></p> : null
                                    }

                                    <div className="center">
                                        {
                                            post.image1 ? <img src={post.image1} alt="Primeira Imagem"/> : null
                                        }

                                        {
                                            post.image2 ? <img src={post.image2} alt="Segunda Imagem"/> : null
                                        }

                                        {
                                            post.ytid ? <iframe width="650" height="580" src={'https://www.youtube.com/embed/' + post?.ytid} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : null
                                        }
                                    </div>
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