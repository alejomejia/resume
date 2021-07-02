import PropTypes from 'prop-types'

import IconArrow from './icons/arrow'
import IconBadge from './icons/badge'
import IconBolt from './icons/bolt'
import IconBriefcase from './icons/briefcase'
import IconChat from './icons/chat'
import IconCode from './icons/code'
import IconFire from './icons/fire'
import IconGithub from './icons/github'
import IconGlobe from './icons/globe'
import IconLinkedIn from './icons/linkedin'
import IconMailOpen from './icons/mail-open'
import IconMail from './icons/mail'
import IconMoon from './icons/moon'
import IconSpeaker from './icons/speaker'
import IconStar from './icons/star'
import IconStorybook from './icons/storybook'
import IconSun from './icons/sun'
import IconVolume from './icons/volume'

import { Component } from './styled'

export const SVG = {
  arrow: IconArrow,
  badge: IconBadge,
  bolt: IconBolt,
  briefcase: IconBriefcase,
  chat: IconChat,
  code: IconCode,
  fire: IconFire,
  github: IconGithub,
  globe: IconGlobe,
  linkedin: IconLinkedIn,
  mailOpen: IconMailOpen,
  mail: IconMail,
  moon: IconMoon,
  speaker: IconSpeaker,
  star: IconStar,
  storybook: IconStorybook,
  sun: IconSun,
  volume: IconVolume
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
