import PropTypes from 'prop-types'

import { Component } from './styled'

const Box = ({ m, mt, ml, mb, mr, p, pt, pl, pb, pr, children }) => {
  return (
    <Component
      m={m}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      p={p}
      pt={pt}
      pr={pr}
      pb={pb}
      pl={pl}
    >
      {children}
    </Component>
  )
}

Box.propTypes = {
  m: PropTypes.string,
  mt: PropTypes.string,
  mr: PropTypes.string,
  mb: PropTypes.string,
  ml: PropTypes.string,
  p: PropTypes.string,
  pt: PropTypes.string,
  pr: PropTypes.string,
  pb: PropTypes.string,
  pl: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Box
