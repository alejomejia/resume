import styled from 'styled-components'

export const Component = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing(6)};

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: ${({ theme }) => theme.spacing(4)};
    margin-bottom: 0;
  }

  .experience {
    &-item {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`
