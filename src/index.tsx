import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import App from './App';
import theme from './styles/muiTheme';
import { RootServiceProvider } from '$hooks/useRootService';
import { RootStoreProvider } from '$hooks/useRootStore';
import yandexMetrika from '$assets/metriks/yandex.metrika';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 20 минут на кэширование
      staleTime: 1200000,
    },
  },
});

console.log(process.env.NODE_ENV);
console.log(process.env);
if (process.env.NODE_ENV === 'production' || process.env.REACT_APP_YM) {
  const metrikaContainer = document.getElementById('metrika');
  metrikaContainer.innerHTML = yandexMetrika;
  (function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () {
      (m[i].a = m[i].a || []).push(arguments);
    };
    m[i].l = 1 * new Date();
    for (var j = 0; j < document.scripts.length; j++) {
      if (document.scripts[j].src === r) {
        return;
      }
    }
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a);
  })
  (window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');
  ym(96385120, 'init', {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
  });
} else {
  // eslint-disable-next-line no-shadow-restricted-names
  const metrikaContainer = document.getElementById('metrika');
  metrikaContainer.innerHTML = yandexMetrika;
  (function (m, e, t, r, i, k, a) {
    console.log(m,e,t,r,i,k,a);
    m[i] = m[i] || function () {
      (m[i].a = m[i].a || []).push(arguments);
    };
    m[i].l = 1 * new Date();
    for (var j = 0; j < document.scripts.length; j++) {
      if (document.scripts[j].src === r) {
        return;
      }
    }
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a);
  })
  (window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');
}

root.render(
  <ThemeProvider theme={theme}>
    <RootStoreProvider>
      <RootServiceProvider>
        <QueryClientProvider client={queryClient}>
          <App/>
        </QueryClientProvider>
      </RootServiceProvider>
    </RootStoreProvider>
  </ThemeProvider>,
);
