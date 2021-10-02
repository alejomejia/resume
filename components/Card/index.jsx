import PropTypes from 'prop-types'

import * as S from './styled'

const Card = ({ mb, children, ...rest }) => {
  return (
    <S.Wrapper $mb={mb} {...rest}>
      {children}
    </S.Wrapper>
  )
}

Card.propTypes = {
  mb: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Card
