import Head from 'next/head'
import { PrismaClient, Contact, Prisma } from '@prisma/client'
import ContactCard from '../components/ContactCard/ContactCard';
import AddContact from '../components/AddContact/AddContact';

const prisma = new PrismaClient();

export default function Home( {contacts} ) {

  return (
    <>
      <Head>
        <title>Contact App</title>
        <meta name="description" content="Handle contacts in a comfortable way" />
        <link rel="icon" href="/Vectorfav.svg" />
      </Head>
      <ContactCard data={contacts} />
      <AddContact />
    </>
  )

}
export async function getServerSideProps() {
  const contacts = await prisma.contact.findMany();

  return {
    props: { contacts }
  }
}
