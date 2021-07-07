import PropTypes from 'prop-types'

import { Component } from './styled'

const EducationItem = ({ name, at, link }) => {
  return (
    <Component className="education-item">
      <span className="education__name">
        {name}
        <a
          className="education__at"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          @{at}
        </a>
      </span>
    </Component>
  )
}

EducationItem.propTypes = {
  name: PropTypes.string.isRequired,
  at: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default EducationItem
