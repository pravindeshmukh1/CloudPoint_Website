// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { useEffect } from "react";

const content1 = {
  "@context": "http://www.schema.org",
  "@type": "product",
  brand: "Cloudpoint",
  name: "Cloudpoint Technologies",
  image: "https://cloudpoint.co.in/images/CPT%20Logo-White.png",
  description:
    "We offer a powerful suite of BI and analytics products that will change the way you discover and share insights, so you can make the best decisions, faster.",
  aggregateRating: {
    "@type": "aggregateRating",
    ratingValue: "4.2",
    reviewCount: "13",
  },
};
const content2 = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "CloudSocial",
  url: "https://cloudpoint.co.in/",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://cloudpoint.co.in/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};
const content3 = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cloudpoint",
  url: "https://cloudpoint.co.in/",
  logo: "https://cloudpoint.co.in/images/CPT%20Logo-White.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "02249720048",
    contactType: "technical support",
    areaServed: "IN",
    availableLanguage: "en",
  },
  sameAs: [
    "https://www.facebook.com/cloudpointtech/",
    "https://www.linkedin.com/in/cpt/?originalSubdomain=in",
    "https://twitter.com/techcloudpoint?lang=en",
  ],
};

export default function Document() {
  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    Tawk_API.embedded = "tawk_60a220fe185beb22b30ddb18";
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/60a220fe185beb22b30ddb18/1f5sl1pcm";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          strategy="lazyOnload"
          src="https://embed.tawk.to/60a220fe185beb22b30ddb18/1f5sl1pcm"
          async
        />

        {/* application/ld+json   */}
        <script
          id="app-ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(content1, null, "\t"),
          }}
        />
        <script
          id="app-ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(content2, null, "\t"),
          }}
        />
        <script
          id="app-ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(content3, null, "\t"),
          }}
        />

        {/* Global site tag (gtag.js) - Google Analytics  */}

        <script src="https://www.googletagmanager.com/gtag/js?id=UA-137176891-1"></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'UA-137176891-1');
            `,
          }}
        />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
