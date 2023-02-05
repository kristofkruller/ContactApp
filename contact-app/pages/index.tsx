import Head from 'next/head'
import { PrismaClient, Contact, Prisma } from '@prisma/client'
import ContactCard from '../components/ContactCard/ContactCard';
import AddContact from '../components/AddContact/AddContact';
import { useContext, useEffect } from 'react';
import { ContactContext } from '../context/ContactContext/ContactContext';
import { OpenContext } from '../context/ContactContext/OpenContext';

const prisma = new PrismaClient();

export default function Home( {contacts} ) {

  const { setContactData } = useContext(ContactContext);
  const { openAddPopUp } = useContext(OpenContext);
  
  // fill up state with init val

  useEffect(() => {
    setContactData(contacts);
  }, [])

  return (
    <>
      <Head>
        <title>Contact App</title>
        <meta name="description" content="Handle contacts in a comfortable way" />
        <link rel="icon" href="/Vectorfav.svg" />
      </Head>
      <ContactCard>
        {/* contact head and body */}
        { openAddPopUp &&
          <AddContact />
        }
      </ContactCard>
    </>
  )

}

// db init

export async function getServerSideProps() {
  const contacts = await prisma.contact.findMany();

  return {
    props: { contacts }
  }
}
