import { useEffect, useState } from "react";
import CounterUp from "../components/elements/Counterup";
import TextEffect from "../components/elements/TextEffect";
import Layout from "../components/layout/Layout";
import Slider1 from "../components/slider/Slider1";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { addEbookUser } from "../lib/apiCall";

function Home() {
  const router = useRouter();

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
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    // Other form fields
  });

  // const pdfUrls =
  //   "https://www.cloudsocial.io/wp-content/uploads/2023/The%20Ultimate%20Instagram%20Marketing%20Guide-For%20Beginners%20in%202023.pdf";

  // const handlePdfOpen = () => {
  //   // Open the PDF in a new tab.
  //   window.open(pdfUrls, "_blank");
  // };
  const validateForm = () => {
    const newErrors = {};
    // Add validation rules here
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      createdAt: new Date(),
    });
  };

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event) {
    // console.log("🚀 ~ file: index.js:29 ~ event:", event);
    event.preventDefault();
    setIsLoading(true);
    setError(null); // Clear previous errors when a new request starts

    try {
      if (validateForm()) {
        // console.log("🚀 ~ file: index.js:35 ~ formData:", formData);
        await addEbookUser(formData).then((data) => {
          // console.log(
          //   "🚀 ~ file: blog.js:175 ~ response:",
          //   data.data.attributes.name
          // );
          const localData = {
            name: data.data.attributes.name,
            email: data.data.attributes.email,
            phoneNumber: data.data.attributes.phoneNumber,
          };

          localStorage.setItem("user", JSON.stringify(localData));
          // handlePdfOpen();
          router.push("/ebook");
        });
      }
    } catch (error) {
      // Capture the error message to display to the user
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" name="CloudSocial Solution" />
        <title>Social Media Management Tools | CloudSocial</title>
        <meta
          name="description"
          content="Best social media management tools built to manage all your social media handles at one place. Grow and engage with an ease of social media listening."
        />
      </Head>
      <Layout>
        <section
          className="xl:bg-contain bg-top bg-no-repeat -mt-24 pt-24"
          style={{
            backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')",
          }}
        >
          <div className="container px-4 mx-auto">
            <div className="pt-12 text-center">
              <div className="max-w-2xl mx-auto mb-8">
                <h1 className="text-3xl lg:text-5xl lg:leading-normal mb-4 font-bold font-heading wow animate_animated animate_fadeIn ">
                  <span className="text-blue-700 text-3xl  lg:text-5xl">
                    {" "}
                    CloudSocial{" "}
                  </span>{" "}
                  <br />A Complete Social Media Management Tool
                </h1>
                <div className="text-blueGray-400 leading-relaxed wow animate_animated animate_fadeIn d-inline">
                  Manage all your{" "}
                  <strong className="text-blue-500">Social Media </strong>from
                  One Place{" "}
                  <div className="typewrite d-inline text-brand">
                    <TextEffect
                      text1="Control multiple social accounts simultaneously"
                      text2="engage with several prospects at the same time"
                      text3="provide superior customer experience."
                    />
                  </div>
                </div>
              </div>
              <div>
                <a
                  className="btn-primary py-4 px-8 mr-2 wow animate_animated animate_fadeIn hover-up-2"
                  href="#key-features"
                >
                  Key Features
                </a>
                <a
                  className="btn-white wow animate_animated animate_fadeIn hover-up-2"
                  data-wow-delay=".3s"
                  href="#how-we-work"
                >
                  How We Work?
                </a>
              </div>
            </div>
          </div>
          <div className="relative max-w-6xl mt-16 md:mt-8 mb-8 mx-auto">
            {/* <img src="/assets/imgs/elements/pattern.png" alt="pattern" /> */}
            <Image
              src="/assets/imgs/elements/pattern.png"
              alt="pattern"
              priority
              width={2000}
              height={2000}
            />
            <div
              className="absolute"
              style={{ top: "9%", left: "14%", width: "72%", height: "66%" }}
              //style={{ top: "9%", width: "100%", height: "100%" }}
            >
              {/* <img
                className="jump rounded wow animate_animated animate_fadeIn"
                //  src="/assets/imgs/placeholders/dashboard.png"
                src="/assets/imgs/backgrounds/slider/dashboard1248.jpg"
                alt="dashboard"
              /> */}
              <Image
                className="jump rounded wow animate_animated animate_fadeIn mx-auto"
                src="/assets/imgs/backgrounds/slider/dashboard1248.jpg"
                alt="dashboard"
                priority
                // layout="fill"
                width={1000}
                height={1000}
                // objectFit="contain"
              />
            </div>
          </div>
        </section>

        <section
          className="pt-8 pb-12 md:py-16 lg:py-16 overflow-x-hidden"
          id="key-features"
        >
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap lg:flex-nowrap">
              <div className="w-full lg:w-1/2">
                <div
                  className="lg:py-6 lg:pr-77 wow animate_animated animate_fadeIn"
                  data-wow-delay=".3s"
                >
                  <div className="mb-4">
                    <span
                      className="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow animate_animated animate_fadeInDown"
                      data-wow-delay=".9s"
                    >
                      Why choose us
                    </span>
                    <h2
                      className="text-4xl mt-5 font-bold font-heading wow animate_animated animate_fadeIn"
                      data-wow-delay=".3s"
                    >
                      Key Features
                    </h2>
                  </div>
                  <div
                    className="flex items-start py-4 wow animate_animated animate_fadeIn"
                    data-wow-delay=".5s"
                  >
                    <div className="w-8 mr-5 text-blue-500">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold font-heading">
                        Analytics
                      </h3>
                      <p className="text-blueGray-400 leading-loose text-justify">
                        Track your social media performance and customize your
                        branding strategy using CloudSocial's detailed insights
                        and analytics reports.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex items-start py-4 wow animate_animated animate_fadeIn"
                    data-wow-delay=".7s"
                  >
                    <div className="w-8 mr-5 text-blue-500">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold font-heading">
                        Publish
                      </h3>
                      <p className="text-blueGray-400 leading-loose text-justify">
                        Create, schedule, and post your content on multiple
                        social channels from the CloudSocial platform to
                        maximize visibility and brand awareness. Remain
                        omnipresent on all social media channels 24x7.
                      </p>
                    </div>
                  </div>
                  {/* <div
                    className="flex items-start py-4 wow animate_animated animate_fadeIn"
                    data-wow-delay=".9s"
                  >
                    <div className="w-8 mr-5 text-blue-500">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold font-heading">
                        Omnibox
                      </h3>
                      <p className="text-blueGray-400 leading-loose text-justify">
                        Engage with customers and prospects across numerous
                        social media channels from our integrated Omnibox
                        console. Manage and streamline your social media teams
                        with approval workflows.
                      </p>
                    </div>
                  </div> */}
                  <div
                    className="flex items-start py-4 wow animate_animated animate_fadeIn"
                    data-wow-delay=".9s"
                  >
                    <div className="w-8 mr-5 text-blue-500">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold font-heading">
                        Listen
                      </h3>
                      <p className="text-blueGray-400 leading-loose text-justify">
                        Stay updated on the latest social media trends and
                        events. Monitor all your social channels and spot
                        prospects from miles away with custom keywords using
                        Social Media Listening.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-full lg:w-1/2 my-12 lg:my-0">
                <div
                  className="wow animate_animated animate_fadeIn"
                  data-wow-delay=".5s"
                >
                  <Image
                    className="jump relative mx-auto rounded-xl w-full z-10"
                    src="/assets/imgs/backgrounds/slider/crm1248.jpg"
                    alt="listen"
                    priority
                    // layout="fill"
                    width={1000}
                    height={1000}
                    // objectFit="contain"
                  />
                  <Image
                    className="jump relative mx-auto rounded-xl w-full z-10"
                    src="/assets/imgs/backgrounds/slider/sentiment1248.jpg"
                    alt="dashboard"
                    priority
                    // layout="fill"
                    width={1000}
                    height={1000}
                    // objectFit="contain"
                  />
                  <Image
                    className="jump relative mx-auto rounded-xl w-full z-10"
                    src="/assets/imgs/backgrounds/slider/listen1248.jpg"
                    alt="listen"
                    priority
                    // layout="fill"
                    width={1000}
                    height={1000}
                    // objectFit="contain"
                  />

                  {/* <img
                    className="jump relative mx-auto rounded-xl w-full z-10"
                    src="/assets/imgs/backgrounds/slider/sentiment1248.jpg"
                    alt="dashboard"
                  />
                  <img
                    className="jump relative mx-auto rounded-xl w-full z-10"
                    src="/assets/imgs/backgrounds/slider/listen1248.jpg"
                    alt="listen"
                  /> */}
                  <img
                    className="absolute top-0 left-0 w-40 -ml-12 -mt-12"
                    src="/assets/imgs/elements/blob-tear.svg"
                    alt="blob-tear"
                  />
                  <img
                    className="absolute bottom-0 right-0 w-40 -mr-12 -mb-12"
                    src="/assets/imgs/elements/blob-tear.svg"
                    alt="blob-tear"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blueGray-50" id="how-we-work">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
              <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate_animated animate_fadeInDown">
                  <span>Centralized Social Management</span>
                </h2>
              </div>
              <div className="w-full lg:w-1/2">
                <p className="text-blueGray-400 leading-loose wow animate_animated animate_fadeIn">
                  Control multiple social accounts simultaneously, engage with
                  several prospects at the same time, and provide superior
                  customer experience.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 -mb-6 text-center">
              <div
                className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate_animated animate_fadeIn"
                data-wow-delay=".3s"
              >
                <div className="p-8 bg-white shadow rounded">
                  <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                    1
                  </div>
                  <img
                    className="h-36 mx-auto my-4"
                    src="/assets/imgs/illustrations/eating.svg"
                    alt="collaboration"
                  />
                  <h3 className="mb-2 font-bold font-heading text-xl">
                    Team Collaboration
                  </h3>
                  <p className="text-sm text-blueGray-400 leading-relaxed">
                    Team collaboration is the backbone of effective social media
                    management. With the right tools and strategies in place,
                    your team can work together seamlessly to create engaging
                    content and build a strong online presence.
                  </p>
                </div>
              </div>
              <div
                className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate_animated animate_fadeIn"
                data-wow-delay=".5s"
              >
                <div className="p-8 bg-white shadow rounded">
                  <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                    2
                  </div>
                  <img
                    className="h-36 mx-auto my-4"
                    src="/assets/imgs/illustrations/space.svg"
                    alt="time saving"
                  />
                  <h3 className="mb-2 font-bold font-heading text-xl">
                    Time-saving scheduling solution
                  </h3>
                  <p className="text-sm text-blueGray-400 leading-relaxed">
                    A time-saving scheduling solution allows you to plan and
                    automate your social media posts in advance. This not only
                    frees up your time for other tasks but also ensures a
                    consistent and organized online presence for your brand or
                    business. It's a valuable tool for efficient social media
                    management.
                  </p>
                </div>
              </div>
              <div className="hover-up-5 w-full lg:w-1/3 px-3 mb-6">
                <div
                  className="p-8 bg-white shadow rounded wow animate_animated animate_fadeIn"
                  data-wow-delay=".7s"
                >
                  <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                    3
                  </div>
                  <img
                    className="h-36 mx-auto my-4"
                    src="/assets/imgs/illustrations/tasks.svg"
                    alt="modern inbox"
                  />
                  <h3 className="mb-2 font-bold font-heading text-xl">
                    Modern Inbox
                  </h3>
                  <p className="text-sm text-blueGray-400 leading-relaxed">
                    Your all-in-one solution for social media management. Stay
                    organized, engage with your audience, and track your
                    performance seamlessly with our user-friendly tool.
                    Experience the power of efficient social media
                    management today!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container">
            <div className="flex flex-wrap -mx-4 mb-12 wow animate_animated animate_fadeIn animated hover-up-5">
              <div className="w-full lg:w-1/2 px-4 lg:pr-20 lg:pt-4 order-1 lg:order-0">
                <Link href="/blog" legacyBehavior>
                  <a>
                    <span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600">
                      Scheduling
                    </span>
                  </a>
                </Link>
                <h3 className="my-4 text-xl md:text-2xl font-bold font-heading">
                  <Link href="/blog" legacyBehavior>
                    <a className="hover:text-blue-500">
                      Convenient Scheduling Options
                    </a>
                  </Link>
                </h3>
                <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400">
                  Schedule social media posts through several social media
                  handles on multiple channels. Customize post frequency,
                  timings, and channels for maximum impact and engagement. Gain
                  a holistic view of your content plan with our cross-platform
                  social media calendar.
                </p>
                <Link href="/blog" legacyBehavior>
                  <a className="text-xs font-semibold text-blue-600">
                    <span>Read More</span>
                    <svg
                      className="inline-block w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </a>
                </Link>
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
                <Link href="/blog" legacyBehavior>
                  <a>
                    {/* <img
                      className="h-100 w-full object-cover rounded drop-shadow"
                      // src="/assets/imgs/placeholders/img-6.png"
                      // src="https://www.cloudsocial.io/wp-content/uploads/image/Publish-Calendar.png"
                      src="/assets/imgs/backgrounds/1.png"
                      alt="Publish-Calendar"
                    /> */}
                    <Image
                      className=" object-cover rounded drop-shadow"
                      src="/assets/imgs/backgrounds/1.png"
                      alt="Publish-Calendar"
                      priority
                      // layout="fill"
                      width={1000}
                      height={1000}
                      // objectFit="contain"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap -mx-4 mb-12 wow animate_animated animate_fadeIn animated hover-up-5">
              <div className="w-full lg:w-1/2 px-4 lg:pl-20 lg:pt-4 order-1">
                <Link href="/blog" legacyBehavior>
                  <a>
                    <span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600">
                      Omnibox
                    </span>
                  </a>
                </Link>
                <h3 className="my-4 text-xl md:text-2xl font-bold font-heading">
                  <Link href="/blog" legacyBehavior>
                    <a className="hover:text-blue-500">
                      {" "}
                      Optimized Engagement With Omnibox
                    </a>
                  </Link>
                </h3>
                <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400">
                  Respond to queries, comments, posts, and feedback from
                  multiple social accounts in real-time. Gain brownie points
                  from customers by always staying connected using our social
                  media tools.
                </p>
                <Link href="/blog" legacyBehavior>
                  <a className="text-xs font-semibold text-blue-600">
                    <span>Read More</span>
                    <svg
                      className="inline-block w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </a>
                </Link>
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-8 order-0">
                {/* <Link href="/blog-single" legacyBehavior> */}
                <a>
                  {/* <img
                      className="h-100 w-full object-cover rounded drop-shadow"
                      // src="/assets/imgs/placeholders/img-7.png"
                      // src="https://www.cloudsocial.io/wp-content/uploads/image/Omnibox-Ticket&comments.png"
                      src="/assets/imgs/backgrounds/2.png"
                      alt="Omnibox-Ticket&Comments"
                    /> */}
                  <Image
                    className=" object-cover rounded drop-shadow"
                    src="/assets/imgs/backgrounds/2.png"
                    alt="Publish-Calendar"
                    priority
                    // layout="fill"
                    width={1000}
                    height={1000}
                    // objectFit="contain"
                  />
                </a>
                {/* </Link> */}
              </div>
            </div>
            <div className="flex flex-wrap -mx-4 mb-12 wow animate_animated animate_fadeIn animated hover-up-5">
              <div className="w-full lg:w-1/2 px-4 lg:pr-20 lg:pt-4 order-1 lg:order-0">
                <Link href="/blog" legacyBehavior>
                  <a>
                    <span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600">
                      Analytics
                    </span>
                  </a>
                </Link>
                <h3 className="my-4 text-xl md:text-2xl font-bold font-heading">
                  <Link href="/blog" legacyBehavior>
                    <a className="hover:text-blue-500"> Analytics & Reports</a>
                  </Link>
                </h3>
                <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400">
                  Let data-driven insights guide you towards success.
                  CloudSocial provides you intuitive reports to help you
                  understand consumer preferences and customize your branding
                  strategy accordingly.
                </p>
                <Link href="/blog" legacyBehavior>
                  <a className="text-xs font-semibold text-blue-600">
                    <span>Read More</span>
                    <svg
                      className="inline-block w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </a>
                </Link>
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
                <Link href="/blog" legacyBehavior>
                  <a>
                    {/* <img
                      className="h-100 w-full object-cover rounded drop-shadow"
                      // src="/assets/imgs/placeholders/img-8.png"
                      //  src="https://www.cloudsocial.io/wp-content/uploads/image/Analytics.png"
                      src="/assets/imgs/backgrounds/3.png"
                      alt="Analytics"
                    /> */}
                    <Image
                      className=" object-cover rounded drop-shadow"
                      src="/assets/imgs/backgrounds/3.png"
                      alt="Analytics"
                      priority
                      // layout="fill"
                      width={1000}
                      height={1000}
                      // objectFit="contain"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-20 bg-top bg-no-repeat"
          style={{ backgroundImage: "url('assets/imgs/elements/blob.svg')" }}
        >
          <div className="container px-4 mx-auto">
            <div className="relative py-20 px-4 lg:p-20">
              <div className="max-w-lg mx-auto text-center">
                <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate_animated animate_fadeIn">
                  <span>Subscribe now to</span>
                  <span className="text-blue-500"> Our Newsletter </span>
                  <span>and E-Book.</span>
                </h2>
                <p
                  className="mb-8 text-blueGray-400 wow animate_animated animate_fadeIn"
                  data-wow-delay=".3s"
                >
                  Elevate your social media marketing game with our free <br />{" "}
                  in-depth guides.
                </p>
                {/* {error && <div style={{ color: "red" }}>{error}</div>} */}
                <form onSubmit={onSubmit}>
                  <div
                    className="p-4 bg-white rounded-lg flex flex-wrap max-w-md mx-auto wow animate_animated animate_fadeIn"
                    data-wow-delay=".5s"
                  >
                    <div className="w-full mb-2">
                      <div className="flex w-full md:w-2/31 px-3 mb-3 md:mb-0 md:mr-6 bg-blueGray-100 rounded">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="h-6 w-6 my-auto text-blueGray-500"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="currentColor"
                            d="M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"
                          />
                        </svg>
                        <input
                          className="w-full pl-3 py-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          // isInvalid={!!errors.name}
                          placeholder="Type your name"
                        />
                      </div>

                      {errors.name ? (
                        <p
                          className="mb-2 text-xs flex justify-end pr-3"
                          style={{ color: "darkred" }}
                        >
                          {errors.name}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="w-full mb-2">
                      <div className="flex w-full md:w-2/31 px-3 mb-3 md:mb-0 md:mr-6 bg-blueGray-100 rounded">
                        <svg
                          className="h-6 w-6 my-auto text-blueGray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                        <input
                          className="w-full pl-3 py-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          // isInvalid={!!errors.email}
                          placeholder="Type your e-mail"
                        />
                      </div>
                      {errors.email ? (
                        <p
                          className="mb-2 text-xs flex justify-end pr-3"
                          style={{ color: "darkred" }}
                        >
                          {errors.email}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="w-full mb-2">
                      <div className="flex w-full md:w-2/31 px-3 mb-3 md:mb-0 md:mr-6 bg-blueGray-100 rounded">
                        <svg
                          className="h-6 w-6 my-auto text-blueGray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          // class="bi bi-telephone-fill"
                          viewBox="0 0 20 20"
                          width={30}
                          height={30}
                          style={{ color: "#656f8d", marginTop: "15px" }}
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                            // fill="#656f8d"
                          ></path>
                        </svg>
                        <input
                          className="w-full pl-3 py-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none"
                          type="tel"
                          required
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          // isInvalid={!!errors.phoneNumber}
                          placeholder="Type your phoneNumber"
                        />
                      </div>
                      {errors.name ? (
                        <p
                          className="mb-2 text-xs flex justify-end pr-3"
                          style={{ color: "darkred" }}
                        >
                          {errors.phoneNumber}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="w-full mb-2 flex justify-end">
                      <button
                        className="w-full md:w-auto py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded"
                        type="submit"
                        disabled={isLoading}
                      >
                        {isLoading ? "Loading" : "Sign Up"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
export default Home;
