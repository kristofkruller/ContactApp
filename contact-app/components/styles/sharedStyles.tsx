import styled from 'styled-components'

//title
const H1 = styled.h1`
  line-height: 48px;
  letter-spacing: 0%;
  font-family: 'Glysa', sans-serif;
  font-size: 32px;

  margin: 0;
  text-align: center;
  text-decoration: none;
`

// for subtitles
const H2 = styled.h2`
  line-height: 40px;
  letter-spacing: 0%;
  font-family: 'Glysa', sans-serif;
  font-size: 24px;

  margin: 0;
  text-align: center;
  text-decoration: none;
`

// Used for highlighting text in simple components
const H3 = styled.h3`
  line-height: 24px;
  letter-spacing: 0.01em;
  font-family: 'Lexend', sans-serif;
  font-size: 16px;

  margin: 0;
  text-align: center;
  text-decoration: none;
`

const BodyText = styled.p`
  line-height: 20px;
  letter-spacing: 0.01em;
  font-family: 'Lexend', sans-serif;
  font-size: 14px;

  margin: 0;
  text-align: center;
  text-decoration: none;
`

// Message. Used for displaying extensive info.
const Msg = styled.small`
  line-height: 12px;
  letter-spacing: 0.01em;
  font-family: 'Lexend', sans-serif;
  font-size: 12px;

  margin: 0;
  text-align: center;
  text-decoration: none;
`

export { H1, H2, H3, BodyText, Msg }
