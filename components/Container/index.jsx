import PropTypes from 'prop-types'
import { Container as Component } from './styled'

const Container = ({ children }) => {
  return <Component>{children}</Component>
}

Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default Container
