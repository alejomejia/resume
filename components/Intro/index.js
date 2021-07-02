import Box from '../Box'
import Icon from '../Icon'

// @TODO Improve component naming here
import Figure1 from './svg/Purple'
import Figure2 from './svg/Cyan'

import { Component } from './styled'

const Intro = () => {
  return (
    <Box mb="48px">
      <Component className="intro">
        <div className="content">
          <span className="content__hello">👋🏻</span>
          <span className="content__preffix">My name is</span>
          <h1 className="content__name">Alejandro Mejia</h1>
          <h2 className="content__job-title">Product Developer</h2>
          <span className="content__location">From Medellin, CO 🇨🇴</span>
          <div className="content__contact">
            <span className="content__icon">
              <Icon name="mail" fill="#fff" />
            </span>
            <span className="content__email">
              alejomejiacuartas@outlook.com
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
