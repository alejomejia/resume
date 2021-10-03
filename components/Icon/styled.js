import styled from 'styled-components'

export const Wrapper = styled.span`
  display: inline-flex;

  svg {
    fill: ${(p) => p.$fill || 'var(--color-text-100)'};
    width: ${(p) => p.$width}px;
  }
`
