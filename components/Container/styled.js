import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(5)};
`
