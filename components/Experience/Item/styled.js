import styled from 'styled-components'
import Card from 'components/Card'

export const Component = styled(Card)`
  .experience-item {
    &__header {
      display: flex;
      margin-bottom: ${({ theme }) => theme.spacing(2)};

      @media (max-width: ${({ theme }) => theme.breakpoints.xxs}) {
        flex-direction: column;
      }

      &-left {
        margin-right: ${({ theme }) => theme.spacing(1.5)};

        @media (max-width: ${({ theme }) => theme.breakpoints.xxs}) {
          margin-bottom: ${({ theme }) => theme.spacing(1)};
        }
      }

      &-right-bottom {
        color: var(--color-text-100);
      }
    }
  }

  .experience {
    &__heading {
      font-weight: ${({ theme }) => theme.fonts.weight.regular};
    }

    &__title {
      display: inline-block;
      color: var(--color-text-200);
      margin-right: ${({ theme }) => theme.spacing(0.5)};
    }

    &__at {
      color: var(--color-primary);
    }

    &__start-date,
    &__end-date {
      font-size: ${({ theme }) => theme.fonts.size.sm};
      font-family: ${({ theme }) => theme.fonts.family.primary};
      font-style: italic;
    }

    &__description {
    }
  }
`
