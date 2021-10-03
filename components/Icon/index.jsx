import PropTypes from 'prop-types'

import IconAcademic from './icons/academic'
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
import IconMail from './icons/mail'
import IconMoon from './icons/moon'
import IconSpeaker from './icons/speaker'
import IconStorybook from './icons/storybook'
import IconSun from './icons/sun'
import IconUser from './icons/user'
import IconVolume from './icons/volume'

import { Component } from './styled'

export const SVG = {
  academic: IconAcademic,
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
  mail: IconMail,
  moon: IconMoon,
  speaker: IconSpeaker,
  storybook: IconStorybook,
  sun: IconSun,
  user: IconUser,
  volume: IconVolume
}

const Icon = ({ name, width = 20, fill }) => {
  const IconRenderer = SVG[name]

  return (
    <Component width={width} fill={fill}>
      <IconRenderer />
    </Component>
  )
}

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(SVG)).isRequired,
  fill: PropTypes.string,
  width: PropTypes.number
}

export default Icon
