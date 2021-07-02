import PropTypes from 'prop-types'

const SVG = ({ fill }) => {
  return (
    <svg
      width="180"
      height="260"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h180v262H0V0z" />
    </svg>
  )
}

SVG.defaultProps = {
  fill: '#7000FF'
}

SVG.propTypes = {
  fill: PropTypes.string
}

export default SVG
