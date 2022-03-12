import styled from 'styled-components'

export const Wrapper = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing(6)};

  article {
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: ${({ theme }) => theme.spacing(4)};
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xxs}) {
    padding: ${({ theme }) => `${theme.spacing(3)} ${theme.spacing(2)}`};
  }
`
