import React from "react";
import Layout from "../components/layout/Layout";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, PlusCircleIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Head from "next/head";

const Faqs = () => {
  return (
    <>
     <Head>
      <meta charSet="utf-8" name="CloudSocial Faqs" />
        <title>FAQs | Frequently Asked Questions CloudSocial</title>
        <meta
          name="description"
          content="Check out CloudSocial FAQ to learn about CloudSocial, its features, pricing, integrations and how to schedule a post to manage multiple social media handles."
        />
      </Head>
      <Layout>
        <section
          className="pt-12 pb-20 lg:bg-contain bg-top bg-no-repeat"
          style={{
            backgroundImage: 'url("assets/imgs/backgrounds/intersect.svg")',
          }}
        >
          <div className="container">
            <img
              className="mx-auto sm:max-w-sm mb-10 wow animate__animated animate__fadeIn"
              data-wow-delay=".1s"
              src="assets/imgs/illustrations/eating.svg"
              alt="Monst"
            />
            <form
              className="flex justify-center max-w-3xl mx-auto mb-16 wow animate__animated animate__fadeIn"
              data-wow-delay=".3s"
            >
              <input
                className="w-2/3 p-5 text-xs placeholder-blueGray-800 font-bold font-heading bg-white focus:border-gray-500 focus:outline-none rounded-l"
                placeholder="Search, find any question you want to ask..."
              />
              <button className="pr-4 rounded-r bg-white text-blue-600">
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
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
            <div className="flex flex-wrap justify-between -mx-3 mb-12">
              <div
                className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 wow animate__animated animate__fadeIn"
                data-wow-delay=".1s"
              >
                <div className="p-6 bg-white rounded shadow">
                  <div className="text-blue-500 mb-4">
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
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                  </div>
                  <h4 className="mb-3 font-bold font-heading">
                    Internet Things
                  </h4>
                  <ul className="list-disc list-inside text-sm text-blueGray-400">
                    <li className="mb-2">Lorem ipsum dolor sit amet</li>
                    <li className="mb-2">Maecenas efficitur pharetra</li>
                    <li className="mb-2">Sed lorem ante</li>
                    <li>Ullamcorper neque</li>
                  </ul>
                </div>
              </div>
              <div
                className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                <div className="p-6 bg-white rounded shadow">
                  <div className="text-blue-500 mb-4">
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
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="mb-3 font-bold font-heading">
                    Artificial Intelligence
                  </h4>
                  <ul className="list-disc list-inside text-sm text-blueGray-400">
                    <li className="mb-2">Lorem ipsum dolor sit amet</li>
                    <li className="mb-2">Maecenas efficitur pharetra</li>
                    <li className="mb-2">Sed lorem ante</li>
                    <li>Ullamcorper neque</li>
                  </ul>
                </div>
              </div>
              <div
                className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
              >
                <div className="p-6 bg-white rounded shadow">
                  <div className="text-blue-500 mb-4">
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
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h4 className="mb-3 font-bold font-heading">
                    Cloud Computing
                  </h4>
                  <ul className="list-disc list-inside text-sm text-blueGray-400">
                    <li className="mb-2">Lorem ipsum dolor sit amet</li>
                    <li className="mb-2">Maecenas efficitur pharetra</li>
                    <li className="mb-2">Sed lorem ante</li>
                    <li>Ullamcorper neque</li>
                  </ul>
                </div>
              </div>
              <div
                className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 wow animate__animated animate__fadeIn"
                data-wow-delay=".7s"
              >
                <div className="p-6 bg-white rounded shadow">
                  <div className="text-blue-500 mb-4">
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
                        strokeWidth={2}
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                      />
                    </svg>
                  </div>
                  <h4 className="mb-3 font-bold font-heading">Data Analicys</h4>
                  <ul className="list-disc list-inside text-sm text-blueGray-400">
                    <li className="mb-2">Lorem ipsum dolor sit amet</li>
                    <li className="mb-2">Maecenas efficitur pharetra</li>
                    <li className="mb-2">Sed lorem ante</li>
                    <li>Ullamcorper neque</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="max-w-4xl mx-auto">
              <div
                className="flex-1 wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
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
                            CloudSocial is a cloud-based platform that allows
                            you to manage your social media platforms seamlessly
                            and efficiently. You can use CloudSocial to post
                            content, schedule posts, and monitor your feeds from
                            a unified dashboard. In addition, it also has email
                            as a social channel for a truly 360˚experience.
                            <br />
                            It is a great tool for businesses that want to grow
                            their social media presence. It helps them keep
                            track of their follower base, as well as their
                            engagement rates.
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
                            <span>Is CloudSocial free to use?</span>
                            <PlusCircleIcon
                              className={`${
                                open ? "transform rotate-180" : ""
                              } w-6 h-6`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                            CloudSocial is a subscription-based platform and it
                            offers a 30-days free trial without entering any
                            Credit Card details. We offer customers the ability
                            to manage all of their social media channels from
                            one place. The features available during the trial
                            will vary depending on the plan you chose. You can
                            start your free trial right now!
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
                            To start your free trial, you do not need to enter
                            your card information.
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
                            <span>How do I request a demo of CloudSocial?</span>
                            <PlusCircleIcon
                              className={`${
                                open ? "transform rotate-180" : ""
                              } w-6 h-6`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                            You can click on the given link and schedule your
                            demo at your convenient time.
                            <br />
                            <a
                              className="text-blue-400"
                              href="https://calendly.com/cloudsocial-support/csdemo"
                              target="_blank"
                            >
                              https://calendly.com/cloudsocial-support/csdemo
                            </a>
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
                              What are all the subscription plans that
                              CloudSocial offers?
                            </span>
                            <PlusCircleIcon
                              className={`${
                                open ? "transform rotate-180" : ""
                              } w-6 h-6`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                          <table class="table-auto">
                              <thead>
                                <tr>
                                  <th className="">#</th>
                                  <th className="">
                                    <Link href="/pricing">Silver</Link>
                                  </th>
                                  <th className="">
                                    <Link href="/pricing">Gold</Link>
                                  </th>
                                  <th className="">
                                    <Link href="/pricing">Platinum</Link>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="">
                                  <td>No. of Brands</td>
                                  <td>1</td>
                                  <td>3</td>
                                  <td>7</td>
                                </tr>
                                <tr className="">
                                  <td>No. of Roles</td>
                                  <td>2</td>
                                  <td>6</td>
                                  <td>7</td>
                                </tr>
                                <tr className="">
                                  <td>No. of Users</td>
                                  <td>3</td>
                                  <td>15</td>
                                  <td>50</td>
                                </tr>
                                <tr className="">
                                  <td>No. of Advance Listen Mentions</td>
                                  <td>-</td>
                                  <td>2000*</td>
                                  <td>10,000*</td>
                                </tr>
                              </tbody>
                            </table>



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
                            <span>What are CloudSocial's features?</span>
                            <PlusCircleIcon
                              className={`${
                                open ? "transform rotate-180" : ""
                              } w-6 h-6`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                            <p className="">
                              <strong>1. Dashboard : </strong>The dashboard will
                              provide you with an overall view of your brand's
                              activity across key parameters.
                              <br /> <strong>2. Calendar : </strong>This feature
                              allows you to keep track of all scheduled and
                              published posts easily.
                              <br /> <strong>3. Omnibox : </strong>It will
                              enables you to respond to any incoming mentions
                              (comments, messages, tweets and emails) across the
                              different social media platforms. The workflows
                              will make it easier for the team to respond
                              quickly.
                              <br /> <strong>4. Listen : </strong>It helps you
                              stay on top of social media trends and ongoing
                              events. Using Listening, you can monitor all of
                              your social networks, your competitors and spot
                              prospects from afar using unique keywords and
                              additional filter options to customize your
                              search.
                              <br /> <strong>5. Sentiment Analysis : </strong>
                              The Sentiment Analysis will assist you in
                              understanding what your customers are saying about
                              your brand so that you can respond appropriately.
                              <br /> <strong>6. Analytics : </strong>Analytics
                              is a tool that can be used to get insights into
                              your strategy and help you plan for the future. It
                              helps you make the right decisions based on data
                              and not on guesses. CloudSocial also has a Net
                              Promoter Score, or NPS, which measures customer
                              satisfaction. NPS works as a loyalty metric that
                              lets you improve customer loyalty over time.
                              <br /> <strong>7. Support : </strong>We are
                              available to assist you via live chat, email, and
                              online calls 24 hours a day, 7 days a week.
                            </p>
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
                            <span>What are social channels?</span>
                            <PlusCircleIcon
                              className={`${
                                open ? "transform rotate-180" : ""
                              } w-6 h-6`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                            By social channels, we mean any of the social media
                            channels that CloudSocial can currently manage. It
                            could be any of the following options :
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
                            especially in an age when consumers believe in
                            reaching out to brands in a variety of ways.
                            However, they expect quick resolution regardless of
                            which channel they use.
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
                              What all social networks does CloudSocial support?
                            </span>
                            <PlusCircleIcon
                              className={`${
                                open ? "transform rotate-180" : ""
                              } w-6 h-6`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                            <ul className="list-disc list-inside text-sm ml-4">
                              <li>Facebook</li>
                              <li>YouTube</li>
                              <li>Instagram</li>
                              <li>LinkedIn</li>
                              <li>Pinterest</li>
                              <li>Twitter</li>
                              <li>Google My Business</li>
                              <li>Google Analytics</li>
                              <li>Tik Tok</li>
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
                              When I need support from CloudSocial, how do I get
                              in touch with CloudSocial Customer Support?
                            </span>
                            <PlusCircleIcon
                              className={`${
                                open ? "transform rotate-180" : ""
                              } w-6 h-6`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                            We take your support very seriously. If you need
                            assistance configuring or using CloudSocial, we are
                            here to help. You can contact our support team via
                            the {" "}
                            <a
                              className="text-blue-400"
                              href="https://app.cloudsocial.io/accounts/login"
                              target="_blank"
                            >
                              Support Tab
                            </a>
                            {" "}
                            within CloudSocial. You can contact us via ticket,
                            chat, or email. We are available 24 hours a day, 7
                            days a week, and 365 days a year. Each of our packs
                            is subject to this policy.
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container">
            <div className="max-w-2xl lg:max-w-3xl mx-auto">
              <div className="mb-12 text-center">
                <h2
                  className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".1s"
                >
                  Get in touch!
                </h2>
                <p
                  className="text-blueGray-400 wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".5s"
                >
                  We will be glad to hear from you
                </p>
              </div>
              <div className="flex flex-wrap -mx-3 text-center">
                <div
                  className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated"
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
                    <span className="text-sm text-blueGray-400">Phone</span>
                    <p>+ 48 654-430-309</p>
                    <p>+ 1 6532-430-309</p>
                  </div>
                </div>
                <div
                  className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated"
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
                    <span className="text-sm text-blueGray-400">E-mail</span>
                    <p>contact@monst.com</p>
                    <p>pat@example.com</p>
                  </div>
                </div>
                <div
                  className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated"
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
                    <span className="text-sm text-blueGray-400">Address</span>
                    <p>11567 E Broadview Dr</p>
                    <p>Colorado(CO), 80117</p>
                  </div>
                </div>
              </div>
              <div>
                <form>
                  <div
                    className="mb-4 text-sm wow animate__animated animate__fadeIn animated"
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
                    className="flex flex-wrap mb-4 -mx-3 wow animate__animated animate__fadeIn animated"
                    data-wow-delay=".3s"
                  >
                    <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
                      <div className="mb-4">
                        <input
                          className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                          type="text"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                          type="text"
                          placeholder="Name"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                          type="email"
                          placeholder="name@example.com"
                        />
                      </div>
                      <div>
                        <label className="flex px-2 bg-blueGray-50 rounded">
                          <input
                            className="hidden"
                            type="file"
                            name="Choose file"
                          />
                          <span className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-blueGray-500 hover:bg-blueGray-600 rounded cursor-pointer">
                            {" "}
                            Browse
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-3">
                      <textarea
                        className="w-full h-full p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none"
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

export default Faqs;
