import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import "../styles/app.scss"
const domNode = document.getElementById('root')

hydrateRoot(
  domNode,
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
