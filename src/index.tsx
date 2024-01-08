import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { ThemeProvider } from '@mui/material';
// import theme from './styles/muiTheme';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';


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
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
);
