import { useContext } from 'react'
import { store } from 'context/store'
import useSound from 'use-sound'

import Icon from 'components/Icon'
import Boop from 'components/Boop'

import { Component } from './styled'

const Float = () => {
  const { isDarkMode, setIsDarkMode, isSoundEnable, setIsSoundEnable } =
    useContext(store)

  const [themeOn] = useSound('/sounds/theme-on.mp3', {
    playbackRate: 0.75,
    volume: 0.5,
    soundEnabled: isSoundEnable
  })

  const [themeOff] = useSound('/sounds/theme-off.mp3', {
    playbackRate: 0.75,
    volume: 0.5,
    soundEnabled: isSoundEnable
  })

  const [soundOn] = useSound('/sounds/sound-on.mp3', {
    playbackRate: 0.9,
    volume: 0.5
  })

  const [soundOff] = useSound('/sounds/sound-off.mp3', {
    playbackRate: 0.9,
    volume: 0.5
  })

  const handleTheme = () => {
    setIsDarkMode(!isDarkMode)
    isDarkMode ? themeOff() : themeOn()
  }

  const handleSounds = () => {
    setIsSoundEnable(!isSoundEnable)
    isSoundEnable ? soundOff() : soundOn()
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
