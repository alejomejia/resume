// Handle Theme switch
import { ThemeProvider } from 'styled-components'

import GlobalCSS from '../styles/global'
import GENERAL from '../styles/themes/general'

// Components
import Head from '../components/Head'
import Container from '../components/Container'
import Float from '../components/Float'
import PageGrid from '../components/PageGrid'

import Intro from '../components/Intro'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Languages from '../components/Languages'
import Social from '../components/Social'

import About from '../components/About'
import Experience from '../components/Experience'
import Portfolio from '../components/Portfolio'
import Recommendations from '../components/Recommendations'

import Footer from '../components/Footer'

const Home = () => {
  return (
    <ThemeProvider theme={GENERAL}>
      <GlobalCSS />
      <Head title="Resume :: Alejandro Mejia" />
      <Container>
        <Float />
        <PageGrid>
          <aside>
            <Intro />
            <Languages />
            <Skills />
            <Education />
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
  )
}

export default Home
