import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "../styles/main.scss";
import "../styles/responsive.scss";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
