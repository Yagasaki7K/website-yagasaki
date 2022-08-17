import React from 'react'
import BlogDetails from './BlogDetails'

const FooterBlog = () => {
    return (
        <BlogDetails>
            <footer>
                <hr />
                <p>© 2014 - {new Date().getFullYear()} Anderson Marlon  | Front-end Software Developer</p>
            </footer>
        </BlogDetails>
    )
}

export default FooterBlog