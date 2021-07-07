import HTMLHead from 'next/head'
import PropTypes from 'prop-types'

const Head = ({ title }) => {
  return (
    <HTMLHead>
      <title>{title}</title>
      <meta name="description" content="Alejandro Mejia's resume" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, 
     user-scalable=0"
      />
      {/* Social Tags */}
      <meta property="og:title" content="Resume :: Alejandro Mejia" />
      <meta
        property="og:image"
        content="https://resume.alejandromejia.co/social-media-cover.png"
      />
      <meta
        property="og:description"
        content="Hey 👋🏻! I'm Product Developer with 8 years of coding experience on the UI side"
      />
      <meta property="og:url" content="https://resume.alejandromejia.co" />
    </HTMLHead>
  )
}

Head.propTypes = {
  title: PropTypes.string.isRequired
}

export default Head
