import Tina from "../.tina/components/TinaDynamicProvider.js";
import "../styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Tina>
      <Component {...pageProps} />
    </Tina>
  );
};

export default App;
