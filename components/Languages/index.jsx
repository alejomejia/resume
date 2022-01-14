import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import Heading from 'components/Heading'
import Flex from 'components/Flex'
import Tag from 'components/Tag'

import * as S from './styled'

const Languages = ({}) => {
  const theme = useContext(ThemeContext)

  return (
    <S.Wrapper>
      <Heading as="h3" icon="chat" mb={theme.spacing(1.5)}>
        Languages
      </Heading>
      <Flex as="ul" wrap="wrap" gap={theme.spacing(1)}>
        <Tag>English - Advanced</Tag>
        <Tag>Spanish - Native</Tag>
      </Flex>
    </S.Wrapper>
  )
}

export default Languages
