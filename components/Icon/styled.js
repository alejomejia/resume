import styled from 'styled-components'

export const Component = styled.span`
  display: grid;

  svg {
    fill: ${(props) => (props.fill ? props.fill : 'var(--color-text-100)')};
    width: ${(props) => props.width}px;
  }
`
