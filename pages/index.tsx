import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { LinkedIn, Mail, GitHub } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ryan Leung</title>
      </Head>

      <main className="flex flex-col w-full h-screen">
        <div className="flex flex-row justify-center items-center h-screen w-screen absolute">
          <h1 className="flex flex-col">
            <span className="font-bold font-sans text-4xl">Hello!</span>
            <span className="font-serif text-3xl">
              My name is <span className="font-bold">Ryan</span> :)
            </span>
          </h1>
        </div>

        <footer className="flex flex-row justify-center fixed inset-x-0 bottom-0 mb-10">
          <div className="mx-2">
            <LinkedIn />
          </div>
          <div className="mx-2">
            <GitHub />
          </div>
          <div className="mx-2">
            <Mail />
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;
