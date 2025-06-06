import React from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import { PostProps } from '@/pages'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

const LayoutArticle = (post: PostProps) => {
    return (
        <div className={`article ${post.identifier}`}>
            <div className="content">
                <div className="details">
                    <h4 className="scribble">{post.frontmatter?.title}</h4>
                    <p>{post.frontmatter?.excerpt}</p>
                    <small>Publicado {dayjs().to(post.frontmatter?.date)}</small>
                </div>

                <div className="tags">
                    <p>
                        <span className="color">{post.readingTime} min de leitura</span> <span>{post.frontmatter?.tags?.[0]}</span> <span>{post.frontmatter?.tags?.[1]}</span><span>{post.frontmatter?.tags?.[2]}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LayoutArticle
