import ArticleDetails from '@/components/ArticleDetails'
import Link from 'next/link'
import React from 'react'

const booksmark = () => {
    return (
        <>
            <div className="overlay" />
            <ArticleDetails>
                <div className='card card-page text'>
                    <div className="backToHome">
                        <Link href={'/'}><i className="uil uil-arrow-left"> Back To Home</i></Link>
                    </div>
                    <h1 className='post-title'>Booksmark</h1>

                    <div className="details">
                        <div className="date">
                            <p>Updated in <span>May 15, 2024</span></p>
                        </div>
                    </div>
                    <div className='post-body'>
                        <li><a href="https://mikegrindle.com/posts/self-promotion" target='_blank' rel="noopener noreferrer">https://mikegrindle.com/posts/self-promotion</a></li>
                        <li><a href="https://herbcaudill.com/words/20201007-style-react-app" target='_blank' rel="noopener noreferrer">https://herbcaudill.com/words/20201007-style-react-app</a></li>
                        <li><a href="https://mikegrindle.com/posts/self-promotion" target='_blank' rel="noopener noreferrer">https://mikegrindle.com/posts/self-promotion</a></li>
                        <li><a href="https://ajkprojects.com/stopactinglikeyourefamous" target='_blank' rel="noopener noreferrer">https://ajkprojects.com/stopactinglikeyourefamous</a></li>
                        <li><a href="https://fabiensanglard.net/snes_hearts/index.html" target='_blank' rel="noopener noreferrer">https://fabiensanglard.net/snes_hearts/index.html</a></li>
                        <li><a href="https://nick-black.com/dankwiki/index.php/Book_list_for_streetfighting_computer_scientists" target='_blank' rel="noopener noreferrer">https://nick-black.com/dankwiki/index.php/Book_list_for_streetfighting_computer_scientists</a></li>
                        <li><a href="https://blog.samaltman.com/what-i-wish-someone-had-told-me" target='_blank' rel="noopener noreferrer">https://blog.samaltman.com/what-i-wish-someone-had-told-me</a></li>
                        <li><a href="https://www.developing.dev/p/what-i-wish-i-knew-as-a-mid-level" target='_blank' rel="noopener noreferrer">https://www.developing.dev/p/what-i-wish-i-knew-as-a-mid-level</a></li>
                        <li><a href="https://www.noghartt.dev/blog/embrace-the-chaos-of-your-life" target='_blank' rel="noopener noreferrer">https://www.noghartt.dev/blog/embrace-the-chaos-of-your-life</a></li>
                        <li><a href="https://people.freebsd.org/~lstewart/articles/cpumemory.pdf" target='_blank' rel="noopener noreferrer">https://people.freebsd.org/~lstewart/articles/cpumemory.pdf</a></li>
                        <li><a href="" target='_blank' rel="noopener noreferrer"></a></li>

                        <h1>List of Best Articles That I Read</h1>
                        <li><a href="https://xnacly.me/posts/2022/linux-for-powerusers/" target='_blank' rel="noopener noreferrer">Linux guide for power users</a></li>
                        <li><a href="https://jxnl.co/writing/2024/06/01/advice-to-young-people/" target='_blank' rel="noopener noreferrer">Advice to Young People, The Lies I Tell Myself</a></li>
                        <li><a href="https://read.highgrowthengineer.com/p/becoming-a-go-to-person-gets-you" target='_blank' rel="noopener noreferrer">Becoming a go-to person gets you promoted. Here's how to do it as a software engineer.</a></li>
                        <li><a href="" target='_blank' rel="noopener noreferrer"></a></li>

                        <h1>List of Books That I Read</h1>
                        <li><a href="" target='_blank' rel="noopener noreferrer"></a></li>
                    </div>
                </div>
            </ArticleDetails>
        </>
    )
}

export default booksmark