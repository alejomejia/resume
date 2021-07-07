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
    </HTMLHead>
  )
}

Head.propTypes = {
  title: PropTypes.string.isRequired
}

export default Head
