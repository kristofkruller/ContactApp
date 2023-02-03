import Head from 'next/head'
import {
  H1, H2, H3, BodyText, Msg 
} from '../components/styles/sharedStyles'

export default function Home() {

  return (
    <>
      <Head>
        <title>Contact App</title>
        <meta name="description" content="Handle contacts in a comfortable way" />
        <link rel="icon" href="/Vectorfav.svg" />
      </Head>
      <H1>
        Welcome to Contact App
      </H1>
      <H2>Welcome to Contact App</H2>
      <H3>Welcome to Contact App</H3>
      <BodyText>Welcome to Contact App</BodyText>
      <Msg>Welcome to Contact App</Msg>
    </>
  )

}
