import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import Heading from 'components/Heading'
import Button from 'components/Button'

import { Component } from './styled'

const About = () => {
  const theme = useContext(ThemeContext)

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
        <Button icon="arrow">Download CV</Button>
      </div>
    </Component>
  )
}

export default About
