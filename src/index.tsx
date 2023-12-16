import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from '@mui/material';
import theme from './styles/muiTheme';
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
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </QueryClientProvider>
  </ThemeProvider>
);
