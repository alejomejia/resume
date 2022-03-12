import styled from 'styled-components'

export const Wrapper = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing(6)};

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding-left: ${({ theme }) => theme.spacing(4)};
    padding-right: ${({ theme }) => theme.spacing(4)};
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xxs}) {
    padding-left: ${({ theme }) => theme.spacing(2)};
    padding-right: ${({ theme }) => theme.spacing(2)};
  }
`

export const Grid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: calc(50% - 12px) calc(50% - 12px);

  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    grid-template-columns: 100%;
  }
`
