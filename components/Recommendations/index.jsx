import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import axios from 'axios'

import Heading from 'components/Heading'
import Item from './Item'

import { Component } from './styled'

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
        .catch((err) => console.error(err))
    }

    getRecommendations()
  }, [])

  return (
    <Component className="recommendations">
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
    </Component>
  )
}

export default Recommendations
