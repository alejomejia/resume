import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import Box from '../Box'
import Heading from '../Heading'
import Flex from '../Flex'
import Tag from '../Tag'

const Languages = ({}) => {
  const theme = useContext(ThemeContext)

  return (
    <Box mb={theme.spacing(6)}>
      <Heading as="h3" icon="chat" mb={theme.spacing(1.5)}>
        Languages
      </Heading>
      <Flex wrap="wrap" gap={theme.spacing(1)}>
        <Tag>English - Advanced</Tag>
        <Tag>Spanish - Native</Tag>
      </Flex>
    </Box>
  )
}

export default Languages
