import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <main className="flex flex-col w-full min-h-0">
      <Head>
        <title>Ryan Leung</title>
      </Head>

      <div className="flex flex-row justify-center items-center h-full w-full absolute">
        <h1 className="flex flex-col">
          <span className="font-bold font-sans text-4xl">Hello!</span>
          <span className="font-serif text-3xl">
            My name is <span className="font-bold">Ryan</span> :)
          </span>
        </h1>
      </div>
    </main>
  );
};

export default Home;
