import express from 'express'
import posts from './index.json' assert { type: "json" };

const app = express()

app.get('/blog/posts', (req, res) => {
    return res.json(posts)
})

app.listen(3000)