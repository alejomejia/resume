import PropTypes from 'prop-types'
import * as S from './styled'

const Grid = ({ gap, columns, children }) => {
  return (
    <S.Wrapper $gap={gap} $columns={columns}>
      {children}
    </S.Wrapper>
  )
}

Grid.propTypes = {
  gap: PropTypes.string,
  columns: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Grid
