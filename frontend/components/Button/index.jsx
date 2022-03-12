import PropTypes from 'prop-types'
import Icon, { SVG as iconNames } from 'components/Icon'

import * as S from './styled'

const Button = ({ as, icon, iconSize, children, ...rest }) => {
  return (
    <S.Wrapper as={as} {...rest}>
      <S.Text>{children}</S.Text>
      {icon && (
        <S.IconWrapper>
          <Icon name={icon} width={iconSize} />
        </S.IconWrapper>
      )}
    </S.Wrapper>
  )
}

Button.propTypes = {
  as: PropTypes.oneOf(['a', 'button']),
  icon: PropTypes.oneOf(Object.keys(iconNames)),
  iconSize: PropTypes.number,
  children: PropTypes.string
}

export default Button
