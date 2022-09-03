import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import useSound from 'use-sound'

import { store } from 'context/store'
import * as gtag from 'lib/gtag'

import Heading from 'components/Heading'
import Boop from 'components/Boop'
import Button from 'components/Button'

import * as S from './styled'

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

  const handleOnClick = () => {
    popClick()
    gtag.event({ action: 'download_pdf', category: 'cta' })
  }

  return (
    <S.Wrapper>
      <S.Container>
        <Heading as="h3" icon="user" mb={theme.spacing(2)}>
          About Me
        </Heading>
        <S.Content>
          <p>
            I’m a passionate, proactive, with keen eye for details,{' '}
            <strong>Frontend Developer</strong> with 8 years of experience in the IT industry. 
            My passion is to build and maintain <strong>websites and applications</strong> in{' '}
            <strong>NextJS / ReactJS and Storybook</strong>, working together
            with design and development teams.
          </p>
          <p>In my free time I like to study 📚 and play videogames 👾.</p>
        </S.Content>
        <Boop config={{ y: -3 }}>
          <Button
            as="a"
            href="/resume-alejandro-mejia-frontend.pdf"
            icon="arrow"
            onClick={handleOnClick}
            onMouseEnter={handleOnEnter}
            download
          >
            Download in PDF
          </Button>
        </Boop>
      </S.Container>
    </S.Wrapper>
  )
}

export default About
