import Box from '../Box'
import Heading from '../Heading'
import Flex from '../Flex'
import Tag from '../Tag'

const Languages = ({}) => {
  return (
    <Box mb="48px">
      <Heading as="h3" icon="chat" mb="12px">
        Languages
      </Heading>
      <Flex wrap="wrap" gap="8px">
        <Tag>English - Advanced</Tag>
        <Tag>Spanish - Native</Tag>
      </Flex>
    </Box>
  )
}

export default Languages
