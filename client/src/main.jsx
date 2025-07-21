import ReactDOM from 'react-dom/client'
import { HeroUIProvider } from '@heroui/react'
import { ToastProvider } from '@heroui/toast'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'next-themes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <HeroUIProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <ToastProvider />
        <App />
      </ThemeProvider>
    </HeroUIProvider>
  </BrowserRouter>,
)