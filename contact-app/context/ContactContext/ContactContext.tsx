import { createContext, SetStateAction, useState } from "react";
import { Contact } from "@prisma/client";


export interface DefaultContextProps {
  children: React.ReactNode
}

//define fallbacks

export const ContactContext = createContext<{
  contactsState: Contact[],
  setContactData: SetStateAction<any>
}>({
  contactsState: [],
  setContactData: () => {}
})

//provider

export const ContactProvider = ({ children }: DefaultContextProps) => {
  const [contactsState, setContactData] = useState([])
  
  const value = {
    contactsState,
    setContactData
  }

  return <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
}