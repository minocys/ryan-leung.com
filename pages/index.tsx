import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Container} from '../components'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ryan Leung</title>
        <meta name="description" content="ryan-leung.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          Ryan Leung
        </Container>
      </main>

      <footer>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ryan-leung.com
        </a>
      </footer>
    </div>
  )
}

export default Home
