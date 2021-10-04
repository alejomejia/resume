import styled from 'styled-components'
import Card from 'components/Card'

export const Wrapper = styled(Card)`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: ${({ theme }) => theme.spacing(2)};

  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    grid-template-columns: 100%;
    gap: 0;
  }
`

export const Left = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`

export const Right = styled.div``

export const Heading = styled.h4`
  font-weight: ${({ theme }) => theme.fonts.weight.regular};

  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    text-align: center;
  }
`

export const Name = styled.span`
  display: inline-block;
  color: var(--color-text-200);
  margin-right: ${({ theme }) => theme.spacing(0.5)};
`

export const Company = styled.a`
  color: var(--color-primary);
`

export const JobTitle = styled.span`
  display: inline-block;
  color: var(--color-text-100);
  font-size: ${({ theme }) => theme.fonts.size.sm};
  font-family: ${({ theme }) => theme.fonts.family.primary};
  font-style: italic;
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    display: flex;
    justify-content: center;
    margin-top: 4px;
  }
`
