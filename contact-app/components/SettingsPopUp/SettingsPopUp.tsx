import React, { FC, useContext, useState } from 'react'
import { SetRow, SettingsWrap } from './settingsPopUpStyles';
import Image from 'next/image';
import { BodyText } from '../../assets/GlobalStyles/typoStyles';
import { ContactContext } from '../../context/ContactContext/ContactContext';
import { useRouter } from 'next/router';
import { deleteContact } from '../../assets/prismaActions';

interface SetProp {
  id: number
}

const SettingsPopUp: FC<SetProp> = ({ id }) => {

  const { setContactData, contactsState } = useContext(ContactContext)
  const [isLoading, setLoading] = useState(false)

  // Refresh

  // const router = useRouter()

  // const refreshData = () => {
  //   router.replace(router.pathname, router.asPath, { shallow: false });
  // }

  // const handleDelete = (id) => {
  //   deleteContact(id).then(() => {
  //     refreshData();
  //   });
  // };

  return (
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
      <SetRow onClick={() => deleteContact(id)}>
        <Image 
          alt='contact profile placeholder'
          src={"/icons/delete.svg"}
          width={16}
          height={16}
        />
        <BodyText>Remove</BodyText>
      </SetRow>
    </SettingsWrap>
  )
}

export default SettingsPopUp