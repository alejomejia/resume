import { useContext } from 'react'
import PropTypes from 'prop-types'
import useSound from 'use-sound'

import { store } from 'context/store'
import * as gtag from 'lib/gtag'

import Icon from 'components/Icon'
import Boop from 'components/Boop'

import { Component } from './styled'

const PortfolioItem = ({ title, stack, image, external }) => {
  const combinedStack = stack.join(', ')
  const { isSoundEnable } = useContext(store)

  const [popEnter] = useSound('/sounds/pop.mp3', {
    playbackRate: 0.9,
    volume: 0.5,
    soundEnabled: isSoundEnable
  })

  const [popClick] = useSound('/sounds/pop.mp3', {
    volume: 0.5,
    soundEnabled: isSoundEnable
  })

  const handleOnEnter = () => popEnter()

  const handleOnClick = (e) => {
    popClick()

    const getID = e.currentTarget.id
    const iconList = {
      code: 'repository',
      globe: 'website',
      storybook: 'storybook'
    }

    const icon = iconList[getID]

    gtag.event({ action: `portfolio_${icon}`, category: 'portfolio' })
  }

  return (
    <Component className="portfolio-item" image={image}>
      <div className="portfolio-item__container">
        <div className="portfolio__content">
          <h4 className="portfolio__title">{title}</h4>
          <span className="portfolio__stack">{combinedStack}</span>
        </div>
        <div className="portfolio-item__buttons">
          {external.map((item) => {
            const buttonIcons = {
              repo: 'code',
              site: 'globe',
              storybook: 'storybook'
            }

            const iconName = buttonIcons[item.type]

            return (
              <Boop key={item.id} config={{ scale: 0.95 }}>
                <a
                  id={iconName}
                  className="portfolio__button"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={handleOnEnter}
                  onClick={handleOnClick}
                >
                  <Icon name={iconName} width={24} />
                </a>
              </Boop>
            )
          })}
        </div>
      </div>
      <div className="portfolio__gradient"></div>
      <div className="portfolio__blur"></div>
    </Component>
  )
}

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  external: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.oneOf(['repo', 'site', 'storybook']).isRequired,
      link: PropTypes.string.isRequired
    })
  ).isRequired
}

export default PortfolioItem
