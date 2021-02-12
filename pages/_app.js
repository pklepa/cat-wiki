import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import GlobalStyles from '../styles/globalStyles';
import theme from '../styles/themes';

// Binding events for nprogress bar
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps, router }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ThemeProvider>
  );
}
