import PropTypes from 'prop-types'

import { Component } from './styled'

const Card = ({ mb, children, ...rest }) => {
  return (
    <Component mb={mb} {...rest}>
      {children}
    </Component>
  )
}

Card.propTypes = {
  mb: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Card
