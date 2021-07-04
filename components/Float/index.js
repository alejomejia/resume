import { useContext } from 'react'
import { ThemeContext } from '../../context/theme'
import useSound from 'use-sound'

import Icon from '../Icon'

import { Component } from './styled'

const Float = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext)

  const [switchOn] = useSound('/sounds/switch-on.mp3', {
    playbackRate: 0.75,
    volume: 0.5
  })

  const [switchOff] = useSound('/sounds/switch-off.mp3', {
    playbackRate: 0.75,
    volume: 0.5
  })

  const handleTheme = () => {
    setIsDarkMode(!isDarkMode)
    isDarkMode ? switchOn() : switchOff()
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
