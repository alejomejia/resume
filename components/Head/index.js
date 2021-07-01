import HTMLHead from 'next/head'
import PropTypes from 'prop-types'

const Head = ({ title }) => {
  return (
    <HTMLHead>
      <title>{title}</title>
    </HTMLHead>
  )
}

Head.propTypes = {
  title: PropTypes.string.isRequired
}

export default Head
