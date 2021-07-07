import styled from 'styled-components'

export const Component = styled.li`
  display: inline-block;

  .education {
    &__name {
      color: var(--color-text-300);
      font-weight: ${({ theme }) => theme.fonts.weight.regular};

      &:before {
        content: '';
        position: relative;
        top: -2px;
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-right: ${({ theme }) => theme.spacing(1)};
        background-color: var(--color-text-100);
        border-radius: 2px;
      }
    }

    &__at {
      margin-left: ${({ theme }) => theme.spacing(0.5)};
      color: var(--color-primary);
      font-family: ${({ theme }) => theme.fonts.family.primary};
    }
  }
`
