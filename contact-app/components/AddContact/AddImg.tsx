import React from 'react'
import { PicWrap, ProfilePic } from '../../assets/GlobalStyles/formStyles'
import { Btn, BUTTON_TYPE_CLASSES } from '../Btn/Btn'
import Image from 'next/image'

const AddImg = () => {
  return (
    <PicWrap>
      <ProfilePic 
        alt='contact profile picture' 
        src={"/images/placeholder.png"} 
        width={88}
        height={88}
      />
      <Btn buttonType={BUTTON_TYPE_CLASSES.BtnLI} type="button">
        <Image 
          alt='plus sign for add img'
          src={"/icons/plus.svg"}
          width={13.5}
          height={13.5}
        />
        Add picture
      </Btn>
    </PicWrap>
  )
}

export default AddImg