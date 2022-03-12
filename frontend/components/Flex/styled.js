import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  gap: ${(p) => p.$gap};
  align-items: ${(p) => p.$align};
  justify-content: ${(p) => p.$justify};
  flex-direction: ${(p) => p.$direction};
  flex-wrap: ${(p) => p.$wrap};
`
