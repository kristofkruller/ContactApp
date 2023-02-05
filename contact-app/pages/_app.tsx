import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '../assets/GlobalStyles/theme'
import GlobalStyle from '../assets/GlobalStyles/globalStyles'
import { ContactProvider } from '../context/ContactContext/ContactContext'
import { OpenProvider } from '../context/ContactContext/OpenContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContactProvider>
      <OpenProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </OpenProvider>
    </ContactProvider>
  )
}
