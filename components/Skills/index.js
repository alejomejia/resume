import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import axios from 'axios'

import Box from '../Box'
import Heading from '../Heading'
import Tag from '../Tag'

const Skills = ({}) => {
  const theme = useContext(ThemeContext)

  const [hardSkills, setHardSkills] = useState([])
  const [softSkills, setSoftSkills] = useState([])

  useEffect(() => {
    const getSkills = (async) => {
      axios
        .get('/api/skills')
        .then((res) => {
          setHardSkills(res.data[0].skills)
          setSoftSkills(res.data[1].skills)
        })
        .catch((err) => console.err(err))
    }

    getSkills()
  }, [])

  return (
    <Box mb="48px">
      <Heading as="h3" icon="badge" mb="12px">
        Skills
      </Heading>
      <Heading
        as="h4"
        color={theme.colors.text200}
        size={theme.fonts.size.l}
        weight={theme.fonts.weight.regular}
        mb={theme.spacing(1)}
        isItalic
      >
        Hard
      </Heading>
      <Box mb="24px">
        {hardSkills.map((sk) => (
          <span key={sk.id}>{sk.name}</span>
        ))}
      </Box>
      <Heading
        as="h4"
        color={theme.colors.text200}
        size={theme.fonts.size.l}
        weight={theme.fonts.weight.regular}
        mb={theme.spacing(1)}
        isItalic
      >
        Soft
      </Heading>
      <Box mb="24px">
        {softSkills.map((sk) => (
          <span key={sk.id}>{sk.name}</span>
        ))}
      </Box>
    </Box>
  )
}

export default Skills
