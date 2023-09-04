import "../public/assets/css/animate.min.css";
import React, { useEffect, useState } from "react";
import Head from "next/head";

import "../public/assets/css/tailwind-built.css";
import Preloader from "../components/elements/Preloader";
import "swiper/css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 1000);
    setLoading(false);
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" name="CloudSocial Solution page" />
        <title>Social Media Management Tools | CloudSocial</title>
        <meta
          name="description"
          content="Best social media management tools built to manage all your social media handles at one place. Grow and engage with an ease of social media listening."
        />
      </Head>

      {!loading ? <Component {...pageProps} /> : <Preloader />}
    </>
  );
}

export default MyApp;
