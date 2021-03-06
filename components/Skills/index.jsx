import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import useAxios from 'hooks/use-axios'

import Box from 'components/Box'
import Heading from 'components/Heading'
import Flex from 'components/Flex'
import Tag from 'components/Tag'

import Skeleton from './Skeleton'
import * as S from './styled'

const Skills = ({}) => {
  const theme = useContext(ThemeContext)
  const { response } = useAxios('/skills')

  const hardSkills = response && response[0].skills
  const softSkills = response && response[1].skills

  return (
    <S.Wrapper className="skills">
      <Heading as="h3" icon="badge" mb={theme.spacing(1.5)}>
        Skills
      </Heading>
      <Heading
        as="h4"
        size={theme.fonts.size.l}
        weight={theme.fonts.weight.regular}
        mb={theme.spacing(1)}
        isItalic
      >
        Hard
      </Heading>
      <Box mb={theme.spacing(3)}>
        <Flex as="ul" wrap="wrap" gap={theme.spacing(1)}>
          {hardSkills ? (
            hardSkills.map((sk) => <Tag key={sk.id}>{sk.name}</Tag>)
          ) : (
            <Skeleton pills={15} />
          )}
        </Flex>
      </Box>
      <Heading
        as="h4"
        size={theme.fonts.size.l}
        weight={theme.fonts.weight.regular}
        mb={theme.spacing(1)}
        isItalic
      >
        Soft
      </Heading>
      <Box mb={theme.spacing(3)}>
        <Flex as="ul" wrap="wrap" gap={theme.spacing(1)}>
          {softSkills ? (
            softSkills.map((sk) => <Tag key={sk.id}>{sk.name}</Tag>)
          ) : (
            <Skeleton pills={10} />
          )}
        </Flex>
      </Box>
    </S.Wrapper>
  )
}

export default Skills
