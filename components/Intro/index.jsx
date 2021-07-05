import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import Box from 'components/Box'
import Heading from 'components/Heading'
import Icon from 'components/Icon'

import Purple from './svg/Purple'
import Cyan from './svg/Cyan'

import { Component } from './styled'

const Intro = () => {
  const theme = useContext(ThemeContext)

  return (
    <Component className="intro">
      <div className="content">
        <span className="content__hello">👋🏻</span>
        <span className="content__preffix">My name is</span>
        <h1 className="content__name">Alejandro Mejia</h1>
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
          <Purple />
        </div>
        <div className="art__figure-2">
          <Cyan />
        </div>
      </div>
    </Component>
  )
}

export default Intro
