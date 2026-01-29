import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@styles/index.css';
import App from './pages/App.tsx';
import { HeadProvider } from 'react-head';
import { QueryClient, QueryClientProvider } from 'react-query'

const Root = document.getElementById('root') as HTMLElement;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

createRoot(Root!).render(
  <StrictMode>
    <HeadProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </HeadProvider>
  </StrictMode>,
)
