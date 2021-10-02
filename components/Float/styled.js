import styled from 'styled-components'

export const Wrapper = styled.div`
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
  background-color: var(--color-surface);
  border-radius: 80px;
  box-shadow: var(--shadow-fixed);

  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    top: initial;
    bottom: ${({ theme }) => theme.spacing(3)};
    right: ${({ theme }) => theme.spacing(3)};
  }
`

export const Button = styled.button`
  cursor: pointer;
  background: none;
  border: none;
`
