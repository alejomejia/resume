import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  gap: ${(props) => props.gap};
  grid-template-columns: ${(props) => props.columns};
`
