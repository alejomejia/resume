import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import axios from 'axios'

import Box from 'components/Box'
import Heading from 'components/Heading'
import Item from './Item'

const Recommendations = ({}) => {
  const theme = useContext(ThemeContext)

  const [recommendations, setRecommendations] = useState([])

  useEffect(() => {
    const getRecommendations = (async) => {
      axios
        .get('/api/recommendations')
        .then((res) => {
          setRecommendations(res.data)
        })
        .catch((err) => console.err(err))
    }

    getRecommendations()
  }, [])

  return (
    <Box as="section" mb={theme.spacing(6)}>
      <Heading as="h3" icon="bolt" mb={theme.spacing(3)}>
        Recommendations
      </Heading>
      {recommendations.map((item) => (
        <Item
          key={item.id}
          image={item.image}
          name={item.name}
          company={item.company}
          link={item.link}
          title={item.title}
          description={item.description}
        />
      ))}
      <small>
        These are real <strong>recommendations</strong>. You can take a look on
        my{' '}
        <a
          href="https://www.linkedin.com/in/alejandromejiac/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn profile
        </a>
        .
      </small>
    </Box>
  )
}

export default Recommendations
