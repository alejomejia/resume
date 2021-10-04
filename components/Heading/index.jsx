import PropTypes from 'prop-types'

import Icon, { SVG as iconNames } from 'components/Icon'
import * as S from './styled'

const Heading = ({
  as,
  color,
  size,
  family,
  weight,
  isItalic,
  icon,
  iconSize,
  mb,
  children,
  ...rest
}) => {
  return (
    <S.Wrapper as={as} $mb={mb} {...rest}>
      {icon && (
        <S.IconWrapper>
          <Icon name={icon} width={iconSize} />
        </S.IconWrapper>
      )}
      <S.Title
        $color={color}
        $size={size}
        $family={family}
        $weight={weight}
        $isItalic={isItalic}
      >
        {children}
      </S.Title>
    </S.Wrapper>
  )
}

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  color: PropTypes.string,
  size: PropTypes.string,
  family: PropTypes.oneOf(['primary', 'secondary']),
  weight: PropTypes.number,
  isItalic: PropTypes.bool,
  icon: PropTypes.oneOf(Object.keys(iconNames)),
  iconSize: PropTypes.number,
  mb: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Heading
