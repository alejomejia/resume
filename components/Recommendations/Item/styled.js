import styled from 'styled-components'
import Card from '../../Card'

export const Component = styled(Card)`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: ${({ theme }) => theme.spacing(2)};

  .recommendations {
    &__picture {
      display: flex;
      margin-bottom: ${({ theme }) => theme.spacing(1)};
    }

    &__rating {
      display: flex;
      justify-content: center;
      margin-bottom: ${({ theme }) => theme.spacing(2)};
    }

    &__heading {
      font-weight: ${({ theme }) => theme.fonts.weight.regular};
    }

    &__name {
      display: inline-block;
      color: ${({ theme }) => theme.colors.text200};
      margin-right: ${({ theme }) => theme.spacing(0.5)};
    }

    &__company {
      color: ${({ theme }) => theme.palette.primary};
    }

    &__title {
      display: inline-block;
      color: ${({ theme }) => theme.colors.text100};
      font-size: ${({ theme }) => theme.fonts.size.sm};
      font-family: ${({ theme }) => theme.fonts.family.primary};
      font-style: italic;
      margin-bottom: ${({ theme }) => theme.spacing(2)};
    }

    &__description {
    }
  }
`
