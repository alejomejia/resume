import { createGlobalStyle } from 'styled-components'

import reset from './reset'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'

const GlobalCSS = createGlobalStyle`
  ${reset}

  ${lightTheme}
  ${darkTheme}

  html,
  body{
    overflow-x: hidden;
  }

  body{
    position: relative;
    font-family: ${({ theme }) => theme.fonts.family.secondary};
    font-size: 16px;
    background-color: var(--color-bg);
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: ${({ theme }) => theme.fonts.family.primary};
  }

  p {
    color: var(--color-text-200);
    line-height: 26px;
    margin-bottom: ${({ theme }) => theme.spacing(2)};

    strong {
      color: var(--color-text-300);
      font-weight: ${({ theme }) => theme.fonts.weight.medium};
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  small {
    color: var(--color-text-100);
    font-size: ${({ theme }) => theme.fonts.size.sm};
    line-height: 26px;
    margin-bottom: ${({ theme }) => theme.spacing(2)};

    a {
      color: var(--color-primary);
      font-family: ${({ theme }) => theme.fonts.family.primary};
    }
  }
`

export default GlobalCSS
