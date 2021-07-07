import { useContext } from 'react'
import useSound from 'use-sound'

import { store } from 'context/store'

import Boop from '../Boop'
import { Component } from './styled'

const Footer = () => {
  const { isSoundEnable } = useContext(store)

  const whatsappLink =
    'https://api.whatsapp.com/send?phone=573192160752&text=Hi%20Alejo!%20I%20was%20checking%20your%20resume...'

  const [popEnter] = useSound('/sounds/pop.mp3', {
    playbackRate: 3,
    volume: 0.5,
    soundEnabled: isSoundEnable
  })

  const [popClick] = useSound('/sounds/pop.mp3', {
    playbackRate: 2,
    volume: 0.5,
    soundEnabled: isSoundEnable
  })

  const handleOnEnter = () => popEnter()

  const handleOnClick = () => popClick()

  return (
    <Component className="footer">
      <div className="footer__top">
        <span className="footer__text">
          Not convinced yet?{' '}
          <Boop config={{ y: -3 }}>
            <a
              className="footer__link"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={handleOnEnter}
              onClick={handleOnClick}
            >
              Let&apos;s talk ⚡
            </a>{' '}
          </Boop>
        </span>
      </div>
      <div className="footer__bottom">
        <span>
          Designed in Figma, built with NextJS and Styled Components 💙
        </span>
      </div>
    </Component>
  )
}

export default Footer
