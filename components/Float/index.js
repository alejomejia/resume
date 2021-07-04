import { useContext } from 'react'
import { ThemeContext } from '../../context/theme'

import Icon from '../Icon'

import { Component } from './styled'

const Float = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext)

  const handleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <Component className="float">
      <button
        className="float__switch float__switch--theme"
        onClick={handleTheme}
      >
        <Icon name={isDarkMode ? 'moon' : 'sun'} width={24} />
      </button>
      <button className="float__switch float__switch--sound">
        <Icon name="volume" width={24} />
      </button>
    </Component>
  )
}

export default Float
