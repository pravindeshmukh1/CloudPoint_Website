import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import CounterUp from "../components/elements/Counterup";
import { integrationIcon } from "../public/assets/cardDetails";
import Head from "next/head";
import Image from "next/image";

const Integration = () => {
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
        <meta
          charSet="utf-8"
          name="CloudPoint : All social integration in your pocket"
        />
        <title>Social Media Integration Apps | CloudPoint</title>
        <meta
          name="description"
          content="CloudPoint offers you all social media integration for your all social media management needs. Checkout our page to know more"
        />
        <link
          rel="canonical"
          href="https://cloudpoint.co.in/integration"
          key="canonical"
        />
      </Head>
      <Layout>
        <section className="relative -mt-24 pt-24">
          <div
            className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blueGray-100 z-0"
            style={{ zIndex: "-1" }}
          ></div>
          <div className="container">
            <div className="flex flex-wrap items-center -mx-3">
              <div className="w-full lg:w-1/2 px-3">
                <div className="py-12">
                  <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                    <h1 className="text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animatedanimated animate__fadeIn">
                      CloudSocial has integrated all of your{" "}
                      <span className="text-blue-500">favourite apps</span> for
                      an holistic experience.
                    </h1>
                    {/* <p className="text-blueGray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn">
                      We are <strong className="text-blue-500">Monst</strong>, a
                      Creative Design{" "}
                      <span
                        className="typewrite d-inline text-brand"
                        data-period="3000"
                        data-type='["Web Agency", "Social Marketing" ]'
                      ></span>
                    </p>
                    <p className="text-blueGray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn mt-3 text-sm">
                      Helping you maximize operations management with
                      digitization
                    </p> */}
                  </div>
                  <div className="text-center lg:text-left">
                    <Link href="/pricing" legacyBehavior>
                      <a className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded wow animate__animatedanimated animate__fadeIn">
                        Our Services
                      </a>
                    </Link>
                    <Link href="#how-we-work" legacyBehavior>
                      <a
                        className="block hover-up-2 sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded wow animate__animatedanimated animate__fadeIn"
                        data-wow-delay=".3s"
                      >
                        How We Work?
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-3 lg:bg-blueGray-10 mb-12 lg:mb-0 pb-10">
                <div className="flex items-center justify-center">
                  <img
                    className="lg:max-w-lg"
                    src="/assets/imgs/illustrations/team.svg"
                    alt="team"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="py-20 bg-blueGray-50" id="how-we-work">
          <div className="container text-center">
            <div className="max-w-lg mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading">
                CloudSocial has integrated all of your{" "}
                <span className="text-blue-500"> favourite apps </span>
                for an holistic experience.
              </h2>
            </div>
          </div>
        </section> */}

        <section className="py-20">
          <div className="container text-center">
            <div className="flex flex-wrap justify-center -mx-5">
              {integrationIcon.map(({ img, title, id, alt, content }) => (
                <div className="w-1/2 lg:w-1/4 px-5 mb-12" key={id}>
                  <div
                    className="hover-up-5 pt-8 pb-8 px-1 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200 "
                    data-wow-delay=".1s hover:drop-shadow"
                  >
                    {/* <img
                      className="mb-6 h-20 w-2 mx-auto"
                      src={img}
                      alt={alt}
                    /> */}
                    <Image
                      className="mb-6 h-20 w-2 mx-auto "
                      src={img}
                      alt={alt}
                      width={100}
                      height={100}
                      objectFit="contain"
                    />
                    <strong className="mt-6 mb-2 text-md">{title}</strong>
                    <p className="text-gray-500 text-xs mt-3">{content}</p>
                  </div>
                </div>
              ))}
              {/* <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                                <div className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".3s">
                                    <img className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top" src="/assets/imgs/placeholders/avatar-2.png" alt="Monst" />
                                    <strong className="mt-6 mb-2 text-md">Clara Kolawole</strong>
                                    <p className="text-gray-500 text-xs mt-3">CEO-Founder</p>
                                </div>
                            </div>
                            <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                                <div className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".5s">
                                    <img className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top" src="/assets/imgs/placeholders/avatar-3.png" alt="Monst" />
                                    <strong className="mt-6 mb-2 text-md">Chris Fulton</strong>
                                    <p className="text-gray-500 text-xs mt-3">Project-Manager</p>
                                </div>
                            </div>
                            <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                                <div className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".7s">
                                    <img className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top" src="/assets/imgs/placeholders/avatar-4.png" alt="Monst" />
                                    <strong className="mt-6 mb-2 text-md">Dany Connolly</strong>
                                    <p className="text-gray-500 text-xs mt-3">Direct-Founder</p>
                                </div>
                            </div>
                            <div className="w-1/2 lg:w-1/4 px-5">
                                <div className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".1s">
                                    <img className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top" src="/assets/imgs/placeholders/avatar-5.png" alt="Monst" />
                                    <strong className="mt-6 mb-2 text-md">Al-amin Bishash</strong>
                                    <p className="text-gray-500 text-xs mt-3">Director</p>
                                </div>
                            </div>
                            <div className="w-1/2 lg:w-1/4 px-5">
                                <div className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".3s">
                                    <img className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top" src="/assets/imgs/placeholders/avatar-6.png" alt="Monst" />
                                    <strong className="mt-6 mb-2 text-md">Sanuya Santa</strong>
                                    <p className="text-gray-500 text-xs mt-3">Marketing</p>
                                </div>
                            </div>
                            <div className="w-1/2 lg:w-1/4 px-5">
                                <div className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".5s">
                                    <img className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top" src="/assets/imgs/placeholders/avatar-7.png" alt="Monst" />
                                    <strong className="mt-6 mb-2 text-md">Steven Job</strong>
                                    <p className="text-gray-500 text-xs mt-3">Designer</p>
                                </div>
                            </div>
                            <div className="w-1/2 lg:w-1/4 px-5">
                                <div className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".7s">
                                    <img className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top" src="/assets/imgs/placeholders/avatar-8.png" alt="Monst" />
                                    <strong className="mt-6 mb-2 text-md">Romario</strong>
                                    <p className="text-gray-500 text-xs mt-3">Designer</p>
                                </div>
                            </div> */}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Integration;
