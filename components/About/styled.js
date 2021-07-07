import styled from 'styled-components'

export const Component = styled.section`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  background-color: var(--color-bg-accent);

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    margin-bottom: 0;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: -500%;
    bottom: 0;
    width: 1000%;
    background-color: var(--color-bg-accent);
    z-index: -1;
  }

  .about {
    &__wrapper {
      margin-bottom: ${({ theme }) => theme.spacing(6)};
      padding-top: ${({ theme }) => theme.spacing(10)};
      padding-bottom: ${({ theme }) => theme.spacing(5)};

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

      button {
        @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
          display: none;
        }
      }
    }

    &__content {
      margin-bottom: ${({ theme }) => theme.spacing(4)};

      @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
        margin-bottom: 0;
      }
    }
  }
`
