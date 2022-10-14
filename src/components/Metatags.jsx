import React from 'react'

const Metatags = (Title, Description, Image, ) => {
  return (
    <>
        <meta name="title" content={Title}/>
        <meta name="description" content={Description}/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://yagasaki.vercel.app"/>
        <meta property="og:title" content={Title}/>
        <meta property="og:description" content={Description}/>
        <meta property="og:image" content={Image}/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://yagasaki.vercel.app"/>
        <meta property="twitter:title" content={Title}/>
        <meta property="twitter:description" content={Description}/>
        <meta property="twitter:image" content={Image}/>
    </>
  )
}

export default Metatags