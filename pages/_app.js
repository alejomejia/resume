import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'styled-components'
import * as gtag from '../lib/gtag'

import GlobalCSS from '../styles/global'
import GENERAL from '../styles/themes/general'
import LIGHT from '../styles/themes/light'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

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
