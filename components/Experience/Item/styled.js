import styled from 'styled-components'
import Card from 'components/Card'

export const Wrapper = styled(Card)``

export const Header = styled.header`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  @media (max-width: ${({ theme }) => theme.breakpoints.xxs}) {
    flex-direction: column;
  }
`

export const HeaderLeft = styled.div`
  margin-right: ${({ theme }) => theme.spacing(1.5)};

  @media (max-width: ${({ theme }) => theme.breakpoints.xxs}) {
    margin-bottom: ${({ theme }) => theme.spacing(1)};
  }
`

export const HeaderRight = styled.div`
  color: var(--color-text-100);
`

export const Heading = styled.h4`
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
`

export const Title = styled.span`
  display: inline-block;
  color: var(--color-text-200);
  margin-right: ${({ theme }) => theme.spacing(0.5)};
`

export const At = styled.a`
  color: var(--color-primary);
`

export const Date = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.sm};
  font-family: ${({ theme }) => theme.fonts.family.primary};
  font-style: italic;
`
