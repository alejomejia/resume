import styled from 'styled-components'

export const Component = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.palette.white};
  font-size: ${({ theme }) => theme.fonts.size.m};
  font-family: ${({ theme }) => theme.fonts.family.primary};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.cta};
  letter-spacing: 1px;
  border: 0;
  border-radius: 8px;

  .button {
    &__text {
      display: inline-block;
      margin-right: ${({ theme }) => theme.spacing(1)};
    }

    &__icon {
      display: inline-flex;

      svg {
        fill: ${({ theme }) => theme.palette.white};
      }
    }
  }
`
