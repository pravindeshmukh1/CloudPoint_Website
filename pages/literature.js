import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import CounterUp from "../components/elements/Counterup";
import YoutubeEmbed from "../components/elements/YoutubeEmbed";
import { howToData, literatureData } from "../public/assets/cardDetails";
import Head from "next/head";

const Literature = () => {
  const [inViewport, setInViewport] = useState(false);

  const handleScroll = () => {
    const elements = document.getElementsByClassName("counterUp");
    if (elements.length > 0) {
      const element = elements[0];
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (isInViewport && !inViewport) {
        setInViewport(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" name="CloudSocial Resource Literature" />
        <title>Literature Social Media Resources | CloudSocial</title>
        <meta
          name="description"
          content="CloudSocial provides all the literature resources which guide you to succeed in the CloudSocial media marketing platform. Check out our learning materials."
        />
        <link
          rel="canonical"
          href="https://cloudsocial.io/literature"
          key="canonical"
        />
      </Head>
      <Layout>
        <section className="-mt-24 pt-40 pb-12 bg-blueGray-100">
          <div className="container">
            <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">
              How to use cloudsocial
            </h1>
            <ul className="flex text-gray-500 text-sm lg:text-sm pb-12 wow animate__animated animate__fadeIn animated">
              <li className="inline-flex items-center">
                <a href="#" className="hover:text-blue-500 text-gray-800">
                  Home
                </a>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="h-5 w-auto text-gray-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </li>
              <li className="inline-flex items-center">
                <a href="#" className="hover:text-blue-500 text-gray-800">
                  Literature Info
                </a>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="h-5 w-auto text-gray-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </li>
              <li className="inline-flex items-center text-gray-400">
                <span>How to use platform demo Literatures</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="pt-20 pb-24 bg-blueGray-50" id="how-we-work">
          <div className="container">
            <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
              {/* <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">
                  <span>We are </span>
                  <span className="text-blue-500">awesome team </span>
                  <br />
                  <span>for your business dream</span>
                </h2>
              </div>
              <div className="w-full lg:w-1/2">
                <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  luctus eget justo et iaculis. Quisque vitae nulla malesuada,
                  auctor arcu vitae, luctus nisi. Sed elementum vitae ligula id
                  imperdiet.
                </p>
              </div> */}
              <div className="w-full  text-center mb-4 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">
                  <span>Literature</span>
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 -mb-6 text-center">
              {literatureData.map((literatureData, index) => {
                return (
                  <div
                    className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                    key={index}
                  >
                    <div className="p-12 bg-white shadow rounded">
                      <div className="flex w-12 mb-1 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                        {literatureData.id}
                      </div>
                      <a href={literatureData.url} target="_blank">
                        <img
                          className="h-36 mx-auto my-4"
                          src={literatureData.image}
                          alt={literatureData.title}
                        />
                        <h3 className="mb-2 font-bold font-heading text-xl">
                          {literatureData.title}
                        </h3>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="pt-10 pb-24 bg-blueGray-50" id="how-we-work">
          <div className="container">
            <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
              <div className="w-full  text-center mb-4 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">
                  <span>How To </span>
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 -mb-6 text-center">
              {howToData.map((howToData, index) => {
                return (
                  <div
                    className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                    key={index}
                  >
                    <div className="p-12 bg-white shadow rounded">
                      <div className="flex w-12 mb-1 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                        {howToData.id}
                      </div>
                      <a href={howToData.url} target="_blank">
                        <img
                          className="h-36 mx-auto my-4"
                          src={howToData.image}
                          alt={howToData.title}
                        />
                        <h3 className="mb-2 font-bold font-heading text-xl">
                          {howToData.title}
                        </h3>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Literature;
