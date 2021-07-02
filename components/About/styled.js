import styled from 'styled-components'

export const Component = styled.section`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  background-color: ${({ theme }) => theme.colors.bgAccent};

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: -500%;
    bottom: 0;
    width: 1000%;
    background-color: ${({ theme }) => theme.colors.bgAccent};
    z-index: -1;
  }
`
