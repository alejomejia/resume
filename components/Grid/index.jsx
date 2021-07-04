import PropTypes from 'prop-types'

import { Component } from './styled'

const Grid = ({ gap, columns, children }) => {
  return (
    <Component gap={gap} columns={columns}>
      {children}
    </Component>
  )
}

Grid.propTypes = {
  gap: PropTypes.string,
  columns: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Grid
