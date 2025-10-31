import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrayContextProvider } from './ArrayGenerator.jsx'
import App from './App.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ArrayContextProvider>
    <App />
    </ArrayContextProvider>
  </StrictMode>,
)
