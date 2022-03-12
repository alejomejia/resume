import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: ${(p) => p.$m};
  margin-top: ${(p) => p.$mt};
  margin-right: ${(p) => p.$mr};
  margin-bottom: ${(p) => p.$mb};
  margin-left: ${(p) => p.$ml};
  padding: ${(p) => p.$p};
  padding-top: ${(p) => p.$pt};
  padding-right: ${(p) => p.$pr};
  padding-bottom: ${(p) => p.$pb};
  padding-left: ${(p) => p.$pl};
`
