import styled from 'styled-components'

export const Wrapper = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2)}`};
  color: var(--color-white);
  font-size: ${({ theme }) => theme.fonts.size.m};
  font-family: ${({ theme }) => theme.fonts.family.primary};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  text-transform: uppercase;
  background-color: var(--color-primary);
  letter-spacing: 1px;
  border: 0;
  border-radius: 8px;
`

export const Text = styled.span`
  display: inline-block;
  margin-right: ${({ theme }) => theme.spacing(1)};
`

export const IconWrapper = styled.span`
  display: inline-flex;

  svg {
    fill: var(--color-white);
  }
`
