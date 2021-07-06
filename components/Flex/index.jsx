import PropTypes from 'prop-types'
import { Component } from './styled'

const Flex = ({ gap, align, justify, direction, wrap, children }) => {
  return (
    <Component
      gap={gap}
      align={align}
      justify={justify}
      direction={direction}
      wrap={wrap}
    >
      {children}
    </Component>
  )
}

Flex.propTypes = {
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
