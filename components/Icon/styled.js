import styled, { ThemeConsumer } from 'styled-components'

export const Component = styled.span`
  display: inline-flex;

  svg {
    fill: ${(props) => (props.fill ? props.fill : props.theme.colors.text100)};
    width: ${(props) => props.width}px;
  }
`
