import PropTypes from 'prop-types'
import { Main as Component } from './styled'

const Main = ({ children }) => {
  return <Component>{children}</Component>
}

Main.propTypes = {
  children: PropTypes.node.isRequired
}

export default Main
