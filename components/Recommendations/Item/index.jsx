import PropTypes from 'prop-types'
import Image from 'next/image'

import Icon from 'components/Icon'
import { Component } from './styled'

const RecommendationsItem = ({
  image,
  name,
  company,
  link,
  title,
  description
}) => {
  return (
    <Component className="recommendations-item">
      <div className="recommendations-item__left">
        <div className="recommendations__picture">
          <Image src={image} alt={`${name} picture`} width="100" height="100" />
        </div>
        <div className="recommendations__rating">
          {Array.from({ length: 5 }, (item, k) => (
            <Icon key={k} name="star" width={16} />
          ))}
        </div>
      </div>
      <div className="recommendations-item__right">
        <h4 className="recommendations__heading">
          <span className="recommendations__name">{name}</span>
          <a
            className="recommendations__company"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            @{company}
          </a>
        </h4>
        <span className="recommendations__title">{title}</span>
        <div className="recommendations__description">
          <p>{description}</p>
        </div>
      </div>
    </Component>
  )
}

RecommendationsItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default RecommendationsItem
