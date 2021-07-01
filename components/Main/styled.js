import styled from 'styled-components'

export const Main = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  padding-top: ${({ theme }) => theme.spacing(5)}px;
  padding-left: ${({ theme }) => theme.spacing(5)}px;
  padding-right: ${({ theme }) => theme.spacing(5)}px;
`
