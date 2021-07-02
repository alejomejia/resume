import styled from 'styled-components'

export const Link = styled.a`
  svg {
    fill: ${({ theme }) => theme.colors.text200};
    transition: fill 0.25s ease;
  }

  &:hover {
    svg {
      fill: ${({ theme }) => theme.colors.text300};
    }
  }
`
