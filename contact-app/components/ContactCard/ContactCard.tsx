import React, { useContext, useState } from 'react'
import {
  ContactWrap,
  ContactHeader,
  ContactBody,
  ContactRow,
  ProfileBlock,
  SettingsBlock,
  SepaDiv
} from "./contactCardStyles"
import { ContactContext } from '../../context/ContactContext'
import { H1, H3 } from '../../assets/GlobalStyles/typoStyles'
import { Label } from '../../assets/GlobalStyles/inputFieldStyles'
import Image from 'next/image'
import { OpenContext } from '../../context/OpenContext'
import { Btn, BUTTON_TYPE_CLASSES } from '../Btn/Btn'
import SettingsPopUp from '../SettingsPopUp/SettingsPopUp'

const ContactCard = ({ children }) => {

  const { contactsState } = useContext(ContactContext)
  const { displayRowSettings, setOpenAddPopUp } = useContext(OpenContext)

  const [selectedRowId, setSelectedRowId] = useState(null);
  
  const displayRowHandler = (id) => {
    setSelectedRowId(id);
  };

  return (
    <ContactWrap>

      <ContactHeader>
        <H1>Contacts</H1>
        <SettingsBlock>
          <Image
            alt='settings button'
            src={"/icons/set.svg"}
            width={24}
            height={24}
          />
          <Image style={{ 
            border: "2px solid #FFF", 
            borderRadius: "12px"
          }}
            alt='user profile picture'
            src={"/icons/placeholder.png"}
            width={24}
            height={24}
          />
          <Btn buttonType={BUTTON_TYPE_CLASSES.BtnLI} onClick={() => setOpenAddPopUp(true)}>
            <Image 
              alt='plus sign for add img'
              src={"/icons/plus.svg"}
              width={13.5}
              height={13.5}
            />
            Add new
          </Btn>
          <Image style={{ 
            position: "absolute",
            right: "27%",
          }}
            alt='light switch'
            src={"/icons/light.svg"}
            width={24}
            height={24}
          />
        </SettingsBlock>
      </ContactHeader>
      
      <ContactBody>
        {contactsState.map(({id, name, phone, url}) => (
            <ContactRow key={id}>
              <SepaDiv>
                <Image
                  alt='minisized profile picture'
                  src={url}
                  width={40}
                  height={40}
                />
                <ProfileBlock>
                  <H3>{name}</H3>
                  <Label>{phone}</Label>
                </ProfileBlock>
              </SepaDiv>
              <SettingsBlock>
                <Image
                  alt='mute button'
                  src={"/icons/mute.svg"}
                  width={19}
                  height={19}
                />
                <Image 
                  alt='headphone button'
                  src={"/icons/music.svg"}
                  width={19}
                  height={19}
                />
                <Image 
                  alt='more button'
                  src={"/icons/more.svg"}
                  width={19}
                  height={19}
                  onClick={() => displayRowHandler(id)}
                />
              </SettingsBlock>
              { selectedRowId === id  && <SettingsPopUp id={id} url={url} />}
            </ContactRow>
          )          
        )}
      </ContactBody>

    {children}

    </ContactWrap>
  )
}

export default ContactCard