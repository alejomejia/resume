import styled from 'styled-components'

export const Component = styled.div`
  position: fixed;
  top: 36px;
  right: 36px;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  min-width: 120px;
  min-height: 48px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 80px;
  box-shadow: ${({ theme }) => theme.shadows.fixed};

  .float {
    &__switch {
      cursor: pointer;
      background: none;
      border: none;
    }
  }
`
