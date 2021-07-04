import { useContext } from 'react'
import { store } from '../../context/store'
import useSound from 'use-sound'

import Icon from '../Icon'
import Boop from '../Boop'

import { Component } from './styled'

const Float = () => {
  const { isDarkMode, setIsDarkMode, isSoundEnable, setIsSoundEnable } =
    useContext(store)

  const [switchOn] = useSound('/sounds/switch-on.mp3', {
    playbackRate: 0.75,
    volume: 0.5,
    soundEnabled: isSoundEnable
  })

  const [switchOff] = useSound('/sounds/switch-off.mp3', {
    playbackRate: 0.75,
    volume: 0.5,
    soundEnabled: isSoundEnable
  })

  const handleTheme = () => {
    setIsDarkMode(!isDarkMode)
    isDarkMode ? switchOn() : switchOff()
  }

  const handleSounds = () => {
    setIsSoundEnable(!isSoundEnable)
  }

  return (
    <Component className="float">
      <button
        className="float__switch float__switch--theme"
        onClick={handleTheme}
      >
        <Boop config={{ rotate: 48 }}>
          <Icon name={isDarkMode ? 'moon' : 'sun'} width={24} />
        </Boop>
      </button>
      <button
        className="float__switch float__switch--sound"
        onClick={handleSounds}
      >
        <Boop config={{ rotate: 8 }}>
          <Icon name="volume" width={24} />
        </Boop>
      </button>
    </Component>
  )
}

export default Float
