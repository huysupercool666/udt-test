import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../client/App'

const server = express()

server.use(express.static('dist'))

server.get('/', (req, res) => {
  const appString = renderToString(<App />)
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My App</title>
        <link rel="stylesheet" href="app.css">
      </head>
      <body>
        <div id="root">${appString}</div>
        <script src="script.js"></script>
      </body>
    </html>
  `)
})

server.listen(3000, () => {
  console.log('Server is running on port 3000')
})
