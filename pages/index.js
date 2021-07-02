import Head from '../components/Head'
import Container from '../components/Container'
import Grid from '../components/Grid'
import Intro from '../components/Intro'

const Home = () => {
  return (
    <>
      <Head title="Resume :: Alejandro Mejia" />
      <Container>
        <Grid gap="48px" columns="450px 1fr">
          <aside>
            <Intro />
          </aside>
          <main>Container Content</main>
        </Grid>
      </Container>
    </>
  )
}

export default Home
