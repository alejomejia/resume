import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import Box from '../Box'
import Heading from '../Heading'
import Flex from '../Flex'
import Icon from '../Icon'

import { Link } from './styled'

const Social = ({}) => {
  const theme = useContext(ThemeContext)

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
        >
          <Icon name="linkedin" width={32} />
        </Link>
        <Link
          href="https://github.com/alejomejia"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="github" width={32} />
        </Link>
      </Flex>
    </Box>
  )
}

export default Social
