import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import axios from 'axios'

import Heading from 'components/Heading'
import Item from './Item'

import { Component } from './styled'

const Portfolio = ({}) => {
  const theme = useContext(ThemeContext)

  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    const getPortfolio = (async) => {
      axios
        .get('/api/portfolio')
        .then((res) => {
          setPortfolio(res.data)
        })
        .catch((err) => console.error(err))
    }

    getPortfolio()
  }, [])

  return (
    <Component className="portfolio">
      <Heading as="h3" icon="fire" mb={theme.spacing(3)}>
        Portfolio
      </Heading>
      <div className="portfolio__grid">
        {portfolio.map((item) => (
          <Item
            key={item.id}
            title={item.title}
            stack={item.stack}
            image={item.image}
            external={item.external}
          />
        ))}
      </div>
    </Component>
  )
}

export default Portfolio
