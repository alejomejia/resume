import styled from 'styled-components'

export const Component = styled.footer`
  .footer {
    &__top {
      display: flex;
      padding-left: ${({ theme }) => theme.spacing(3)};
      padding-right: ${({ theme }) => theme.spacing(3)};
      margin-top: ${({ theme }) => theme.spacing(12.5)};
      margin-bottom: ${({ theme }) => theme.spacing(12.5)};
      justify-content: center;
      font-family: ${({ theme }) => theme.fonts.family.primary};

      @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
        margin-top: ${({ theme }) => theme.spacing(8)};
        margin-bottom: ${({ theme }) => theme.spacing(8)};
        padding-left: ${({ theme }) => theme.spacing(4)};
        padding-right: ${({ theme }) => theme.spacing(4)};
      }
    }

    &__text {
      color: ${({ theme }) => theme.colors.text200};
      font-size: ${({ theme }) => theme.fonts.size.xl};
    }

    &__link {
      color: ${({ theme }) => theme.palette.primary};
      font-weight: ${({ theme }) => theme.fonts.weight.bold};
    }

    &__bottom {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: ${({ theme }) => theme.spacing(3)};
      padding-right: ${({ theme }) => theme.spacing(3)};
      min-height: 60px;
      color: ${({ theme }) => theme.colors.text200};
      font-family: ${({ theme }) => theme.fonts.family.primary};
      background-color: ${({ theme }) => theme.colors.bgAccent};

      @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
        font-size: ${({ theme }) => theme.fonts.size.sm};
      }
    }
  }
`
