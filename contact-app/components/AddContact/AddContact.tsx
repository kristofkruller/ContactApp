import React, { useContext, useEffect, useState } from 'react'
import { AddContactsPopUp, PopUpWrap } from './formStyles';
import { InputWrap, InputField, Label } from '../../assets/GlobalStyles/inputFieldStyles';
import { H2 } from '../../assets/GlobalStyles/typoStyles';
import { Btn, BUTTON_TYPE_CLASSES } from '../Btn/Btn';
import { BtnWrap, ButtonSpinner } from '../Btn/btnStyles';
import AddImg from './AddImg';

import { saveContact, updateContact } from '../../assets/prismaActions';

import { ContactContext } from '../../context/ContactContext';
import { OpenContext } from '../../context/OpenContext';
import { useRouter } from 'next/router';
import { PutLoadingContext } from '../../context/PutLoadingContext';

interface ContactCreateInput {
  name: string,
  phone: string,
  email: string,
  url: string
}

const AddContact = () => {

  const { setContactData, contactsState, profileSrc, setProfileSrc, setImgUpload, setToPutE, updateE } = useContext(ContactContext)
  const { setOpenAddPopUp } = useContext(OpenContext)
  const { updateLoading, setUpdateLoading } = useContext(PutLoadingContext)

  const [loading, isLoading] = useState(false)

  const router = useRouter()

  const fullReset = () => {
    setProfileSrc("")
    setImgUpload(null)
    setToPutE(null)
    isLoading(false)
    setUpdateLoading(false)
    setOpenAddPopUp(false)
  }

  // EDIT INPUNT HANDLE

  const [inputValues, setInputValues] = useState({
    name: "",
    phone: "",
    email: "",
  });
  
  const updateHandleInputEdit = async (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value
    });
  }

  useEffect(() => {
    if (!updateLoading) return
    setInputValues({
      name: updateE.name,
      phone: updateE.phone,
      email: updateE.email,
    })
  },[])

  return (
    <PopUpWrap>

      { !updateLoading ? 
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
          await saveContact(contactData)
          setContactData([...contactsState, contactData])
          form.reset()
        } catch (err) {
          console.error(err);
        }

        // full reset
        fullReset()
        router.reload()

      }}> 
        <H2 id='title'>Add Contact</H2>
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
    :       
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
          await updateContact(updateE.id, contactData)
          setContactData([...contactsState, contactData])
          form.reset()
        } catch (err) {
          console.error(err);
        }

        // full reset
        fullReset()
        router.reload()

      }}> 
        <H2 id='title'>Edit Contact</H2>
        <AddImg />
        <InputWrap>
          <Label>Name</Label>
          <InputField
            value={inputValues.name}
            name="name"
            onChange={updateHandleInputEdit}
            required
          />
          <Label>Phone number</Label>
          <InputField
            value={inputValues.phone}
            name="phone"
            onChange={updateHandleInputEdit}
            required 
          />
          <Label>Email</Label>
          <InputField
            value={inputValues.email}
            name="email"
            onChange={updateHandleInputEdit}
            required
          />
        </InputWrap>
        <BtnWrap>
          <Btn buttonType={BUTTON_TYPE_CLASSES.SecondaryBtnL} type='reset' onClick={fullReset}>Cancel</Btn>
          <Btn buttonType={BUTTON_TYPE_CLASSES.PrimaryBtnL} type='submit'>{
            loading ? <ButtonSpinner /> : "Update"
          }</Btn>
        </BtnWrap>
      </AddContactsPopUp> 
      }
    </PopUpWrap>
  )
}

export default AddContact