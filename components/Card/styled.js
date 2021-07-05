import styled from 'styled-components'

export const Component = styled.article`
  margin-bottom: ${(props) => (props.mb ? props.mb : props.theme.spacing(2.5))};
  padding: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.card};

  @media (max-width: ${({ theme }) => theme.breakpoints.xxs}) {
    padding: ${({ theme }) => theme.spacing(2.5)};
  }
`
