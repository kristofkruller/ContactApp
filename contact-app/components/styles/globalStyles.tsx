import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  /*Font init*/
  @font-face {
    font-family: 'Glysa';
    src: url('/fonts/Glysa.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Lexend';
    src: url('/fonts/LexendDeca.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle