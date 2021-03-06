const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.use(express.json())

  server.post('/api/guestbook', (req, res, next) => {
    let message = req.body;
    return res.send('Message posted');
  })

  server.get('/api/guestbook', (req, res, next) => {
    res.json({
      posts: []
    })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
    console.log(err);
  })
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
