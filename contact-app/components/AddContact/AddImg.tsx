import React, { useContext, useEffect, useRef, useState } from 'react'
import { BtnSepa, HiddenFileInput, LaberForInput, PicWrap, ProfilePic } from './formStyles'
import { Btn, BUTTON_TYPE_CLASSES } from '../Btn/Btn'
import Image from 'next/image'

import { deleteImage, imgStorage } from '../../assets/firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { ButtonSpinner } from '../Btn/btnStyles'
import { ContactContext } from '../../context/ContactContext'
import { Msg } from '../../assets/GlobalStyles/typoStyles'
import { PutLoadingContext } from '../../context/PutLoadingContext'

const AddImg = () => {

  // this SRC is the subject of submit action
  const { profileSrc, setProfileSrc, imgUpLoad, setImgUpload, updateE } = useContext(ContactContext)
  const { updateLoading } = useContext(PutLoadingContext)

  // local
  const [loading, isLoading] = useState(false)
  const Input = useRef<HTMLInputElement>(null)
  
  // FUNCTION FOR SUBMITTING FINAL FORM   
  const upLoadImg = () => {

    if (!imgUpLoad || imgUpLoad.length < 1) return;

    isLoading(true)

    const imgRef = ref(imgStorage, `images/${imgUpLoad.name + Math.floor(Math.random() * 10000)}`)

    uploadBytes(imgRef, imgUpLoad).then((snapshot) => getDownloadURL(snapshot.ref).then(url => setProfileSrc(url)))
    
    setTimeout(() => {
      isLoading(false)
    }, 400);

  }

  // HELPER FUNCTIONS FOR SECONDARY EVENTS
  const uploadOnChange = (event) => {
    setImgUpload(event.target.files[0])
  }
  const changePicture = async () => {
    await deleteImage(profileSrc)
    setImgUpload(null)
    setProfileSrc("")
    Input.current.click()
  }
  const dump = async () => {
    await deleteImage(profileSrc)
    setImgUpload(null)
    setProfileSrc("")
  }

  const mountingViaEdit = () => {
    setProfileSrc(updateE.url)
    setImgUpload(updateE.url)
  }

  useEffect(() => {
    if (!updateLoading) return
    mountingViaEdit();
  },[])

  return (
    <PicWrap>
      {(!imgUpLoad || imgUpLoad.length < 1 && !updateLoading) ?
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
              src={updateLoading ? updateE.url : profileSrc}
              width={88}
              height={88}
          />
      }
      { 
        loading && !updateLoading ?  <ButtonSpinner /> : updateLoading ? <></> : 
        <>
          <HiddenFileInput ref={Input} type="file" onChange={event => uploadOnChange(event)} id="HiddenFileInput"/>
          { !profileSrc || profileSrc.length < 1 ? 
            <Btn buttonType={BUTTON_TYPE_CLASSES.PrimaryBtnLIAnim} type="button" onClick={upLoadImg} style={{padding: 0}}>
              { (!imgUpLoad || imgUpLoad.length < 1) ? 
                <LaberForInput htmlFor="HiddenFileInput">
                  <Image 
                    alt='plus sign for add img'
                    src={"/icons/plus.svg"}
                    width={13.5}
                    height={13.5}
                  /> 
                  Add picture
                </LaberForInput> :
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
              <Btn buttonType={BUTTON_TYPE_CLASSES.PrimaryBtnLIAnim} type="button" onClick={changePicture}>
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