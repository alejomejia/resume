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
    background-color: ${({ theme }) => theme.colors.bg};
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: ${({ theme }) => theme.fonts.family.primary};
  }

  p {
    color: ${({ theme }) => theme.colors.text200};
    line-height: 26px;
    margin-bottom: ${({ theme }) => theme.spacing(2)};

    strong {
      color: ${({ theme }) => theme.colors.text300};
      font-weight: ${({ theme }) => theme.fonts.weight.medium};
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  small {
    color: ${({ theme }) => theme.colors.text200};
    font-size: ${({ theme }) => theme.fonts.size.sm};
    line-height: 26px;
    margin-bottom: ${({ theme }) => theme.spacing(2)};

    a {
      color: ${({ theme }) => theme.palette.primary};
      font-family: ${({ theme }) => theme.fonts.family.primary};
    }
  }
`

export default GlobalCSS
