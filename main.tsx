import { createRoot } from 'react-dom/client'
import '@styles/index.css';
import App from './pages/App.tsx';
import { ThemeProvider } from '@hook/use-theme';
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
  <HeadProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </HeadProvider>,
)
