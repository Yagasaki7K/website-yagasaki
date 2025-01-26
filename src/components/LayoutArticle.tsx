import React from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import { PostProps } from '@/pages'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

const codeBlockRegex = /```([\s\S]*?)```/g;
const keywordsRegex = /\b(const|let|var|import|from|function|return)\b/g;
const stringRegex = /(["'`])([^"'`]+)\1/g;

function highlightExcerpt(excerpt: string) {
  if (!excerpt) return '';

  return excerpt.replace(codeBlockRegex, (match: any, codeInside: string) => {
    let highlighted = codeInside
      .replace(keywordsRegex, '<span class="keyword">$1</span>')
      .replace(stringRegex, '<span class="string">$&</span>');

    return `<pre class="code-block"><code>${highlighted}</code></pre>`;
  });
}

const LayoutArticle = (post: PostProps) => {
    return (
        <div className="article">
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
