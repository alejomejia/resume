import styled from 'styled-components'

export const Component = styled.div`
  margin-top: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    margin-top: ${({ theme }) => theme.spacing(3)};
  }

  &.intro {
    overflow: hidden;
    position: relative;
    min-height: 480px;
    color: ${({ theme }) => theme.palette.white};
    background-color: hsl(245 69% 23%);
    border-radius: ${({ theme }) => theme.spacing(1)};

    .content {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: ${({ theme }) => theme.spacing(6)};
      z-index: 10;

      &__hello {
        font-size: 48px;
        margin-bottom: ${({ theme }) => theme.spacing(2)};
      }

      &__preffix {
        font-size: ${({ theme }) => theme.fonts.size.xxl};
        font-weight: ${({ theme }) => theme.fonts.weight.light};
        line-height: 1;
      }

      &__location {
        font-size: ${({ theme }) => theme.fonts.size.l};
        font-family: ${({ theme }) => theme.fonts.family.secondary};
        font-weight: ${({ theme }) => theme.fonts.weight.light};
      }

      &__contact {
        display: flex;
        align-items: center;
        margin-top: ${({ theme }) => theme.spacing(7)};
      }

      &__icon {
        display: flex;
        align-items: center;
      }

      &__email {
        display: inline-block;
        margin-left: ${({ theme }) => theme.spacing(1)};

        a {
          color: ${({ theme }) => theme.palette.white};
        }
      }
    }

    .art {
      position: absolute;
      inset: 0;
      z-index: 5;
      filter: blur(60px);
      will-change: transform;
      animation: scale 10s ease infinite alternate;

      @keyframes scale {
        0% {
          transform: scale(1);
        }
        100% {
          transform: scale(1.2);
        }
      }

      &__figure-1 {
        position: absolute;
        inset: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        will-change: transform;
      }

      &__figure-2 {
        transform: translateY(60px) scale(1.3);

        & svg {
          animation: test 30s linear infinite;
        }

        @keyframes test {
          0% {
            transform: rotate(0);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      }
    }
  }
`
