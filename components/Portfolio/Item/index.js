import PropTypes from 'prop-types'

import Icon from '../../Icon'
import { Component } from './styled'

const PortfolioItem = ({ title, stack, image, external }) => {
  const combinedStack = stack.join(', ')

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
              <a
                className="portfolio__button"
                href={item.link}
                target="_blank"
                rel="noreferrer"
                key={item.id}
              >
                <Icon name={iconName} width={24} />
              </a>
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
