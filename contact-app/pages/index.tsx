import Head from 'next/head'
import styled from 'styled-components'
import Contacts from '../components/Contacts/Contacts'

const IndexWrap = styled.main`
  width: 100vw;
  height: 100vh;
`

export default function Home() {

  return (
    <IndexWrap>
      <Head>
        <title>Contact App</title>
        <meta name="description" content="Handle contacts in a comfortable way" />
        <link rel="icon" href="/Vectorfav.svg" />
      </Head>
      <Contacts />
    </IndexWrap>
  )

}
