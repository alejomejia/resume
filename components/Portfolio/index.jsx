import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import useAxios from 'hooks/use-axios'

import Heading from 'components/Heading'

import Item from './Item'
import Skeleton from './Skeleton'
import { Component } from './styled'

const Portfolio = () => {
  const theme = useContext(ThemeContext)
  const { response } = useAxios('/portfolio')

  const portfolio = response

  return (
    <Component className="portfolio">
      <Heading as="h3" icon="fire" mb={theme.spacing(3)}>
        Portfolio
      </Heading>
      <div className="portfolio__grid">
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
      </div>
    </Component>
  )
}

export default Portfolio
