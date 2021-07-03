import PropTypes from 'prop-types'
import Image from 'next/image'

import { Component } from './styled'

const ExperienceItem = ({
  image,
  title,
  at,
  link,
  startDate,
  endDate,
  description
}) => {
  return (
    <Component className="experience-item">
      <header className="experience-item__header">
        <div className="experience-item__header-left">
          <a href={link} target="_blank" rel="noreferrer">
            <Image src={image} alt={`${at} logo`} width="40" height="40" />
          </a>
        </div>
        <div className="experience-item__header-right">
          <div className="experience-item__header-right-top">
            <h4 className="experience__heading">
              <span className="experience__title">{title}</span>
              <a
                className="experience__at"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                @{at}
              </a>
            </h4>
          </div>
          <div className="experience-item__header-right-bottom">
            <span className="experience__start-date">{startDate}</span> -{' '}
            <span className="experience__end-date">{endDate}</span>
          </div>
        </div>
      </header>
      <div className="experience__description">
        <p>{description}</p>
      </div>
    </Component>
  )
}

ExperienceItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  at: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default ExperienceItem
