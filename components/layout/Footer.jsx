import React from "react";
import Link from "next/link";
import CounterUp from "../elements/Counterup";
import { footerIcon, star } from "../../public/assets/cardDetails";
import Image from "next/image";

const Footer = () => {
  const [date, setDate] = React.useState();

  const getYear = () => setDate(new Date().getFullYear());

  React.useEffect(() => {
    getYear();
    return () => {};
  }, []);
  return (
    <>
      <section className="pb-20 pt-10">
        <div
          className="container px-4 mx-auto wow animate__animated animate__fadeIn"
          data-wow-delay=".3s"
        >
          <hr className="mb-8 mt-8 text-gray-300" />
          <div className="container px-4 mx-auto">
            <div className="flex justify-around pt-1 pb-1">
              {star.map(({ img, title, url, id }) => (
                <div
                  className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate_animated animate_fadeIn"
                  data-wow-delay=".2s"
                  key={id}
                >
                  <div className="flex justify-center items-center text-blue-500 rounded-xl h-12 w-12 sm:h-201 sm:w-20 md:w-1\/2 lg:w-3\/5">
                    <Link href={url} legacyBehavior>
                      <a target="_blank">
                        {/* <img
                          className="h-100 w-full object-cover hover:drop-shadow"
                          src={img}
                          alt={title}
                        /> */}
                        <Image
                          className="object-cover"
                          src={img}
                          alt={title}
                          priority
                          width={600}
                          height={600}
                          // fill
                          // objectFit="contain"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <hr className="mb-8 mt-8 text-gray-300" />
          <div
            className="flex flex-col lg:flex-row items-center lg:justify-between "
            style={{ gap: "25px !important", columnGap: "10px !important" }}
          >
            <p className="text-sm text-blueGray-400 order-last lg:order-first">
              &copy; {date} CloudSocial
            </p>
            <p className="text-sm text-blueGray-400 hover-up-5">
              <Link href="/faqs" legacyBehavior>
                <a className="text-sm text-Gray-600 hover:text-blue-500 underline">
                  Faqs
                </a>
              </Link>
            </p>
            <p className="text-sm text-blueGray-400 hover-up-5">
              <Link href="/privacy-policy" legacyBehavior>
                <a className="text-sm text-Gray-600 hover:text-blue-500 underline">
                  Privacy Policy
                </a>
              </Link>
            </p>
            <p className="text-sm text-blueGray-400 hover-up-5">
              <Link
                href="https://www.iubenda.com/privacy-policy/84213336/cookie-policy"
                class="iubenda-nostyle no-brand iubenda-noiframe iubenda-embed iubenda-noiframe"
                legacyBehavior
              >
                <a
                  className="text-sm text-Gray-600 hover:text-blue-500 underline"
                  target="_blank"
                >
                  Cookie Policy
                </a>
              </Link>
            </p>
            <p className="text-sm text-blueGray-400 hover-up-5">
              <Link href="/terms-of-service" legacyBehavior>
                <a className="text-sm text-Gray-600 hover:text-blue-500 underline">
                  Terms Of Service
                </a>
              </Link>
            </p>

            <p className="text-sm text-blueGray-400 hover-up-5">
              <Link href="/gdpr" legacyBehavior>
                <a className="text-sm text-Gray-600 hover:text-blue-500 underline">
                  GDPR
                </a>
              </Link>
            </p>

            <p className="text-sm text-blueGray-400 hover-up-5">
              <Link href="/security" legacyBehavior>
                <a className="text-sm text-Gray-600 hover:text-blue-500 underline">
                  Security
                </a>
              </Link>
            </p>

            <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0 flex">
              {footerIcon.map(({ img, href, alt, id }) => (
                <div
                  className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate_animated animate_fadeIn"
                  data-wow-delay=".2s"
                  key={id}
                >
                  <Link href={href} legacyBehavior>
                    <a target="_blank">
                      <img
                        className="h-100 object-cover hover:drop-shadow w-5 mr-1"
                        src={img}
                        alt={alt}
                      />
                      {/* <Image
                          className="object-cover"
                          src={img}
                          alt={alt}
                          priority
                          width={100}
                          height={100}
                          // fill
                          // objectFit="contain"
                        /> */}
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
