import React, { useContext, useEffect, useState } from "react";
import Layout, { userContent } from "../components/layout/Layout";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { money } from "../public/assets/money";
import Head from "next/head";

const Pricing = () => {
  // const [show, setShow] = useState(false);
  const [show, setShow] = useState(false);

  const handelChange = () => {
    setShow(!show);
  };
  // const post = useContext(userContent);
  // console.log("🚀 ~ file: pricing.js:10 ~ res:", res);
  const [data11, setData11] = React.useState("");

  const [res, setRes] = useState("");
  console.log("🚀 ~ file: pricing.js:15 ~ res:", res);

  const getLocation = async () => {
    const res = await fetch("https://api.db-ip.com/v2/free/self");
    const data = res.json();
    console.log("🚀 ~ file: Layout.jsx:20 ~ data:", data);

    data.then((data) => {
      console.log("-------------", data);
      // valueData.current = data.countryCode;
      setRes(data);
    });
  };
  useEffect(() => {
    getLocation();
  }, []);

  const value1 = money.filter((money) => money.CountryCode === res.countryCode);
  const value2 = money.filter((money) => money.CountryCode === data11);
  console.log("🚀 ~ file: pricing.js:33 ~ value1:", value1);

  return (
    <>
      <Head>
        <meta charSet="utf-8" name="CloudSocial Security Policy" />
        <title>
          CloudSocial | Social Media Post Scheduler - Pricing and Packages
        </title>
        <meta
          name="description"
          content="CloudSocial provides social media post scheduling tools for small businesses, brands, digital agencies. Check out how much does CloudSocial cost? Try it free."
        />
      </Head>
      <Layout>
        {/* <section className="relative -mt-24 pt-24">
          <div
            className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-gray-100 z-0"
            style={{ zIndex: "-1" }}
          ></div>
          <div className="container">
            <div className="flex flex-wrap items-center -mx-3">
              <div className="w-full lg:w-1/2 px-3">
                <div className="py-12">
                  <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                    <h2 className="text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animatedanimated animate__fadeIn">
                      Committed to <span className="text-blue-500">People</span>{" "}
                      and the future
                    </h2>
                    <p className="text-gray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn">
                      We are <strong className="text-blue-500">Monst</strong>, a
                      Creative Design{" "}
                      <span
                        className="typewrite d-inline text-brand"
                        data-period="3000"
                        data-type='["Web Agency", "Social Marketing" ]'
                      ></span>
                    </p>
                    <p className="text-gray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn mt-3 text-sm">
                      Helping you maximize operations management with
                      digitization
                    </p>
                  </div>
                  <div className="text-center lg:text-left">
                    <Link href="/about" legacyBehavior>
                      <a className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded wow animate__animatedanimated animate__fadeIn">
                        About Us
                      </a>
                    </Link>
                    <Link href="/services" legacyBehavior>
                      <a
                        className="block hover-up-2 sm:inline-block py-4 px-8 text-xs text-gray-500 hover:text-gray-600 text-center font-semibold leading-none bg-white border border-gray-200 hover:border-gray-300 rounded wow animate__animatedanimated animate__fadeIn"
                        data-wow-delay=".3s"
                      >
                        Our Services
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-3 lg:bg-gray-10 mb-12 lg:mb-0 pb-10">
                <div className="flex items-center justify-center">
                  <img
                    className="lg:max-w-lg"
                    src="/assets/imgs/illustrations/team.svg"
                    alt="CloudSocial"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-6">
          <div className="container">
            <div className="flex flex-wrap justify-between pt-8 pb-16">
              <div
                className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn"
                data-wow-delay=".2s"
              >
                <div className="flex justify-center items-center bg-gray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <span className="sm:text-2xl font-bold font-heading">+ </span>
                  <span className="sm:text-2xl font-bold font-heading count">
                    150
                  </span>
                  <p className="text-xs sm:text-base text-gray-400">
                    Annual Partner
                  </p>
                </div>
              </div>
              <div
                className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn"
                data-wow-delay=".4s"
              >
                <div className="flex justify-center items-center bg-gray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    ></path>
                  </svg>
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <span className="sm:text-2xl font-bold font-heading">+ </span>
                  <span className="sm:text-2xl font-bold font-heading count">
                    58
                  </span>
                  <span className="sm:text-2xl font-bold font-heading">
                    {" "}
                    k{" "}
                  </span>
                  <p className="text-xs sm:text-base text-gray-400">
                    Completed Projects
                  </p>
                </div>
              </div>
              <div
                className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn"
                data-wow-delay=".6s"
              >
                <div className="flex justify-center items-center bg-gray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    ></path>
                  </svg>
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <span className="sm:text-2xl font-bold font-heading">+ </span>
                  <span className="sm:text-2xl font-bold font-heading count">
                    500
                  </span>
                  <p className="text-xs sm:text-base text-gray-400">
                    Happy Customers
                  </p>
                </div>
              </div>
              <div
                className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn"
                data-wow-delay=".8s"
              >
                <div className="flex justify-center items-center bg-gray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                  </svg>
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <span className="sm:text-2xl font-bold font-heading">+ </span>
                  <span className="sm:text-2xl font-bold font-heading count">
                    320
                  </span>
                  <p className="text-xs sm:text-base text-gray-400">
                    Research Work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section
          className="pt-20 xl:bg-contain bg-top bg-no-repeat"
          style={{
            backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')",
          }}
        >
          <div className="container">
            <div className="text-center mb-16">
              <h2
                className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
                data-wow-delay=".2s"
              >
                <span>Start saving time today and </span>
                <span className="text-blue-500">choose </span>
                <span>your best plan</span>
              </h2>
              <p
                className="max-w-sm mx-auto text-lg text-gray-400 wow animate__animated animate__fadeInDown"
                data-wow-delay=".5s"
              >
                Best for freelance developers who need to save their time
              </p>
            </div>
            {/* css in side public/css file */}

            <div className="flex justify-center align-middle ">
              <div class="btn-container">
                <label class="switch btn-color-mode-switch">
                  <input
                    type="checkbox"
                    name="color_mode"
                    id="color_mode"
                    value="1"
                    // ref={button1}
                    onChange={handelChange}
                  />
                  <label
                    htmlFor="color_mode"
                    data-on="Yearly"
                    data-off="Monthly"
                    class="btn-color-mode-switch-inner"
                  ></label>
                </label>
              </div>
            </div>

            {/* <div class="switches-container">
              <input
                type="radio"
                id="switchMonthly"
                name="switchPlan"
                value="Monthly"
                checked="checked"
                onClick={() => setShow(true)}
              />
              <input
                type="radio"
                id="switchYearly"
                name="switchPlan"
                value="Yearly"
                onClick={() =>setShow(false)
                }
              />
              <label for="switchMonthly" >
                Monthly
              </label>
              <label for="switchYearly">Yearly</label>
              <div class="switch-wrapper">
                <div class="switch">
                  <div>Monthly</div>
                  <div>Yearly</div>
                </div>
              </div>
            </div> */}

            <div className="flex flex-wrap -mx-3 mt-8">
              <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                <div
                  className="hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn"
                  data-wow-delay=".2s"
                >
                  <img
                    className="h-20 mb-6 mx-auto"
                    src="/assets/imgs/icons/startup.svg"
                    alt="CloudSocial"
                  />
                  <h3 className="mb-1 text-4xl font-bold font-heading">
                    Silver
                  </h3>
                  {/* {!show && (
                    <p className="mt-1 text-gray-400">Billed Annually</p>
                  )}
                  {show && (<p className="mt-1 text-gray-400"></p>)} */}
                  <p
                    className={`${
                      !show ? "mt-1 text-gray-400" : "mt-1 text-white"
                    }`}
                  >
                    Billed Annually
                  </p>

                  {show && (
                    <span className="text-4xl text-blue-500 font-bold font-heading">
                      {value1.length > 0 ? value1[0].CurrencyCode : "$"}
                      {value1.length > 0
                        ? value1[0].Pack_Prices_Monthly.Silver
                        : "13"}
                    </span>
                  )}
                  {!show && (
                    <span className="text-4xl text-blue-500 font-bold font-heading">
                      {/* Billed Annually */}
                      {value1.length > 0 ? value1[0].CurrencyCode : "$"}
                      {value1.length > 0
                        ? value1[0].Pack_Prices_Billed_Annually.Silver
                        : "13"}
                    </span>
                  )}

                  <div className="mb-2 text-sm">
                    <i>No Credit Card Required</i>
                  </div>
                  <div className="mt-2 mb-8 text-sm">
                    Best suited for entrepreneurs, small businesses and
                    freelancers
                  </div>

                  <div className="flex flex-col items-center mb-8">
                    <ul className="text-gray-400">
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>15 Social Channels</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>3 Users</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>0 Mentions (Listen)</span>
                      </li>
                      <li className="mt-3 mb-3 text-md text-blue-600 font-bold">
                        <span>Publish</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Posting Rich Media Content</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Bulk Media Upload</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Tagging</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Recall Post</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Global Time Zone Selection</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/close-o.svg"
                          alt="close"
                        />

                        <span>Audience Targeting</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/close-o.svg"
                          alt="close"
                        />
                        <span>Social Calendar</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/close-o.svg"
                          alt="close"
                        />
                        <span>Insta-Alerts via Email</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Create Content with Crello</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>FB Ad Manager</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>URL Shortener</span>
                      </li>
                      <li className="mt-3 mb-3 text-md text-blue-600 font-bold">
                        <span>ORM - Omnibox & Respond</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Social Channel + Email Inbox</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Collaboration</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>In Mention Search</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Filters Date Range</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/close-o.svg"
                          alt="close"
                        />
                        <span>
                          Export to XLS, PDF &<br />
                          Share via Email
                        </span>
                      </li>
                      <li className="mt-3 mb-3 text-md text-blue-600 font-bold">
                        <span>Listen</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/close-o.svg"
                          alt="close"
                        />
                        <span>
                          Keyword search across <br />
                          select social channels
                        </span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/close-o.svg"
                          alt="close"
                        />
                        <span>Export to CSV, PDF</span>
                      </li>
                      <li className="mt-3 mb-3 text-md text-blue-600 font-bold">
                        <span>Reports & Analytics</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/close-o.svg"
                          alt="close"
                        />
                        <span>Unified Dashboard</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/close-o.svg"
                          alt="close"
                        />
                        <span>Social Channels Report</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/close-o.svg"
                          alt="close"
                        />
                        <span>Analytics</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/close-o.svg"
                          alt="close"
                        />
                        <span>Sentiment Analysis</span>
                      </li>
                      <li className="mt-3 mb-3 text-md text-blue-600 font-bold">
                        <span>Support - 24*7*365</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Email</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Call</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Chat</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <a
                      className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded"
                      href="https://app.cloudsocial.io/accounts/silver/5"
                      target="_blank"
                    >
                      Start Free Trial
                    </a>
                    <a
                      className="block sm:inline-block py-4 px-6 text-xs text-gray-500 hover:text-gray-600 text-center font-semibold leading-none bg-white border border-gray-200 hover:border-gray-300 rounded"
                      href="#"
                    >
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                <div
                  className="hover-up-5 pt-16 pb-8 px-4 text-center text-white bg-blue-500 rounded  shadow hover:shadow-xl wow animate__animated animate__fadeIn"
                  data-wow-delay=".4s"
                >
                  <img
                    className="h-20 mb-6 mx-auto"
                    src="/assets/imgs/icons/agency.svg"
                    alt="CloudSocial"
                  />
                  <h3 className="mb-1 text-4xl font-bold font-heading">Gold</h3>

                  <p
                    className={`${
                      !show ? "mt-1 text-gray-400" : "mt-1 text-blue-500"
                    }`}
                  >
                    Billed Annually
                  </p>
                  {!show && (
                    <span className="text-4xl text-white-500 font-bold font-heading">
                      {value1.length > 0 ? value1[0].CurrencyCode : "$"}
                      {value1.length > 0
                        ? value1[0].Pack_Prices_Billed_Annually.Gold
                        : "70"}
                    </span>
                  )}
                  {show && (
                    <span className="text-4xl text-white-500 font-bold font-heading">
                      {/* Billed Annually */}
                      {value1.length > 0 ? value1[0].CurrencyCode : "$"}
                      {value1.length > 0
                        ? value1[0].Pack_Prices_Monthly.Gold
                        : "100"}
                    </span>
                  )}

                  <div className="mb-2 text-sm">
                    <i>No Credit Card Required</i>
                  </div>
                  <div className="mt-2 mb-12 text-sm">
                    Best suited for brands
                  </div>

                  <div className="flex flex-col items-center mb-8">
                    <ul>
                      <li className="flex mb-3 text-sm mt-2">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>40 Social Channels</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>15 Users</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>2000* Mentions (Listen)</span>
                      </li>
                      <li className="mt-3 mb-3 text-md  text-white-600 font-bold">
                        <span>Publish</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Posting Rich Media Content</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Bulk Media Upload</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Tagging</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Recall Post</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Global Time Zone Selection</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="close"
                        />
                        <span>Audience Targeting</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />

                        <span>Social Calendar</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Insta-Alerts via Email</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Create Content with Crello</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>FB Ad Manager</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>URL Shortener</span>
                      </li>
                      <li className="mt-3 mb-3 text-md text-white-600 font-bold">
                        <span>ORM - Omnibox & Respond</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Social Channel + Email Inbox</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Collaboration</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>In Mention Search</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Filters</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>
                          Export to XLS, PDF &<br />
                          Share via Email
                        </span>
                      </li>
                      <li className="mt-3 mb-3 text-md text-white-600 font-bold">
                        <span>Listen</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>
                          Keyword search across <br />
                          select social channels
                        </span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Export to CSV, PDF</span>
                      </li>
                      <li className="mt-3 mb-3 text-md text-white-600 font-bold">
                        <span>Reports & Analytics</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Unified Dashboard</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Social Channels Report</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Analytics</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Sentiment Analysis</span>
                      </li>
                      <li className="mt-3 mb-3 text-md text-white-600 font-bold">
                        <span>Support - 24*7*365</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Email</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Call</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Chat</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <a
                      className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-blue-500 font-semibold leading-none bg-white hover:bg-gray-50 rounded"
                      href="https://app.cloudsocial.io/accounts/gold/9"
                      target="_blank"
                    >
                      Start Free Trial
                    </a>
                    <a
                      className="block sm:inline-block py-4 px-6 text-xs font-semibold leading-none border border border-blue-400 hover:border-blue-400 rounded"
                      href="#"
                    >
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 px-3 mb-6">
                <div
                  className="hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn"
                  data-wow-delay=".6s"
                >
                  <img
                    className="h-20 mb-6 mx-auto"
                    src="/assets/imgs/icons/enterprise.svg"
                    alt="CloudSocial"
                  />
                  <h3 className="mb-1 text-4xl font-bold font-heading">
                    Platinum
                  </h3>
                  <p
                    className={`${
                      !show ? "mt-1 text-gray-400" : "mt-1 text-white"
                    }`}
                  >
                    Billed Annually
                  </p>
                  {!show && (
                    <span className="text-4xl text-white-500 font-bold font-heading">
                      {value1.length > 0 ? value1[0].CurrencyCode : "$"}
                      {value1.length > 0
                        ? value1[0].Pack_Prices_Billed_Annually.Platinum
                        : "225"}
                    </span>
                  )}
                  {show && (
                    <span className="text-4xl text-white-500 font-bold font-heading">
                      {/* Billed Annually */}
                      {value1.length > 0 ? value1[0].CurrencyCode : "$"}
                      {value1.length > 0
                        ? value1[0].Pack_Prices_Monthly.Platinum
                        : "345"}
                    </span>
                  )}

                  <div className="mb-2 text-sm">
                    <i>No Credit Card Required</i>
                  </div>
                  <div className="mt-2 mb-8 text-sm">
                    Best suited for social media and digital agencies
                  </div>
                  <div className="flex flex-col items-center mb-8">
                    <ul className="text-gray-400">
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>100 Social Channels</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>50 Users</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>10,000* Mentions (Listen)</span>
                      </li>
                      <li className="mt-3 mb-3 text-md  text-blue-600 font-bold">
                        <span>Publish</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Posting Rich Media Content</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Bulk Media Upload</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Tagging</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Recall Post</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Global Time Zone Selection</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        {/*  <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        /> */}

                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Audience Targeting</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Social Calendar</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Insta-Alerts via Email</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Create Content with Crello</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>FB Ad Manager</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>URL Shortener</span>
                      </li>
                      <li className="mt-3 mb-3 text-md text-blue-600 font-bold">
                        <span>ORM - Omnibox & Respond</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Social Channel + Email Inbox</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Collaboration</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>In Mention Search</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Filters</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>
                          Export to XLS, PDF &<br />
                          Share via Email
                        </span>
                      </li>
                      <li className="mt-3 mb-3 text-md text-blue-600 font-bold">
                        <span>Listen</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>
                          Keyword search across <br />
                          select social channels
                        </span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Export to CSV, PDF</span>
                      </li>
                      <li className="mt-3 mb-3 text-md text-blue-600 font-bold">
                        <span>Reports & Analytics</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Unified Dashboard</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Social Channels Report</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Analytics</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Sentiment Analysis</span>
                      </li>
                      <li className="mt-3 mb-3 text-md text-blue-600 font-bold">
                        <span>Support - 24*7*365</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Email</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Call</span>
                      </li>
                      <li className="flex mb-3 text-sm">
                        <img
                          className="w-6 h-5 mr-2"
                          src="/assets/imgs/icons/check-o.svg"
                          alt="check"
                        />
                        <span>Chat</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <a
                      className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded"
                      href="https://app.cloudsocial.io/accounts/platinum/17"
                      target="_blank"
                    >
                      Start Free Trial
                    </a>
                    <a
                      className="block sm:inline-block py-4 px-6 text-xs text-gray-500 hover:text-gray-600 text-center font-semibold leading-none bg-white border border-gray-200 hover:border-gray-300 rounded"
                      href="#"
                    >
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p
              className=" text-md text-gray-700 wow animate__animated animate__fadeInDown"
              data-wow-delay=".5s"
            >
              *During trial period 250 and 500 mentions (listen) will be
              allocated to Gold & Platinum pack respectively.
            </p>
          </div>
        </section>
        <section className="py-20">
          <div className="container">
            <div className="px-4 mx-auto lg:ml-0">
              <h3 className="mb-8 text-4xl font-bold font-heading wow animate__animated animate__fadeIn">
                Faqs
              </h3>
              <div>
                <Disclosure
                  as="div"
                  className="leading-loose text-lg mt-6 wow animate__animated animate__fadeIn"
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full font-bold border-b border-gray-200 py-3 flex justify-between items-center mt-4">
                        <span>What is CloudSocial?</span>
                        <PlusCircleIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-6 h-6`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                        CloudSocial is a cloud-based platform that allows you to
                        manage your social media platforms seamlessly and
                        efficiently. You can use CloudSocial to post content,
                        schedule posts, and monitor your feeds from a unified
                        dashboard. In addition, it also has email as a social
                        channel for a truly 360˚experience.
                        <br />
                        It is a great tool for businesses that want to grow
                        their social media presence. It helps them keep track of
                        their follower base, as well as their engagement rates.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure
                  as="div"
                  className="leading-loose text-lg mt-6 wow animate__animated animate__fadeIn"
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full font-bold border-b border-gray-200 py-3 flex justify-between items-center mt-4">
                        <span>
                          Do you need a credit card for the free trial?
                        </span>
                        <PlusCircleIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-6 h-6`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                        No, you can start the free trial without adding any card
                        details.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure
                  as="div"
                  className="leading-loose text-lg mt-6 wow animate__animated animate__fadeIn"
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full font-bold border-b border-gray-200 py-3 flex justify-between items-center mt-4">
                        <span>What kind of support do you provide?</span>
                        <PlusCircleIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-6 h-6`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                        We take supporting you very seriously. Should you need
                        any help in configuring or using CloudSocial we are
                        there to support you. You can reach our support team
                        through the Support Tab inside of CloudSocial. You can
                        raise a ticket, chat or send us an email. We are open
                        24x7x365 days a year. This is across all our
                        packs/plans.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure
                  as="div"
                  className="leading-loose text-lg mt-6 wow animate__animated animate__fadeIn"
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full font-bold border-b border-gray-200 py-3 flex justify-between items-center mt-4">
                        <span>
                          Which is the best package according to my
                          requirements?
                        </span>
                        <PlusCircleIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-6 h-6`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                        CloudSocial provides you with 3 different packages. You
                        can select the pack which fits your requirements best.
                        <ul className="list-disc list-inside text-sm ml-4">
                          <li>
                            If you are a small businessman or solopreneur then
                            go for Silver,
                          </li>
                          <li>for Brands we recommend Gold,</li>
                          <li>
                            and Platinum for Social, Digital Agencies and
                            Marketing Agencies.
                          </li>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Disclosure
                  as="div"
                  className="leading-loose text-lg mt-6 wow animate__animated animate__fadeIn"
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full font-bold border-b border-gray-200 py-3 flex justify-between items-center mt-4">
                        <span>
                          Which all social profiles can be managed through
                          CloudSocial?
                        </span>
                        <PlusCircleIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-6 h-6`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                        You can manage your Social Media presence across all
                        these profiles :
                        <ul className="list-disc list-inside text-sm ml-4">
                          <li>Facebook Business Page</li>
                          <li>Facebook Ad Manager</li>
                          <li>Facebook Messenger</li>
                          <li>Facebook Groups</li>
                          <li>Facebook Profile</li>
                          <li>Instagram Business Page</li>
                          <li>Instagram Ad Manager</li>
                          <li>Instagram Messenger</li>
                          <li>Twitter Profile</li>
                          <li>Twitter DM</li>
                          <li>LinkedIn Profile</li>
                          <li>LinkedIn Business Page</li>
                          <li>Pinterest</li>
                          <li>YouTube Channel Page</li>
                          <li>Email</li>
                          <li>Medium</li>
                          <li>Tik Tok</li>
                          <li>Google My Business</li>
                          <li>Google Analytics</li>
                          <li>Google Business Messaging</li>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure
                  as="div"
                  className="leading-loose text-lg mt-6 wow animate__animated animate__fadeIn"
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full font-bold border-b border-gray-200 py-3 flex justify-between items-center mt-4">
                        <span>What are mentions?</span>
                        <PlusCircleIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-6 h-6`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                        Omnibox is where you find and respond to all of your
                        incoming mentions. No more juggling multiple tools,
                        especially in an age when consumers believe in reaching
                        out to brands in a variety of ways. However, they expect
                        quick resolution regardless of which channel they use.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container">
            <div className="max-w-lg mb-16">
              <h2
                className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeIn"
                data-wow-delay=".1s"
              >
                <span>Start saving time today and </span>
                <span className="text-blue-500">choose </span>
                <span>your best plan</span>
              </h2>
              <p
                className="text-base lg:text-lg text-gray-400 wow animate__animatedanimated animate__fadeIn"
                data-wow-delay=".3s"
              >
                Best for freelance developers who need to save time
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded shadow">
              <div className="border-b border-gray-200">
                <div
                  className="flex flex-wrap p-6 -mx-3 wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  <div className="w-full lg:w-1/6 text-center lg:text-left text-lg lg:text-base font-semibold lg:font-normal mb-2 lg:mb-0 px-3">
                    <h3 className="text-md font-bold font-heading">Beginner</h3>
                  </div>
                  <div className="w-full lg:w-4/6 mb-6 lg:mb-0 px-3">
                    <p className="mb-4 lg:mb-6 leading-loose">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus quis ultricies est. Duis nec hendrerit magna. Ut
                      vel orci gravida, hendrerit enim non, gravida turpis.
                    </p>
                    <ul className="flex flex-col lg:flex-row justify-start space-y-2 lg:space-y-0 lg:space-x-8">
                      <li className="flex">
                        <svg
                          className="h-6 w-6 mr-2 text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-400">12 Emails</span>
                      </li>
                      <li className="flex">
                        <svg
                          className="h-6 w-6 mr-2 text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-400">8 Datebase</span>
                      </li>
                      <li className="flex">
                        <svg
                          className="h-6 w-6 mr-2 text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-400">Unlimited Domains</span>
                      </li>
                      <li className="flex">
                        <svg
                          className="h-6 w-6 mr-2 text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-400">50 GB Storage</span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-1/6 self-center text-xs px-3">
                    <a
                      className="block mb-2 py-4 text-center hover:text-white font-semibold bg-gray-200 hover:bg-blue-500 rounded"
                      href="#"
                    >
                      Buy 25$
                    </a>
                    <p className="text-center text-gray-400">per month</p>
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-200">
                <div
                  className="flex flex-wrap justify-between p-6 -mx-3 wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <div className="w-full lg:w-1/6 text-center lg:text-left text-lg lg:text-base font-semibold lg:font-normal mb-2 lg:mb-0 px-3">
                    <h3 className="text-md font-bold font-heading">
                      Intermediate
                    </h3>
                  </div>
                  <div className="w-full lg:w-4/6 mb-6 lg:mb-0 px-3">
                    <p className="mb-4 lg:mb-6 leading-loose">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus quis ultricies est. Duis nec hendrerit magna. Ut
                      vel orci gravida, hendrerit enim non, gravida turpis.
                    </p>
                    <ul className="flex flex-col lg:flex-row justify-start space-y-2 lg:space-y-0 lg:space-x-8">
                      <li className="flex">
                        <svg
                          className="h-6 w-6 mr-2 text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-400">12 Emails</span>
                      </li>
                      <li className="flex">
                        <svg
                          className="h-6 w-6 mr-2 text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-400">8 Datebase</span>
                      </li>
                      <li className="flex">
                        <svg
                          className="h-6 w-6 mr-2 text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-400">Unlimited Domains</span>
                      </li>
                      <li className="flex">
                        <svg
                          className="h-6 w-6 mr-2 text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-400">50 GB Storage</span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-1/6 self-center text-xs px-3">
                    <a
                      className="block mb-2 py-4 text-center hover:text-white font-semibold bg-gray-200 hover:bg-blue-500 rounded"
                      href="#"
                    >
                      Buy 25$
                    </a>
                    <p className="text-center text-gray-400">per month</p>
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-200">
                <div
                  className="flex flex-wrap justify-between p-6 -mx-3 wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".5s"
                >
                  <div className="w-full lg:w-1/6 text-center lg:text-left text-lg lg:text-base font-semibold lg:font-normal mb-2 lg:mb-0 px-3">
                    <h3 className="text-md font-bold font-heading">Advanced</h3>
                  </div>
                  <div className="w-full lg:w-4/6 mb-6 lg:mb-0 px-3">
                    <p className="mb-4 lg:mb-6 leading-loose">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus quis ultricies est. Duis nec hendrerit magna. Ut
                      vel orci gravida, hendrerit enim non, gravida turpis.
                    </p>
                    <ul className="flex flex-col lg:flex-row justify-start space-y-2 lg:space-y-0 lg:space-x-8">
                      <li className="flex">
                        <svg
                          className="h-6 w-6 mr-2 text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-400">12 Emails</span>
                      </li>
                      <li className="flex">
                        <svg
                          className="h-6 w-6 mr-2 text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-400">8 Datebase</span>
                      </li>
                      <li className="flex">
                        <svg
                          className="h-6 w-6 mr-2 text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-400">Unlimited Domains</span>
                      </li>
                      <li className="flex">
                        <svg
                          className="h-6 w-6 mr-2 text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-400">50 GB Storage</span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-1/6 self-center text-xs px-3">
                    <a
                      className="block mb-2 py-4 text-center hover:text-white font-semibold bg-gray-200 hover:bg-blue-500 rounded"
                      href="#"
                    >
                      Buy 65$
                    </a>
                    <p className="text-center text-gray-400">per month</p>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="flex flex-wrap p-6 -mx-3 wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".7s"
                >
                  <div className="w-full lg:w-1/6 text-center lg:text-left text-lg lg:text-base font-semibold lg:font-normal mb-2 lg:mb-0 px-3">
                    <h3 className="text-md font-bold font-heading">
                      Professional
                    </h3>
                  </div>
                  <div className="w-full lg:w-4/6 mb-6 lg:mb-0 px-3">
                    <p className="mb-4 lg:mb-6 leading-loose">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus quis ultricies est. Duis nec hendrerit magna. Ut
                      vel orci gravida, hendrerit enim non, gravida turpis.
                    </p>
                    <ul className="flex flex-col lg:flex-row justify-start space-y-2 lg:space-y-0 lg:space-x-8">
                      <li className="flex">
                        <svg
                          className="h-6 w-6 mr-2 text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-400">12 Emails</span>
                      </li>
                      <li className="flex">
                        <svg
                          className="h-6 w-6 mr-2 text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-400">8 Datebase</span>
                      </li>
                      <li className="flex">
                        <svg
                          className="h-6 w-6 mr-2 text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-400">Unlimited Domains</span>
                      </li>
                      <li className="flex">
                        <svg
                          className="h-6 w-6 mr-2 text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="text-gray-400">50 GB Storage</span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-1/6 self-center text-xs px-3">
                    <a
                      className="block mb-2 py-4 text-center hover:text-white font-semibold bg-gray-200 hover:bg-blue-500 rounded"
                      href="#"
                    >
                      Buy 25$
                    </a>
                    <p className="text-center text-gray-400">per month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-20">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="max-w-md mb-8 mx-auto">
                <span
                  className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  Contact Us
                </span>
                <h2
                  className="mt-2 text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".s"
                >
                  We will <span className="text-blue-500">be glad</span> to hear
                  from you!
                </h2>
              </div>
              <div>
                <form>
                  <div
                    className="mb-4 text-sm wow animate__animatedanimated animate__fadeIn"
                    data-wow-delay=".5s"
                  >
                    <span className="mr-4 font-semibold">Departament:</span>
                    <label className="mr-4">
                      <input
                        className="mr-1"
                        type="radio"
                        name="department"
                        value="1"
                      />
                      <span>Support</span>
                    </label>
                    <label>
                      <input
                        className="mr-1"
                        type="radio"
                        name="department"
                        value="2"
                      />
                      <span>Sales</span>
                    </label>
                  </div>
                  <div
                    className="mb-4 wow animate__animatedanimated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none"
                      type="text"
                      placeholder="Subject"
                    />
                  </div>
                  <div
                    className="mb-4 wow animate__animatedanimated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div
                    className="mb-4 wow animate__animatedanimated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none"
                      type="email"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div
                    className="mb-4 wow animate__animatedanimated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <textarea
                      className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-gray-50 rounded outline-none"
                      placeholder="Message..."
                    ></textarea>
                  </div>
                  <div
                    className="mb-4 wow animate__animatedanimated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <label className="flex px-2 bg-gray-50 rounded">
                      <input
                        className="hidden"
                        type="file"
                        name="Choose file"
                      />
                      <span className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-gray-500 hover:bg-gray-600 rounded cursor-pointer">
                        {" "}
                        Browse
                      </span>
                    </label>
                  </div>
                  <div
                    className="flex justify-between items-center wow animate__animatedanimated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <label>
                      <input
                        className="mr-1"
                        type="checkbox"
                        name="terms"
                        value="1"
                      />
                      <span className="text-sm font-semibold">
                        I agree to terms and conditions.
                      </span>
                    </label>
                    <button
                      className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-blue-500">
          <div className="container">
            <div className="text-center max-w-xl mx-auto">
              <h2 className="mb-4 text-3xl lg:text-3xl text-white font-bold font-heading">
                <span>Subscribe now to </span>
                <span className="text-blue-200">Our Newsletter</span> <br />
                <span>and get the Coupon code.</span>
              </h2>
              <p className="mb-8 text-gray-200">
                All your information is completely confidential
              </p>
              <div className="flex flex-wrap max-w-lg mx-auto">
                <div className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-blue-500 border border-blue-300 rounded">
                  <svg
                    className="h-6 w-6 my-auto text-blue-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <input
                    className="w-full pl-3 py-4 text-xs text-white placeholder-white font-semibold leading-none bg-blue-500 outline-none"
                    type="text"
                    placeholder="Type your e-mail"
                  />
                </div>
                <button
                  className="w-full md:w-auto py-4 px-8 text-xs text-white text-blue-800 hover:text-white font-semibold leading-none border border-blue-300 hover:border-blue-300 bg-white hover:bg-blue-500 rounded transition duration-300 ease-in-out"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container">
            <div className="max-w-2xl lg:max-w-3xl mx-auto">
              <div className="mb-12 text-center">
                <h2
                  className="text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeIn animated"
                  data-wow-delay=".1s"
                >
                  Get in touch!
                </h2>
                <p
                  className="text-gray-400 wow animate__animatedanimated animate__fadeIn animated"
                  data-wow-delay=".5s"
                >
                  We will be glad to hear from you
                </p>
              </div>
              <div className="flex flex-wrap -mx-3 text-center">
                <div
                  className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animatedanimated animate__fadeIn animated"
                  data-wow-delay=".1s"
                >
                  <svg
                    className="mb-6 h-8 w-8 mx-auto text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <div className="leading-relaxed">
                    <span className="text-sm text-gray-400">Phone</span>
                    <p>+ 48 654-430-309</p>
                    <p>+ 1 6532-430-309</p>
                  </div>
                </div>
                <div
                  className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animatedanimated animate__fadeIn animated"
                  data-wow-delay=".3s"
                >
                  <svg
                    className="mb-6 h-8 w-8 mx-auto text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <div className="leading-relaxed">
                    <span className="text-sm text-gray-400">E-mail</span>
                    <p>contact@monst.com</p>
                    <p>pat@example.com</p>
                  </div>
                </div>
                <div
                  className="w-full lg:w-1/3 px-3 mb-12 wow animate__animatedanimated animate__fadeIn animated"
                  data-wow-delay=".5s"
                >
                  <svg
                    className="mb-6 h-8 w-8 mx-auto text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <div className="leading-relaxed">
                    <span className="text-sm text-gray-400">Address</span>
                    <p>11567 E Broadview Dr</p>
                    <p>Colorado(CO), 80117</p>
                  </div>
                </div>
              </div>
              <div>
                <form>
                  <div
                    className="mb-4 text-sm wow animate__animatedanimated animate__fadeIn animated"
                    data-wow-delay=".1s"
                  >
                    <span className="mr-4 font-semibold">Departament:</span>
                    <label className="mr-4">
                      <input
                        className="mr-1"
                        type="radio"
                        name="department"
                        value="1"
                      />
                      <span>Support</span>
                    </label>
                    <label>
                      <input
                        className="mr-1"
                        type="radio"
                        name="department"
                        value="2"
                      />
                      <span>Sales</span>
                    </label>
                  </div>
                  <div
                    className="flex flex-wrap mb-4 -mx-3 wow animate__animatedanimated animate__fadeIn animated"
                    data-wow-delay=".3s"
                  >
                    <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
                      <div className="mb-4">
                        <input
                          className="w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none"
                          type="text"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          className="w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none"
                          type="text"
                          placeholder="Name"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          className="w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none"
                          type="email"
                          placeholder="name@example.com"
                        />
                      </div>
                      <div>
                        <label className="flex px-2 bg-gray-50 rounded">
                          <input
                            className="hidden"
                            type="file"
                            name="Choose file"
                          />
                          <span className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-gray-500 hover:bg-gray-600 rounded cursor-pointer">
                            {" "}
                            Browse
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-3">
                      <textarea
                        className="w-full h-full p-4 text-xs font-semibold leading-none resize-none bg-gray-50 rounded outline-none"
                        placeholder="Message..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <label>
                      <input
                        className="mr-1"
                        type="checkbox"
                        name="terms"
                        value="1"
                      />
                      <span className="text-sm font-semibold">
                        I agree to terms and conditions.
                      </span>
                    </label>
                    <button
                      className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Pricing;
