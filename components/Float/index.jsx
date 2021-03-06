import { useState, useEffect, useContext } from 'react'
import { store } from 'context/store'
import { useTheme } from 'next-themes'
import useSound from 'use-sound'

import * as gtag from 'lib/gtag'

import Icon from 'components/Icon'
import Boop from 'components/Boop'

import * as S from './styled'

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

    gtag.event({ action: 'sound_trigger', category: 'widgets' })
  }

  useEffect(() => {
    const browserTheme = document.documentElement.getAttribute('data-theme')
    setBrowserTheme(browserTheme)
  }, [systemTheme, theme])

  const handleTheme = () => {
    const isDarkMode = browserTheme === 'dark'
    setTheme(isDarkMode ? 'light' : 'dark')
    isDarkMode ? themeOff() : themeOn()
    gtag.event({ action: 'theme_trigger', category: 'widgets' })
  }

  const handleMouseEnter = () => popEnter()

  return (
    <S.Wrapper>
      <S.Button
        onClick={handleTheme}
        onMouseEnter={handleMouseEnter}
        aria-label="Switch theme"
      >
        <Boop config={{ rotate: 48 }}>
          <Icon name={browserTheme === 'dark' ? 'moon' : 'sun'} width={24} />
        </Boop>
      </S.Button>
      <S.Button
        onClick={handleSounds}
        onMouseEnter={handleMouseEnter}
        aria-label={isSoundEnable ? 'Turn off sounds' : 'Turn on sounds'}
      >
        <Boop config={{ rotate: 8 }}>
          <Icon name="volume" width={24} />
        </Boop>
      </S.Button>
    </S.Wrapper>
  )
}

export default Float
