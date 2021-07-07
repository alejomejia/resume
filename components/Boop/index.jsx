import { animated } from 'react-spring'
import PropTypes from 'prop-types'
import useBoop from 'hooks/use-boop'

const Boop = ({ children, config, ...rest }) => {
  const [style, trigger] = useBoop(config)

  return (
    <animated.span onMouseEnter={trigger} style={style} {...rest}>
      {children}
    </animated.span>
  )
}

Boop.propTypes = {
  children: PropTypes.node.isRequired,
  config: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    scale: PropTypes.number,
    rotate: PropTypes.number,
    timing: PropTypes.number,
    spring: PropTypes.shape({
      tension: PropTypes.number,
      friction: PropTypes.number
    })
  })
}

export default Boop
