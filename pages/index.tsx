import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Container, LinkedIn, Mail, GitHub } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ryan Leung</title>
        <meta name="description" content="ryan-leung.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-column">
        <Container>
          <h1>Hello! My name is Ryan :)</h1>
        </Container>
        <Container>
          <LinkedIn />
          <GitHub />
          <Mail />
        </Container>
      </main>

      <footer>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Home
        </a>
      </footer>
    </div>
  );
};

export default Home;
