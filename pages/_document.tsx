import { Html, Head, Main, NextScript } from "next/document";
import { LinkedIn, Mail, GitHub, Notes } from "components";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="ryan-leung.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&family=Overpass:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body>
        <div className="w-full flex flex-row justify-end max-h-13">
          <Notes />
        </div>
        <Main />
        <NextScript />
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
      </body>
    </Html>
  );
}
