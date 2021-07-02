import Box from '../Box'
import Heading from '../Heading'
import Flex from '../Flex'
import Icon from '../Icon'

import { Link } from './styled'

const Social = ({}) => {
  return (
    <Box mb="48px">
      <Heading as="h3" icon="speaker" mb="12px">
        Social
      </Heading>
      <Flex wrap="wrap" gap="8px">
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
