import styled from 'styled-components'

export const Component = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(6)};

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding-left: ${({ theme }) => theme.spacing(4)};
    padding-right: ${({ theme }) => theme.spacing(4)};
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xxs}) {
    padding-left: ${({ theme }) => theme.spacing(2)};
    padding-right: ${({ theme }) => theme.spacing(2)};
    margin-bottom: ${({ theme }) => theme.spacing(3)};
  }

  h3.heading .heading__title {
    @media (max-width: ${({ theme }) => theme.breakpoints.xxs}) {
      font-size: ${({ theme }) => theme.fonts.size.l};
    }
  }

  h4.heading .heading__title {
    color: var(--color-text-200);

    @media (max-width: ${({ theme }) => theme.breakpoints.xxs}) {
      font-size: ${({ theme }) => theme.fonts.size.m};
    }
  }
`
