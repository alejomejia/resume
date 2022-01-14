import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
    gap: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    grid-template-columns: 100%;
    gap: 0;
  }
`
