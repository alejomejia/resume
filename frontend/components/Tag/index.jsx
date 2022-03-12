import PropTypes from 'prop-types'

import * as S from './styled'

const Tag = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

Tag.propTypes = {
  children: PropTypes.string.isRequired
}

export default Tag
