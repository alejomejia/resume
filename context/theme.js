import { useState, createContext } from 'react'

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
