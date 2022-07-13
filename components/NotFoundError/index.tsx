import Head from "next/head";
import DefaultErrorPage from "next/error";

const NotFoundError = (): JSX.Element => (
  <>
    <Head>
      <meta name="robots" content="noindex" />
    </Head>
    <DefaultErrorPage statusCode={404} />
  </>
);

export default NotFoundError;
