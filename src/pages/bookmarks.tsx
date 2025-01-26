import ArticleDetails from '@/components/ArticleDetails'
import Copyright from '@/components/Copyright'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const booksmark = () => {
    return (
        <>
            <div className="overlay" />
            <Head>
                <title>Yagasaki | mid-level software developer using JS and TS</title>
                <link rel="icon" type="image/png" href="https://github.com/Yagasaki7K.png" />
            </Head>
            <ArticleDetails>
                <div className='card card-page text'>
                    <div className="backToHome">
                        <Link href={'/'}><i className="uil uil-arrow-left"> Back To Home</i></Link>
                    </div>
                    <h1 className='post-title'>Bookmarks</h1>

                    <div className="details">
                        <div className="date">
                            <p>Updated in <span>May 15, 2024</span></p>
                        </div>
                    </div>
                    <div className='post-body'>
                        <li><Link href="https://mikegrindle.com/posts/self-promotion" target='_blank' rel="noopener noreferrer">Do Things and Tell People</Link></li>
                        <li><Link href="https://herbcaudill.com/words/20201007-style-react-app" target='_blank' rel="noopener noreferrer">How to style React applications while the world burns around us</Link></li>
                        <li><Link href="https://ajkprojects.com/stopactinglikeyourefamous" target='_blank' rel="noopener noreferrer">Stop Acting Like You're Famous</Link></li>
                        <li><Link href="https://fabiensanglard.net/snes_hearts/index.html" target='_blank' rel="noopener noreferrer">THE HEARTS OF THE SUPER NINTENDO</Link></li>
                        <li><Link href="https://nick-black.com/dankwiki/index.php/Book_list_for_streetfighting_computer_scientists" target='_blank' rel="noopener noreferrer">Book list for streetfighting computer scientists</Link></li>
                        <li><Link href="https://blog.samaltman.com/what-i-wish-someone-had-told-me" target='_blank' rel="noopener noreferrer">What I Wish Someone Had Told Me</Link></li>
                        <li><Link href="https://www.developing.dev/p/what-i-wish-i-knew-as-a-mid-level" target='_blank' rel="noopener noreferrer">What I Wish I Knew As a Mid-Level Engineer</Link></li>
                        <li><Link href="https://www.noghartt.dev/blog/embrace-the-chaos-of-your-life" target='_blank' rel="noopener noreferrer">Embrace The Chaos of Your Life</Link></li>
                        <li><Link href="https://people.freebsd.org/~lstewart/articles/cpumemory.pdf" target='_blank' rel="noopener noreferrer">What Every Programmer Should Know About Memory</Link></li>
                        <li><Link href="https://dev.to/wnqueiroz/testes-unitarios-fundamentos-e-qualidade-de-software-5af0" target='_blank' rel="noopener noreferrer">Testes Unitários: Fundamentos e Qualidade de Software!</Link></li>
                        <li><Link href="https://medium.com/language-learners-toolkit/want-to-speak-english-like-a-native-speaker-read-this-first-d6e07333407f" target='_blank' rel="noopener noreferrer">Want to speak English like a native speaker? Read this first.</Link></li>
                        <li><Link href="https://dev.to/azure/10-dicas-para-se-tornar-ninja-em-javascript-1775" target='_blank' rel="noopener noreferrer">10 Dicas para se Tornar Ninja em JavaScript!</Link></li>
                        <li><Link href="https://blog.bitsrc.io/how-to-fetch-api-data-in-react-like-a-pro-fd7379dc3e6f" target='_blank' rel="noopener noreferrer">How to Fetch API Data in React Like a Pro</Link></li>

                        {/* --- */}

                        <h1>List of Best Articles That I Read</h1>
                        <li><Link href="https://xnacly.me/posts/2022/linux-for-powerusers/" target='_blank' rel="noopener noreferrer">Linux guide for power users</Link></li>
                        <li><Link href="https://jxnl.co/writing/2024/06/01/advice-to-young-people/" target='_blank' rel="noopener noreferrer">Advice to Young People, The Lies I Tell Myself</Link></li>
                        <li><Link href="https://read.highgrowthengineer.com/p/becoming-a-go-to-person-gets-you" target='_blank' rel="noopener noreferrer">Becoming a go-to person gets you promoted. Here's how to do it as a software engineer.</Link></li>
                        <li><Link href="https://www.danilo.life/post/3" target='_blank' rel="noopener noreferrer">Introspection and Growth</Link></li>
                        <li><Link href="https://blog.lucis.dev/blog/pense-nos-incentivos-antes-de-qualquer-coisa" target='_blank' rel="noopener noreferrer">Incentivos antes de qualquer coisa</Link></li>
                        <li><Link href="https://www.youtube.com/watch?v=kPdLsrggPH0&ab_channel=LuanaCarolina" target='_blank' rel="noopener noreferrer">Você NUNCA mais vai ESQUECER o que leu (Video)</Link></li>

                        {/* --- */}

                    </div>
                </div>
            </ArticleDetails>
            <Copyright />
        </>
    )
}

export default booksmark
