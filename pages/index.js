import Head from '../components/Head'
import Container from '../components/Container'
import Grid from '../components/Grid'

import Intro from '../components/Intro'
import Skills from '../components/Skills'
import Languages from '../components/Languages'
import Social from '../components/Social'

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
          <main>Container Content</main>
        </Grid>
      </Container>
    </>
  )
}

export default Home
