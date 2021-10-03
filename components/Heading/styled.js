import styled from 'styled-components'

export const Wrapper = styled.h1`
  display: flex;
  align-items: center;
  margin-bottom: ${(p) => p.$mb};
`

export const IconWrapper = styled.span`
  display: inline-flex;
  margin-right: ${({ theme }) => theme.spacing(1)};
`

export const Title = styled.span`
  color: ${(p) => (p.$color ? p.$color : 'var(--color-text-300)')};
  font-size: ${(p) => (p.$size ? p.$size : p.theme.fonts.size.xl)};
  font-family: ${({ theme, family }) => theme.fonts.family[family]};
  font-weight: ${(p) => (p.$weight ? p.$weight : p.theme.fonts.weight.bold)};
  font-style: ${(p) => (p.$isItalic ? 'italic' : '')};

  h3${Wrapper} & {
    @media (max-width: ${({ theme }) => theme.breakpoints.xxs}) {
      font-size: ${({ theme }) => theme.fonts.size.l};
    }
  }
`
