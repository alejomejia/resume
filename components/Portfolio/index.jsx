import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import axios from 'axios'

import Box from 'components/Box'
import Heading from 'components/Heading'
import Grid from 'components/Grid'
import Item from './Item'

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
        .catch((err) => console.err(err))
    }

    getPortfolio()
  }, [])

  return (
    <Box as="section" mb={theme.spacing(6)}>
      <Heading as="h3" icon="fire" mb={theme.spacing(3)}>
        Portfolio
      </Heading>
      <Grid gap="24px" columns="calc(50% - 12px) calc(50% - 12px)">
        {portfolio.map((item) => (
          <Item
            key={item.id}
            title={item.title}
            stack={item.stack}
            image={item.image}
            external={item.external}
          />
        ))}
      </Grid>
    </Box>
  )
}

export default Portfolio
