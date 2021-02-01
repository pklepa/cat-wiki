import { ThemeProvider } from "styled-components";

import GlobalStyles from "../styles/globalStyles";
import theme from "../styles/themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
