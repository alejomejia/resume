import PropTypes from 'prop-types'

import { Component } from './styled'

const Skeleton = ({ width, height }) => {
  return <Component width={width} height={height} />
}

Skeleton.defaultProps = {
  width: '25px',
  height: '25px'
}

Skeleton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
}

export default Skeleton
