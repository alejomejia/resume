import { css } from 'styled-components'

const darkTheme = css`
  [data-theme='dark'] {
    --color-text-100: hsl(211, 8%, 50%);
    --color-text-200: hsl(210, 14%, 66%);
    --color-text-300: hsl(204, 24%, 96%);
    --color-surface: hsl(222, 20%, 20%);
    --color-bg: hsl(221, 22%, 14%);
    --color-bg-accent: hsl(222, 20%, 11%);
    --color-tag: hsl(216, 19%, 22%);
    --color-cta: hsl(222, 20%, 17%);
    --color-skeleton: hsl(219, 16%, 23%);
    --shadow-card: 0 1px 4px hsla(0, 0%, 0%, 0.4);
    --shadow-fixed: 0 4px 12px hsla(0, 0%, 0%, 0.4);
  }
`

export default darkTheme
