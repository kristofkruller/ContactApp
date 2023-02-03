import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '../components/styles/theme'
import GlobalStyle from '../components/styles/globalStyles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
