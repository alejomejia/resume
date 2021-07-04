import PropTypes from 'prop-types'

import Icon, { SVG as iconNames } from '../Icon'

import { Component } from './styled'

const Button = ({ as, icon, iconSize, children, ...rest }) => {
  return (
    <Component className="button" as={as} {...rest}>
      <span className="button__text">{children}</span>
      {icon && (
        <span className="button__icon">
          <Icon name={icon} width={iconSize} />
        </span>
      )}
    </Component>
  )
}

Button.propTypes = {
  as: PropTypes.oneOf(['a', 'button']),
  icon: PropTypes.oneOf(Object.keys(iconNames)),
  iconSize: PropTypes.number,
  children: PropTypes.string
}

export default Button
