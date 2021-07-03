import Head from '../components/Head'
import Container from '../components/Container'
import Grid from '../components/Grid'

import Intro from '../components/Intro'
import Skills from '../components/Skills'
import Languages from '../components/Languages'
import Social from '../components/Social'

import About from '../components/About'
import Experience from '../components/Experience'
import Portfolio from '../components/Portfolio'

const Home = () => {
  return (
    <>
      <Head title="Resume :: Alejandro Mejia" />
      <Container>
        <Grid gap="48px" columns="450px 1fr">
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
          </main>
        </Grid>
      </Container>
    </>
  )
}

export default Home
