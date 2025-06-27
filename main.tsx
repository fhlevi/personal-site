import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@styles/index.css';
import App from './pages/App.tsx';
import { HeadProvider } from 'react-head';
import { Analytics } from "@vercel/analytics/next"

const Root = document.getElementById('root') as HTMLElement;

createRoot(Root!).render(
  <StrictMode>
    <HeadProvider>
      <App />
      <Analytics />
    </HeadProvider>
  </StrictMode>,
)
