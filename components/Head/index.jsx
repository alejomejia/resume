import { useState, useEffect } from 'react'
import HTMLHead from 'next/head'
import PropTypes from 'prop-types'

const Head = ({ title }) => {
  const [yearsOfExperience, setYearsOfExperience] = useState('')

  useEffect(() => {
    const currentYear = new Date().getFullYear()
    const firstJobYear = 2013

    setYearsOfExperience(currentYear - firstJobYear)
  }, [])

  const socialTitle = 'Resume :: Alejandro Mejia'
  const socialImage = 'https://resume.alejandromejia.co/social-media-cover.png'
  const socialDescription = `Hey 👋🏻! I'm Alejandro, Product Developer with ${yearsOfExperience} years of experience making awesome UIs and improving UX`
  const socialUrl = 'https://resume.alejandromejia.co'

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
      <meta property="og:title" content={socialTitle} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:description" content={socialDescription} />
      <meta property="og:url" content={socialUrl} />
    </HTMLHead>
  )
}

Head.propTypes = {
  title: PropTypes.string.isRequired
}

export default Head
