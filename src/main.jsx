import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import './styles.css'
import App from './App.jsx'

// Adicione este estilo global diretamente no JavaScript
const rootStyle = document.createElement('style')
rootStyle.textContent = `
  #root {
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  main {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
  }
`
document.head.appendChild(rootStyle)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)