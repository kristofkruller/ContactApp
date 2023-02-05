import { createContext, SetStateAction, useState } from "react";

export interface DefaultContextProps {
  children: React.ReactNode
}

//define fallbacks

export const ContactContext = createContext<{
  contactsState: any[],
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