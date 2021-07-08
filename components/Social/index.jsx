import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import useSound from 'use-sound'

import { store } from 'context/store'
import * as gtag from 'lib/gtag'

import Heading from 'components/Heading'
import Flex from 'components/Flex'
import Icon from 'components/Icon'
import Boop from 'components/Boop'

import { Component, Link } from './styled'

const Social = ({}) => {
  const theme = useContext(ThemeContext)
  const { isSoundEnable } = useContext(store)

  const [popEnter] = useSound('/sounds/pop.mp3', {
    playbackRate: 0.9,
    volume: 0.5,
    soundEnabled: isSoundEnable
  })

  const [popClick] = useSound('/sounds/pop.mp3', {
    volume: 0.5,
    soundEnabled: isSoundEnable
  })

  const handleOnEnter = () => popEnter()

  const handleClick = (e) => {
    popClick()

    const social = e.currentTarget.dataset.social
    gtag.event({ action: `social_${social}`, category: 'social' })
  }

  return (
    <Component className="social">
      <Heading as="h3" icon="speaker" mb={theme.spacing(1.5)}>
        Social
      </Heading>
      <Flex wrap="wrap" gap={theme.spacing(1)}>
        <Link
          href="https://www.linkedin.com/in/alejandromejiac/"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={handleOnEnter}
          onClick={handleClick}
          data-social="linkedin"
        >
          <Boop config={{ y: -3 }}>
            <Icon name="linkedin" width={32} />
          </Boop>
        </Link>
        <Link
          href="https://github.com/alejomejia"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={handleOnEnter}
          onClick={handleClick}
          data-social="github"
        >
          <Boop config={{ y: -3 }}>
            <Icon name="github" width={32} />
          </Boop>
        </Link>
      </Flex>
    </Component>
  )
}

export default Social
