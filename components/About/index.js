import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import Box from '../Box'
import Heading from '../Heading'
import Button from '../Button'

import { Component } from './styled'

const About = () => {
  const theme = useContext(ThemeContext)

  return (
    <Component className="about">
      <Box mb={theme.spacing(6)} pt={theme.spacing(10)} pb={theme.spacing(5)}>
        <Heading as="h3" icon="pencil" mb={theme.spacing(2)}>
          About Me
        </Heading>
        <Box mb={theme.spacing(4)}>
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
        </Box>
        <Button icon="arrow">Download CV</Button>
      </Box>
    </Component>
  )
}

export default About
