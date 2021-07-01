import PropTypes from 'prop-types'
import { Flex as Component } from './styled'

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
  children: PropTypes.node.isRequired
}

export default Flex
