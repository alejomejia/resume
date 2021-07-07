import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import useAxios from 'hooks/use-axios'

import Heading from 'components/Heading'

import Item from './Item'
import Skeleton from './Skeleton'
import { Component } from './styled'

const Experience = ({}) => {
  const theme = useContext(ThemeContext)
  const { response } = useAxios('/experience')

  const experience = response

  return (
    <Component className="experience">
      <Heading as="h3" icon="briefcase" mb={theme.spacing(3)}>
        Relevant Experience
      </Heading>
      {experience ? (
        experience.map((item) => (
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
        ))
      ) : (
        <Skeleton />
      )}
    </Component>
  )
}

export default Experience
