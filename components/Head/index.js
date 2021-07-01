import HTMLHead from 'next/head'
import PropTypes from 'prop-types'

const Head = ({ title }) => {
  return (
    <HTMLHead>
      <title>{title}</title>
      <link rel="icon" href="/favicon.png" />
    </HTMLHead>
  )
}

Head.propTypes = {
  title: PropTypes.string.isRequired
}

export default Head
