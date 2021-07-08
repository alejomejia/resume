import { css } from 'styled-components'

const darkTheme = css`
  [data-theme='dark'] {
    --color-primary: hsl(164, 100%, 42%);
    --color-text-100: hsl(211, 8%, 50%);
    --color-text-200: hsl(210, 14%, 66%);
    --color-text-300: hsl(204, 24%, 96%);
    --color-art-bg: hsl(213, 71%, 22%);
    --color-art-center: hsl(195, 100%, 11%);
    --color-art-spinner: hsl(164, 100%, 50%);
    --color-surface: hsl(222, 20%, 20%);
    --color-bg: hsl(221, 22%, 14%);
    --color-bg-accent: hsl(222, 20%, 11%);
    --color-tag: hsl(216, 19%, 22%);
    --color-cta: hsl(222, 20%, 17%);
    --color-skeleton: hsl(219, 16%, 23%);
    --shadow-card: 0 1px 4px hsla(0, 0%, 0%, 0.4);
    --shadow-fixed: 0 2px 12px hsla(0, 0%, 0%, 0.2);
  }
`

export default darkTheme
