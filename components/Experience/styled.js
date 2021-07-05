import styled from 'styled-components'

export const Component = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing(6)};

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: ${({ theme }) => theme.spacing(4)};
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xxs}) {
    padding: ${({ theme }) => theme.spacing(3)}
      ${({ theme }) => theme.spacing(2)};

    h3.heading .heading__title {
      font-size: ${({ theme }) => theme.fonts.size.l};
    }
  }

  .experience {
    &-item {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`
