// Handle Theme switch
import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { store } from '../context/store'

import GlobalCSS from '../styles/global'
import GENERAL from '../styles/themes/general'
import LIGHT from '../styles/themes/light'
import DARK from '../styles/themes/dark'

// Components
import Head from '../components/Head'
import Container from '../components/Container'
import Float from '../components/Float'
import PageGrid from '../components/PageGrid'

import Intro from '../components/Intro'
import Skills from '../components/Skills'
import Languages from '../components/Languages'
import Social from '../components/Social'

import About from '../components/About'
import Experience from '../components/Experience'
import Portfolio from '../components/Portfolio'
import Recommendations from '../components/Recommendations'

import Footer from '../components/Footer'

const Home = () => {
  const { isDarkMode } = useContext(store)

  return (
    <ThemeProvider theme={GENERAL}>
      <ThemeProvider theme={isDarkMode ? DARK : LIGHT}>
        <GlobalCSS />
        <Head title="Resume :: Alejandro Mejia" />
        <Container>
          <Float />
          <PageGrid>
            <aside>
              <Intro />
              <Skills />
              <Languages />
              <Social />
            </aside>
            <main>
              <About />
              <Experience />
              <Portfolio />
              <Recommendations />
            </main>
          </PageGrid>
        </Container>
        <Footer />
      </ThemeProvider>
    </ThemeProvider>
  )
}

export default Home
