import styled from 'styled-components'

//Font types
const Font = styled.div`
  font-weight: 500;
  margin: 0;
  text-align: center;
  text-decoration: none;
`
const Glysa = styled(Font)`
  font-family: 'Glysa', sans-serif;
  letter-spacing: 0%;
`
const Lexend = styled(Font)`
  font-family: 'Lexend', sans-serif;
  letter-spacing: 0.01em;
`
//title
const H1 = styled(Glysa)`
  line-height: 48px;
  font-size: 32px;
`
// for subtitles
const H2 = styled(Glysa)`
  line-height: 40px;
  font-size: 24px;
`

// Used for highlighting text in simple components
const H3 = styled(Lexend)`
  line-height: 24px;
  font-size: 16px;
  text-align: start;
`
const BodyText = styled(Lexend)`
  line-height: 20px;
  font-size: 14px;
`
// Message. Used for displaying extensive info.
const Msg = styled(Lexend)`
  line-height: 12px;
  font-size: 12px;
`

export { H1, H2, H3, BodyText, Msg }
