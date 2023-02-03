import React from 'react'
import { saveContact } from '../../assets/prismaActions';

interface ContactCreateInput {
  name: string,
  phone: string,
  email: string
}

const AddContact = () => {
  return (
    <form onSubmit={async (event: React.FormEvent<HTMLFormElement>) => {

      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const name = formData.get("name") as string;
      const phone = formData.get("phone") as string;
      const email = formData.get("email") as string;
      
      const contactData: ContactCreateInput = {
        name,
        phone,
        email,
      };
      
      const form = event.target as HTMLFormElement;

      try {
        await saveContact(contactData);
        // setContacts([...contacts, contactData]); context api
        form.reset();
      } catch (err) {
        console.error(err);
      }
    }}
    >AddContact
    <input
      placeholder="Jamie Wright"
      name="name" 
    />
    <input
      placeholder="+01 234 5678"
      name="phone" 
    />
    <input
      placeholder="jamie.wright@gmail.com"
      name="email" 
    />
    
    <button type='reset'>Cancel</button>
    <button type='submit'>Done</button>
    
    </form>
  )
}

export default AddContact