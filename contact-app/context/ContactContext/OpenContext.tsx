import { createContext, SetStateAction, useState } from "react";
import { DefaultContextProps } from "./ContactContext";

//define fallbacks

export const OpenContext = createContext<{
  openAddPopUp: boolean,
  setOpenAddPopUp: SetStateAction<any>
}>({
  openAddPopUp: false,
  setOpenAddPopUp: () => {}
})

//provider

export const OpenProvider = ({ children }: DefaultContextProps) => {
  const [openAddPopUp, setOpenAddPopUp] = useState(false)
  
  const value = {
    openAddPopUp,
    setOpenAddPopUp
  }

  return <OpenContext.Provider value={value}>{children}</OpenContext.Provider>
}