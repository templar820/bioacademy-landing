import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import App from './App';
import theme from './styles/muiTheme';
import { RootServiceProvider } from '$hooks/useRootService';
import { RootStoreProvider } from '$hooks/useRootStore';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 20 минут на кэширование
      staleTime: 1200000,
    },
  },
});

root.render(
  <ThemeProvider theme={theme}>
    <RootStoreProvider>
      <RootServiceProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </RootServiceProvider>
    </RootStoreProvider>
  </ThemeProvider>
);
