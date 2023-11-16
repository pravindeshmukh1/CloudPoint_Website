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
          <div
            className="container px-4 mx-auto "
            style={{ backgroundColor: "#000" }}
          >
            <div className="flex justify-around pt-1 pb-1 flex-wrap">
          
              <div
                  className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate_animated animate_fadeIn"
                  data-wow-delay=".2s"
                >
                  <div className="flex justify-center items-center text-blue-500 rounded-xl h-121 w-40 sm:h-201 sm:w-201 md:w-1\/2 lg:w-3\/5">
                    <Link href="https://www.designrush.com/agency/call-centers/outbound" legacyBehavior>
                      <a target="_blank">
                        <Image
                          className="object-cover"
                          src="/assets/imgs/logos/Accredited Agency.png"
                          alt="Accredited Agency"
                          priority
                          width={600}
                          height={600}
                        />
                      </a>
                    </Link>
                  </div>
                </div>
                <div
                  className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate_animated animate_fadeIn"
                  data-wow-delay=".2s"
                >
                  <div className="flex justify-center items-center text-blue-500 rounded-xl h-121 w-40 sm:h-201 sm:w-201 md:w-1\/2 lg:w-3\/5">
                    <Link href="https://www.designrush.com/press/the-top-call-center-companies-in-november-2022-press-release" legacyBehavior>
                      <a target="_blank">
                        <Image
                          className="object-cover"
                          src="/assets/imgs/logos/Top Call Center Company.png"
                          alt="Top Call Center Company"
                          priority
                          width={600}
                          height={600}
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              <div className="p-5 flex flex-col items-center">
                <p className="text-sm text-blueGray-400 ">
                  We would love to hear from you
                </p>
                <p className="text-sm text-blueGray-400 mt-2">
                  <a
                    className="text-sm text-Gray-600 hover:text-blue-500"
                    href="mailto:contactus@cloudpoint.co.in"
                    onclick="window.location=another.html"
                    target="_blank"
                  >
                    contactus@cloudpoint.co.in
                  </a>
                </p>
                <p className="text-sm text-blueGray-400 mt-2 ">
                  <Link href="/privacy-policy" legacyBehavior>
                    <a className="text-sm text-Gray-600 hover:text-blue-500 underline">
                      Privacy Policy
                    </a>
                  </Link>
                </p>
                <p className="text-sm text-blueGray-400 mt-2 ">
                  <Link href="/terms-of-service" legacyBehavior>
                    <a className="text-sm text-Gray-600 hover:text-blue-500 underline">
                      Terms Of Service
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <hr className="mb-8 mt-8 text-gray-300" />
          <div
            className="flex flex-col lg:flex-row items-center lg:justify-between "
            style={{ gap: "25px !important", columnGap: "10px !important" }}
          >
            <p className="text-sm text-blueGray-400 order-last lg:order-first">
              &copy; {date} Cloudpoint Technologies Pvt. Ltd. All Rights
              Reserved.
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
                      {/* <img
                        className="h-100 object-cover hover:drop-shadow w-5 mr-1"
                        src={img}
                        alt={alt}
                      /> */}
                      <Image
                        className="object-cover p-1 mr-2"
                        src={img}
                        alt={alt}
                        priority
                        width={25}
                        height={25}
                        // fill
                        // objectFit="contain"
                      />
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


// {star.map(({ img, title, url, id }) => (
//   <div
//     className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate_animated animate_fadeIn"
//     data-wow-delay=".2s"
//     key={id}
//   >
//     <div className="flex justify-center items-center text-blue-500 rounded-xl h-121 w-40 sm:h-201 sm:w-201 md:w-1\/2 lg:w-3\/5">
//       <Link href={url} legacyBehavior>
//         <a target="_blank">
//           {/* <img
//             className="h-100 w-full object-cover hover:drop-shadow"
//             src={img}
//             alt={title}
//           /> */}
//           <Image
//             className="object-cover"
//             src={img}
//             alt={title}
//             priority
//             width={600}
//             height={600}
//             // fill
//             // objectFit="contain"
//           />
//         </a>
//       </Link>
//     </div>
//   </div>
// ))}