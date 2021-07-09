import styled from 'styled-components'

export const Component = styled.section`
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding-top: ${({ theme }) => theme.spacing(4)};
    padding-left: ${({ theme }) => theme.spacing(4)};
    padding-right: ${({ theme }) => theme.spacing(4)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xxs}) {
    padding-left: ${({ theme }) => theme.spacing(2)};
    padding-right: ${({ theme }) => theme.spacing(2)};

    h3.heading .heading__title {
      font-size: ${({ theme }) => theme.fonts.size.l};
    }
  }
`
