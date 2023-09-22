// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const content1 = {
  "@context": "http://www.schema.org",
  "@type": "product",
  brand: "CloudSocial",
  name: "CloudSocial Technologies",
  image:
    "https://drive.google.com/file/d/1of8XuTIGlls4qo3bDUQdNFPELbGaTsGP/view?usp=sharing",
  description:
    "CloudSocial is Social Media Engagement, Marketing & Management Platform. User can manage several social channels like Facebook, Instagram, LinkedIn, Twitter, Youtube, Google My Business and Email. CloudSocial allows to quickly Respond, Publish, Listen and Analyze. Many more features at affordable price and powered by 24*7*365 support.",
  aggregateRating: {
    "@type": "aggregateRating",
    ratingValue: "4.9",
    reviewCount: "8",
  },
};
const content2 = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "CloudSocial",
  url: "https://www.cloudsocial.io/",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.cloudsocial.io/{search_term_string}",
    "query-input": "required name=search_term_string",
  },
};
const content3 = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CloudSocial",
  url: "https://www.cloudsocial.io/",
  logo: "https://drive.google.com/file/d/1of8XuTIGlls4qo3bDUQdNFPELbGaTsGP/view",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "9372923073",
    contactType: "technical support",
    areaServed: "IN",
    availableLanguage: "en",
  },
  sameAs: [
    "https://www.facebook.com/CloudSocial-2099206000345885/",
    "https://twitter.com/Cloudsocial_",
    "https://www.instagram.com/cloudsocial.io/",
    "https://www.youtube.com/channel/UCcdcLfRsJmTRax5L3XqbOYQ",
    "https://www.linkedin.com/company/cloudsocial-io/",
  ],
};

export default function Document() {
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

        {/* Google Analytics Google tag (gtag.js)   */}
        <script async>
          {`src="https://www.googletagmanager.com/gtag/js?id=G-P5Y9P6SQSV"`}
        </script>
        <script>
          {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-P5Y9P6SQSV');`}
        </script>

        {/* Google tag (gtag.js)   */}
        <script async>
          {`
          async src="https://www.googletagmanager.com/gtag/js?id=AW-10904077330">
          `}
        </script>
        <script>
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-10904077330');
        `}
        </script>

        {/* Meta Pixel Code  */}
        <script async>
          {`
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
        `}
        </script>
        {/* Meta Pixel Code */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=226453679214323&ev=PageView&noscript=1"/>`,
          }}
        />

        {/* Hotjar Tracking Code  */}
        <script async>
          {`
          (function(h,o,t,j,a,r){ h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)}; h._hjSettings={hjid:3533239,hjsv:6}; a=o.getElementsByTagName('head')[0]; r=o.createElement('script');r.async=1; r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv; a.appendChild(r); })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
        </script>

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
        {/* Tawk.to Script  */}
        <script type="text/javascript">
          {`
      <div id='tawk_5fc258c9920fc91564cb894d'></div>

      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date(); Tawk_API.embedded='tawk_5fc258c9920fc91564cb894d';
      (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/5fc258c9920fc91564cb894d/1estddag9';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);})();
        `}
        </script>

        {/* repuso widget code  */}
        <script>
          {`
          var script = document.createElement("script");
      script.type = "module";
      script.src = "https://repuso.com/widgets/2.0/rw-widget-floating.js";
      document.getElementsByTagName("head")[0].appendChild(script);
        `}
        </script>

        {/*  VISA Tracking Code  */}
        <script>
          {`(function (v, i, s, a, t) {
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
      );`}
        </script>

        {/*  VISA Tracking Code  */}
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

        {/*  Iubenda */}
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
