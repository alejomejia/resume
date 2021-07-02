import Icon from '../Icon'
import Figure1 from './svg/Purple'
import Figure2 from './svg/Cyan'

import { Component } from './styled'

const Intro = () => {
  return (
    <Component className="intro">
      <div className="content">
        <span className="content__hello">👋🏻</span>
        <span className="content__preffix">My name is</span>
        <h1 className="content__name">Alejandro Mejia</h1>
        <h2 className="content__job-title">Product Developer</h2>
        <span className="content__location">From Medellin, CO 🇨🇴</span>
        <div className="content__contact">
          <Icon name="mail" fill="#fff" />
          <span className="content__email">alejomejiacuartas@outlook.com</span>
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
  )
}

export default Intro
