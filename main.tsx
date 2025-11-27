import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@styles/index.css';
import App from './pages/App.tsx';
import { HeadProvider } from 'react-head';

const Root = document.getElementById('root') as HTMLElement;

createRoot(Root!).render(
  <StrictMode>
    <HeadProvider>
      <App />
    </HeadProvider>
  </StrictMode>,
)
