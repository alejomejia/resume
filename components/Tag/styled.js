import styled from 'styled-components'

export const Component = styled.span`
  display: inline-block;
  padding-left: 8px;
  padding-right: 8px;
  color: ${({ theme }) => theme.palette.white};
  background-color: ${({ theme }) => theme.colors.tag};
  border-radius: 4px;
`
