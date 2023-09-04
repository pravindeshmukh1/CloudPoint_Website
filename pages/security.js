import React from "react";
import Layout from "../components/layout/Layout";
import { Disclosure } from "@headlessui/react";
import {
  ChevronRightIcon,
  ChevronUpIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import Head from "next/head";

const Security = () => {
  return (
    <>
      <Head>
      <meta charSet="utf-8" name="CloudSocial Security Policy" />
        <title>CloudSocial | Security</title>
        <meta
          name="description"
          content="CloudSocial servers hosted in the cloud by Amazon Web Services. All the data is store in highly secure AWS data centres. Read more about CloudSocial environment."
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
            <div className="mb-12 text-center">
              <h2
                className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated"
                data-wow-delay=".1s"
              >
                Security
              </h2>
            </div>
            <div className="w-full text-center lg:text-left text-lg lg:text-base font-semibold lg:font-normal mb-2 lg:mb-0 px-3">
              <div className="text-left text-sm">
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  Infrastructure
                </h3>
                <p className="mb-3">
                  CloudSocial servers are all hosted in the cloud by Amazon Web
                  Services (AWS). The AWS infrastructure puts strong safeguards
                  in place to help protect customer privacy.
                </p>

                <ul className="list-disc list-inside text-sm ml-4">
                  <li>All data is stored in highly secure AWS data centres.</li>
                  <li>
                    AWS ensures that all data is encrypted in transit with TLS
                    across all services.
                  </li>
                </ul>

                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  Protecting Your Data
                </h3>
                <p className="mb-3">
                  Protecting your data is of paramount importance and a constant
                  focus here at CloudSocial.
                </p>

                <ul className="list-disc list-inside text-sm ml-4">
                  <li>
                    Data is backed up daily and in some cases, more frequently
                    than that.
                  </li>
                  <li>
                    All access to the CloudSocial website is restricted to HTTPS
                    encrypted connections.
                  </li>
                  <li>
                    All data retrieval (and posting) to connected social
                    accounts is done via HTTPS and using a unique, per user,
                    access token (which you can revoke at any time).
                  </li>
                  <li>
                    We never store credit card or payment details in our
                    database. This is strictly stored and managed by FastSpring
                    to ensure maximum security. FastSpring is certified to PCI
                    Service Provider Level 1, the most stringent level of
                    certification available.
                  </li>
                  <li>
                    User passwords are encrypted. Passwords are never stored in
                    plain text. Even our engineering team have no way to know
                    what the password is.
                  </li>
                </ul>

                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  Employee Access
                </h3>
                <p className="mb-3">
                  Access to infrastructure and other aspects of the CloudSocial
                  environment, as well as customer data, is strictly limited to
                  those within our team that absolutely need it.
                </p>
                <ul className="list-disc list-inside text-sm ml-4">
                  <li>
                    Only our Engineering team has access to our production
                    environment. SSH keys are required for console access to
                    servers in all of our environments.
                  </li>
                  <li>
                    Whilst we will often use aggregated snapshots of customer
                    data to help us understand and identify performance,
                    financial and business insights, we will only access
                    individual customer records if it is necessary to do so in
                    order to carry out a customer support request or a
                    significant systems issue.
                  </li>
                </ul>

                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  How to Report a Security Incident
                </h3>
                <p className="mb-3">
                  To report an incident of suspected abuse, misuse, or a
                  security issue you have discovered you should contact{" "}
                  <a className="text-blue-400" href="mailto:support@cloudsocial.io" target="_blank">
                    support@cloudsocial.io
                  </a>
                  .{" "}
                </p>

                <p className="mb-3">
                  immediately. For incidents that affect a single account,
                  please reach out to us via our usual support channels.
                </p>

                <ul className="list-disc list-inside text-sm ml-4">
                  <li>
                    CloudSocial support team will acknowledge your report,
                    usually within 1 business day.
                  </li>
                  <li>
                    A point of contact will be assigned. This person will be
                    responsible for keeping track of the issue, as well as
                    keeping you updated. Please note that this person may need
                    to liaise with you to better understand the reported issue
                    and the circumstances around it.
                  </li>
                  <li>
                    We will investigate the issue and determine the impact.
                  </li>
                  <li>
                    In most cases, for security reasons it is likely that we
                    will be unable to disclose details of the issue until our
                    investigation has been completed.
                  </li>
                  <li>
                    Once the issue has been resolved, we will post an update
                    along with thanks and credit for the discovery.
                  </li>
                </ul>
                <hr className="mb-3 mt-3 text-gray-300" />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Security;
