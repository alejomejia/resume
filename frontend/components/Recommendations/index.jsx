import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import useAxios from 'hooks/use-axios'

import Heading from 'components/Heading'

import Item from './Item'
import Skeleton from './Skeleton'
import * as S from './styled'

const Recommendations = () => {
  const theme = useContext(ThemeContext)
  const { response: recommendations } = useAxios('/recommendations')

  return (
    <S.Wrapper>
      <Heading as="h3" icon="bolt" mb={theme.spacing(3)}>
        Recommendations
      </Heading>
      {recommendations ? (
        recommendations.map((item) => (
          <Item
            key={item.id}
            image={item.image}
            name={item.name}
            company={item.company}
            link={item.link}
            title={item.title}
            description={item.description}
          />
        ))
      ) : (
        <Skeleton />
      )}
      <small>
        If you want to check these and more recommendations of my work, please
        take a look to my{' '}
        <a
          href="https://www.linkedin.com/in/alejandromejiac/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn profile
        </a>
        .
      </small>
    </S.Wrapper>
  )
}

export default Recommendations
