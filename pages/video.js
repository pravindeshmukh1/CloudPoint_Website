import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import CounterUp from "../components/elements/Counterup";
import { video } from "../public/assets/cardDetails";
import YoutubeEmbed from "../components/elements/YoutubeEmbed";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Video = () => {
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
        <meta charSet="utf-8" name="CloudPoint Resource Video" />
        <title>Video Social Media Resources | CloudPoint</title>
        <meta
          name="description"
          content="CloudPoint provides all the video resources which guide you to succeed in the CloudPoint media marketing platform. Check out our learning materials."
        />
        <link
          rel="canonical"
          href="https://cloudpoint.co.in/video"
          key="canonical"
        />
      </Head>
      <Layout>
        <section className="-mt-24 pt-40 pb-12 bg-blueGray-100">
          <div className="container">
            <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">
            Cloudpoint Technologies Clients
            </h1>
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
                  <span>Video</span>
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 -mb-6 text-center">
              {video?.CloudSocialVideo.map((videoData, index) => {
                return (
                  <div
                    className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                    key={index}
                  >
                    <div className="p-3 bg-white shadow rounded">
                      <div className="flex w-12 mb-1 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                        {videoData.id}
                      </div>

                      {/* <YoutubeEmbed embedId={videoData.url} /> */}
                      <Link href={videoData.url} legacyBehavior>
                        <a target="_blank">
                          {/* <img
                            className="rounded-xl"
                            src={videoData.image}
                            alt={videoData.title}
                          /> */}
                          <Image
                            className="rounded-xl"
                            src={videoData.image}
                            alt={videoData.title}
                            priority
                            // layout="fill"
                            width={1000}
                            height={1000}
                            // objectFit="contain"
                          />
                        </a>
                      </Link>
                      <h3 className="mb-2 mt-2 font-bold font-heading text-xl">
                        {videoData.title}
                      </h3>
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

export default Video;
