import { useState, useEffect, useContext } from 'react'
import { store } from 'context/store'
import { useTheme } from 'next-themes'
import useSound from 'use-sound'

import Icon from 'components/Icon'
import Boop from 'components/Boop'

import { Component } from './styled'

const Float = () => {
  const { theme, systemTheme, setTheme } = useTheme()
  const { isSoundEnable, setIsSoundEnable } = useContext(store)

  const [browserTheme, setBrowserTheme] = useState('')

  const [popEnter] = useSound('/sounds/pop.mp3', {
    playbackRate: 1.5,
    volume: 0.5,
    soundEnabled: isSoundEnable
  })

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

  const handleSounds = () => {
    setIsSoundEnable(!isSoundEnable)
    isSoundEnable ? soundOff() : soundOn()
  }

  useEffect(() => {
    const browserTheme = document.documentElement.getAttribute('data-theme')
    setBrowserTheme(browserTheme)
  }, [systemTheme, theme])

  const handleTheme = () => {
    const isDarkMode = browserTheme === 'dark'
    setTheme(isDarkMode ? 'light' : 'dark')
    isDarkMode ? themeOff() : themeOn()
  }

  const handleMouseEnter = () => {
    popEnter()
  }

  return (
    <Component className="float">
      <button
        className="float__switch float__switch--theme"
        onClick={handleTheme}
        onMouseEnter={handleMouseEnter}
      >
        <Boop config={{ rotate: 48 }}>
          <Icon name={browserTheme === 'dark' ? 'moon' : 'sun'} width={24} />
        </Boop>
      </button>
      <button
        className="float__switch float__switch--sound"
        onClick={handleSounds}
        onMouseEnter={handleMouseEnter}
      >
        <Boop config={{ rotate: 8 }}>
          <Icon name="volume" width={24} />
        </Boop>
      </button>
    </Component>
  )
}

export default Float
