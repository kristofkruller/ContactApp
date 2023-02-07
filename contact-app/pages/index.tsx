import Head from 'next/head'
import { PrismaClient } from '@prisma/client'
import ContactCard from '../components/ContactCard/ContactCard';
import AddContact from '../components/AddContact/AddContact';
import { startTransition, Suspense, useContext, useEffect } from 'react';
import { ContactContext } from '../context/ContactContext/ContactContext';
import { OpenContext } from '../context/ContactContext/OpenContext';
import Spinner from '../components/Btn/Spinner';

const prisma = new PrismaClient();

export default function Home( {contacts} ) {

  const { setContactData, contactsState } = useContext(ContactContext);
  const { openAddPopUp } = useContext(OpenContext);
  
  // fill up state with init val

  useEffect(() => { 
    startTransition( () => setContactData(contacts))
  }, [])

  return (
    <Suspense fallback={<Spinner />}>
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
    </Suspense>
  )

}

// db init

export async function getServerSideProps() {
  const contacts = await prisma.contact.findMany();

  return {
    props: { contacts }
  }
}
