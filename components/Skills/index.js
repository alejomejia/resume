import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import Box from '../Box'
import Heading from '../Heading'

const Skills = ({}) => {
  const theme = useContext(ThemeContext)

  return (
    <Box mb="48px">
      <Heading as="h3" icon="badge" mb="12px">
        Skills
      </Heading>
      <Heading
        as="h4"
        color={theme.colors.text200}
        size={theme.fonts.size.l}
        weight={theme.fonts.weight.regular}
        mb={theme.spacing(1)}
        isItalic
      >
        Hard
      </Heading>
      <Box mb="24px">Tags here</Box>
      <Heading
        as="h4"
        color={theme.colors.text200}
        size={theme.fonts.size.l}
        weight={theme.fonts.weight.regular}
        mb={theme.spacing(1)}
        isItalic
      >
        Soft
      </Heading>
      <Box mb="24px">Tags here</Box>
    </Box>
  )
}

export default Skills
