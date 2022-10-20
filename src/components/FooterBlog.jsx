import React from 'react'
import BlogDetails from './BlogDetails'

const FooterBlog = () => {
    return (
        <BlogDetails>
            <footer>
                <hr />
                <p>© 2014 - {new Date().getFullYear()} Anderson Marlon  | Software Developer @ Stone / Eccaplan</p>
            </footer>
        </BlogDetails>
    )
}

export default FooterBlog