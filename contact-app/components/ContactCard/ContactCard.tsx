import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'

import { Btn, BUTTON_TYPE_CLASSES } from '../Btn/Btn'
import SettingsPopUp from '../SettingsPopUp/SettingsPopUp'

import {
  ContactWrap,
  ContactHeader,
  ContactBody,
  ContactRow,
  ProfileBlock,
  SettingsBlock,
  SepaDiv,
  DecorLineX,
  DecorLineY,
  DecorLineYLeft
} from "./contactCardStyles"
import { H1, H3 } from '../../assets/GlobalStyles/typoStyles'
import { Label } from '../../assets/GlobalStyles/inputFieldStyles'

import { ContactContext } from '../../context/ContactContext'
import { OpenContext } from '../../context/OpenContext'

const ContactCard = ({ children }) => {

  const { contactsState } = useContext(ContactContext)
  const { setOpenAddPopUp, displayRowSettings, rowSettings } = useContext(OpenContext)

  const [selectedRowId, setSelectedRowId] = useState(null);
  const [rowData, setRowData] = useState([])

  const displayRowHandler = (id) => {
    if (!id || id.lenght < 1) return
    setSelectedRowId(id);
    displayRowSettings()
  };

  useEffect(() => {
    if (!contactsState || contactsState.length < 1) return
    setRowData(contactsState)
  },[contactsState])
  
  return (
    <ContactWrap>
      <DecorLineX />
      <DecorLineX />
      <DecorLineYLeft />
      <DecorLineY />
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
          <Btn buttonType={BUTTON_TYPE_CLASSES.PrimaryBtnLIAnim} onClick={() => setOpenAddPopUp(true)}>
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
            right: "calc(calc(100vw - 848px) / 2)",
          }}
            alt='light switch'
            src={"/icons/light.svg"}
            width={24}
            height={24}
          />
        </SettingsBlock>
      </ContactHeader>
      
      <ContactBody>
        {rowData.map(({ id, name, phone, email, url }, i) => (
            <ContactRow key={i}>
              <SepaDiv>
                <Image
                  alt='minisized profile picture'
                  src={!url ? "/icons/placeholder.png" : url}
                  width={40}
                  height={40}
                />
                <ProfileBlock>
                  <H3>{name}</H3>
                  <Label>{phone}</Label>
                </ProfileBlock>
              </SepaDiv> 
              <SettingsBlock 
              style={rowSettings ? {display: "none"} : {display: ""} }>
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
              
              { (selectedRowId === id && rowSettings) ? 
              <SettingsPopUp style={rowSettings ? {opacity: 0} : {opacity: 1}}
                id={id} 
                name={name} 
                phone={phone} 
                email={email} 
                url={url}
              /> :  null }
            </ContactRow>
          )          
        )}
      </ContactBody>

    {children}

    </ContactWrap>
  )
}

export default ContactCard