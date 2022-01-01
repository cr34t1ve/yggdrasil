import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/components/index';

const theme = {};

function WorldTree({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default WorldTree;
