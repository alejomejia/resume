import { createGlobalStyle } from 'styled-components'

const GlobalCSS = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;

    &:before,
    &:after{
      box-sizing: border-box;
    }
  }

  html,
  body{
    overflow-x: hidden;
  }

  body{
    position: relative;
    font-family: ${({ theme }) => theme.fonts.family.secondary};
    font-size: 16px;
  }
`

export default GlobalCSS
