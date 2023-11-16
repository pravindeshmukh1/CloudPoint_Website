import "../public/assets/css/animate.min.css";
import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";

import "../public/assets/css/tailwind-built.css";
import Preloader from "../components/elements/Preloader";
import "swiper/css";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const onLoad = () => {
    console.log("onLoad works!");
  };
  // const initialRenderRef = useRef(false);

  useEffect(() => {
    // initialRenderRef.current = true;

    setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 1000);
    setLoading(false);
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" name="CloudPoint Home page" />
        <title>Cloudpoint Technologies Customer Lifecycle Management</title>
        <meta
          name="description"
          content="Cloudpoint Technologies - Customer Lifecycle Management | Analytics | Business Intelligence | Social Command Center | CRM | Contract Lifecycle Management"
        />
      </Head>
      

      {!loading ? <Component {...pageProps} /> : <Preloader />}
      <TawkMessengerReact
        propertyid="60a220fe185beb22b30ddb18"
        widgetid="1f5sl1pcm"
        onLoad={onLoad}
      />
    </>
  );
}

export default MyApp;
