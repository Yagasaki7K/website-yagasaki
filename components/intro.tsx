import Link from 'next/link'

const Intro = () => {
    return (
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
            <h1 className="text-6xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8">
            <a href="/blog">Yagasaki/blog</a>
            </h1>
            <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
                <a href="https://twitter.com/Yagasaki7K" target="_blank">Founder/CEO of @KalifyInc | @Yagasaki7K</a>
            </h4>
        </section>
    )
}

export default Intro
