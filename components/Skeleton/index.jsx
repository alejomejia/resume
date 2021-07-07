import PropTypes from 'prop-types'

import { Component } from './styled'

const Skeleton = ({ width, height }) => {
  return <Component width={width} height={height} />
}

Skeleton.defaultProps = {
  width: 25,
  height: 25
}

Skeleton.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
}

export default Skeleton
