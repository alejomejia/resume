import { useState, createContext } from 'react'

export const store = createContext()

export const StoreProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isSoundEnable, setIsSoundEnable] = useState(true)

  return (
    <store.Provider
      value={{ isDarkMode, setIsDarkMode, isSoundEnable, setIsSoundEnable }}
    >
      {children}
    </store.Provider>
  )
}
