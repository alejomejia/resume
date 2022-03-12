import { ArtSpinner as SVG } from './styled'

const ArtSpinner = () => {
  return (
    <SVG width="450" height="420" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M155 252V134h102V0h268v268H390v101H272v196H-41V252h196z"
      />
    </SVG>
  )
}

export default ArtSpinner
