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

const PrivacyPolicy = () => {
  return (
    <>
       <Head>
      <meta charSet="utf-8" name="CloudSocial Privacy Policy" />
        <title>CloudSocial | Privacy Policy </title>
        <meta
          name="description"
          content="Check out CloudSocial Policy to learn about CloudSocial."
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
                Privacy Policy of{" "}
                <span className="text-blue-500">www.cloudsocial.io</span>
              </h2>
              <h6>This Website collects some Personal Data from its Users.</h6>
            </div>
            <div className="text-center lg:text-left text-lg lg:text-base mb-5">
              <p className="mb-3">
                This document contains
                <a
                  className="text-blue-400"
                  href="https://policies.google.com/privacy"
                  target="_blank"
                >
                  {" "}
                  a section dedicated to Californian consumers and their privacy
                  rights.
                </a>
              </p>
              <p className="mb-3">
                This document contains
                <a
                  className="text-blue-400"
                  href="https://policies.google.com/privacy"
                  target="_blank"
                >
                  {" "}
                  a section dedicated to Brazilian Users and their privacy
                  rights.
                </a>
              </p>
              <p className="mb-3">
                This document can be printed for reference by using the print
                command in the settings of any browser.
              </p>
            </div>

            <hr className="mb-3 mt-3 text-gray-300" />
            <h3 className="text-md font-bold font-heading">
              Owner and Data Controller
            </h3>
            <p className="mb-3">
              CloudSocial Technologies Pte Ltd.
              <br />
              68 Circular Road,
              <br />
              #02-01, 049422 Singapore
            </p>
            <p className="mb-1">
              <b>Owner contact email:</b>{" "}
              <a
                className="text-blue-400"
                href="mailto:support@cloudsocial.io"
                target="_blank"
              >
                support@cloudsocial.io
              </a>
            </p>
            <hr className="mb-3 mt-3 text-gray-300" />
            <div className="w-full text-center lg:text-left text-lg lg:text-base font-semibold lg:font-normal mb-2 lg:mb-0 px-3">
              <div className="text-left text-sm">
                <h3 className="text-md font-bold font-heading">
                  Types of Data collected
                </h3>
                <p className="mb-1">
                  Among the types of Personal Data that this Website collects,
                  by itself or through third parties, there are: Tracker; Usage
                  Data; various types of Data; email address; unique device
                  identifiers for advertising (Google Advertiser ID or IDFA, for
                  example); Data communicated while using the service.
                </p>
                <p className="mb-3">
                  Complete details on each type of Personal Data collected are
                  provided in the dedicated sections of this privacy policy or
                  by specific explanation texts displayed prior to the Data
                  collection. Personal Data may be freely provided by the User,
                  or, in case of Usage Data, collected automatically when using
                  this Website.
                </p>
                <p className="mb-3">
                  Unless specified otherwise, all Data requested by this Website
                  is mandatory and failure to provide this Data may make it
                  impossible for this Website to provide its services. In cases
                  where this Website specifically states that some Data is not
                  mandatory, Users are free not to communicate this Data without
                  consequences to the availability or the functioning of the
                  Service.
                </p>
                <p className="mb-3">
                  Users who are uncertain about which Personal Data is mandatory
                  are welcome to contact the Owner. Any use of Cookies – or of
                  other tracking tools – by this Website or by the owners of
                  third-party services used by this Website serves the purpose
                  of providing the Service required by the User, in addition to
                  any other purposes described in the present document and in
                  the Cookie Policy, if available.
                </p>
                <p className="mb-3">
                  Users are responsible for any third-party Personal Data
                  obtained, published or shared through this Website and confirm
                  that they have the third party's consent to provide the Data
                  to the Owner.
                </p>
                <hr className="mb-3 mt-3 text-gray-300" />
                <h4 className="text-md font-bold font-heading text-lg mt-2 mb-2">
                  Mode and place of processing the Data
                </h4>
                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  Methods of processing
                </h3>
                <p className="mb-3">
                  The Owner takes appropriate security measures to prevent
                  unauthorized access, disclosure, modification, or unauthorized
                  destruction of the Data.
                </p>
                <p className="mb-3">
                  The Data processing is carried out using computers and/or IT
                  enabled tools, following organizational procedures and modes
                  strictly related to the purposes indicated. In addition to the
                  Owner, in some cases, the Data may be accessible to certain
                  types of persons in charge, involved with the operation of
                  this Website (administration, sales, marketing, legal, system
                  administration) or external parties (such as third-party
                  technical service providers, mail carriers, hosting providers,
                  IT companies, communications agencies) appointed, if
                  necessary, as Data Processors by the Owner. The updated list
                  of these parties may be requested from the Owner at any time.
                </p>

                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  Legal basis of processing
                </h3>
                <p className="mb-3">
                  The Owner may process Personal Data relating to Users if one
                  of the following applies:
                </p>
                <ul className="list-disc list-inside text-sm ml-4">
                  <li>
                    Users have given their consent for one or more specific
                    purposes. Note: Under some legislations the Owner may be
                    allowed to process Personal Data until the User objects to
                    such processing (“opt-out”), without having to rely on
                    consent or any other of the following legal bases. This,
                    however, does not apply, whenever the processing of Personal
                    Data is subject to European data protection law;
                  </li>
                  <li>
                    provision of Data is necessary for the performance of an
                    agreement with the User and/or for any pre-contractual
                    obligations thereof;
                  </li>
                  <li>
                    processing is necessary for compliance with a legal
                    obligation to which the Owner is subject;
                  </li>
                  <li>
                    processing is related to a task that is carried out in the
                    public interest or in the exercise of official authority
                    vested in the Owner;
                  </li>
                  <li>
                    processing is necessary for the purposes of the legitimate
                    interests pursued by the Owner or by a third party.
                  </li>
                </ul>
                <p className="mb-1 mt-3">
                  In any case, the Owner will gladly help to clarify the
                  specific legal basis that applies to the processing, and in
                  particular whether the provision of Personal Data is a
                  statutory or contractual requirement, or a requirement
                  necessary to enter into a contract.
                </p>
                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  Place
                </h3>
                <p className="mb-3">
                  The Data is processed at the Owner's operating offices and in
                  any other places where the parties involved in the processing
                  are located.
                </p>
                <p className="mb-3">
                  Depending on the User's location, data transfers may involve
                  transferring the User's Data to a country other than their
                  own. To find out more about the place of processing of such
                  transferred Data, Users can check the section containing
                  details about the processing of Personal Data.
                </p>
                <p className="mb-3">
                  Users are also entitled to learn about the legal basis of Data
                  transfers to a country outside the European Union or to any
                  international organization governed by public international
                  law or set up by two or more countries, such as the UN, and
                  about the security measures taken by the Owner to safeguard
                  their Data.
                </p>
                <p className="mb-3">
                  If any such transfer takes place, Users can find out more by
                  checking the relevant sections of this document or inquire
                  with the Owner using the information provided in the contact
                  section.
                </p>

                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  Retention time
                </h3>
                <p className="mb-3">
                  Personal Data shall be processed and stored for as long as
                  required by the purpose they have been collected for.
                </p>
                <p className="mb-3">Therefore:</p>

                <ul className="list-disc list-inside text-sm ml-4">
                  <li>
                    Personal Data collected for purposes related to the
                    performance of a contract between the Owner and the User
                    shall be retained until such contract has been fully
                    performed.
                  </li>
                  <li>
                    Personal Data collected for the purposes of the Owner’s
                    legitimate interests shall be retained as long as needed to
                    fulfill such purposes. Users may find specific information
                    regarding the legitimate interests pursued by the Owner
                    within the relevant sections of this document or by
                    contacting the Owner.
                  </li>
                </ul>
                <p className="mb-3">
                  The Owner may be allowed to retain Personal Data for a longer
                  period whenever the User has given consent to such processing,
                  as long as such consent is not withdrawn. Furthermore, the
                  Owner may be obliged to retain Personal Data for a longer
                  period whenever required to do so for the performance of a
                  legal obligation or upon order of an authority.
                </p>
                <p className="mb-3">
                  Once the retention period expires, Personal Data shall be
                  deleted. Therefore, the right of access, the right to erasure,
                  the right to rectification and the right to data portability
                  cannot be enforced after expiration of the retention period.
                </p>
                <hr className="mb-3 mt-3 text-gray-300" />

                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  The purposes of processing
                </h3>

                <p className="mb-3">
                  The Data concerning the User is collected to allow the Owner
                  to provide its Service, comply with its legal obligations,
                  respond to enforcement requests, protect its rights and
                  interests (or those of its Users or third parties), detect any
                  malicious or fraudulent activity, as well as the following:
                  Displaying content from external platforms, Tag Management,
                  Analytics, Advertising, Registration and authentication,
                  Remarketing and behavioral targeting, Access to third-party
                  accounts, Managing data collection and online surveys, Hosting
                  and backend infrastructure, Interaction with live chat
                  platforms, Content performance and features testing (A/B
                  testing) and Backup saving and management.
                </p>
                <p className="mb-3">
                  For specific information about the Personal Data used for each
                  purpose, the User may refer to the section “Detailed
                  information on the processing of Personal Data”.
                </p>
                <hr className="mb-3 mt-3 text-gray-300" />
                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  Facebook permissions asked by this Website
                </h3>
                <p className="mb-3">
                  This Website may ask for some Facebook permissions allowing it
                  to perform actions with the User's Facebook account and to
                  retrieve information, including Personal Data, from it. This
                  service allows this Website to connect with the User's account
                  on the Facebook social network, provided by Facebook Inc.
                </p>
                <p className="mb-3">
                  For more information about the following permissions, refer to
                  the{" "}
                  <a
                    className="text-blue-400"
                    href="https://developers.facebook.com/docs/permissions/reference"
                    target="_blank"
                  >
                    Facebook permissions documentation
                  </a>
                  and to the{" "}
                  <a
                    className="text-blue-400"
                    href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0"
                    target="_blank"
                  >
                    Facebook privacy policy.
                  </a>
                </p>
                <p className="mb-3">The permissions asked are the following:</p>
                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  Basic information
                </h3>
                <p className="mb-3">
                  By default, this includes certain User’s Data such as id,
                  name, picture, gender, and their locale. Certain connections
                  of the User, such as the Friends, are also available. If the
                  User has made more of their Data public, more information will
                  be available.
                </p>
                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  Export Posts
                </h3>
                <p className="mb-3">
                  Export the posts and make them public. All posts will be
                  exported, including status updates.
                </p>
                <hr className="mb-3 mt-3 text-gray-300" />
                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  Export Posts
                </h3>
                <p className="mb-3">
                  Detailed information on the processing of Personal Data
                </p>
                <p className="mb-3">
                  Personal Data is collected for the following purposes and
                  using the following services:
                </p>
                <Disclosure
                  as="div"
                  className="leading-loose text-lg mt-6 wow animate__animated animate__fadeIn"
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full font-bold border-b border-gray-200 py-3 flex justify-between items-center mt-4">
                        <span>Access to third-party accounts</span>
                        <PlusCircleIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-6 h-6`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                        <p className="mb-3">
                          This type of service allows this Website to access
                          Data from your account on a third-party service and
                          perform actions with it
                          <br />
                          These services are not activated automatically, but
                          require explicit authorization by the User.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Facebook account access (Facebook, Inc.)
                        </h3>
                        <p className="mb-3">
                          This service allows this Website to connect with the
                          User's account on the Facebook social network,
                          provided by Facebook, Inc.
                        </p>
                        <p className="mb-3">Permissions asked: Export Posts.</p>
                        <p className="mb-3">
                          Place of processing: United States -
                          <a
                            className="text-blue-400"
                            href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: internet information.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Google Drive account access (Google LLC)
                        </h3>
                        <p className="mb-3">
                          This service allows this Website to connect with the
                          User's account on Google Drive, provided by Google
                          LLC.
                        </p>
                        <p className="mb-3">
                          Personal Data processed: email address; Usage Data.
                        </p>
                        <p className="mb-3">
                          Place of processing: United States -
                          <a
                            className="text-blue-400"
                            href="https://policies.google.com/privacy"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: identifiers; internet information.
                        </p>
                        <p className="mb-3">
                          This processing constitutes a sale based on the
                          definition under the CCPA. In addition to the
                          information in this clause, the User can find
                          information regarding how to opt out of the sale in
                          the section detailing the rights of Californian
                          consumers.
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
                        <span>Advertising</span>
                        <PlusCircleIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-6 h-6`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                        <p className="mb-3">
                          This type of service allows User Data to be utilized
                          for advertising communication purposes. These
                          communications are displayed in the form of banners
                          and other advertisements on this Website, possibly
                          based on User interests.
                        </p>
                        <p className="mb-3">
                          This does not mean that all Personal Data are used for
                          this purpose. Information and conditions of use are
                          shown below.
                        </p>
                        <p className="mb-3">
                          Some of the services listed below may use Trackers to
                          identify Users or they may use the behavioral
                          retargeting technique, i.e. displaying ads tailored to
                          the User’s interests and behavior, including those
                          detected outside this Website. For more information,
                          please check the privacy policies of the relevant
                          services.
                        </p>
                        <p className="mb-3">
                          In addition to any opt-out feature offered by any of
                          the services below, Users may opt out by visiting the{" "}
                          <a
                            className="text-blue-400"
                            href="https://optout.networkadvertising.org/?c=1"
                            target="_blank"
                          >
                            Network Advertising Initiative opt-out page
                          </a>
                          .
                        </p>
                        <p className="mb-1 font-bold">
                          Users may also opt-out of certain advertising features
                          through applicable device settings, such as the device
                          advertising settings for mobile phones or ads settings
                          in general.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Google AdSense (Google LLC)
                        </h3>
                        <p className="mb-3">
                          Google AdSense is an advertising service provided by
                          Google LLC. This service uses the “DoubleClick”
                          Cookie, which tracks use of this Website and User
                          behavior concerning ads, products and services
                          offered. Users may decide to disable all the
                          DoubleClick Cookies by going to:{" "}
                          <a
                            className="text-blue-400"
                            href="https://myadcenter.google.com/home?hl=en&sasb=true&ref=ad-settings"
                            target="_blank"
                          >
                            Google Ad Settings
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Personal Data processed: Tracker; Usage Data.
                        </p>
                        <p className="mb-3">
                          Place of processing: United States -{" "}
                          <a
                            className="text-blue-400"
                            href="https://policies.google.com/privacy"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>{" "}
                          -{" "}
                          <a
                            className="text-blue-400"
                            href="https://myadcenter.google.com/home?sasb=true&ref=ad-settings"
                            target="_blank"
                          >
                            Opt Out
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: internet information.
                        </p>
                        <p className="mb-3">
                          This processing constitutes a sale based on the
                          definition under the CCPA. In addition to the
                          information in this clause, the User can find
                          information regarding how to opt out of the sale in
                          the section detailing the rights of Californian
                          consumers.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Facebook Lookalike Audience (Facebook, Inc.)
                        </h3>
                        <p className="mb-3">
                          Facebook Lookalike Audience is an advertising and
                          behavioral targeting service provided by Facebook,
                          Inc. that uses Data collected through Facebook Custom
                          Audience in order to display ads to Users with similar
                          behavior to Users who are already in a Custom Audience
                          list on the base of their past use of this Website or
                          engagement with relevant content across the Facebook
                          apps and services.
                        </p>
                        <p className="mb-3">
                          On the base of these Data, personalized ads will be
                          shown to Users suggested by Facebook Lookalike
                          Audience.
                        </p>
                        <p className="mb-3">
                          Users can opt out of Facebook's use of cookies for ads
                          personalization by visiting this{" "}
                          <a
                            className="text-blue-400"
                            href="https://optout.aboutads.info/?c=2&lang=EN"
                            target="_blank"
                          >
                            opt-out page
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Place of processing: United States -{" "}
                          <a
                            className="text-blue-400"
                            href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>{" "}
                          -{" "}
                          <a
                            className="text-blue-400"
                            href="https://optout.aboutads.info/?c=2&lang=EN"
                            target="_blank"
                          >
                            Opt Out
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: internet information.
                        </p>
                        <p className="mb-3">
                          This processing constitutes a sale based on the
                          definition under the CCPA. In addition to the
                          information in this clause, the User can find
                          information regarding how to opt out of the sale in
                          the section detailing the rights of Californian
                          consumers.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Facebook Audience Network (Facebook, Inc.)
                        </h3>
                        <p className="mb-3">
                          Facebook Audience Network is an advertising service
                          provided by Facebook, Inc.{" "}
                          <b>
                            In order to understand Facebook's use of Data,
                            consult{" "}
                          </b>
                          <a
                            className="text-blue-400"
                            href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0"
                            target="_blank"
                          >
                            Facebook's data policy
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          This Website may use identifiers for mobile devices
                          (including Android Advertising ID or Advertising
                          Identifier for iOS, respectively) and technologies
                          similar to cookies to run the Facebook Audience
                          Network service. One of the ways Audience Network
                          shows ads is by using the User's ad preferences. The
                          User can control this in the{" "}
                          <a
                            className="text-blue-400"
                            href="https://www.facebook.com/ads/settings"
                            target="_blank"
                          >
                            Facebook ad settings
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Users may opt-out of certain Audience Network
                          targeting through applicable device settings, such as
                          the device advertising settings for mobile phones or
                          by following the instructions in other Audience
                          Network related sections of this privacy policy, if
                          available.
                        </p>
                        <p className="mb-3">
                          Personal Data processed: Tracker; unique device
                          identifiers for advertising (Google Advertiser ID or
                          IDFA, for example); Usage Data.
                        </p>
                        <p className="mb-3">
                          Place of processing: United States -{" "}
                          <a
                            className="text-blue-400"
                            href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>{" "}
                          -{" "}
                          <a
                            className="text-blue-400"
                            href="https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Fsettings%3Ftab%3Dads"
                            target="_blank"
                          >
                            Opt Out
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: identifiers; internet information.
                        </p>
                        <p className="mb-3">
                          This processing constitutes a sale based on the
                          definition under the CCPA. In addition to the
                          information in this clause, the User can find
                          information regarding how to opt out of the sale in
                          the section detailing the rights of Californian
                          consumers.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Reach (Reach International)
                        </h3>
                        <p className="mb-3">
                          Reach is an advertising service provided by Reach
                          International.
                        </p>
                        <p className="mb-3">
                          Personal Data processed: Tracker; Usage Data.
                        </p>
                        <p className="mb-3">
                          Place of processing: United Arab Emirates -{" "}
                          <a
                            className="text-blue-400"
                            href="http://www.reachadv.com/#anchor2"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: internet information.
                        </p>
                        <p className="mb-3">
                          This processing constitutes a sale based on the
                          definition under the CCPA. In addition to the
                          information in this clause, the User can find
                          information regarding how to opt out of the sale in
                          the section detailing the rights of Californian
                          consumers.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Google Ad Manager (Google LLC)
                        </h3>
                        <p className="mb-3">
                          Google Ad Manager is an advertising service provided
                          by Google LLC that allows the Owner to run advertising
                          campaigns in conjunction with external advertising
                          networks that the Owner, unless otherwise specified in
                          this document, has no direct relationship with. In
                          order to opt out from being tracked by various
                          advertising networks, Users may make use of{" "}
                          <a
                            className="text-blue-400"
                            href="https://www.youronlinechoices.com/"
                            target="_blank"
                          >
                            Youronlinechoices
                          </a>
                          . In order to understand Google's use of data, consult{" "}
                          <a
                            className="text-blue-400"
                            href="http://www.reachadv.com/#anchor2"
                            target="_blank"
                          >
                            Google's partner policy
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          This service uses the “DoubleClick” Cookie, which
                          tracks use of this Website and User behavior
                          concerning ads, products and services offered.
                        </p>
                        <p className="mb-3">
                          Users may decide to disable all the DoubleClick
                          Cookies by going to:{" "}
                          <a
                            className="text-blue-400"
                            href="https://policies.google.com/technologies/partner-sites"
                            target="_blank"
                          >
                            Google Ad Settings
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Personal Data processed: Tracker; Usage Data.
                        </p>
                        <p className="mb-3">
                          Place of processing: United States - {""}
                          <a
                            className="text-blue-400"
                            href="https://policies.google.com/technologies/partner-sites"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: internet information.
                        </p>
                        <p className="mb-3">
                          This processing constitutes a sale based on the
                          definition under the CCPA. In addition to the
                          information in this clause, the User can find
                          information regarding how to opt out of the sale in
                          the section detailing the rights of Californian
                          consumers.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          JSDELIVR (jsdelivr.com)
                        </h3>
                        <p className="mb-3">
                          JSDELIVR is an advertising service provided by
                          jsdelivr.com.
                        </p>
                        <p className="mb-3">
                          Personal Data processed: Tracker; Usage Data.
                        </p>
                        <p className="mb-3">
                          Place of processing: United States -{" "}
                          <a
                            className="text-blue-400"
                            href="https://www.jsdelivr.com/terms/privacy-policy-jsdelivr-net"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: internet information.
                        </p>
                        <p className="mb-3">
                          This processing constitutes a sale based on the
                          definition under the CCPA. In addition to the
                          information in this clause, the User can find
                          information regarding how to opt out of the sale in
                          the section detailing the rights of Californian
                          consumers.
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
                        <span>Analytics</span>
                        <PlusCircleIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-6 h-6`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                        <p className="mb-3">
                          The services contained in this section enable the
                          Owner to monitor and analyze web traffic and can be
                          used to keep track of User behavior.
                        </p>

                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Google Analytics (Google LLC)
                        </h3>
                        <p className="mb-3">
                          Google Analytics is a web analysis service provided by
                          Google LLC (“Google”). Google utilizes the Data
                          collected to track and examine the use of this
                          Website, to prepare reports on its activities and
                          share them with other Google services.
                        </p>
                        <p className="mb-3">
                          Google may use the Data collected to contextualize and
                          personalize the ads of its own advertising network.
                        </p>
                        <p className="mb-3">
                          Personal Data processed: Tracker; Usage Data.
                        </p>
                        <p className="mb-3">
                          Place of processing: United States -{" "}
                          <a
                            className="text-blue-400"
                            href="https://policies.google.com/privacy"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>{" "}
                          -{" "}
                          <a
                            className="text-blue-400"
                            href="https://tools.google.com/dlpage/gaoptout?hl=en"
                            target="_blank"
                          >
                            Opt Out
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: internet information.
                        </p>
                        <p className="mb-3">
                          This processing constitutes a sale based on the
                          definition under the CCPA. In addition to the
                          information in this clause, the User can find
                          information regarding how to opt out of the sale in
                          the section detailing the rights of Californian
                          consumers.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Google Analytics for Firebase (Google LLC)
                        </h3>
                        <p className="mb-3">
                          Google Analytics for Firebase or Firebase Analytics is
                          an analytics service provided by Google LLC.
                        </p>
                        <p className="mb-3">
                          In order to understand Google's use of Data, consult{" "}
                          <a
                            className="text-blue-400"
                            href="https://policies.google.com/technologies/partner-sites"
                            target="_blank"
                          >
                            Google's partner policy
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Firebase Analytics may share Data with other tools
                          provided by Firebase, such as Crash Reporting,
                          Authentication, Remote Config or Notifications. The
                          User may check this privacy policy to find a detailed
                          explanation about the other tools used by the Owner.
                        </p>
                        <p className="mb-3">
                          This Website uses identifiers for mobile devices and
                          technologies similar to cookies to run the Firebase
                          Analytics service.
                        </p>
                        <p className="mb-3">
                          Users may opt-out of certain Firebase features through
                          applicable device settings, such as the device
                          advertising settings for mobile phones or by following
                          the instructions in other Firebase related sections of
                          this privacy policy, if available.
                        </p>
                        <p className="mb-3">
                          Personal Data processed: Usage Data -{" "}
                        </p>
                        <p className="mb-3">
                          <a
                            className="text-blue-400"
                            href="https://optout.aboutads.info/?c=2&lang=EN"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: internet information.
                        </p>
                        <p className="mb-3">
                          This processing constitutes a sale based on the
                          definition under the CCPA. In addition to the
                          information in this clause, the User can find
                          information regarding how to opt out of the sale in
                          the section detailing the rights of Californian
                          consumers.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Facebook Analytics for Apps (Facebook, Inc.)
                        </h3>
                        <p className="mb-3">
                          Facebook Analytics for Apps is an analytics service
                          provided by Facebook, Inc.
                        </p>
                        <p className="mb-3">
                          Personal Data processed: Usage Data; various types of
                          Data as specified in the privacy policy of the
                          service.
                        </p>
                        <p className="mb-3">
                          Place of processing: United States -{" "}
                          <a
                            className="text-blue-400"
                            href="https://optout.aboutads.info/?c=2&lang=EN"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: internet information.
                        </p>
                        <p className="mb-3">
                          This processing constitutes a sale based on the
                          definition under the CCPA. In addition to the
                          information in this clause, the User can find
                          information regarding how to opt out of the sale in
                          the section detailing the rights of Californian
                          consumers.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Google Analytics with anonymized IP (Google LLC)
                        </h3>
                        <p className="mb-3">
                          Google Analytics is a web analysis service provided by
                          Google LLC (“Google”). Google utilizes the Data
                          collected to track and examine the use of this
                          Website, to prepare reports on its activities and
                          share them with other Google services.
                        </p>
                        <p className="mb-3">
                          Google may use the Data collected to contextualize and
                          personalize the ads of its own advertising network.
                        </p>
                        <p className="mb-3">
                          This integration of Google Analytics anonymizes your
                          IP address. It works by shortening Users' IP addresses
                          within member states of the European Union or in other
                          contracting states to the Agreement on the European
                          Economic Area. Only in exceptional cases will the
                          complete IP address be sent to a Google server and
                          shortened within the US.
                        </p>
                        <p className="mb-3">
                          Personal Data processed: Tracker; Usage Data.
                        </p>
                        <p className="mb-3">
                          Place of processing: United States -{" "}
                          <a
                            className="text-blue-400"
                            href="https://policies.google.com/privacy"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>{" "}
                          -{" "}
                          <a
                            className="text-blue-400"
                            href="https://tools.google.com/dlpage/gaoptout?hl=en"
                            target="_blank"
                          >
                            Opt Out
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: internet information.
                        </p>
                        <p className="mb-3">
                          This processing constitutes a sale based on the
                          definition under the CCPA. In addition to the
                          information in this clause, the User can find
                          information regarding how to opt out of the sale in
                          the section detailing the rights of Californian
                          consumers.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Google Analytics Advertising Reporting Features
                          (Google LLC)
                        </h3>
                        <p className="mb-3">
                          Google Analytics on this Website has Advertising
                          Reporting Features activated, which collects
                          additional information from the DoubleClick cookie
                          (web activity) and from device advertising IDs (app
                          activity). It allows the Owner to analyze specific
                          behavior and interests Data (traffic Data and Users'
                          ads interaction Data) and, if enabled, demographic
                          Data (information about the age and gender).
                        </p>
                        <p className="mb-3">
                          Users can opt out of Google's use of cookies by
                          visiting Google's{" "}
                          <a
                            className="text-blue-400"
                            href="https://myadcenter.google.com/home?sasb=true&ref=ad-settings"
                            target="_blank"
                          >
                            Ads Settings
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Personal Data processed: Tracker; unique device
                          identifiers for advertising (Google Advertiser ID or
                          IDFA, for example); various types of Data as specified
                          in the privacy policy of the service.
                        </p>
                        <p className="mb-3">
                          Place of processing: United States -{" "}
                          <a
                            className="text-blue-400"
                            href="https://policies.google.com/privacy"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>{" "}
                          -{" "}
                          <a
                            className="text-blue-400"
                            href="https://tools.google.com/dlpage/gaoptout"
                            target="_blank"
                          >
                            Opt Out
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: internet information.
                        </p>
                        <p className="mb-3">
                          This processing constitutes a sale based on the
                          definition under the CCPA. In addition to the
                          information in this clause, the User can find
                          information regarding how to opt out of the sale in
                          the section detailing the rights of Californian
                          consumers.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Google Analytics Demographics and Interests reports
                          (Google LLC)
                        </h3>
                        <p className="mb-3">
                          Google Analytics Demographics and Interests reports is
                          a Google Advertising Reporting feature that makes
                          available demographic and interests Data inside Google
                          Analytics for this Website (demographics means age and
                          gender Data).
                        </p>
                        <p className="mb-3">
                          Users can opt out of Google's use of cookies by
                          visiting Google's{" "}
                          <a
                            className="text-blue-400"
                            href="https://myadcenter.google.com/home?sasb=true&ref=ad-settings"
                            target="_blank"
                          >
                            Ads Settings
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Personal Data processed: Tracker; unique device
                          identifiers for advertising (Google Advertiser ID or
                          IDFA, for example).
                        </p>
                        <p className="mb-3">
                          Place of processing: United States -{" "}
                          <a
                            className="text-blue-400"
                            href="https://policies.google.com/privacy"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>{" "}
                          -{" "}
                          <a
                            className="text-blue-400"
                            href="https://tools.google.com/dlpage/gaoptout"
                            target="_blank"
                          >
                            Opt Out
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: internet information.
                        </p>
                        <p className="mb-3">
                          This processing constitutes a sale based on the
                          definition under the CCPA. In addition to the
                          information in this clause, the User can find
                          information regarding how to opt out of the sale in
                          the section detailing the rights of Californian
                          consumers.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Facebook Ads conversion tracking (Facebook pixel)
                          (Facebook, Inc.)
                        </h3>
                        <p className="mb-3">
                          Facebook Ads conversion tracking (Facebook pixel) is
                          an analytics service provided by Facebook, Inc. that
                          connects data from the Facebook advertising network
                          with actions performed on this Website. The Facebook
                          pixel tracks conversions that can be attributed to ads
                          on Facebook, Instagram and Audience Network.
                        </p>
                        <p className="mb-3">
                          Personal Data processed: Tracker; Usage Data.
                        </p>
                        <p className="mb-3">
                          Place of processing: United States -{" "}
                          <a
                            className="text-blue-400"
                            href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: internet information.
                        </p>
                        <p className="mb-3">
                          This processing constitutes a sale based on the
                          definition under the CCPA. In addition to the
                          information in this clause, the User can find
                          information regarding how to opt out of the sale in
                          the section detailing the rights of Californian
                          consumers.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          YouTube Analytics and Reporting API (Google LLC)
                        </h3>
                        <p className="mb-3">
                          YouTube Analytics and Reporting API is a video content
                          analytics service provided by Google LLC.
                        </p>
                        <p className="mb-3">
                          Through this Service, this Website may collect Data
                          directly or indirectly on or from Users’ devices,
                          including by making use of trackers. Users may
                          restrict such access to their Data via the security
                          settings page provided by Google. Users may ask the
                          Owner for further information about these privacy
                          settings at any time through the contact details
                          provided in this document.
                        </p>
                        <p className="mb-3">
                          Data collected through the Service may also be used to
                          help third parties deliver interest-based advertising.
                          Users can opt out of third-party interest-based
                          advertising through their device settings or by
                          visiting the{" "}
                          <a
                            className="text-blue-400"
                            href="https://optout.networkadvertising.org/?c=1"
                            target="_blank"
                          >
                            Network Advertising Initiative opt-out page
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Place of processing: United States -{" "}
                          <a
                            className="text-blue-400"
                            href="https://policies.google.com/privacy"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>{" "}
                          -{" "}
                          <a
                            className="text-blue-400"
                            href="https://myaccount.google.com/connections?filters=3,4&hl=en_GB"
                            target="_blank"
                          >
                            Opt Out
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: internet information.
                        </p>
                        <p className="mb-3">
                          This processing constitutes a sale based on the
                          definition under the CCPA. In addition to the
                          information in this clause, the User can find
                          information regarding how to opt out of the sale in
                          the section detailing the rights of Californian
                          consumers.
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
                        <span>Backup saving and management</span>
                        <PlusCircleIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-6 h-6`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                        <p className="mb-3">
                          This type of service allows the Owner to save and
                          manage backups of this Website on external servers
                          managed by the service provider itself. The backups
                          may include the source code and content as well as the
                          data that the User provides to this Website.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Backup on Google Drive (Google LLC)
                        </h3>
                        <p className="mb-3">
                          Google Drive is a service to save and manage backups
                          provided by Google LLC.
                        </p>
                        <p className="mb-3">
                          Personal Data processed: various types of Data as
                          specified in the privacy policy of the service.
                        </p>
                        <p className="mb-3">
                          Place of processing: United States -{" "}
                          <a
                            className="text-blue-400"
                            href="https://policies.google.com/privacy"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: internet information.
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
                        <span>
                          Content performance and features testing (A/B testing)
                        </span>
                        <PlusCircleIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-6 h-6`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                        <p className="mb-3">
                          The services contained in this section allow the Owner
                          to track and analyze the User response concerning web
                          traffic or behavior regarding changes to the
                          structure, text or any other component of this
                          Website.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Google Optimize (Google LLC)
                        </h3>
                        <p className="mb-3">
                          Google Optimize is an A/B testing service provided by
                          Google LLC ("Google").
                        </p>
                        <p className="mb-3">
                          Google may use Personal Data to contextualize and
                          personalize the ads of its own advertising network.
                        </p>
                        <p className="mb-3">
                          Personal Data processed: Tracker; Usage Data.
                        </p>
                        <p className="mb-3">
                          Place of processing: United States -{" "}
                          <a
                            className="text-blue-400"
                            href="https://policies.google.com/privacy"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: internet information.
                        </p>
                        <p className="mb-3">
                          This processing constitutes a sale based on the
                          definition under the CCPA. In addition to the
                          information in this clause, the User can find
                          information regarding how to opt out of the sale in
                          the section detailing the rights of Californian
                          consumers.
                        </p>

                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Google Optimize 360 (Google LLC)
                        </h3>
                        <p className="mb-3">
                          Google Optimize 360 is an A/B testing service provided
                          by Google LLC ("Google").
                        </p>
                        <p className="mb-3">
                          This service allows the Owner to target groups of
                          Users on the base of their past use of this Website.
                          Users that opt-out of tracking by Google Analytics
                          will not be included in experiments created in Google
                          Optimize 360.
                        </p>
                        <p className="mb-3">
                          Google may use Personal Data to contextualize and
                          personalize the ads of its own advertising network.
                        </p>
                        <p className="mb-3">
                          Personal Data processed: Tracker; Usage Data.
                        </p>
                        <p className="mb-3">
                          Place of processing: United States -{" "}
                          <a
                            className="text-blue-400"
                            href="https://policies.google.com/privacy"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: internet information.
                        </p>
                        <p className="mb-3">
                          This processing constitutes a sale based on the
                          definition under the CCPA. In addition to the
                          information in this clause, the User can find
                          information regarding how to opt out of the sale in
                          the section detailing the rights of Californian
                          consumers.
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
                        <span>Displaying content from external platforms</span>
                        <PlusCircleIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-6 h-6`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                        <p className="mb-3">
                          This type of service allows you to view content hosted
                          on external platforms directly from the pages of this
                          Website and interact with them.
                        </p>
                        <p className="mb-3">
                          This type of service might still collect web traffic
                          data for the pages where the service is installed,
                          even when Users do not use it.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          YouTube video widget (Google LLC)
                        </h3>
                        <p className="mb-3">
                          Google Optimize is an A/B testing service provided by
                          Google LLC ("Google").
                        </p>
                        <p className="mb-3">
                          YouTube is a video content visualization service
                          provided by Google LLC that allows this Website to
                          incorporate content of this kind on its pages.
                        </p>
                        <p className="mb-3">
                          Personal Data processed: Tracker; Usage Data.
                        </p>
                        <p className="mb-3">
                          Place of processing: United States -{" "}
                          <a
                            className="text-blue-400"
                            href="https://policies.google.com/privacy"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: internet information.
                        </p>
                        <p className="mb-3">
                          This processing constitutes a sale based on the
                          definition under the CCPA. In addition to the
                          information in this clause, the User can find
                          information regarding how to opt out of the sale in
                          the section detailing the rights of Californian
                          consumers.
                        </p>

                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Google Fonts (Google LLC)
                        </h3>
                        <p className="mb-3">
                          Google Fonts is a typeface visualization service
                          provided by Google LLC that allows this Website to
                          incorporate content of this kind on its pages.
                        </p>
                        <p className="mb-3">
                          Personal Data processed: Usage Data; various types of
                          Data as specified in the privacy policy of the
                          service.
                        </p>
                        <p className="mb-3">
                          Place of processing: United States -{" "}
                          <a
                            className="text-blue-400"
                            href="https://policies.google.com/privacy"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: internet information.
                        </p>
                        <p className="mb-3">
                          This processing constitutes a sale based on the
                          definition under the CCPA. In addition to the
                          information in this clause, the User can find
                          information regarding how to opt out of the sale in
                          the section detailing the rights of Californian
                          consumers.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Font Awesome (Fonticons, Inc. )
                        </h3>
                        <p className="mb-3">
                          Font Awesome is a typeface visualization service
                          provided by Fonticons, Inc. that allows this Website
                          to incorporate content of this kind on its pages.
                        </p>
                        <p className="mb-3">
                          Personal Data processed: Usage Data.
                        </p>

                        <p className="mb-3">
                          Place of processing: United States -{" "}
                          <a
                            className="text-blue-400"
                            href="https://fontawesome.com/privacy"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: internet information.
                        </p>
                        <p className="mb-3">
                          This processing constitutes a sale based on the
                          definition under the CCPA. In addition to the
                          information in this clause, the User can find
                          information regarding how to opt out of the sale in
                          the section detailing the rights of Californian
                          consumers.
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
                        <span>Hosting and backend infrastructure</span>
                        <PlusCircleIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-6 h-6`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                        <p className="mb-3">
                          This type of service has the purpose of hosting Data
                          and files that enable this Website to run and be
                          distributed as well as to provide a ready-made
                          infrastructure to run specific features or parts of
                          this Website.
                        </p>
                        <p className="mb-3">
                          Some services among those listed below, if any, may
                          work through geographically distributed servers,
                          making it difficult to determine the actual location
                          where the Personal Data are stored.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Amazon Web Services (AWS) (Amazon Web Services, Inc.)
                        </h3>
                        <p className="mb-3">
                          Amazon Web Services (AWS) is a hosting and backend
                          service provided by Amazon Web Services, Inc.
                        </p>
                        <p className="mb-3">
                          Personal Data processed: various types of Data as
                          specified in the privacy policy of the service.
                        </p>
                        <p className="mb-3">
                          Place of processing: United States -{" "}
                          <a
                            className="text-blue-400"
                            href="https://aws.amazon.com/compliance/data-privacy-faq/"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: internet information.
                        </p>
                        <p className="mb-3">
                          This processing constitutes a sale based on the
                          definition under the CCPA. In addition to the
                          information in this clause, the User can find
                          information regarding how to opt out of the sale in
                          the section detailing the rights of Californian
                          consumers.
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
                        <span>Interaction with live chat platforms</span>
                        <PlusCircleIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-6 h-6`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                        <p className="mb-3">
                          This type of service allows Users to interact with
                          third-party live chat platforms directly from the
                          pages of this Website, in order to contact and be
                          contacted by this Website‘s support service.
                        </p>
                        <p className="mb-3">
                          If one of these services is installed, it may collect
                          browsing and Usage Data in the pages where it is
                          installed, even if the Users do not actively use the
                          service. Moreover, live chat conversations may be
                          logged.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Facebook Messenger Customer Chat (Facebook, Inc.)
                        </h3>
                        <p className="mb-3">
                          The Facebook Messenger Customer Chat is a service for
                          interacting with the Facebook Messenger live chat
                          platform provided by Facebook, Inc.
                        </p>
                        <p className="mb-3">
                          Personal Data processed: Data communicated while using
                          the service; Tracker; Usage Data.
                        </p>
                        <p className="mb-3">
                          Personal Data processed: Tracker; Usage Data.
                        </p>
                        <p className="mb-3">
                          Place of processing: United States -{" "}
                          <a
                            className="text-blue-400"
                            href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: internet information.
                        </p>
                        <p className="mb-3">
                          This processing constitutes a sale based on the
                          definition under the CCPA. In addition to the
                          information in this clause, the User can find
                          information regarding how to opt out of the sale in
                          the section detailing the rights of Californian
                          consumers.
                        </p>

                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Tawk.to Widget (tawk.to ltd.)
                        </h3>
                        <p className="mb-3">
                          The Tawk.to Widget is a service for interacting with
                          the Tawk.to live chat platform provided by tawk.to
                          ltd.
                        </p>
                        <p className="mb-3">
                          Personal Data processed: Data communicated while using
                          the service; Tracker; Usage Data.
                        </p>
                        <p className="mb-3">
                          Google may use Personal Data to contextualize and
                          personalize the ads of its own advertising network.
                        </p>
                        <p className="mb-3">
                          Place of processing: United Kingdom -{" "}
                          <a
                            className="text-blue-400"
                            href="https://www.tawk.to/privacy-policy/"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: internet information.
                        </p>
                        <p className="mb-3">
                          This processing constitutes a sale based on the
                          definition under the CCPA. In addition to the
                          information in this clause, the User can find
                          information regarding how to opt out of the sale in
                          the section detailing the rights of Californian
                          consumers.
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
                        <span>Managing data collection and online surveys</span>
                        <PlusCircleIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-6 h-6`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                        <p className="mb-3">
                          This type of service allows this Website to manage the
                          creation, deployment, administration, distribution and
                          analysis of online forms and surveys in order to
                          collect, save and reuse Data from any responding
                          Users.
                        </p>
                        <p className="mb-3">
                          The Personal Data collected depend on the information
                          asked and provided by the Users in the corresponding
                          online form.
                        </p>
                        <p className="mb-3">
                          These services may be integrated with a wide range of
                          third-party services to enable the Owner to take
                          subsequent steps with the Data processed - e.g.
                          managing contacts, sending messages, analytics,
                          advertising and payment processing.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Facebook lead ads (Facebook, Inc.)
                        </h3>
                        <p className="mb-3">
                          Facebook lead ads is an advertising and data
                          collection service provided by Facebook, Inc. that
                          allows form-based ads to be shown to Users
                          pre-populated with Personal Data from their Facebook
                          profiles, such as names and email addresses. Depending
                          on the type of advertisement, Users may be requested
                          to provide further information.
                        </p>
                        <p className="mb-3">
                          Form submission results in the collection and
                          processing of these Data by the Owner under this
                          privacy policy, and only for the specific purpose
                          outlined on the form and/or inside this privacy
                          policy, where provided.
                        </p>
                        <p className="mb-3">
                          Users may exercise their rights, at any time,
                          including the right to withdraw their consent to the
                          processing of their Data, as specified in the section
                          containing information about User rights in this
                          privacy policy.
                        </p>
                        <p className="mb-3">
                          Personal Data processed: Data communicated while using
                          the service.
                        </p>
                        <p className="mb-3">
                          Place of processing: United States -{" "}
                          <a
                            className="text-blue-400"
                            href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>{" "}
                          -{" "}
                          <a
                            className="text-blue-400"
                            href="https://www.facebook.com/adpreferences/?entry_product=ad_settings_screen"
                            target="_blank"
                          >
                            Opt Out
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: internet information.
                        </p>
                        <p className="mb-3">
                          This processing constitutes a sale based on the
                          definition under the CCPA. In addition to the
                          information in this clause, the User can find
                          information regarding how to opt out of the sale in
                          the section detailing the rights of Californian
                          consumers.
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
                        <span>Registration and authentication</span>
                        <PlusCircleIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-6 h-6`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                        <p className="mb-3">
                          By registering or authenticating, Users allow this
                          Website to identify them and give them access to
                          dedicated services.
                        </p>
                        <p className="mb-3">
                          Depending on what is described below, third parties
                          may provide registration and authentication services.
                          In this case, this Website will be able to access some
                          Data, stored by these third-party services, for
                          registration or identification purposes.
                        </p>
                        <p className="mb-3">
                          Some of the services listed below may also collect
                          Personal Data for targeting and profiling purposes; to
                          find out more, please refer to the description of each
                          service.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Facebook Authentication (Facebook, Inc.)
                        </h3>
                        <p className="mb-3">
                          Facebook Authentication is a registration and
                          authentication service provided by Facebook, Inc. and
                          is connected to the Facebook social network.
                        </p>
                        <p className="mb-3">
                          Personal Data processed: various types of Data as
                          specified in the privacy policy of the service.
                        </p>
                        <p className="mb-3">
                          Place of processing: United States -{" "}
                          <a
                            className="text-blue-400"
                            href="https://www.facebook.com/help/405977429438260"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: internet information.
                        </p>
                        <p className="mb-3">
                          This processing constitutes a sale based on the
                          definition under the CCPA. In addition to the
                          information in this clause, the User can find
                          information regarding how to opt out of the sale in
                          the section detailing the rights of Californian
                          consumers.
                        </p>

                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Facebook Oauth (Facebook, Inc.)
                        </h3>
                        <p className="mb-3">
                          Facebook Oauth is a registration and authentication
                          service provided by Facebook, Inc. and is connected to
                          the Facebook social network.
                        </p>
                        <p className="mb-3">
                          Personal Data processed: Tracker; various types of
                          Data.
                        </p>
                        <p className="mb-3">
                          Place of processing: United States -{" "}
                          <a
                            className="text-blue-400"
                            href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: internet information.
                        </p>
                        <p className="mb-3">
                          This processing constitutes a sale based on the
                          definition under the CCPA. In addition to the
                          information in this clause, the User can find
                          information regarding how to opt out of the sale in
                          the section detailing the rights of Californian
                          consumers.
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
                        <span>Remarketing and behavioral targeting</span>
                        <PlusCircleIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-6 h-6`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                        <p className="mb-3">
                          This type of service allows this Website and its
                          partners to inform, optimize and serve advertising
                          based on past use of this Website by the User.
                        </p>
                        <p className="mb-3">
                          This activity is facilitated by tracking Usage Data
                          and by using Trackers to collect information which is
                          then transferred to the partners that manage the
                          remarketing and behavioral targeting activity.
                        </p>
                        <p className="mb-3">
                          Some services offer a remarketing option based on
                          email address lists.
                        </p>

                        <p className="mb-3">
                          In addition to any opt-out feature provided by any of
                          the services below, Users may opt out by visiting the
                          -{" "}
                          <a
                            className="text-blue-400"
                            href="https://optout.networkadvertising.org/?c=1"
                            target="_blank"
                          >
                            Network Advertising Initiative opt-out page
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          <b>
                            Users may also opt-out of certain advertising
                            features through applicable device settings, such as
                            the device advertising settings for mobile phones or
                            ads settings in general.
                          </b>
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Facebook Remarketing (Facebook, Inc.)
                        </h3>
                        <p className="mb-3">
                          Facebook Remarketing is a remarketing and behavioral
                          targeting service provided by Facebook, Inc. that
                          connects the activity of this Website with the
                          Facebook advertising network.
                        </p>
                        <p className="mb-3">
                          Personal Data processed: Tracker; Usage Data.
                        </p>
                        <p className="mb-3">
                          Place of processing: United States -{" "}
                          <a
                            className="text-blue-400"
                            href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>{" "}
                          -{" "}
                          <a
                            className="text-blue-400"
                            href="https://optout.aboutads.info/?c=2&lang=EN"
                            target="_blank"
                          >
                            Opt Out
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: internet information.
                        </p>
                        <p className="mb-3">
                          This processing constitutes a sale based on the
                          definition under the CCPA. In addition to the
                          information in this clause, the User can find
                          information regarding how to opt out of the sale in
                          the section detailing the rights of Californian
                          consumers.
                        </p>

                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Facebook Custom Audience (Facebook, Inc.)
                        </h3>
                        <p className="mb-3">
                          Facebook Custom Audience is a remarketing and
                          behavioral targeting service provided by Facebook,
                          Inc. that connects the activity of this Website with
                          the Facebook advertising network.
                        </p>
                        <p className="mb-3">
                          Users can opt out of Facebook's use of cookies for ads
                          personalization by visiting this -{" "}
                          <a
                            className="text-blue-400"
                            href="https://optout.aboutads.info/?c=2&lang=EN"
                            target="_blank"
                          >
                            opt-out page
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Personal Data processed: email address; Tracker.
                        </p>
                        <p className="mb-3">
                          Place of processing: United States -{" "}
                          <a
                            className="text-blue-400"
                            href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>{" "}
                          -{" "}
                          <a
                            className="text-blue-400"
                            href="https://optout.aboutads.info/?c=2&lang=EN"
                            target="_blank"
                          >
                            Opt Out
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: identifiers; internet information.
                        </p>
                        <p className="mb-3">
                          This processing constitutes a sale based on the
                          definition under the CCPA. In addition to the
                          information in this clause, the User can find
                          information regarding how to opt out of the sale in
                          the section detailing the rights of Californian
                          consumers.
                        </p>

                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Google Ad Manager Audience Extension (Google LLC)
                        </h3>
                        <p className="mb-3">
                          Google Ad Manager Audience Extension is a remarketing
                          and behavioral targeting service provided by Google
                          LLC that tracks the visitors of this Website and
                          allows selected advertising partners to display
                          targeted ads across the web to them.
                        </p>
                        <p className="mb-3">
                          Personal Data processed: Tracker; Usage Data.
                        </p>
                        <p className="mb-3">
                          Personal Data processed: email address; Tracker.
                        </p>
                        <p className="mb-3">
                          Place of processing: United States -{" "}
                          <a
                            className="text-blue-400"
                            href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>{" "}
                          -{" "}
                          <a
                            className="text-blue-400"
                            href="https://myadcenter.google.com/home?sasb=true&ref=ad-settings#display_optout"
                            target="_blank"
                          >
                            Opt Out
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: internet information.
                        </p>
                        <p className="mb-3">
                          This processing constitutes a sale based on the
                          definition under the CCPA. In addition to the
                          information in this clause, the User can find
                          information regarding how to opt out of the sale in
                          the section detailing the rights of Californian
                          consumers.
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
                        <span>Tag Management</span>
                        <PlusCircleIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-6 h-6`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                        <p className="mb-3">
                          This type of service helps the Owner to manage the
                          tags or scripts needed on this Website in a
                          centralized fashion.
                        </p>
                        <p className="mb-3">
                          This results in the Users' Data flowing through these
                          services, potentially resulting in the retention of
                          this Data.
                        </p>

                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Google Tag Manager (Google LLC)
                        </h3>
                        <p className="mb-3">
                          Google Tag Manager is a tag management service
                          provided by Google LLC.
                        </p>
                        <p className="mb-3">
                          Personal Data processed: Usage Data.
                        </p>
                        <p className="mb-3">
                          Personal Data processed: Tracker; Usage Data.
                        </p>
                        <p className="mb-3">
                          Place of processing: United States -{" "}
                          <a
                            className="text-blue-400"
                            href="https://policies.google.com/privacy"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>
                          .
                        </p>
                        <p className="mb-3">
                          Category of personal information collected according
                          to CCPA: internet information.
                        </p>
                        <p className="mb-3">
                          This processing constitutes a sale based on the
                          definition under the CCPA. In addition to the
                          information in this clause, the User can find
                          information regarding how to opt out of the sale in
                          the section detailing the rights of Californian
                          consumers.
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <hr className="mb-3 mt-3 text-gray-300" />

                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  The rights of Users
                </h3>
                <p className="mb-3">
                  Users may exercise certain rights regarding their Data
                  processed by the Owner.
                </p>
                <p className="mb-3">
                  In particular, Users have the right to do the following:
                </p>

                <ul className="list-disc list-inside text-sm ml-4">
                  <li>
                    <b>Withdraw their consent at any time.</b> Users have the
                    right to withdraw consent where they have previously given
                    their consent to the processing of their Personal Data.
                  </li>
                  <li>
                    <b>Object to processing of their Data.</b> Users have the
                    right to object to the processing of their Data if the
                    processing is carried out on a legal basis other than
                    consent. Further details are provided in the dedicated
                    section below.
                  </li>
                  <li>
                    <b>Access their Data.</b> Users have the right to learn if
                    Data is being processed by the Owner, obtain disclosure
                    regarding certain aspects of the processing and obtain a
                    copy of the Data undergoing processing.
                  </li>
                  <li>
                    <b>Verify and seek rectification.</b> Users have the right
                    to verify the accuracy of their Data and ask for it to be
                    updated or corrected.
                  </li>

                  <li>
                    <b>Restrict the processing of their Data.</b> Users have the
                    right, under certain circumstances, to restrict the
                    processing of their Data. In this case, the Owner will not
                    process their Data for any purpose other than storing it.
                  </li>

                  <li>
                    <b>
                      Have their Personal Data deleted or otherwise removed.
                    </b>{" "}
                    Users have the right, under certain circumstances, to obtain
                    the erasure of their Data from the Owner.
                  </li>

                  <li>
                    <b>
                      Receive their Data and have it transferred to another
                      controller.
                    </b>{" "}
                    Users have the right to receive their Data in a structured,
                    commonly used and machine readable format and, if
                    technically feasible, to have it transmitted to another
                    controller without any hindrance. This provision is
                    applicable provided that the Data is processed by automated
                    means and that the processing is based on the User's
                    consent, on a contract which the User is part of or on
                    pre-contractual obligations thereof.
                  </li>
                  <li>
                    <b>Lodge a complaint.</b> Users have the right to bring a
                    claim before their competent data protection authority.
                  </li>
                </ul>
                <p className="mb-3">
                  The Owner may be allowed to retain Personal Data for a longer
                  period whenever the User has given consent to such processing,
                  as long as such consent is not withdrawn. Furthermore, the
                  Owner may be obliged to retain Personal Data for a longer
                  period whenever required to do so for the performance of a
                  legal obligation or upon order of an authority.
                </p>
                <p className="mb-3">
                  Once the retention period expires, Personal Data shall be
                  deleted. Therefore, the right of access, the right to erasure,
                  the right to rectification and the right to data portability
                  cannot be enforced after expiration of the retention period.
                </p>

                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  Details about the right to object to processing
                </h3>
                <p className="mb-3">
                  Where Personal Data is processed for a public interest, in the
                  exercise of an official authority vested in the Owner or for
                  the purposes of the legitimate interests pursued by the Owner,
                  Users may object to such processing by providing a ground
                  related to their particular situation to justify the
                  objection.
                </p>
                <p className="mb-3">
                  Users must know that, however, should their Personal Data be
                  processed for direct marketing purposes, they can object to
                  that processing at any time without providing any
                  justification. To learn, whether the Owner is processing
                  Personal Data for direct marketing purposes, Users may refer
                  to the relevant sections of this document.
                </p>

                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  How to exercise these rights
                </h3>
                <p className="mb-3">
                  Any requests to exercise User rights can be directed to the
                  Owner through the contact details provided in this document.
                  These requests can be exercised free of charge and will be
                  addressed by the Owner as early as possible and always within
                  one month.
                </p>
                <hr className="mb-3 mt-3 text-gray-300" />
                <h4 className="text-md font-bold font-heading text-lg mt-2 mb-2">
                  Cookie Policy
                </h4>
                <p className="mb-3">
                  This Website uses Trackers. To learn more, the User may
                  consult the Cookie Policy.
                </p>
                <hr className="mb-3 mt-3 text-gray-300" />

                <h4 className="text-md font-bold font-heading text-lg mt-2 mb-2">
                  Additional information about Data collection and processing
                </h4>
                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  Legal action
                </h3>
                <p className="mb-3">
                  The User's Personal Data may be used for legal purposes by the
                  Owner in Court or in the stages leading to possible legal
                  action arising from improper use of this Website or the
                  related Services.
                </p>
                <p className="mb-3">
                  The User declares to be aware that the Owner may be required
                  to reveal personal data upon request of public authorities.
                </p>

                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  Additional information about User's Personal Data
                </h3>
                <p className="mb-3">
                  In addition to the information contained in this privacy
                  policy, this Website may provide the User with additional and
                  contextual information concerning particular Services or the
                  collection and processing of Personal Data upon request.
                </p>

                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  System logs and maintenance
                </h3>
                <p className="mb-3">
                  For operation and maintenance purposes, this Website and any
                  third-party services may collect files that record interaction
                  with this Website (System logs) use other Personal Data (such
                  as the IP Address) for this purpose.
                </p>

                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  Information not contained in this policy
                </h3>
                <p className="mb-3">
                  More details concerning the collection or processing of
                  Personal Data may be requested from the Owner at any time.
                  Please see the contact information at the beginning of this
                  document.
                </p>

                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  How “Do Not Track” requests are handled
                </h3>
                <p className="mb-3">
                  This Website does not support “Do Not Track” requests.
                </p>
                <p className="mb-3">
                  To determine whether any of the third-party services it uses
                  honor the “Do Not Track” requests, please read their privacy
                  policies.
                </p>

                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  Changes to this privacy policy
                </h3>
                <p className="mb-3">
                  The Owner reserves the right to make changes to this privacy
                  policy at any time by notifying its Users on this page and
                  possibly within this Website and/or - as far as technically
                  and legally feasible - sending a notice to Users via any
                  contact information available to the Owner. It is strongly
                  recommended to check this page often, referring to the date of
                  the last modification listed at the bottom.
                </p>
                <p className="mb-3">
                  Should the changes affect processing activities performed on
                  the basis of the User’s consent, the Owner shall collect new
                  consent from the User, where required.
                </p>
                <hr className="mb-3 mt-3 text-gray-300" />
                <h4 className="text-md font-bold font-heading text-lg mt-2 mb-2">
                  Information for Californian consumers
                </h4>
                <p className="mb-3">
                  This part of the document integrates with and supplements the
                  information contained in the rest of the privacy policy and is
                  provided by the business running this Website and, if the case
                  may be, its parent, subsidiaries and affiliates (for the
                  purposes of this section referred to collectively as “we”,
                  “us”, “our”).
                </p>
                <p className="mb-3">
                  The provisions contained in this section apply to all Users
                  who are consumers residing in the state of California, United
                  States of America, according to "The California Consumer
                  Privacy Act of 2018" (Users are referred to below, simply as
                  “you”, “your”, “yours”), and, for such consumers, these
                  provisions supersede any other possibly divergent or
                  conflicting provisions contained in the privacy policy.
                </p>
                <p className="mb-3">
                  This part of the document uses the term “personal information“
                  as it is defined in The California Consumer Privacy Act
                  (CCPA).
                </p>

                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  Categories of personal information collected, disclosed or
                  sold
                </h3>
                <p className="mb-3">
                  In this section we summarize the categories of personal
                  information that we've collected, disclosed or sold and the
                  purposes thereof.{" "}
                  <b>
                    You can read about these activities in detail in the section
                    titled “Detailed information on the processing of Personal
                    Data” within this document.
                  </b>
                </p>
                <p className="mb-3">
                  <b>
                    Information we collect: the categories of personal
                    information we collect
                  </b>
                </p>
                <p className="mb-3">
                  We have collected the following categories of personal
                  information about you: identifiers and internet information.
                </p>
                <p className="mb-3">
                  We will not collect additional categories of personal
                  information without notifying you.
                </p>
                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  How we collect information: what are the sources of the
                  personal information we collect?
                </h3>
                <p className="mb-3">
                  We collect the above mentioned categories of personal
                  information, either directly or indirectly, from you when you
                  use this Website.
                </p>
                <p className="mb-3">
                  For example, you directly provide your personal information
                  when you submit requests via any forms on this Website. You
                  also provide personal information indirectly when you navigate
                  this Website, as personal information about you is
                  automatically observed and collected. Finally, we may collect
                  your personal information from third parties that work with us
                  in connection with the Service or with the functioning of this
                  Website and features thereof.
                </p>

                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  How we use the information we collect: sharing and disclosing
                  of your personal information with third parties for a business
                  purpose
                </h3>
                <p className="mb-3">
                  We may disclose the personal information we collect about you
                  to a third party for business purposes. In this case, we enter
                  a written agreement with such third party that requires the
                  recipient to both keep the personal information confidential
                  and not use it for any purpose(s) other than those necessary
                  for the performance of the agreement.
                </p>
                <p className="mb-3">
                  We may also disclose your personal information to third
                  parties when you explicitly ask or authorize us to do so, in
                  order to provide you with our Service.
                </p>

                <p className="mb-3">
                  To find out more about the purposes of processing, please
                  refer to the relevant section of this document.
                </p>

                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  Sale of your personal information
                </h3>
                <p className="mb-3">
                  For our purposes, the word “sale” means any “selling, renting,
                  releasing, disclosing, disseminating, making available,
                  transferring or otherwise communicating orally, in writing, or
                  by electronic means, a consumer's personal information by the
                  business to{" "}
                  <b>
                    another business or a third party, for monetary or other
                    valuable consideration”.
                  </b>
                </p>
                <p className="mb-3">
                  This means that, for example, a sale can happen whenever an
                  application runs ads, or makes statistical analyses on the
                  traffic or views, or simply because it uses tools such as
                  social network plugins and the like.
                </p>

                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  Your right to opt out of the sale of personal information
                </h3>
                <p className="mb-3">
                  You have the right to opt out of the sale of your personal
                  information. This means that whenever you request us to stop
                  selling your data, we will abide by your request.
                </p>
                <p className="mb-3">
                  Such requests can be made freely, at any time, without
                  submitting any verifiable request, simply by following the
                  instructions below.
                </p>

                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  Instructions to opt out of the sale of personal information
                </h3>
                <p className="mb-3">
                  If you’d like to know more, or exercise your right to opt out
                  in regard to all the sales carried out by this Website, both
                  online and offline, you can contact us for further information
                  using the contact details provided in this document.
                </p>

                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  What are the purposes for which we use your personal
                  information?
                </h3>
                <p className="mb-3">
                  We may use your personal information to allow the operational
                  functioning of this Website and features thereof (“business
                  purposes”). In such cases, your personal information will be
                  processed in a fashion necessary and proportionate to the
                  business purpose for which it was collected, and strictly
                  within the limits of compatible operational purposes.
                </p>
                <p className="mb-3">
                  We may also use your personal information for other reasons
                  such as for commercial purposes (as indicated within the
                  section “Detailed information on the processing of Personal
                  Data” within this document), as well as for complying with the
                  law and defending our rights before the competent authorities
                  where our rights and interests are threatened or we suffer an
                  actual damage.
                </p>
                <p className="mb-3">
                  We will not use your personal information for different,
                  unrelated, or incompatible purposes without notifying you.
                </p>

                <h4 className="text-md font-bold font-heading text-lg mt-2 mb-2">
                  Your California privacy rights and how to exercise them
                </h4>

                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  The right to know and to portability
                </h3>
                <p className="mb-3">
                  You have the right to request that we disclose to you:
                </p>
                <ul className="list-disc list-inside text-sm ml-4">
                  <li>
                    the categories and sources of the personal information that
                    we collect about you, the purposes for which we use your
                    information and with whom such information is shared;
                  </li>
                  <li>
                    in case of sale of personal information or disclosure for a
                    business purpose, two separate lists where we disclose:
                    <ul className="list-disc list-inside text-sm ml-4">
                      <li>
                        for sales, the personal information categories purchased
                        by each category of recipient; and
                      </li>
                      <li>
                        for disclosures for a business purpose, the personal
                        information categories obtained by each category of
                        recipient.
                      </li>
                    </ul>
                  </li>
                </ul>
                <p className="mb-3">
                  The disclosure described above will be limited to the personal
                  information collected or used over the past 12 months.
                </p>
                <p className="mb-3">
                  If we deliver our response electronically, the information
                  enclosed will be "portable", i.e. delivered in an easily
                  usable format to enable you to transmit the information to
                  another entity without hindrance – provided that this is
                  technically feasible.
                </p>

                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  How to exercise your rights
                </h3>
                <p className="mb-3">
                  To exercise the rights described above, you need to submit
                  your verifiable request to us by contacting us via the details
                  provided in this document.
                </p>
                <p className="mb-3">
                  For us to respond to your request, it’s necessary that we know
                  who you are. Therefore, you can only exercise the above rights
                  by making a verifiable request which must:
                </p>

                <ul className="list-disc list-inside text-sm ml-4">
                  <li>
                    provide sufficient information that allows us to reasonably
                    verify you are the person about whom we collected personal
                    information or an authorized representative;
                  </li>
                  <li>
                    describe your request with sufficient detail that allows us
                    to properly understand, evaluate, and respond to it.
                  </li>
                </ul>

                <p className="mb-3">
                  We will not respond to any request if we are unable to verify
                  your identity and therefore confirm the personal information
                  in our possession actually relates to you.
                </p>
                <p className="mb-3">
                  If you cannot personally submit a verifiable request, you can
                  authorize a person registered with the California Secretary of
                  State to act on your behalf.
                </p>
                <p className="mb-3">
                  If you are an adult, you can make a verifiable request on
                  behalf of a minor under your parental authority.
                </p>
                <p className="mb-3">
                  You can submit a maximum number of 2 requests over a period of
                  12 months.
                </p>

                <hr className="mb-3 mt-3 text-gray-300" />
                <h4 className="text-md font-bold font-heading text-lg mt-2 mb-2">
                  Information for Users residing in Brazil
                </h4>

                <p className="mb-3">
                  This part of the document integrates with and supplements the
                  information contained in the rest of the privacy policy and is
                  provided by the entity running this Website and, if the case
                  may be, its parent, subsidiaries and affiliates (for the
                  purposes of this section referred to collectively as “we”,
                  “us”, “our”).
                </p>
                <p className="mb-3">
                  The provisions contained in this section apply to all Users
                  who reside in Brazil, according to the "Lei Geral de Proteção
                  de Dados" (Users are referred to below, simply as “you”,
                  “your”, “yours”). For such Users, these provisions supersede
                  any other possibly divergent or conflicting provisions
                  contained in the privacy policy.
                </p>
                <p className="mb-3">
                  This part of the document uses the term “personal information“
                  as it is defined in the Lei Geral de Proteção de Dados (LGPD).
                </p>

                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  The grounds on which we process your personal information
                </h3>
                <p className="mb-3">
                  We can process your personal information solely if we have a
                  legal basis for such processing. Legal bases are as follows:
                </p>

                <ul className="list-disc list-inside text-sm ml-4">
                  <li>your consent to the relevant processing activities;</li>
                  <li>
                    compliance with a legal or regulatory obligation that lies
                    with us;
                  </li>
                  <li>
                    the carrying out of public policies provided in laws or
                    regulations or based on contracts, agreements and similar
                    legal instruments;
                  </li>
                  <li>
                    studies conducted by research entities, preferably carried
                    out on anonymized personal information;
                  </li>
                  <li>
                    the carrying out of a contract and its preliminary
                    procedures, in cases where you are a party to said contract;
                  </li>
                  <li>
                    the exercising of our rights in judicial, administrative or
                    arbitration procedures;
                  </li>
                  <li>
                    protection or physical safety of yourself or a third party;
                  </li>
                  <li>
                    the protection of health – in procedures carried out by
                    health entities or professionals;
                  </li>
                  <li>
                    our legitimate interests, provided that your fundamental
                    rights and liberties do not prevail over such interests; and
                  </li>
                  <li>credit protection.</li>
                </ul>

                <p className="mb-3">
                  To find out more about the legal bases, you can contact us at
                  any time using the contact details provided in this document.
                </p>

                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  Categories of personal information processed
                </h3>
                <p className="mb-3">
                  To find out what categories of your personal information are
                  processed, you can read the section titled “Detailed
                  information on the processing of Personal Data” within this
                  document.
                </p>

                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  Why we process your personal information
                </h3>
                <p className="mb-3">
                  To find out why we process your personal information, you can
                  read the sections titled “Detailed information on the
                  processing of Personal Data” and “The purposes of processing”
                  within this document.
                </p>

                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  Your Brazilian privacy rights, how to file a request and our
                  response to your requests
                  <br />
                  Your Brazilian privacy rights
                </h3>
                <p className="mb-3">You have the right to:</p>
                <ul className="list-disc list-inside text-sm ml-4">
                  <li>
                    obtain confirmation of the existence of processing
                    activities on your personal information;
                  </li>
                  <li>access to your personal information;</li>
                  <li>
                    have incomplete, inaccurate or outdated personal information
                    rectified;
                  </li>
                  <li>
                    obtain the anonymization, blocking or elimination of your
                    unnecessary or excessive personal information, or of
                    information that is not being processed in compliance with
                    the LGPD;
                  </li>
                  <li>
                    obtain information on the possibility to provide or deny
                    your consent and the consequences thereof;
                  </li>
                  <li>
                    obtain information about the third parties with whom we
                    share your personal information;
                  </li>
                  <li>
                    obtain, upon your express request, the portability of your
                    personal information (except for anonymized information) to
                    another service or product provider, provided that our
                    commercial and industrial secrets are safeguarded;
                  </li>
                  <li>
                    obtain the deletion of your personal information being
                    processed if the processing was based upon your consent,
                    unless one or more exceptions provided for in art. 16 of the
                    LGPD apply;
                  </li>
                  <li>revoke your consent at any time;</li>
                  <li>
                    lodge a complaint related to your personal information with
                    the ANPD (the National Data Protection Authority) or with
                    consumer protection bodies;
                  </li>
                  <li>
                    oppose a processing activity in cases where the processing
                    is not carried out in compliance with the provisions of the
                    law;
                  </li>
                  <li>
                    request clear and adequate information regarding the
                    criteria and procedures used for an automated decision; and
                  </li>
                  <li>
                    request the review of decisions made solely on the basis of
                    the automated processing of your personal information, which
                    affect your interests. These include decisions to define
                    your personal, professional, consumer and credit profile, or
                    aspects of your personality.
                  </li>
                </ul>

                <p className="mb-3">
                  You will never be discriminated against, or otherwise suffer
                  any sort of detriment, if you exercise your rights.
                </p>
                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  How to file your request
                </h3>
                <p className="mb-3">
                  You can file your express request to exercise your rights free
                  from any charge, at any time, by using the contact details
                  provided in this document, or via your legal representative.
                </p>

                <h3 className="text-md font-bold font-heading mt-2 mb-2">
                  How and when we will respond to your request
                </h3>
                <p className="mb-3">
                  We will strive to promptly respond to your requests.
                  <br />
                  In any case, should it be impossible for us to do so, we’ll
                  make sure to communicate to you the factual or legal reasons
                  that prevent us from immediately, or otherwise ever, complying
                  with your requests. In cases where we are not processing your
                  personal information, we will indicate to you the physical or
                  legal person to whom you should address your requests, if we
                  are in the position to do so.
                </p>

                <p className="mb-3">
                  In the event that you file an <b>access</b> or personal
                  information
                  <b> processing confirmation</b> request, please make sure that
                  you specify whether you’d like your personal information to be
                  delivered in electronic or printed form.
                  <br />
                  You will also need to let us know whether you want us to
                  answer your request immediately, in which case we will answer
                  in a simplified fashion, or if you need a complete disclosure
                  instead.
                  <br />
                  In the latter case, we’ll respond within 15 days from the time
                  of your request, providing you with all the information on the
                  origin of your personal information, confirmation on whether
                  or not records exist, any criteria used for the processing and
                  the purposes of the processing, while safeguarding our
                  commercial and industrial secrets.
                </p>
                <p className="mb-3">
                  In the event that you file a&nbsp;
                  <b>
                    rectification, deletion, anonymization or personal
                    information blocking&nbsp;
                  </b>
                  request, we will make sure to immediately communicate your
                  request to other parties with whom we have shared your
                  personal information in order to enable such third parties to
                  also comply with your request – except in cases where such
                  communication is proven impossible or involves
                  disproportionate effort on our side.
                </p>

                <h4 className="text-md font-bold font-heading text-lg mt-2 mb-2">
                  Transfer of personal information outside of Brazil permitted
                  by the law
                </h4>
                <p className="mb-3">
                  We are allowed to transfer your personal information outside
                  of the Brazilian territory in the following cases:
                </p>
                <ul className="list-disc list-inside text-sm ml-4">
                  <li>
                    when the transfer is necessary for international legal
                    cooperation between public intelligence, investigation and
                    prosecution bodies, according to the legal means provided by
                    the international law;
                  </li>
                  <li>
                    when the transfer is necessary to protect your life or
                    physical security or those of a third party;
                  </li>
                  <li>when the transfer is authorized by the ANPD;</li>
                  <li>
                    when the transfer results from a commitment undertaken in an
                    international cooperation agreement;
                  </li>
                  <li>
                    when the transfer is necessary for the execution of a public
                    policy or legal attribution of public service;
                  </li>
                  <li>
                    when the transfer is necessary for compliance with a legal
                    or regulatory obligation, the carrying out of a contract or
                    preliminary procedures related to a contract, or the regular
                    exercise of rights in judicial, administrative or
                    arbitration procedures.
                  </li>
                </ul>

                <Disclosure
                  as="div"
                  className="leading-loose text-lg mt-6 wow animate__animated animate__fadeIn"
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full font-bold border-b border-gray-200 py-3 flex justify-between items-center mt-4">
                        <span>Definitions and legal references</span>
                        <PlusCircleIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-6 h-6`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Personal Data (or Data)
                        </h3>
                        <p className="mb-3">
                          Any information that directly, indirectly, or in
                          connection with other information — including a
                          personal identification number — allows for the
                          identification or identifiability of a natural person.
                        </p>

                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Usage Data
                        </h3>
                        <p className="mb-3">
                          Information collected automatically through this
                          Website (or third-party services employed in this
                          Website), which can include: the IP addresses or
                          domain names of the computers utilized by the Users
                          who use this Website, the URI addresses (Uniform
                          Resource Identifier), the time of the request, the
                          method utilized to submit the request to the server,
                          the size of the file received in response, the
                          numerical code indicating the status of the server's
                          answer (successful outcome, error, etc.), the country
                          of origin, the features of the browser and the
                          operating system utilized by the User, the various
                          time details per visit (e.g., the time spent on each
                          page within the Application) and the details about the
                          path followed within the Application with special
                          reference to the sequence of pages visited, and other
                          parameters about the device operating system and/or
                          the User's IT environment.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          User
                        </h3>
                        <p className="mb-3">
                          The individual using this Website who, unless
                          otherwise specified, coincides with the Data Subject.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Data Subject
                        </h3>
                        <p className="mb-3">
                          The natural person to whom the Personal Data refers.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Data Processor (or Data Supervisor)
                        </h3>
                        <p className="mb-3">
                          The natural or legal person, public authority, agency
                          or other body which processes Personal Data on behalf
                          of the Controller, as described in this privacy
                          policy.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Data Controller (or Owner)
                        </h3>
                        <p className="mb-3">
                          The natural or legal person, public authority, agency
                          or other body which, alone or jointly with others,
                          determines the purposes and means of the processing of
                          Personal Data, including the security measures
                          concerning the operation and use of this Website. The
                          Data Controller, unless otherwise specified, is the
                          Owner of this Website
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          This Website (or this Application)
                        </h3>
                        <p className="mb-3">
                          The means by which the Personal Data of the User is
                          collected and processed.
                        </p>

                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Service
                        </h3>
                        <p className="mb-3">
                          The service provided by this Website as described in
                          the relative terms (if available) and on this
                          site/application.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          European Union (or EU)
                        </h3>
                        <p className="mb-3">
                          Unless otherwise specified, all references made within
                          this document to the European Union include all
                          current member states to the European Union and the
                          European Economic Area.
                        </p>

                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Cookie
                        </h3>
                        <p className="mb-3">
                          Cookies are Trackers consisting of small sets of data
                          stored in the User's browser.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Tracker
                        </h3>
                        <p className="mb-3">
                          Tracker indicates any technology - e.g Cookies, unique
                          identifiers, web beacons, embedded scripts, e-tags and
                          fingerprinting - that enables the tracking of Users,
                          for example by accessing or storing information on the
                          User’s device.
                        </p>
                        <hr className="mb-3 mt-3 text-gray-300" />

                        <h3 className="text-md font-bold font-heading mt-2 mb-2">
                          Legal information
                        </h3>
                        <p className="mb-3">
                          This privacy statement has been prepared based on
                          provisions of multiple legislations, including Art.
                          13/14 of Regulation (EU) 2016/679 (General Data
                          Protection Regulation).
                        </p>

                        <p className="mb-3">
                          This privacy policy relates solely to this Website, if
                          not stated otherwise within this document.
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <hr className="mb-3 mt-3 text-gray-300" />
                <p className="mb-3">Latest update: July 28, 2021</p>
                <p className="mb-3">
                  <a
                    className="text-blue-400"
                    href="https://www.iubenda.com/en/privacy-and-cookie-policy-generator"
                    target="_blank"
                  >
                    iubenda
                  </a>{" "}
                  hosts this content and only collects{" "}
                  <a
                    className="text-blue-400"
                    href="https://www.iubenda.com/privacy-policy/65675001"
                    target="_blank"
                  >
                    the Personal Data strictly necessary
                  </a>{" "}
                  for it to be provided.
                </p>
                <hr className="mb-3 mt-3 text-gray-300" />
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
                            the{" "}
                            <a
                              className="text-blue-400"
                              href="https://app.cloudsocial.io/accounts/login"
                              target="_blank"
                            >
                              Support Tab
                            </a>{" "}
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

export default PrivacyPolicy;
