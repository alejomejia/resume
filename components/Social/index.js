import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import useSound from 'use-sound'

import Box from '../Box'
import Heading from '../Heading'
import Flex from '../Flex'
import Icon from '../Icon'
import Boop from '../Boop'

import { Link } from './styled'

const Social = ({}) => {
  const theme = useContext(ThemeContext)

  const [popEnter] = useSound('/sounds/pop.mp3', {
    volume: 0.1
  })

  const [popClick] = useSound('/sounds/pop.mp3', {
    playbackRate: 0.9,
    volume: 0.1
  })

  const handleOnEnter = () => popEnter()

  const handleOnClick = () => popClick()

  return (
    <Box mb={theme.spacing(6)}>
      <Heading as="h3" icon="speaker" mb={theme.spacing(1.5)}>
        Social
      </Heading>
      <Flex wrap="wrap" gap={theme.spacing(1)}>
        <Link
          href="https://www.linkedin.com/in/alejandromejiac/"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={handleOnEnter}
          onClick={handleOnClick}
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
          onClick={handleOnClick}
        >
          <Boop config={{ y: -3 }}>
            <Icon name="github" width={32} />
          </Boop>
        </Link>
      </Flex>
    </Box>
  )
}

export default Social
