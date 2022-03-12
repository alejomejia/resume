import PropTypes from 'prop-types'

import * as S from './styled'

const PageGrid = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

PageGrid.propTypes = {
  children: PropTypes.node.isRequired
}

export default PageGrid
