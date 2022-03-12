import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import useAxios from 'hooks/use-axios'

import Heading from 'components/Heading'

import Item from './Item'
import Skeleton from './Skeleton'
import * as S from './styled'

const Portfolio = () => {
  const theme = useContext(ThemeContext)
  const { response: portfolio } = useAxios('/portfolio')

  return (
    <S.Wrapper>
      <Heading as="h3" icon="fire" mb={theme.spacing(3)}>
        Portfolio
      </Heading>
      <S.Grid>
        {portfolio ? (
          portfolio.map((item) => (
            <Item
              key={item.id}
              title={item.title}
              stack={item.stack}
              image={item.image}
              external={item.external}
            />
          ))
        ) : (
          <Skeleton />
        )}
      </S.Grid>
    </S.Wrapper>
  )
}

export default Portfolio
