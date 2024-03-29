import Head from "next/head";
import { useEffect } from "react";

import AOS from "aos";

import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Services from "../components/Services";
import Resume from "../components/Resume";
import Counter from "../components/Counter";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HeadMeta = () => {
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link rel="manifest" href="/icons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/icons/safari-pinned-tab.svg"
        color="#8062f7"
      />
      <link rel="shortcut icon" href="/icons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="white" />

      {/* manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    */}
      {/*    
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    */}

      <meta name="title" content="Mustkeem K | Software Developer" />
      <meta
        name="description"
        content="Mustkeem K is a Software Developer and Mentor with over 7 years of experience in software development, web application development and mentoring."
      />

      {/* Open Graph / Facebook  */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://metatags.io/" />
      <meta property="og:title" content="Mustkeem K | Software Developer" />
      <meta
        property="og:description"
        content="Mustkeem K is a Software Developer and Mentor with over 7 years of experience in software development, web application development and mentoring."
      />

      {/* Twitter  */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta
        property="twitter:title"
        content="Mustkeem K | Software Developer"
      />
      <meta
        property="twitter:description"
        content="Mustkeem K is a Software Developer and Mentor with over 7 years of experience in software development, web application development and mentoring."
      />
    </>
  );
};

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Mustkeem K | Software Developer</title>
        <HeadMeta />
      </Head>
      <div>
        <Header />
        <Banner />
        <About />
        <Services />
        <Resume />
        <Counter />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
