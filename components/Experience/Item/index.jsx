import PropTypes from 'prop-types'
import Image from 'next/image'

import * as S from './styled'

const ExperienceItem = ({
  image,
  title,
  at,
  link,
  startDate,
  endDate,
  description
}) => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderLeft>
          <a href={link} target="_blank" rel="noreferrer">
            <Image src={image} alt={`${at} logo`} width="40" height="40" />
          </a>
        </S.HeaderLeft>
        <S.HeaderRight>
          <div>
            <S.Heading>
              <S.Title>{title}</S.Title>
              <S.At href={link} target="_blank" rel="noreferrer">
                @{at}
              </S.At>
            </S.Heading>
          </div>
          <div>
            <S.Date>{startDate}</S.Date> - <S.Date>{endDate}</S.Date>
          </div>
        </S.HeaderRight>
      </S.Header>
      <div>
        <p>{description}</p>
      </div>
    </S.Wrapper>
  )
}

ExperienceItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  at: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default ExperienceItem
