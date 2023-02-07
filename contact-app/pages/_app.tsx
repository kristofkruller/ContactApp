import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '../assets/GlobalStyles/theme'
import GlobalStyle from '../assets/GlobalStyles/globalStyles'
import { ContactProvider } from '../context/ContactContext'
import { OpenProvider } from '../context/OpenContext'
import { Suspense } from 'react'
import DelayedSpinner from '../components/Btn/Spinner'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={<DelayedSpinner />}>
    <ContactProvider>
      <OpenProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </OpenProvider>
    </ContactProvider>
    </Suspense>
  )
}
