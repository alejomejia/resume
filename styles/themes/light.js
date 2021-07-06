import { css } from 'styled-components'

const lightTheme = css`
  :root {
    --color-white: hsl(0, 0%, 100%);
    --color-primary: hsl(195, 100%, 50%);
    --color-surface: hsl(0, 0%, 100%);
    --color-bg: hsl(0, 0%, 98%);
    --color-bg-accent: hsl(240, 5%, 95%);
    --color-tag: hsl(240, 4%, 46%);
    --color-cta: hsl(240, 5%, 34%);
    --color-text-100: hsl(240, 5%, 65%);
    --color-text-200: hsl(240, 4%, 46%);
    --color-text-300: hsl(240, 5%, 34%);
    --shadow-card: 0 1px 3px hsla(0, 0%, 0%, 0.1);
    --shadow-fixed: 0 2px 12px hsla(0, 0%, 0%, 0.05);
  }
`

export default lightTheme
