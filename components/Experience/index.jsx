import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import axios from 'axios'

import Heading from 'components/Heading'
import Item from './Item'

import { Component } from './styled'

const Experience = ({}) => {
  const theme = useContext(ThemeContext)

  const [experience, setExperience] = useState([])

  useEffect(() => {
    const getExperience = (async) => {
      axios
        .get('/api/experience')
        .then((res) => {
          setExperience(res.data)
        })
        .catch((err) => console.error(err))
    }

    getExperience()
  }, [])

  return (
    <Component className="experience">
      <Heading as="h3" icon="briefcase" mb={theme.spacing(3)}>
        Relevant Experience
      </Heading>
      {experience.map((item) => (
        <Item
          key={item.id}
          image={item.image}
          title={item.title}
          at={item.at}
          link={item.link}
          startDate={item.startDate}
          endDate={item.endDate}
          description={item.description}
        />
      ))}
    </Component>
  )
}

export default Experience
