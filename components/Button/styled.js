import styled from 'styled-components'

export const Component = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  color: var(--color-white);
  font-size: ${({ theme }) => theme.fonts.size.m};
  font-family: ${({ theme }) => theme.fonts.family.primary};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  text-transform: uppercase;
  background-color: var(--color-cta);
  letter-spacing: 1px;
  border: 0;
  border-radius: 8px;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: var(--color-primary);
  }

  .button {
    &__text {
      display: inline-block;
      margin-right: ${({ theme }) => theme.spacing(1)};
    }

    &__icon {
      display: inline-flex;

      svg {
        fill: var(--color-white);
      }
    }
  }
`
