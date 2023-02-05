import React, { useContext } from 'react'
import {
  ContactWrap,
  ContactHeader,
  ContactBody,
  ContactRow,
  ProfileBlock,
  SettingsBlock
} from "./contactCardStyles"
import { ContactContext } from '../../context/ContactContext/ContactContext'
import { H3 } from '../../assets/GlobalStyles/typoStyles'
import { Label } from '../../assets/GlobalStyles/inputFieldStyles'
import Image from 'next/image'
import { OpenContext } from '../../context/ContactContext/OpenContext'

const ContactCard = ({ children }) => {

  const { contactsState, setContactData } = useContext(ContactContext)
  const { displayRowSettings } = useContext(OpenContext)

  return (
    <ContactWrap>

      <ContactHeader>

      </ContactHeader>
      <ContactBody>
        {contactsState.map(({id, name, phone, email}) => (
            <ContactRow key={id}>
              <ProfileBlock>
                <H3>{name}</H3>
                <Label>{phone}</Label>
              </ProfileBlock>
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
                  onClick={() => displayRowSettings()}
                />
              </SettingsBlock>
            </ContactRow>
          )          
        )}
      </ContactBody>

    {children}

    </ContactWrap>
  )
}

export default ContactCard