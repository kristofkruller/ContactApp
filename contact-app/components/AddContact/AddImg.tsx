import React, { useContext, useRef, useState } from 'react'
import { BtnSepa, HiddenFileInput, PicWrap, ProfilePic } from './formStyles'
import { Btn, BUTTON_TYPE_CLASSES } from '../Btn/Btn'
import Image from 'next/image'

import { imgStorage } from '../../assets/firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { ButtonSpinner } from '../Btn/btnStyles'
import { ContactContext } from '../../context/ContactContext/ContactContext'
import { Msg } from '../../assets/GlobalStyles/typoStyles'

const AddImg = () => {

  // this SRC is the subject of submit action
  const { profileSrc, setProfileSrc, imgUpLoad, setImgUpload } = useContext(ContactContext)

  // local
  const [loading, isLoading] = useState(false)
  const Input = useRef<HTMLInputElement>(null)
  
  // FUNCTION FOR SUBMITTING FINAL FORM   
  const upLoadImg = () => {

    if (!imgUpLoad || imgUpLoad.length < 1) return;

    isLoading(true)

    const imgRef = ref(imgStorage, `images/${imgUpLoad.name + Math.floor(Math.random() * 10000)}`)

    uploadBytes(imgRef, imgUpLoad).then((snapshot) => getDownloadURL(snapshot.ref).then(url => setProfileSrc(url)))
    
    isLoading(false)

  }

  // HELPER FUNCTIONS FOR SECONDARY EVENTS
  const uploadOnChange = (event) => {
    setImgUpload(event.target.files[0])
  }
  const changePicture = () => {
    setImgUpload(null)
    setProfileSrc("")
    Input.current.click()
  }
  const dump = () => {
    setImgUpload(null)
    setProfileSrc("")
  }

  return (
    <PicWrap>
      {(!imgUpLoad || imgUpLoad.length < 1) ?
        <ProfilePic
            alt='contact profile placeholder'
            src={"/icons/placeholder.png"}
            width={88}
            height={88}
        /> : (imgUpLoad && !profileSrc) ?
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "16px",
          gap: "8px"
        }}>
          <ProfilePic
              alt='contact profile src'
              src={"/icons/placeholder.png"}
              width={10}
              height={10}
          />
          <Msg>{imgUpLoad.name}</Msg>

        </div>
        : 
        <ProfilePic
            alt='contact profile placeholder'
            src={profileSrc}
            width={88}
            height={88}
        />
      }
      { 
        loading ? <ButtonSpinner /> :
        <>
          <HiddenFileInput ref={Input} type="file" onChange={event => uploadOnChange(event)} id="HiddenFileInput"/>
          { !profileSrc || profileSrc.length < 1 ? 
            <Btn buttonType={BUTTON_TYPE_CLASSES.BtnLI} type="button" onClick={upLoadImg}>
              { (!imgUpLoad || imgUpLoad.length < 1) ? 
                <label htmlFor="HiddenFileInput">
                  <Image 
                    alt='plus sign for add img'
                    src={"/icons/plus.svg"}
                    width={13.5}
                    height={13.5}
                  /> 
                  Add picture
                </label> :
                <>
                  <Image 
                    alt='submit for add img'
                    src={"/icons/arrow-left.svg"}
                    width={13.5}
                    height={13.5}
                  /> 
                  Submit
                </> 
              }
            </Btn> :
            <BtnSepa>
              <Btn buttonType={BUTTON_TYPE_CLASSES.BtnLI} type="button" onClick={changePicture}>
                <Image 
                  alt='refresh img'
                  src={"/icons/refresh.svg"}
                  width={16}
                  height={21}
                />     
                Change picture 
              </Btn>
              <Btn buttonType={BUTTON_TYPE_CLASSES.PrimaryBtnI} type="button" onClick={dump}>
                <Image 
                  alt='dumpster for deleting choosen picture'
                  src={"/icons/delete.svg"}
                  width={13.5}
                  height={17}
                />  
              </Btn>
            </BtnSepa>
          }
        </>
      }
    </PicWrap>
  )
}

export default AddImg