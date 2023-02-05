import React, { useContext } from 'react'
import { AddContactsPopUp, PopUpWrap } from '../../assets/GlobalStyles/formStyles';
import { InputWrap, InputField, Label } from '../../assets/GlobalStyles/inputFieldStyles';
import { H2 } from '../../assets/GlobalStyles/typoStyles';
import { saveContact } from '../../assets/prismaActions';
import { ContactContext } from '../../context/ContactContext/ContactContext';
import { Btn, BUTTON_TYPE_CLASSES } from '../Btn/Btn';
import { BtnWrap } from '../Btn/btnStyles';
import AddImg from './AddImg';

interface ContactCreateInput {
  name: string,
  phone: string,
  email: string
}

const AddContact = () => {

  const { setContactData, contactsState } = useContext(ContactContext)

  return (
    <PopUpWrap>
    <AddContactsPopUp onSubmit={async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const form = event.target as HTMLFormElement;

        const formData = new FormData(event.currentTarget);
        const name = formData.get("name") as string;
        const phone = formData.get("phone") as string;
        const email = formData.get("email") as string;
        
        const contactData: ContactCreateInput = {
          name,
          phone,
          email,
        };
        

        try {
          await saveContact(contactData);
          setContactData([...contactsState, contactData]);
          form.reset();
        } catch (err) {
          console.error(err);
        }
      }}
      
    > 
      <H2 id='title'>AddContact</H2>
      <AddImg />
      <InputWrap>
        <Label>Name</Label>
        <InputField
          placeholder="Jamie Wright"
          name="name"
          required
        />
        <Label>Phone number</Label>
        <InputField
          placeholder="+01 234 5678"
          name="phone"
          required 
        />
        <Label>Email</Label>
        <InputField
          placeholder="jamie.wright@gmail.com"
          name="email"
          required
        />
      </InputWrap>
      <BtnWrap>
        <Btn buttonType={BUTTON_TYPE_CLASSES.SecondaryBtnL} type='reset'>Cancel</Btn>
        <Btn buttonType={BUTTON_TYPE_CLASSES.PrimaryBtnL} type='submit'>Done</Btn>
      </BtnWrap>
    
    </AddContactsPopUp>
    </PopUpWrap>
  )
}

export default AddContact