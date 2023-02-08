import React, { FC, useContext, useState } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';

import { BodyText } from '../../assets/GlobalStyles/typoStyles';
import { SetRow, SettingsWrap } from './settingsPopUpStyles';
import DelayedSpinner from '../Btn/Spinner';

import { deleteContact } from '../../assets/prismaActions';
import { deleteImage } from '../../assets/firebase';

import { OpenContext } from '../../context/OpenContext';
import { ContactContext, ExtendedContact } from '../../context/ContactContext';
import { PutLoadingContext } from '../../context/PutLoadingContext';
import { ExitButton, ExitButtonLines } from '../Btn/btnStyles';
import PulseDot from '../Btn/PulseDot';

interface SettingsPopUpType extends ExtendedContact{
  style?:React.CSSProperties
}

const SettingsPopUp: FC<SettingsPopUpType> = ({ id, url }, ...otherProps) => {

  const { displayRowSettings, setOpenAddPopUp, rowSettings } = useContext(OpenContext)
  const { contactsState, setToPutE } = useContext(ContactContext)
  const { updateLoading, setUpdateLoading } = useContext(PutLoadingContext)

  const [isLoading, setLoading] = useState(false)

  const router = useRouter()

  const handleEdit = async (id) => {
    setUpdateLoading(true)
    setToPutE(contactsState.find(e => e.id === id))
    setOpenAddPopUp(true)
  }

  const handleDelete = async (id) => {
    setLoading(true)
    try {
      await deleteContact(id)
      displayRowSettings()
      await deleteImage(url)
      router.reload()
    } catch (error) {
      console.error(error)  
    }
    setLoading(false)
  };

  return (
    <>
    {isLoading || updateLoading ? <PulseDot /> :
    <>
    <SettingsWrap>
      <SetRow>
        <Image  onClick={() => handleEdit(id)}
          alt='contact profile placeholder'
          src={"/icons/set.svg"}
          width={16}
          height={16}
        />
        <BodyText style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          height: "44px"
        }}
        onClick={() => handleEdit(id)} 
        >Edit</BodyText>
        
        <ExitButton onClick={() => displayRowSettings()}>
          <ExitButtonLines />
          <ExitButtonLines />
        </ExitButton>
      </SetRow>
      <SetRow>
        <Image 
          alt='contact profile placeholder'
          src={"/icons/like.svg"}
          width={16}
          height={16}
        />
        <BodyText>Favourite</BodyText>
      </SetRow>
      <SetRow onClick={() => handleDelete(id)}>
        <Image 
          alt='contact profile placeholder'
          src={"/icons/delete.svg"}
          width={16}
          height={16}
        />
        <BodyText>Remove</BodyText>
      </SetRow>
    </SettingsWrap>


    </>
    }
    </>
  )
}

export default SettingsPopUp