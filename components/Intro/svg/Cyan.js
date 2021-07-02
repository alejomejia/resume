import PropTypes from 'prop-types'

const SVG = ({ fill }) => {
  return (
    <svg
      width="450"
      height="420"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M155 252V134h102V0h268v268H390v101H272v196H-41V252h196z"
      />
    </svg>
  )
}

SVG.defaultProps = {
  fill: '#68E7FA'
}

SVG.propTypes = {
  fill: PropTypes.string
}

export default SVG
