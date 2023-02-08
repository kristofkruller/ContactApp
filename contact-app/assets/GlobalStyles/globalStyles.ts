import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --transition-basic: all 300ms ease-in-out;
  }

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
    background-color: ${({ theme }) => theme.colors.bg};
    padding: 0;
    margin: 0;

    width: 100vw;
    height: 100vh;

    overflow: hidden;

    position: relative;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    border-color: transparent;
    transition: var(--transition-basic);
  }
  *:focus {
    outline: none;
  }
`
  /*RESPO*/

  const sizes = {
    mobileS: '375px',
    mobileM: '420px',
    mobileL: '555px',
    tablet: '878px',
  };

  export const devices = {
    mobileS: `(max-width: ${sizes.mobileS})`,
    mobileM: `(max-width: ${sizes.mobileM})`,
    mobileL: `(max-width: ${sizes.mobileL})`,
    tablet: `(max-width: ${sizes.tablet})`,
  };

export default GlobalStyle
