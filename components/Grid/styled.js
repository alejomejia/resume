import styled from 'styled-components'

export const Component = styled.div`
  display: grid;
  gap: ${(props) => props.gap};
  grid-template-columns: ${(props) => props.columns};
`
