import { createContext, SetStateAction, useState } from "react";

export interface DefaultContextProps {
  children: React.ReactNode
}
export interface ExtendedContact {
  id: number;
  name: string;
  phone: string;
  email: string;
  url: string
}

//define fallbacks

export const ContactContext = createContext<{
  contactsState: ExtendedContact[],
  setContactData: SetStateAction<any>,
  profileSrc: string,
  setProfileSrc: SetStateAction<any>,
  imgUpLoad: File | null, 
  setImgUpload: SetStateAction<any>,
  updateE: ExtendedContact,
  setToPutE: SetStateAction<any>
}>({
  contactsState: [],
  setContactData: () => {},
  profileSrc: "",
  setProfileSrc: () => {},
  imgUpLoad: null, 
  setImgUpload: () => {},
  updateE: null,
  setToPutE: () => {}
})

//provider

export const ContactProvider = ({ children }: DefaultContextProps) => {
  const [contactsState, setContactData] = useState([])
  const [imgUpLoad, setImgUpload] = useState(null)
  const [profileSrc, setProfileSrc] = useState("")
  const [updateE, setToPutE] = useState(null)

  const value = {
    contactsState,
    setContactData,
    profileSrc, 
    setProfileSrc,
    imgUpLoad, 
    setImgUpload,
    updateE,
    setToPutE
  }

  return <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
}