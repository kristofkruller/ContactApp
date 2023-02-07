import { createContext, SetStateAction, useState } from "react";
import { DefaultContextProps } from "./ContactContext";

//define fallbacks

export const PutLoadingContext = createContext<{
  updateLoading: boolean,
  setUpdateLoading: SetStateAction<any>,
}>({
  updateLoading: false,
  setUpdateLoading: () => {},
})

//provider

export const PutLoadingProvider = ({ children }: DefaultContextProps) => {
  const [updateLoading, setUpdateLoading] = useState(false)

  const value = {
    updateLoading, setUpdateLoading
  }

  return <PutLoadingContext.Provider value={value}>{children}</PutLoadingContext.Provider>
}