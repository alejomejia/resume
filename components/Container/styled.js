import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(5)};

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding-left: ${({ theme }) => theme.spacing(3)};
    padding-right: ${({ theme }) => theme.spacing(3)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: 0;
  }
`
