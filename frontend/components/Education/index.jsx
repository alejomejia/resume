import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import useAxios from 'hooks/use-axios'

import Heading from 'components/Heading'
import Flex from 'components/Flex'

import Item from './Item'
import Skeleton from './Skeleton'
import * as S from './styled'

const Education = ({}) => {
  const theme = useContext(ThemeContext)
  const { response: education } = useAxios('/education')

  return (
    <S.Wrapper className="Education">
      <Heading as="h3" icon="academic" mb={theme.spacing(1.5)}>
        Education
      </Heading>
      <Flex as="ul" direction="column" wrap="wrap" gap={theme.spacing(1)}>
        {education ? (
          education.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              at={item.at}
              link={item.link}
            />
          ))
        ) : (
          <Skeleton items={6} />
        )}
      </Flex>
    </S.Wrapper>
  )
}

export default Education
