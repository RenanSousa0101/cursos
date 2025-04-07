import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StockContextProvider } from './contexts/StockContext';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StockContextProvider>
  <StrictMode>
    <App />
  </StrictMode>,
  </StockContextProvider>
)
