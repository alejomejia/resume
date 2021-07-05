import PropTypes from 'prop-types'

import { Component } from './styled'

const PageGrid = ({ children }) => {
  return <Component>{children}</Component>
}

PageGrid.propTypes = {
  children: PropTypes.node.isRequired
}

export default PageGrid
