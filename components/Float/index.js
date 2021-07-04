import { useContext } from 'react'
import { store } from '../../context/store'
import useSound from 'use-sound'

import Icon from '../Icon'
import Boop from '../Boop'

import { Component } from './styled'

const Float = () => {
  const { isDarkMode, setIsDarkMode } = useContext(store)

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
        <Boop config={{ rotate: 48 }}>
          <Icon name={isDarkMode ? 'moon' : 'sun'} width={24} />
        </Boop>
      </button>
      <button className="float__switch float__switch--sound">
        <Boop config={{ rotate: 8 }}>
          <Icon name="volume" width={24} />
        </Boop>
      </button>
    </Component>
  )
}

export default Float
