import PropTypes from 'prop-types'

import * as S from './styled'

const Skeleton = ({ width = '25px', height = '25px' }) => {
  return <S.Wrapper $width={width} $height={height} />
}

Skeleton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
}

export default Skeleton
