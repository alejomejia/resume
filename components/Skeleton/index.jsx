import PropTypes from 'prop-types'

import { Component } from './styled'

const Skeleton = ({ width = '25px', height = '25px' }) => {
  return <Component width={width} height={height} />
}

Skeleton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
}

export default Skeleton
