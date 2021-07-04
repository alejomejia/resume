import PropTypes from 'prop-types'

import { Component } from './styled'

const Tag = ({ children }) => {
  return <Component>{children}</Component>
}

Tag.propTypes = {
  children: PropTypes.string.isRequired
}

export default Tag
