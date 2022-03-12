import styled from 'styled-components'

export const Wrapper = styled.article`
  margin-bottom: ${(p) => p.$mb || p.theme.spacing(2.5)};
  padding: ${({ theme }) => theme.spacing(3)};
  background-color: var(--color-surface);
  border-radius: 8px;
  box-shadow: var(--shadow-card);

  @media (max-width: ${({ theme }) => theme.breakpoints.xxs}) {
    padding: ${({ theme }) => theme.spacing(2.5)};
  }
`
