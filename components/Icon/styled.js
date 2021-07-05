import styled from 'styled-components'

export const Component = styled.span`
  display: grid;

  svg {
    fill: ${(props) => (props.fill ? props.fill : props.theme.colors.text100)};
    width: ${(props) => props.width}px;
  }
`
