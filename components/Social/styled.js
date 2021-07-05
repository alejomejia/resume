import styled from 'styled-components'

export const Component = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(6)};

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding-left: ${({ theme }) => theme.spacing(4)};
    padding-right: ${({ theme }) => theme.spacing(4)};
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }
`

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
