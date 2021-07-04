import { ThemeProvider } from 'styled-components'

import GlobalCSS from '../styles/global'
import GENERAL from '../styles/themes/general'
import LIGHT from '../styles/themes/light'
import DARK from '../styles/themes/dark'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={GENERAL}>
      <ThemeProvider theme={DARK}>
        <GlobalCSS />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeProvider>
  )
}

export default MyApp
