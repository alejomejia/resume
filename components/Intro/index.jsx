import * as gtag from 'lib/gtag'

import Icon from 'components/Icon'

import Hello from './Hello'
import ArtCenter from './svg/Center'
import ArtSpinner from './svg/Spinner'

import { Component } from './styled'

const Intro = () => {
  const gtagEventEmail = () => {
    gtag.event({ action: 'send_email', category: 'link' })
  }

  return (
    <Component className="intro">
      <div className="content">
        <span className="content__hello">
          <Hello />
        </span>
        <span className="content__preffix">My name is</span>
        <h1 className="content__name">Alejandro Mejia</h1>
        <h2 className="content__job-title">Product Developer</h2>
        <span className="content__location">From Medellin, CO 🇨🇴</span>
        <div className="content__contact">
          <a
            className="content__contact-link"
            href="mailto:alejomejiacuartas@outlook.com"
            onClick={gtagEventEmail}
          >
            <span className="content__icon">
              <Icon name="mail" fill="#fff" />
            </span>
            <span className="content__email">
              alejomejiacuartas@outlook.com
            </span>
          </a>
        </div>
      </div>
      <div className="art">
        <div className="art__figure-1">
          <ArtCenter />
        </div>
        <div className="art__figure-2">
          <ArtSpinner />
        </div>
      </div>
    </Component>
  )
}

export default Intro
