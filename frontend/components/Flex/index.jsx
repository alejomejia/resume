import PropTypes from 'prop-types'
import * as S from './styled'

const Flex = ({ as, gap, align, justify, direction, wrap, children }) => {
  return (
    <S.Wrapper
      as={as}
      $gap={gap}
      $align={align}
      $justify={justify}
      $direction={direction}
      $wrap={wrap}
    >
      {children}
    </S.Wrapper>
  )
}

Flex.propTypes = {
  as: PropTypes.string,
  gap: PropTypes.string,
  align: PropTypes.oneOf(['stretch', 'flex-start', 'center', 'flex-end']),
  justify: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'space-around',
    'space-between',
    'space-evenly'
  ]),
  direction: PropTypes.oneOf([
    'column',
    'column-reverse',
    'row',
    'row-reverse'
  ]),
  wrap: PropTypes.oneOf(['wrap', 'nowrap', 'wrap-reverse']),
  children: PropTypes.node
}

export default Flex
