import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import Box from '../Box'
import Heading from '../Heading'
import Icon from '../Icon'

// @TODO Improve component naming here
import Figure1 from './svg/Purple'
import Figure2 from './svg/Cyan'

import { Component } from './styled'

const Intro = () => {
  const theme = useContext(ThemeContext)

  return (
    <Box mb={theme.spacing(6)} pt={theme.spacing(5)}>
      <Component className="intro">
        <div className="content">
          <span className="content__hello">👋🏻</span>
          <span className="content__preffix">My name is</span>
          <Heading
            color={theme.palette.white}
            size={theme.fonts.size.xxxl}
            mb={theme.spacing(2)}
          >
            Alejandro Mejia
          </Heading>
          <Heading
            as="h2"
            color={theme.palette.white}
            size={theme.fonts.size.l}
            family="secondary"
            weight={theme.fonts.weight.light}
          >
            Product Developer
          </Heading>
          <span className="content__location">From Medellin, CO 🇨🇴</span>
          <div className="content__contact">
            <span className="content__icon">
              <Icon name="mail" fill="#fff" />
            </span>
            <span className="content__email">
              <a href="mailto:alejomejiacuartas@outlook.com">
                alejomejiacuartas@outlook.com
              </a>
            </span>
          </div>
        </div>
        <div className="art">
          <div className="art__figure-1">
            <Figure1 />
          </div>
          <div className="art__figure-2">
            <Figure2 />
          </div>
        </div>
      </Component>
    </Box>
  )
}

export default Intro
