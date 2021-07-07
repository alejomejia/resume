import { css } from 'styled-components'

const darkTheme = css`
  [data-theme='dark'] {
    --color-surface: hsl(222, 20%, 17%);
    --color-bg: hsl(221, 22%, 14%);
    --color-bg-accent: hsl(222, 20%, 11%);
    --color-tag: hsl(216, 19%, 22%);
    --color-cta: hsl(195, 100%, 50%);
    --color-skeleton: hsl(219, 16%, 23%);
    --color-text-100: hsl(211, 8%, 50%);
    --color-text-200: hsl(210, 14%, 66%);
    --color-text-300: hsl(204, 24%, 96%);
    --shadow-card: 0 1px 3px hsla(0, 0%, 0%, 0.25);
    --shadow-fixed: 0 2px 12px hsla(0, 0%, 0%, 0.2);
  }
`

export default darkTheme
