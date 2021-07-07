import styled from 'styled-components'

export const Component = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: var(--color-skeleton);
  border-radius: 4px;
  will-change: opacity;
  animation: pulse 0.5s linear infinite alternate;

  @keyframes pulse {
    from {
      opacity: 0.75;
    }
    to {
      opacity: 1;
    }
  }
`
