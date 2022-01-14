import PropTypes from 'prop-types'
import Image from 'next/image'

import * as S from './styled'

const RecommendationsItem = ({
  image,
  name,
  company,
  link,
  title,
  description
}) => {
  return (
    <S.Wrapper>
      <S.Left>
        <S.ImageWrapper>
          <Image src={image} alt={`${name} picture`} width="100" height="100" />
        </S.ImageWrapper>
      </S.Left>
      <S.Right>
        <S.Heading>
          <S.Name>{name}</S.Name>
          <S.Company href={link} target="_blank" rel="noreferrer">
            @{company}
          </S.Company>
        </S.Heading>
        <S.JobTitle>{title}</S.JobTitle>
        <div>
          <p>{description}</p>
        </div>
      </S.Right>
    </S.Wrapper>
  )
}

RecommendationsItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default RecommendationsItem
