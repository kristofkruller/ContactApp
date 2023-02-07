import React, { FC, useContext, useState } from 'react'
import { SetRow, SettingsWrap } from './settingsPopUpStyles';
import Image from 'next/image';
import { BodyText } from '../../assets/GlobalStyles/typoStyles';
import { useRouter } from 'next/router';
import { deleteContact } from '../../assets/prismaActions';
import DelayedSpinner from '../Btn/Spinner';
import { OpenContext } from '../../context/OpenContext';
import { deleteImage } from '../../assets/firebase';
interface SetProp {
  id: number,
  url: string
}

const SettingsPopUp: FC<SetProp> = ({ id, url }) => {

  const { displayRowSettings } = useContext(OpenContext)
  const [isLoading, setLoading] = useState(false)

  // Refresh n del

  const router = useRouter()

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
    {isLoading ? <DelayedSpinner /> :
    <SettingsWrap>
      <SetRow>
        <Image 
          alt='contact profile placeholder'
          src={"/icons/set.svg"}
          width={16}
          height={16}
        />
        <BodyText>Edit</BodyText>
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
    }
    </>
  )
}

export default SettingsPopUp