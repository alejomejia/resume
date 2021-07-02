import PropTypes from 'prop-types'

import Icon, { SVG as iconNames } from '../Icon'
import { Component } from './styled'

const Heading = ({
  as,
  color,
  size,
  family,
  weight,
  isItalic,
  icon,
  iconSize,
  mb,
  children
}) => {
  return (
    <Component
      className="heading"
      as={as}
      size={size}
      family={family}
      weight={weight}
      color={color}
      mb={mb}
      isItalic={isItalic}
    >
      {icon && (
        <span className="heading__icon">
          <Icon name={icon} width={iconSize} />
        </span>
      )}
      <span className="heading__title">{children}</span>
    </Component>
  )
}

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  color: PropTypes.string,
  size: PropTypes.string,
  family: PropTypes.oneOf('primary', 'secondary'),
  weight: PropTypes.number,
  isItalic: PropTypes.bool,
  icon: PropTypes.oneOf(Object.keys(iconNames)),
  iconSize: PropTypes.number,
  mb: PropTypes.string,
  children: PropTypes.string.isRequired
}

export default Heading
