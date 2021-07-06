import styled from 'styled-components'

export const Component = styled.article`
  margin-bottom: ${(props) => (props.mb ? props.mb : props.theme.spacing(2.5))};
  padding: ${({ theme }) => theme.spacing(3)};
  background-color: var(--color-surface);
  border-radius: 8px;
  box-shadow: var(--shadow-card);

  @media (max-width: ${({ theme }) => theme.breakpoints.xxs}) {
    padding: ${({ theme }) => theme.spacing(2.5)};
  }
`
