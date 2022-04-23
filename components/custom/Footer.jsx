import React from 'react'

const Footer = () => {
  return (
    <div id="footer">
        <div id="social" className="social">
            <a href="https://instagram.com/yagasaki.dev" target="_blank"><i class="uil uil-instagram"></i></a>
            <a href="http://www.twitter.com/Yagasaki7K" target="_blank"><i class="uil uil-twitter"></i></a>
            <a href="https://github.com/Yagasaki7K/" target="_blank"><i class="uil uil-github"></i></a>
            <a href="https://linkedin.com/in/andersonmarlon" target="_blank"><i class="uil uil-linkedin"></i></a>
        </div>

        <br/><br/>

        <span id="copyright">© 2014 - {new Date().getFullYear()} - Anderson "Yagasaki" Marlon. All rights reserved.</span>
        
        <br/><br/>
        
        This site is built usign NextJS and hosted on <a href="http://www.vercel.com/" target="_blank">Vercel</a>. The source code is hosted on <a href="http://www.github.com/" target="_blank">Github</a>.
    </div>
  )
}

export default Footer