import { ThemeProvider } from 'styled-components'

// Importing from config folder
import GlobalCSS from '../styles/global'
import GENERAL from '../styles/themes/general'
import LIGHT from '../styles/themes/light'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={GENERAL}>
      <ThemeProvider theme={LIGHT}>
        <GlobalCSS />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeProvider>
  )
}

export default MyApp
