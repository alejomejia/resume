import PropTypes from 'prop-types'
import * as S from './styled'

const Box = ({
  as = 'div',
  m,
  mt,
  ml,
  mb,
  mr,
  p,
  pt,
  pl,
  pb,
  pr,
  children
}) => {
  return (
    <S.Wrapper
      as={as}
      $m={m}
      $mt={mt}
      $mr={mr}
      $mb={mb}
      $ml={ml}
      $p={p}
      $pt={pt}
      $pr={pr}
      $pb={pb}
      $pl={pl}
    >
      {children}
    </S.Wrapper>
  )
}

Box.propTypes = {
  as: PropTypes.oneOf(['div', 'section', 'aside', 'article', 'footer']),
  m: PropTypes.string,
  mt: PropTypes.string,
  mr: PropTypes.string,
  mb: PropTypes.string,
  ml: PropTypes.string,
  p: PropTypes.string,
  pt: PropTypes.string,
  pr: PropTypes.string,
  pb: PropTypes.string,
  pl: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Box
