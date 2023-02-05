import { createContext, SetStateAction, useState } from "react";
import { DefaultContextProps } from "./ContactContext";

//define fallbacks

export const OpenContext = createContext<{
  openAddPopUp: boolean,
  setOpenAddPopUp: SetStateAction<any>,
  displayRowSettings: () => void
}>({
  openAddPopUp: false,
  setOpenAddPopUp: () => {},
  displayRowSettings: () => {}
})

//provider

export const OpenProvider = ({ children }: DefaultContextProps) => {
  const [openAddPopUp, setOpenAddPopUp] = useState(false)
  const [rowSettings, setRowSettings] = useState(false)

  const displayRowSettings = () => setRowSettings(!rowSettings)

  const value = {
    openAddPopUp,
    setOpenAddPopUp,
    displayRowSettings
  }

  return <OpenContext.Provider value={value}>{children}</OpenContext.Provider>
}