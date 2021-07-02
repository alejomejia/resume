import PropTypes from 'prop-types'

import IconBadge from './icons/badge'
import IconChat from './icons/chat'
import IconMail from './icons/mail'

import { Component } from './styled'

export const SVG = {
  badge: IconBadge,
  chat: IconChat,
  mail: IconMail
}

const Icon = ({ name, width, fill }) => {
  const IconRenderer = SVG[name]

  return (
    <Component width={width} fill={fill}>
      <IconRenderer />
    </Component>
  )
}

Icon.defaultProps = {
  width: 20
}

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(SVG)).isRequired,
  fill: PropTypes.string,
  width: PropTypes.number
}

export default Icon
