import { useState, createContext } from 'react'

export const store = createContext()

export const StoreProvider = ({ children }) => {
  const [isSoundEnable, setIsSoundEnable] = useState(true)

  return (
    <store.Provider value={{ isSoundEnable, setIsSoundEnable }}>
      {children}
    </store.Provider>
  )
}
