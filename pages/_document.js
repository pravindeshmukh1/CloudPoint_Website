// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { useEffect } from "react";

const content1 = {
  "@context": "http://www.schema.org",
  "@type": "product",
  brand: "Cloudpoint",
  name: "Cloudpoint Technologies",
  image:
    "https://cloudpoint.co.in/images/CPT%20Logo-White.png",
  description:
    "We offer a powerful suite of BI and analytics products that will change the way you discover and share insights, so you can make the best decisions, faster.",
  aggregateRating: {
    "@type": "aggregateRating", "ratingValue": "4.2", "reviewCount": "13"
  },
};
const content2 = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "CloudSocial",
  url: "https://cloudpoint.co.in/",
  potentialAction: {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://cloudpoint.co.in/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
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
     "https://twitter.com/techcloudpoint?lang=en" 
  ],
};

export default function Document() {
  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    Tawk_API.embedded = "tawk_5fc258c9920fc91564cb894d";
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/5fc258c9920fc91564cb894d/1estddag9";
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
        <meta
          name="facebook-domain-verification"
          content="smpy82pzrgde0svbqynd7fpt3ya5bb"
        />
        <script
          strategy="lazyOnload"
          src="https://embed.tawk.to/5fc258c9920fc91564cb894d/1estddag9"
          async
        />
        {/* <Script id="tawk" strategy="lazyOnload">
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
      </Script> */}

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

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MBQ4C96');
            `,
          }}
        />

        {/* Global site tag (gtag.js) - Google Analytics Old  */}

        {/* <Script
          async
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=UA-162922565-1`}
        />
        <Script strategy="lazyOnload">
          {`
        window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "UA-162922565-1");
        `}
        </Script> */}

        <script src="https://www.googletagmanager.com/gtag/js?id=UA-162922565-1"></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "UA-162922565-1");
            `,
          }}
        />

        {/* <!-- Google tag (gtag.js) --> */}

        {/* <Script
          async
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
        </Script> */}

        <script src="https://www.googletagmanager.com/gtag/js?id=G-P5Y9P6SQSV"></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-P5Y9P6SQSV');
            `,
          }}
        />

        {/* <!-- Google tag (gtag.js) - Ads --> */}
        {/*   <Script
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
        </Script> */}

        <script src="https://www.googletagmanager.com/gtag/js?id=AW-1090407733"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-10904077330');
            `,
          }}
        />

        {/* <!-- Quora Pixel Code (JS Helper)  --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            !(function (q, e, v, n, t, s) {
        if (q.qp) return;
        n = q.qp = function () {
          n.qp ? n.qp.apply(n, arguments) : n.queue.push(arguments);
        };
        n.queue = [];
        t = document.createElement(e);
        t.async = !0;
        t.src = v;
        s = document.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, "script", "https://a.quora.com/qevents.js");
      qp("init", "b4ad7a3bafdb461aa8ddc038f9d52abc");
      qp("track", "ViewContent");
            `,
          }}
        />

        {/* Hotjar Tracking Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(h,o,t,j,a,r){ h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)}; h._hjSettings={hjid:3533239,hjsv:6}; a=o.getElementsByTagName('head')[0]; r=o.createElement('script');r.async=1; r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv; a.appendChild(r); })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />

        {/* Meta Pixel Code  */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '226453679214323');
fbq('track', 'PageView');
            `,
          }}
        />
        {/* Meta Pixel Code */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=226453679214323&ev=PageView&noscript=1"/>`,
          }}
        />

        {/*  Prefinery Code  */}
        <script>
          {`prefinery=window.prefinery||function(){(window.prefinery.q=window.prefinery.q||[]).push(arguments)};`}
        </script>
        <script
          src="https://widget.prefinery.com/widget/v2/4eezyyb5.js"
          defer
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />

        {/* Google Tag Manager  */}

        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MBQ4C96"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>`,
          }}
        />
        {/* repuso widget code  */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `  var script = document.createElement("script");
      script.type = "module";
      script.src = "https://repuso.com/widgets/2.0/rw-widget-floating.js";
      document.getElementsByTagName("head")[0].appendChild(script);`,
          }}
        />

        {/*   VISA Tracking Code for cloudsocial.io  */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `(function (v, i, s, a, t) {
        v[t] =
          v[t] ||
          function () {
            (v[t].v = v[t].v || []).push(arguments);
          };
        if (!v._visaSettings) {
          v._visaSettings = {};
        }
        v._visaSettings[a] = { v: "1.0", s: a, a: "1", t: t };
        var b = i.getElementsByTagName("body")[0];
        var p = i.createElement("script");
        p.defer = 1;
        p.async = 1;
        p.src = s + "?s=" + a;
        b.appendChild(p);
      })(
        window,
        document,
        "//app-worker.visitor-analytics.io/main.js",
        "489372f0-bfcd-11ec-b589-901b0edac50a",
        "va"
      );`,
          }}
        />
        
        {/* Linkedin Ads Code */}
        <script>
          {`_linkedin_partner_id = "4215497";
      window._linkedin_data_partner_ids =
        window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(_linkedin_partner_id);`}
        </script>

        <script>
          {`(function (l) {
        if (!l) {
          window.lintrk = function (a, b) {
            window.lintrk.q.push([a, b]);
          };
          window.lintrk.q = [];
        }
        var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script");
        b.type = "text/javascript";
        b.async = true;
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b, s);
      })(window.lintrk);`}
        </script>

        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img
        height="1"
        width="1"
        style="display: none"
        alt=""
        src="https://px.ads.linkedin.com/collect/?pid=4215497&fmt=gif"
      />`,
          }}
        />

        {/*  quora */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img
        height="1"
        width="1"
        style="display: none"
        src="https://q.quora.com/_/ad/b4ad7a3bafdb461aa8ddc038f9d52abc/pixel?tag=ViewContent&noscript=1" />`,
          }}
        />

        {/*  Iubenda */}
        {/* <Script strategy="lazyOnload">
          {`(function (w, d) {
        var loader = function () {
          var s = d.createElement("script"),
            tag = d.getElementsByTagName("script")[0];
          s.src = "https://cdn.iubenda.com/iubenda.js";
          tag.parentNode.insertBefore(s, tag);
        };
        if (w.addEventListener) {
          w.addEventListener("load", loader, false);
        } else if (w.attachEvent) {
          w.attachEvent("onload", loader);
        } else {
          w.onload = loader;
        }
      })(window, document);
        `}
        </Script> */}
        <script>
          {` (function (w, d) {
        var loader = function () {
          var s = d.createElement("script"),
            tag = d.getElementsByTagName("script")[0];
          s.src = "https://cdn.iubenda.com/iubenda.js";
          tag.parentNode.insertBefore(s, tag);
        };
        if (w.addEventListener) {
          w.addEventListener("load", loader, false);
        } else if (w.attachEvent) {
          w.attachEvent("onload", loader);
        } else {
          w.onload = loader;
        }
      })(window, document);`}
        </script>
      </body>
    </Html>
  );
}
