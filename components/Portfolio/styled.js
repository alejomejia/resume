import styled from 'styled-components'

export const Component = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing(6)};

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding-left: ${({ theme }) => theme.spacing(4)};
    padding-right: ${({ theme }) => theme.spacing(4)};
    margin-bottom: 0;
  }

  .portfolio {
    &__grid {
      display: grid;
      gap: 24px;
      grid-template-columns: calc(50% - 12px) calc(50% - 12px);

      @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
        grid-template-columns: 100%;
      }
    }
  }
`
