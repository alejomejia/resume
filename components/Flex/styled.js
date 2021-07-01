import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  gap: ${(props) => props.gap}px;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  flex-direction: ${(props) => props.direction};
  flex-wrap: ${(props) => props.wrap};
`
