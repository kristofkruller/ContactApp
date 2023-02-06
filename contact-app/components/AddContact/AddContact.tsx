import React, { useContext, useState } from 'react'
import { AddContactsPopUp, PopUpWrap } from './formStyles';
import { InputWrap, InputField, Label } from '../../assets/GlobalStyles/inputFieldStyles';
import { H2 } from '../../assets/GlobalStyles/typoStyles';
import { saveContact } from '../../assets/prismaActions';
import { ContactContext } from '../../context/ContactContext/ContactContext';
import { Btn, BUTTON_TYPE_CLASSES } from '../Btn/Btn';
import { BtnWrap, ButtonSpinner } from '../Btn/btnStyles';
import AddImg from './AddImg';
import { OpenContext } from '../../context/ContactContext/OpenContext';

interface ContactCreateInput {
  name: string,
  phone: string,
  email: string,
  url: string
}

const AddContact = () => {

  const { setContactData, contactsState, profileSrc, setProfileSrc, setImgUpload } = useContext(ContactContext)
  const { setOpenAddPopUp } = useContext(OpenContext)
  const [loading, isLoading] = useState(false)

  const fullReset = () => {
    setProfileSrc("")
    setImgUpload(null)
    isLoading(false)
    setOpenAddPopUp(false)
  }

  return (
    <PopUpWrap>
      <AddContactsPopUp onSubmit={async (event: React.FormEvent<HTMLFormElement>) => {

          event.preventDefault();
          isLoading(true)
          const form = event.target as HTMLFormElement;

          const formData = new FormData(event.currentTarget);
          const name = formData.get("name") as string;
          const phone = formData.get("phone") as string;
          const email = formData.get("email") as string;
          const url = profileSrc as string;
          
          const contactData: ContactCreateInput = {
            name,
            phone,
            email,
            url
          };
          

          try {
            await saveContact(contactData);
            setContactData([...contactsState, contactData]);
            form.reset();
          } catch (err) {
            console.error(err);
          }

          // full reset
          fullReset()
          
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
          <Btn buttonType={BUTTON_TYPE_CLASSES.SecondaryBtnL} type='reset' onClick={fullReset}>Cancel</Btn>
          <Btn buttonType={BUTTON_TYPE_CLASSES.PrimaryBtnL} type='submit'>{
            loading ? <ButtonSpinner /> : "Done"
          }</Btn>
        </BtnWrap>
      
      </AddContactsPopUp>
    </PopUpWrap>
  )
}

export default AddContact