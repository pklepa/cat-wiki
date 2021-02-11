import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../styles/globalStyles';
import theme from '../styles/themes';

import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// Binding events for nprogress bar
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
