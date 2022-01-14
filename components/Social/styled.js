import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(6)};

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding-left: ${({ theme }) => theme.spacing(4)};
    padding-right: ${({ theme }) => theme.spacing(4)};
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xxs}) {
    padding-left: ${({ theme }) => theme.spacing(2)};
    padding-right: ${({ theme }) => theme.spacing(2)};
    margin-bottom: ${({ theme }) => theme.spacing(3)};
  }
`

export const Link = styled.a`
  svg {
    fill: var(--color-text-200);
    transition: fill 0.25s ease;
  }

  &:hover {
    svg {
      fill: var(--color-text-300);
    }
  }
`
