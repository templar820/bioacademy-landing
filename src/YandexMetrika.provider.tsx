import { useEffect } from 'react';

function YandexMetrikaProvider(props) {
  
  // useEffect(() => {
  //   if (window.ym) {
  //     window.ym(96385120, 'hit', location.pathname);
  //   }
  // }, [location]);
  
  useEffect(() => {
    (function (m, e, t, r, i, k, a) {
      // @ts-ignore
      m[i] = m[i] || function () {
        // @ts-ignore
        // eslint-disable-next-line prefer-rest-params
        (m[i].a = m[i].a || []).push(arguments);
      };
      // @ts-ignore
      m[i].l = 1 * new Date();
      // @ts-ignore
      k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a);
    }(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym'));
    window.ym(96385120, 'init', {
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true,
    });
    ym(96385120, 'setUserID', "my_id820");
    window.ym(96385120, "params", {
      botname: "@botname",
    });
    
  }, []);
  
  return props.children;
}

export default YandexMetrikaProvider;
