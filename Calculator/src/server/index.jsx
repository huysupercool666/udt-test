import express from 'express'
import { renderToString } from 'react-dom/server'
import App from '../client/App'

const app = express()
app.get('*', (req, res) => {
  const html = renderToString(<App />)
  res.send(
    `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>SSR React App</title>
        <link rel="stylesheet" href="app.css">
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
  )
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('Server is running on port: ', port)
})
