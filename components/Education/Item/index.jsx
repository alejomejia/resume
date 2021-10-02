import PropTypes from 'prop-types'

import * as S from './styled'

const EducationItem = ({ name, at, link }) => {
  return (
    <S.Wrapper>
      <S.Name>
        {name}
        <S.Link href={link} target="_blank" rel="noreferrer">
          @{at}
        </S.Link>
      </S.Name>
    </S.Wrapper>
  )
}

EducationItem.propTypes = {
  name: PropTypes.string.isRequired,
  at: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default EducationItem
