import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import useSound from 'use-sound'

import { store } from 'context/store'

import Heading from 'components/Heading'
import Boop from 'components/Boop'
import Button from 'components/Button'

import { Component } from './styled'

const About = () => {
  const theme = useContext(ThemeContext)
  const { isSoundEnable } = useContext(store)

  const [popEnter] = useSound('/sounds/pop.mp3', {
    playbackRate: 1.1,
    volume: 0.5,
    soundEnabled: isSoundEnable
  })

  const [popClick] = useSound('/sounds/pop.mp3', {
    playbackRate: 1.2,
    volume: 0.5,
    soundEnabled: isSoundEnable
  })

  const handleOnEnter = () => popEnter()

  const handleOnClick = () => popClick()

  return (
    <Component className="about">
      <div className="about__wrapper">
        <Heading as="h3" icon="pencil" mb={theme.spacing(2)}>
          About Me
        </Heading>
        <div className="about__content">
          <p>
            I’m a passionate <strong>Product Developer</strong> with 8 years of
            experience coding awesome websites and app interfaces in different
            digital agencies and software companies.
          </p>
          <p>
            I like to learn all the time about new frontend technologies and UI
            trends. In my free time, I like to play videogames, watch TV series
            and movies, travel and ride in my motorcycle.
          </p>
        </div>
        <Boop config={{ y: -3 }}>
          <Button
            icon="arrow"
            onClick={handleOnClick}
            onMouseEnter={handleOnEnter}
          >
            Download in PDF
          </Button>
        </Boop>
      </div>
    </Component>
  )
}

export default About
