import "../public/assets/css/animate.min.css";
import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";

import "../public/assets/css/tailwind-built.css";
import Preloader from "../components/elements/Preloader";
import "swiper/css";
import Script from "next/script";
// import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const onLoad = () => {
    console.log("onLoad works!");
  };

  useEffect(() => {
    <Script id="tawk" strategy="lazyOnload">
      {`
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date(); Tawk_API.embedded='tawk_5fc258c9920fc91564cb894d';
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/5fc258c9920fc91564cb894d/1estddag9';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);})();
    `}
    </Script>;

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
        <Script
          strategy="lazyOnload"
          src="https://embed.tawk.to/5fc258c9920fc91564cb894d/1estddag9"
        />
      </Head>

      {!loading ? <Component {...pageProps} /> : <Preloader />}

      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-P5Y9P6SQSV`}
      />
      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-P5Y9P6SQSV');
        `}
      </Script>

      {/* <!-- Google tag (gtag.js) - Ads --> */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=AW-1090407733`}
      />
      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-10904077330'); 
        `}
      </Script>

      <Script id="tawk" strategy="lazyOnload">
        {`
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date(); Tawk_API.embedded='tawk_5fc258c9920fc91564cb894d';
      (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/5fc258c9920fc91564cb894d/1estddag9';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);})();
        `}
      </Script>

      <Script
        strategy="lazyOnload"
        src="https://embed.tawk.to/5fc258c9920fc91564cb894d/1estddag9"
      />
      {/* <div id="tawk_5fc258c9920fc91564cb894d"></div> */}
      {/* <TawkMessengerReact
        propertyid="tawk_5fc258c9920fc91564cb894d"
        widgetid="1estddag9"
        onLoad={onLoad}
      />  */}
    </>
  );
}

export default MyApp;
