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

const TermsOfService = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" name="CloudPoint Terms Of Service" />
        <title>Terms Of Service | CloudPoint</title>
        <meta
          name="description"
          content="Check out CloudPoint Terms Of Service."
        />
        <link
          rel="canonical"
          href="https://cloudpoint.co.in/terms-of-service"
          key="canonical"
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
              alt="terms"
            />
            <div className="mb-12 text-center">
              <h1
                className="lg:text-4xl sm:text-2xl font-bold font-heading wow animate__animated animate__fadeIn animated"
                data-wow-delay=".1s"
              >
                Terms and Conditions of <br />
                <span className="text-blue-500 word-break">
                  cloudpoint.co.in
                </span>
              </h1>
            </div>

            <div className="text-center lg:text-left lg:text-base mb-5">
              <p className="mb-1 mt-2 text-justify">
                These Terms of Service are effective as of 17th May, 2021. THESE
                TERMS OF SERVICE (“TERMS”) GOVERN YOUR USE OF OUR SERVICE.
              </p>
            </div>

            <hr className="mb-3 mt-3 text-gray-300" />

            <div className="w-full text-center lg:text-left text-lg lg:text-base font-semibold1 lg:font-normal mb-2 lg:mb-0 px-3">
              <div className="text-left text-sm">
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  1. Acceptance of Terms
                </h3>
                <p className="mb-1 mt-2 text-justify">
                  <b>A.</b> Cloudpoint Technologies. (“Cloudpoint Technologies”,
                  “We” or “Our”) provides its Service (as defined below) to You
                  through its web site located at www.cloudpoint.co.in (the
                  “Site”), subject to these Terms
                </p>

                <p className="mb-1 mt-2 text-justify">
                  <b>B.</b> By accepting the Terms, or by accessing or using the
                  Service or Site, You represent and acknowledge that You have
                  read, understood, and agree to be bound by these Terms, and
                  that the information You provide in registering to the Service
                  is accurate, complete, and is Yours or within Your right to
                  use. If You are entering into these Terms on behalf of a
                  company or another legal entity, You represent that You have
                  the authority to bind such entity and its affiliates to these
                  Terms, in which case the terms “You,” “Your” or related
                  capitalized terms herein shall refer to such entity and its
                  affiliates. If You do not have such authority, or if You do
                  not agree with these Terms, You must not accept these Terms
                  and may not use the Service.
                </p>
                <p className="mb-1 mt-2 text-justify">
                  You acknowledge that these Terms constitute a contract between
                  You and Cloudpoint Technologies, even though it is electronic
                  and is not physically signed by You and Cloudpoint
                  Technologies. You further acknowledge that these Terms govern
                  Your use of the Service and, except for written addendums
                  signed by the parties that specifically modify these Terms,
                  these Terms supersede any other agreements between You and
                  Cloudpoint Technologies.
                </p>

                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  2. Availability of the Site
                </h3>
                <p className="mb-1 mt-2 text-justify">
                  You acknowledge that there may be interruptions in service or
                  events that are beyond our control. While we use reasonable
                  efforts to keep the Site accessible, the Site may be
                  unavailable from time to time for any reason including,
                  without limitation, routine maintenance. You understand and
                  acknowledge that due to circumstances both within and outside
                  of our control, Site access may be interrupted, suspended or
                  terminated. You further understand that there may be
                  interruptions in service or events on third-party sites,
                  including, but not limited to, Facebook, Twitter, etc., that
                  will affect your use of the Service (defined below) and that
                  are beyond our control to prevent or correct. Interruptions in
                  the Service that are beyond our control shall not serve as a
                  basis to terminate your subscription or demand a full or
                  partial refund of any prepaid fees.
                </p>

                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  3. Description of Service
                </h3>
                <p className="mb-1 mt-2 text-justify">
                  <b>A.</b> The “Service” includes
                </p>

                <ul className="list-alphabet text-sm ml-5 text-justify">
                  <li>The Site</li>
                  <li>The Cloudpoint Technologies Applications, and</li>
                  <li>
                    The other services provided to You through the Site based on
                    the plan purchased, including all software, data, text,
                    images, sounds, videos, and other content made available
                    through the Site (collectively, “Content”). Any new features
                    added to or augmenting the Service are also subject to these
                    Terms. Certain new features made generally available at no
                    cost to all subscribing customers will be made available to
                    You at no additional charge. However, the availability of
                    some new features may require the payment of additional
                    fees, and Cloudpoint Technologies will determine at its sole
                    discretion whether access to any other such new features
                    will require an additional fee.
                  </li>
                </ul>
                <p className="mb-1 mt-2 text-justify">
                  <b>B.</b> The Service may also include basic or expanded
                  services based on the Service plan purchased. Cloudpoint
                  Technologies will use commercially reasonable efforts to make
                  the Service available as detailed in the applicable Service
                  plan, except for:
                </p>
                <ul className="list-alphabet text-sm ml-5 text-justify">
                  <li>Planned downtime, or </li>
                  <li>
                    Any unavailability caused by circumstances beyond Our
                    reasonable control, such as, but not limited to, acts of
                    God, acts of government, acts of terror or civil unrest, or
                    technical failures beyond Our control.
                  </li>
                </ul>

                <p className="mb-1 mt-2 text-justify">
                  <b>C.</b> Cloudpoint Technologies may offer Demo/Trial where
                  you may experience the Service free of charge for a specified
                  time period. Upon expiration of this time period, your access
                  to the Service will be terminated unless you choose to pay the
                  applicable subscription fee and become a subscriber. You
                  understand that only a single Free Trial/Demo account will be
                  granted for a given email address. The provision, maintenance
                  and termination of Demo/Free Trial accounts are within the
                  sole discretion of Cloudpoint Technologies. Cloudpoint
                  Technologies has no obligation or liability related to the
                  provision, maintenance and termination of Demo/Free Trial
                  accounts.
                </p>

                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  4. Applications
                </h3>
                <p className="mb-1 mt-2 text-justify">
                  Cloudpoint Technologies makes Applications to access the
                  Service via a web/mobile device. To use the Application You
                  must have a device that is compatible with the service. We do
                  not warrant that the Application will be compatible with Your
                  device. Cloudpoint Technologies hereby grants to You a
                  non-exclusive, non-transferable, revocable license to use an
                  object code copy of the Application for one registered account
                  on one device owned or leased solely by You, for Your personal
                  use.
                </p>
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  5. Third Party Services
                </h3>
                <p className="mb-1 mt-2 text-justify">
                  <b>External Sites: </b>The Service may contain links to, or
                  otherwise may allow You to connect to and use certain third
                  party products, services or software under separate terms and
                  conditions (collectively, “Third-party Services”) in
                  conjunction with Our Service. If You decide to access and use
                  such Third-party Services, be advised that Your use of such
                  Third-party Services is governed solely by the terms and
                  conditions of such Third-party Services, and We do not
                  endorse, are not responsible for, and make no representations
                  as to such Third-party Services, their content or the manner
                  in which they handle Your data. Cloudpoint Technologies is not
                  liable for any damage or loss caused or alleged to be caused
                  by or in connection with Your access or use of any such
                  Third-party Services, or Your reliance on the privacy
                  practices or other policies of such Third-party Services. A.
                  Integration. The Service may contain features that enable
                  various Third-party Services (such as social media services
                  like Facebook and Twitter) to be directly integrated into your
                  Cloudpoint Technologies account. To take advantage of these
                  features, You will be required to register for or log into
                  such Third-party Services on their respective websites. By
                  enabling third party services within the Service, You are
                  allowing Cloudpoint Technologies to pass Your log-in
                  information to these Third-party Services for this purpose.
                </p>
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  6. Billing, Plan Modifications and Payments
                </h3>
                <p className="mb-1 mt-2 text-justify">
                  <b>Billing and Payments:</b> Unless otherwise agreed to in
                  writing by Cloudpoint Technologies, the Service is made
                  available on a pay-as-you-go basis and is charged at the start
                  of Your elected subscription term (generally monthly or
                  annually). If You do not provide Your credit card or other
                  payment information to Cloudpoint Technologies before the
                  expiration of any applicable demo/free trial period, Your
                  account will be suspended until payment information and charge
                  authorization are provided. You will be promptly billed and,
                  if applicable, any trial period will terminate. Unless You
                  cancel Your subscription prior to the expiration of its
                  current subscription term, We will automatically renew Your
                  subscription based on Your plan’s renewal cycle and will
                  charge Your credit card with the applicable renewal
                  subscription fees. Subscriptions must be cancelled at least 3
                  days prior to expiration thereof to avoid automatic renewal.
                  This will prevent any further payments from occurring. The
                  Service provides an interface for the account owner to change
                  credit card information (e.g., upon card renewal).
                </p>
                <p className="mb-1 mt-2 text-justify">
                  <b>A. Modifying Your Subscription: </b> If You choose to
                  upgrade Your plan or number of users during Your elected
                  subscription period, any incremental cost will be prorated
                  over the remaining term of the subscription period and charged
                  to Your account. You will be charged the adjusted rate on
                  subsequent billing cycles. If your payments for the Service
                  are made by credit card, your credit card will be billed the
                  prorated charge at the time your account is modified. Except
                  as provided in Section 11, regardless of Your billing cycle,
                  there are no refunds or credits for partial months of Service,
                  plan downgrades, or refunds for unused time if You close Your
                  account before the end of Your subscription period.
                  Downgrading Your plan level may cause the loss of content,
                  features, or capacity of Your account and Cloudpoint
                  Technologies does not accept any liability for such loss.
                </p>
                <p className="mb-1 mt-2 text-justify">
                  <b>B. Authorization to Charge Your Credit Card: </b> By
                  becoming a subscriber of the Service and submitting your
                  credit card information to Cloudpoint Technologies, you
                  authorize Cloudpoint Technologies to store your payment card
                  information and to charge the billing source you have provided
                  for your account according to the subscription plan you
                  selected until your account is terminated
                </p>
                <p className="mb-1 mt-2 text-justify">
                  <b>C. Overdue charges: </b>If You fail to pay your
                  subscription fee on time, or if Your credit card payment
                  information is entered in error or does not go through for
                  processing and You do not update payment information upon Our
                  request, your entire subscription may be suspended or
                  cancelled. Even after your subscription is suspended or
                  cancelled, You will still have access to the Site, and you
                  will be able to access your account information to restore
                  your access to the Service by providing a proper billing
                  source. After your subscription is terminated, we will keep
                  your current account settings on file for 90 days. After that
                  time, Cloudpoint Technologies reserves the right to remove
                  such settings from our servers with NO liability or notice to
                  you.
                </p>
                <p className="mb-1 mt-2 text-justify">
                  <b>D. Billing Privacy: </b> Cloudpoint Technologies uses a
                  third-party intermediary to manage credit card processing and
                  this intermediary is not permitted to store, retain, or use
                  Your billing information except to process Your credit card
                  information for Cloudpoint Technologies. For more information
                  about Our billing practices and Your personal information
                  please visit Our Privacy Policy.
                </p>
                <p className="mb-1 mt-2 text-justify">
                  <b>E. Taxes: </b> Unless otherwise stated, Our charges do not
                  include any taxes, levies, duties or similar governmental
                  assessments, including value-added, sales, use or withholding
                  taxes assessable by any local, state, provincial or foreign
                  jurisdiction (collectively “Taxes”). You are responsible for
                  paying Taxes except those assessable against Cloudpoint
                  Technologies based on its income. We will invoice You for such
                  Taxes if we believe we have a legal obligation to do so.
                </p>

                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  7. Intellectual Property Rights
                </h3>
                <p className="mb-1 mt-2 text-justify">
                  Cloudpoint Technologies retains all rights, title and interest
                  in and to all patents, inventions, copyrights, trademarks,
                  domain names, trade secrets, know-how and any other
                  intellectual property and/or proprietary rights (collectively,
                  “Intellectual Property Rights”) related to the Service. The
                  rights granted to You to use the Service under these Terms do
                  not convey any additional rights in the Service, or ownership
                  of any Intellectual Property Rights associated therewith.
                </p>
                <p className="mb-1 mt-2 text-justify">
                  <b>A. </b> As between You and Cloudpoint Technologies You own
                  the information you provide Cloudpoint Technologies or input
                  on third-party websites through the Service. You grant
                  Cloudpoint Technologies a nonexclusive, revocable, worldwide,
                  perpetual, unlimited fully paid up and royalty-free right to
                  us to use copy, prepare derivative works of, distribute,
                  publish, remove, retain, add, process, or analyze the
                  foregoing described information for the sole purpose of
                  providing the Service to You and Your Users (as defined
                  below). By providing information to us or to third-parties
                  through the Service, You represent and warrant that You are
                  entitled to and authorized to submit the information and that
                  the information is accurate, not confidential, and not in
                  violation of any contractual restrictions or other third party
                  rights. Licensee may not upload, post or otherwise make
                  available through the Service any material protected by
                  copyright, trademark, or any other proprietary right without
                  first having obtained all rights, permissions and consents
                  necessary
                </p>

                <ul className="list-alphabet text-sm ml-5 text-justify">
                  <li>
                    To make such content available on or through the Service
                  </li>
                  <li>
                    To grant Cloudpoint Technologies the limited rights to use
                    the content as set forth in this Agreement. The burden of
                    determining whether any content is protected by any such
                    right is on You.
                  </li>
                </ul>

                <p className="mb-1 mt-2 text-justify">
                  <b>B. </b> Cloudpoint Technologies shall have a royalty-free,
                  worldwide, transferable, sub-licensable, irrevocable and
                  perpetual license to incorporate into the Service or otherwise
                  use any suggestions, enhancement requests, recommendations or
                  other feedback (“Feedback”) We receive from You. You
                  understand and agree, however, that Cloudpoint Technologies is
                  not obligated to use, display, reproduce, or distribute any
                  such ideas, know-how, concepts, or techniques contained in the
                  Feedback, and You have no right to compel such use, display,
                  reproduction, or distribution.
                </p>

                <p className="mb-1 mt-2 text-justify">
                  <b>C. </b>Cloudpoint Technologies, and Cloudpoint
                  Technologies’s other product and service names, and logos used
                  or displayed on the Service are registered or unregistered
                  trademarks of Cloudpoint Technologies (collectively, “Marks”),
                  and You may only use such Marks to identify yourself as a
                  customer and user of the Service; provided You do not attempt,
                  now or in the future, to claim any rights in the Marks,
                  degrade the distinctiveness of the Marks, or use the Marks to
                  disparage or misrepresent Cloudpoint Technologies, its
                  services or products
                </p>
                <p className="mb-1 mt-2 text-justify">
                  <b>D. </b>All rights, title and interest in and to the Service
                  and its components, including all related intellectual
                  property rights, will remain with and belong exclusively to
                  Cloudpoint Technologies and its third-party vendors.
                </p>
                <p className="mb-1 mt-2 text-justify">
                  <b>E. </b>Upon subscribing to the Service and subject to Your
                  compliance with the terms and conditions of these Terms,
                  Cloudpoint Technologies grants you a non-exclusive,
                  non-transferable, non- sublicenseable, revocable license to
                  access and use the Service (for the particular subscription
                  purchased) and the Site, strictly in accordance with this
                  Agreement and subject to all the limitations set forth in this
                  Agreement. If applicable to the plan for which you have
                  subscribed, you may create separate logins under your account
                  for as many end user clients (each a “User”) as your plan
                  permits.
                </p>

                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  8. Account Registration
                </h3>
                <p className="mb-1 mt-2 text-justify">
                  Subject to the terms and conditions of these Terms, You agree
                  to access and use the Service only for Your internal business
                  purposes as contemplated by these Terms. In order to use the
                  Service, you are required to register for our service for
                  which you will pay a subscription fee for use of the Service
                  following the expiration or termination of any Free Trial
                  accounts. The subscription fee, following the expiration or
                  termination of any Free Trial accounts, must be prepaid in
                  order to use the Service.
                </p>
                <p className="mb-1 mt-2 text-justify">
                  <b>A. </b> If You add Users to your account, You must
                  contractually bind each of such User to these Terms and, as
                  between You and Cloudpoint Technologies you will be solely
                  liable for any breach of these Terms by Your Users. By adding
                  any User to your account, You represent and warrant that:
                </p>

                <ul className="list-roman list-inside text-sm ml-4 text-justify">
                  <li>
                    You have obtained all necessary authorizations, consents,
                    and licenses from such User to bind it to this Agreement.
                    You are at all times fully responsible and liable for all
                    acts and omissions by Your Users and You agree to indemnify
                    Cloudpoint Technologies for all claims and losses related to
                    any such acts and/or omissions.
                  </li>
                </ul>

                <p className="mb-1 mt-2 text-justify">
                  <b>B. </b> To be eligible to use the Service, you must meet
                  the following criteria and represent and warrant that you:
                </p>
                <ul className="list-decimal list-inside text-sm ml-4 text-justify">
                  <li>Are 18 years of age or older</li>
                  <li>
                    Are not currently restricted from the Service, or not
                    otherwise prohibited from having a Cloudpoint.co.in account
                  </li>
                  <li>
                    Are not a competitor of Cloudpoint Technologies or are not
                    using the Service for reasons that are in competition with
                    Cloudpoint Technologies
                  </li>
                  <li>
                    Have full power and authority to enter into this Agreement
                    and doing so will not violate any other agreement to which
                    you are a party
                  </li>
                  <li>
                    Will not violate any rights of Cloudpoint Technologies,
                    including intellectual property rights such as copyright or
                    trademark rights
                  </li>
                  <li>
                    Agree to provide at Your cost all equipment, software, and
                    internet access necessary to use the Service.
                  </li>
                </ul>

                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  9. Use of the Service
                </h3>
                <p className="mb-1 mt-2 text-justify">
                  You shall not, and shall not permit, induce or encourage any
                  third party (including, without limitation, any User)
                </p>

                <ul className="list-alphabet text-sm ml-5 text-justify">
                  <li>
                    license, sublicense, sell, resell, rent, lease, transfer,
                    assign, distribute, time share or otherwise commercially
                    exploit or make the Service available to any third party,
                    other than as expressly permitted by these Terms.
                  </li>
                  <li>
                    Use the Service to process data on behalf of any third party
                  </li>
                  <li>
                    Modify, adapt or hack the Service to falsely imply any
                    sponsorship or association with Cloudpoint Technologies, or
                    otherwise attempt to gain unauthorized access to the Service
                    or its related systems or networks;
                  </li>
                  <li>
                    (d) use the Service in any unlawful manner, including but
                    not limited to violation of any persons privacy rights,
                    infringing any person’s intellectual property rights, or
                    sending spam or otherwise duplicative or unsolicited
                    messages in violation of applicable law
                  </li>
                  <li>
                    (e) use the Service in any manner that interferes with or
                    disrupts the integrity or performance of the Service and its
                    components;
                  </li>
                  <li>
                    (f) attempt to decipher, decompile, reverse engineer or
                    otherwise discover the source code of any software making up
                    the Service;
                  </li>
                  <li>
                    (g) use the Service to knowingly post, upload, link to, send
                    or store any content that is unlawful, racist, hateful,
                    obscene, discriminatory, or contains any viruses, malware,
                    Trojan horses, time bombs, or any other similar harmful
                    software;
                  </li>
                  <li>
                    (h) attempt to use any method to gain unauthorized access to
                    any paid features of the Site;
                  </li>
                  <li>
                    (i) unless otherwise explicitly agreed to in writing by
                    Cloudpoint Technologies, use the Site or any content
                    obtained from it to develop, as a component of, any
                    information, storage and retrieval system, database,
                    information base, or similar resource (in any media now
                    existing or hereafter developed), that is offered for
                    commercial distribution of any kind, including through sale,
                    license, lease, rental, subscription, or any other
                    commercial distribution mechanism;
                  </li>
                  <li>
                    (j) use automated scripts to collect information from or
                    otherwise interact with the Site or the Service
                  </li>
                  <li>
                    deep-link to the Site for any purpose (other than Cloudpoint
                    Technologies’s home page), unless expressly authorized in
                    writing by Cloudpoint Technologies;
                  </li>
                  <li>(l) impersonate any other user of the Service; or </li>
                  <li>
                    (m) try to use, or use the Service in violation of these
                    Terms. A. You are responsible for all information, data,
                    text, messages or other materials that You or Your Users
                    post or otherwise transmit via the Service. You are
                    responsible for maintaining the confidentiality of Your
                    login and account, and are fully responsible for any and all
                    activities that occur under or in connection with Your login
                    or account. You agree and acknowledge that Your login may
                    only be used by one (1) person, and that You will not share
                    a single login among multiple people. You agree that You
                    will not sell, trade or otherwise transfer Your login or
                    account to another party and that you will not, unless
                    otherwise specifically agreed to in writing by Cloudpoint
                    Technologies, charge anyone for access to any portion of the
                    Site, or any information therein. You agree that you are
                    responsible for anything that happens through your account,
                    including the acts or omissions of your Users.
                  </li>
                </ul>

                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  10. Data Privacy and Security
                </h3>
                <p className="mb-1 mt-2 text-justify">
                  In providing You the Service We shall maintain appropriate
                  administrative, physical and technical safeguards to protect
                  the security, confidentiality and integrity of Your data and
                  the personal data of Your end-users. These safeguards include
                  encryption of Your data in transmission (using SSL or similar
                  technologies), except for external third party integrations
                  that do not support encryption, which You may link to the
                  Service at Your choice. We agree to promptly notify You in the
                  event that Cloudpoint Technologies learns or has reason to
                  believe that any person or entity has breached Cloudpoint
                  Technologies’s measures, or gained unauthorized access to Your
                  data (“Information Security Breach”). Upon any such discovery,
                  We will:
                </p>

                <ul className="list-alphabet text-sm ml-5 text-justify">
                  <li>
                    Investigate, and mitigate the effects of the Information
                    Security Breach
                  </li>
                  <li>
                    Use Our best efforts to ensure that such Information
                    Security Breach will not recur
                  </li>
                  <li>
                    Assist You in remediation of the Information Security
                    Breach. We shall use commercially reasonable efforts to
                    promptly and properly deal with inquiries and requests from
                    You in relation to the processing of Your data.
                  </li>
                </ul>
                <p className="mb-1 mt-2 text-justify">
                  <b>A. </b> You agree that Cloudpoint Technologies can access
                  Your account information in order to respond to Your service
                  requests and/or as necessary, in Our sole discretion, to
                  provide You with the Services. We will not disclose such data
                  except if compelled by law, permitted by You, or pursuant to
                  the terms of the Cloudpoint Technologies Privacy Policy, which
                  is available at https://cloudpoint.co.in and is incorporated
                  into these Terms. We agree to store, use and process Your
                  business contact information, including names, business phone
                  numbers, and business e-mail addresses only to the extent
                  necessary to provide You the Services. We will not disclose
                  such business contact information to third parties except if
                  permitted by You in writing.
                </p>
                <p className="mb-1 mt-2 text-justify">
                  <b>B. </b> The Privacy Policy governs our treatment of any
                  information, including personally identifiable information,
                  you submit to us. Please note that certain information,
                  statements, data, and content which You may submit to or
                  through the Service may reveal your gender, ethnic origin,
                  nationality, age, and/or other personal information about You.
                  You acknowledge that Your submission of any information,
                  statements, data, and content to Us is voluntary on Your part.
                  The Privacy Policy is incorporated into this Agreement by
                  reference.
                </p>
                <p className="mb-1 mt-2 text-justify">
                  <b>C. </b> For Your personal data or personal information
                  (collectively, “Your personal data”) received by Cloudpoint
                  Technologies from the European Union (EU) in any form or
                  format with respect to any identified or identifiable person
                  covered by the European Union Privacy Directive, Cloudpoint
                  Technologies agrees to comply as follows:
                </p>

                <ul className="list-roman text-sm ml-5 text-justify">
                  <li>
                    When acting in the capacity of a data processor, Cloudpoint
                    Technologies only acts on Your instructions and does not
                    control or share Your personal data without direction from
                    You and
                  </li>
                  <li>
                    When acting in the capacity of a data controller, Cloudpoint
                    Technologies will adhere to the EU Safe Harbor Privacy
                    Principles regarding the collection, use and retention of
                    personal information from European Union member countries.
                  </li>
                </ul>
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  11. Cancellation and Termination
                </h3>
                <p className="mb-1 mt-2 text-justify">
                  You may cancel your account with Cloudpoint Technologies at
                  any time; however, unless Cloudpoint Technologies is in breach
                  of this Agreement and does not cure said breach within thirty
                  (30) days of receiving written notice from You of an actual
                  breach, identifying specifically the nature of the breach, You
                  are not entitled to any refunds. We may suspend or cancel Your
                  account without notice or refund to You if you violate this
                  Agreement. If your account is cancelled, Cloudpoint
                  Technologies reserves the right to remove Your account
                  information along with any account settings from our servers
                  with NO liability or notice to You. Once Your account
                  information and account settings are removed, You will not be
                  able to recover this data and You will lose access to all of
                  Your content (except that content stored/published to
                  third-party websites, that data will remain on said
                  third-party websites pursuant to those website’s terms and
                  conditions). If You cancel the Service before the end of Your
                  current paid-up subscription period, Your cancellation will
                  take effect immediately and You will not be charged again.
                </p>
                <p className="mb-1 mt-2 text-justify">
                  <b>A. </b> Cloudpoint Technologies reserves the right to
                </p>

                <ul className="list-roman text-sm ml-5 text-justify">
                  <li>
                    Modify or discontinue, temporarily or permanently, the
                    Service (or any part thereof)
                  </li>
                  <li>
                    Refuse any/all current and future use of the Service,
                    suspend or terminate your account or any part thereof (or
                    Your use of the Service), and remove and discard any of Your
                    content within the Service if We believe that You have
                    violated these Terms. Cloudpoint Technologies will use
                    reasonable efforts to contact You directly via email to warn
                    You prior to suspension or termination of Your account. Any
                    suspected fraudulent, abusive, or illegal activity may be
                    grounds for immediate termination of Your use of Service,
                    and may be referred to law enforcement authorities.
                    Cloudpoint Technologies shall not be liable to You or any
                    third party for any modification, suspension or
                    discontinuation of the Service.
                  </li>
                </ul>

                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  12. Disclaimer of Warranties and Liability
                </h3>
                <p className="mb-1 mt-2 text-justify">
                  THE SERVICE, INCLUDING THE SITE AND CONTENT, AND ALL SERVER
                  AND NETWORK COMPONENTS ARE PROVIDED ON AN “AS IS” AND “AS
                  AVAILABLE” BASIS, WITHOUT ANY WARRANTIES OF ANY KIND TO THE
                  FULLEST EXTENT PERMITTED BY LAW, AND CLOUDPOINT TECHNOLOGIES
                  EXPRESSLY DISCLAIMS ANY AND ALL WARRANTIES, WHETHER EXPRESS OR
                  IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
                  OF MERCHANTABILITY, TITLE, FITNESS FOR A PARTICULAR PURPOSE,
                  AND NON-INFRINGEMENT.
                </p>
                <p className="mb-1 mt-2 text-justify">
                  <b>A. </b> CLOUDPOINT TECHNOLOGIES DOES NOT REPRESENT OR
                  WARRANT THAT THE SERVICE, CONTENT OR MATERIALS FROM OR RELATED
                  TO THE SERVICE ARE ACCURATE, COMPLETE, RELIABLE, CURRENT OR
                  ERROR-FREE OR THAT THE SITE OR THE SERVICE, SERVERS, OR ANY
                  PLATFORM APPLICATIONS ARE FREE OF VIRUSES OR OTHER HARMFUL
                  COMPONENTS. THEREFORE, YOU SHOULD EXERCISE CAUTION IN THE USE
                  AND DOWNLOADING OF ANY SUCH SOFTWARE, CONTENT OR MATERIALS AND
                  USE INDUSTRY-RECOGNIZED SOFTWARE TO DETECT AND DISINFECT
                  VIRUSES. ALL RESPONSIBILITY OR LIABILITY FOR ANY DAMAGES
                  CAUSED BY VIRUSES CONTAINED WITHIN THE ELECTRONIC FILE
                  CONTAINING A FORM OR DOCUMENT IS DISCLAIMED. WITHOUT LIMITING
                  THE FOREGOING, YOU UNDERSTAND AND AGREE THAT YOU DOWNLOAD OR
                  OTHERWISE OBTAIN CONTENT, MATERIAL, DATA OR SOFTWARE
                  (INCLUDING ANY MOBILE CLIENT) FROM OR THROUGH THE SITE, THE
                  SOFTWARE, OR ANY PLATFORM APPLICATIONS AT YOUR OWN DISCRETION
                  AND RISK AND THAT YOU WILL BE SOLELY RESPONSIBLE FOR YOUR USE
                  THEREOF AND ANY DAMAGES TO YOUR MOBILE DEVICE OR COMPUTER
                  SYSTEM, LOSS OF DATA OR OTHER HARM OF ANY KIND THAT MAY
                  RESULT.
                </p>
                <p className="mb-1 mt-2 text-justify">
                  <b>B. </b>NO INFORMATION OR ADVICE OBTAINED FROM CLOUDPOINT
                  TECHNOLOGIES OR THROUGH THE SERVICE SHALL CREATE ANY WARRANTY
                  NOT EXPRESSLY STATED IN THESE TERMS. CLOUDPOINT TECHNOLOGIES
                  DISCLAIMS ALL LIABILITY FOR DAMAGES CAUSED BY ANY SUCH
                  INTERRUPTION OR ERRORS IN THE FUNCTIONING OF THE WEBSITE,
                  EXCEPT AS OTHERWISE EXPRESSLY SETFORTH HEREIN. FURTHERMORE,
                  CLOUDPOINT TECHNOLOGIES DISCLAIMS ALL LIABILITY FOR ANY
                  MALFUNCTIONING, IMPOSSIBILITY OF ACCESS, OR POOR USE
                  CONDITIONS OF THE SERVICE DUE TO INAPPROPRIATE EQUIPMENT,
                  DISTURBANCES RELATED TO INTERNET SERVICE PROVIDERS, TO THE
                  SATURATION OF THE INTERNET NETWORK, ERROR, OMISSION,
                  INTERRUPTION, DELETION, DEFECT, DELAY IN OPERATION OR
                  TRANSMISSION, COMMUNICATIONS LINE FAILURE, THEFT OR
                  DESTRUCTION OR UNAUTHORIZED ACCESS TO, OR ALTERATION OF, USER
                  COMMUNICATIONS, PROBLEMS RELATED TO THE SERVICE OR ITS USE,
                  LOSS OF PERSONAL CONTENT ON THE SITE, LOST OR UNDELIVERABLE
                  EMAIL, AND FOR ANY OTHER REASON. UNDER NO CIRCUMSTANCES WILL
                  CLOUDPOINT TECHNOLOGIES BE RESPONSIBLE FOR ANY LOSS OR DAMAGE,
                  INCLUDING, BUT NOT LIMITED TO PERSONAL INJURY OR DEATH,
                  RESULTING FROM USE OF THE SITE OR THE SERVICE, OR ANY
                  INTERACTIONS BETWEEN USERS OF THE SITE OR THE SERVICE, WHETHER
                  ONLINE OR OFFLINE.
                </p>

                <p className="mb-1 mt-2 text-justify">
                  <b>C. </b>Cloudpoint Technologies provides the platform for
                  the Service. Cloudpoint Technologies does not control or vet
                  user generated content for accuracy. Although We provide rules
                  for user conduct and postings, We do not control and We are
                  not responsible for what users post, transmit or share on or
                  through the Site or any other website (even if such content is
                  published on or through the Site). Furthermore, we are not
                  responsible for any offensive, inappropriate, obscene,
                  unlawful or otherwise objectionable content You may encounter
                  on the Site. Cloudpoint Technologies is not responsible for
                  the conduct, whether online or offline, of any user of the
                  Site or the Service. Further, Cloudpoint Technologies is not
                  responsible or liable in any manner for any 3rd party
                  applications, software, viruses, etc. that are uploaded or
                  posted on the Site, caused by users of the Site, or that are
                  related to the use of the Service by third parties, or caused
                  by any third parties’ use of the equipment or programming
                  associated with or utilized in the Site or the Service.
                </p>
                <p className="mb-1 mt-2 text-justify">
                  <b>D. </b>CLOUDPOINT TECHNOLOGIES CANNOT GUARANTEE AND DOES
                  NOT PROMISE ANY SPECIFIC RESULTS FROM USE OF THE SITE AND/OR
                  THE SERVICE.
                </p>
                <p className="mb-1 mt-2 text-justify">
                  <b>E. </b>We do not monitor content published through the
                  Service and We are not responsible for content published
                  through the Service. Notwithstanding the foregoing, Cloudpoint
                  Technologies reserves the right to delete, move, or edit
                  messages or materials, including, but not limited to,
                  advertisements, public postings, and messages, that we, in our
                  sole discretion, deem necessary to be removed.
                </p>

                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  13. Limitation of Liability
                </h3>
                <p className="mb-1 mt-2 text-justify">
                  NO CONSEQUENTIAL DAMAGES. UNDER NO CIRCUMSTANCES AND UNDER NO
                  LEGAL THEORY (WHETHER IN CONTRACT, TORT, NEGLIGENCE OR
                  OTHERWISE) WILL CLOUDPOINT TECHNOLOGIES, ITS AFFILIATES OR
                  THEIR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, AGENTS,
                  SUPPLIERS OR LICENSORS BE LIABLE TO THE YOU, YOUR USERS OR ANY
                  OTHER THIRD PARTY FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                  EXEMPLARY, CONSEQUENTIAL, PUNITIVE OR OTHER SIMILAR DAMAGES,
                  INCLUDING LOST PROFITS, LOST SALES OR BUSINESS, LOST DATA,
                  BUSINESS INTERRUPTION OR ANY OTHER LOSS INCURRED BY SUCH PARTY
                  IN CONNECTION WITH THESE TERMS OR THE SERVICE, REGARDLESS OF
                  WHETHER CLOUDPOINT TECHNOLOGIES HAS BEEN ADVISED OF THE
                  POSSIBILITY OF OR COULD HAVE FORESEEN SUCH DAMAGES
                </p>
                <p className="mb-1 mt-2 text-justify">
                  <b>A. </b>LIMITS ON MONETARY DAMAGES. NOTWITHSTANDING ANYTHING
                  TO THE CONTRARY IN THESE TERMS, CLOUDPOINT TECHNOLOGIES’S
                  (INCLUDING ANY OF ITS AFFILIATES) AGGREGATE LIABILITY FOR
                  DAMAGES (MONETARY OR OTHERWISE) UNDER THESE TERMS SHALL BE
                  LIMITED TO THE PAYMENTS MADE BY YOU FOR THE SERVICE DURING THE
                  TWELVE (12) MONTHS PRECEDING THE CLAIM. THE PARTIES
                  ACKNOWLEDGE AND AGREE THAT THE ESSENTIAL PURPOSE OF THIS
                  SECTION 13.2. IS TO ALLOCATE THE RISKS UNDER THESE TERMS
                  BETWEEN THE PARTIES AND LIMIT THEIR POTENTIAL LIABILITY GIVEN
                  THE FEES CHARGED UNDER THIS AGREEMENT, WHICH WOULD HAVE BEEN
                  SUBSTANTIALLY HIGHER IF CLOUDPOINT TECHNOLOGIES WERE TO ASSUME
                  ANY FURTHER LIABILITY OTHER THAN AS SET FORTH HEREIN. THE
                  PARTIES HAVE RELIED ON THESE LIMITATIONS IN DETERMINING
                  WHETHER TO ENTER INTO THESE TERMS.
                </p>

                <p className="mb-1 mt-2 text-justify">
                  <b>B. </b>Some jurisdictions do not allow the exclusion of
                  implied warranties or limitation of liability for incidental
                  or consequential damages, which means that some of the above
                  limitations may not apply to You.
                </p>

                <p className="mb-1 mt-2 text-justify">
                  IN THESE JURISDICTIONS, CLOUDPOINT TECHNOLOGIES’S LIABILITY
                  WILL BE LIMITED TO THE GREATEST EXTENT PERMITTED BY LAW.
                </p>

                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  14. Indemnification
                </h3>
                <p className="mb-1 mt-2 text-justify">
                  You agree to defend, indemnify, and hold harmless Cloudpoint
                  Technologies from and against any claims, actions or demands,
                  including, without limitation, reasonable legal and
                  professional services fees, arising or resulting from Your or
                  Your Users’ breach of these Terms, or Your and Your Users’
                  access to, use, misuse or illegal use of the Service.
                  Cloudpoint Technologies will provide You notice of any such
                  claim, suit, or proceeding. Cloudpoint Technologies reserves
                  the right to assume the exclusive defense and control of any
                  matter which is subject to indemnification under this section,
                  in which case You agree to cooperate with any reasonable
                  requests to assist Cloudpoint Technologies’s defense of such
                  matter.
                </p>
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  15. Assignment
                </h3>
                <p className="mb-1 mt-2 text-justify">
                  Neither party may assign these Terms or any of its rights
                  under these Terms, directly, by operation of law or otherwise,
                  without the prior written consent of the other party, except
                  that Cloudpoint Technologies may assign these Terms, without
                  Your consent to a parent, affiliate, or successor by way of a
                  merger or reorganization. Subject to the foregoing
                  restrictions on assignment, these Terms will be fully binding
                  upon, inure to the benefit of and be enforceable by the
                  parties and their respective successors and assigns. Any
                  assignment in violation of this Section will be void. These
                  Terms shall be binding upon, and inure to the benefit of, the
                  successors and permitted assigns of the parties hereto.
                </p>
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  16. Entire Agreement Amended Terms
                </h3>
                <p className="mb-1 mt-2 text-justify">
                  This Agreement constitutes the entire agreement between the
                  parties with respect to the subject matter hereof, all
                  previous understandings whether oral or written having been
                  merged herein. No representations or warranties have been made
                  other than those expressly set forth herein. Without limiting
                  the foregoing, the parties have not relied on any oral
                  statements that are not included in the Terms. Except as
                  otherwise provided in these Terms, the Terms may not be
                  changed, modified, renewed, extended, or discharged or any
                  covenant or provision hereof waived except by an agreement in
                  writing signed by both parties. These Terms supersede prior
                  versions of these Terms. We may amend these Terms from time to
                  time, in which case the new Terms will supersede prior
                  versions. We will notify You of such changes and direct You to
                  the latest version. Upon notice of modification of these
                  Terms, except such modifications required by law, You may
                  notify us within two weeks of Our sending You notice of the
                  amended Terms that You are exercising Your right to terminate
                  Your subscription to the Service. Upon termination of your
                  Subscription under this Section, any prepaid fees will be
                  prorated and returned to You. If You do not notify use within
                  two weeks or if you continue using the Service after we have
                  provided notice of any changes to these Terms, you will be
                  deemed to have accepted the revised Terms.
                </p>
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  17. Severability
                </h3>
                <p className="mb-1 mt-2 text-justify">
                  If any provision of these Terms, or the application thereof
                  under certain circumstances, is held to be invalid or
                  unenforceable, such provision shall be modified by the court
                  and interpreted so as to best accomplish the original
                  provision to the fullest extent permitted by law, and the
                  remaining provisions of these Terms, or the application of
                  such provision under other circumstances, shall remain in full
                  force and effect.
                </p>
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  18. Export Control
                </h3>
                <p className="mb-1 mt-2 text-justify">
                  Your use of Service, including our software, is subject to
                  export and re-export control laws and regulations, including
                  the Export Administration Regulations (“EAR”) maintained by
                  the United States Department of Commerce and sanctions
                  programs maintained by the Treasury Department’s Office of
                  Foreign Assets Control. You shall not — directly or indirectly
                  — sell, export, re-export, transfer, divert, or otherwise
                  dispose of any Service or software to any end-user without
                  obtaining the required authorizations from the appropriate
                  government authorities. You also warrant that you are not
                  prohibited from receiving US origin products, including
                  services or software.
                </p>
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  19. Relationship
                </h3>
                <p className="mb-1 mt-2 text-justify">
                  Independent Contractor Nothing herein contained shall be so
                  construed as to constitute the parties as principal and agent,
                  employer and employee, partners or joint venturers, nor shall
                  any similar relationship be deemed to exist between the
                  parties. Neither party shall have any power to obligate or
                  bind the other party, except as specifically provided herein.
                </p>
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  20. Survival
                </h3>
                <p className="mb-1 mt-2 text-justify">
                  Sections 1 (Acceptance of Terms), 6 (Billing, Plan
                  Modifications and Payments), 7.A-D. (Intellectual Property
                  Rights) 11 (Cancellation and Termination), 12 (Disclaimer of
                  Warranties and Liability), 13 (Limitation of Liability), 14
                  (Indemnification), 15 (Assignment), 16 (Entire Agreement;
                  Amended Terms), 17 (Severability), 18 (Export Compliance and
                  Use Restrictions), 19 (Relationship; Independent Contractor),
                  21 (Governing Law), 22 (Arbitration of Disputes), and 25 (No
                  Waiver) will survive any termination of these Terms.
                </p>
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  21. Governing Law
                </h3>
                <p className="mb-1 mt-2 text-justify">
                  The validity, interpretation and performance of these Terms
                  shall be governed by the laws of Republic of India without
                  giving effect to the conflicts of laws provisions or
                  principals thereof.
                </p>
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  22. Arbitration of Disputes
                </h3>
                <p className="mb-1 mt-2 text-justify">
                  If we cannot amicably resolve any legal dispute or damage
                  claim that should arise from your interactions with the Site,
                  the Service, and/or Cloudpoint Technologies, you agree to
                  resolve any such dispute or damage claim by arbitration. The
                  arbitration proceeding shall be conducted in Mumbai, India, in
                  accordance with the Arbitration and conciliation Act, 1996 and
                  amendments thereto then in effect with one (1) arbitrator to
                  be selected by mutual agreement of both you and Cloudpoint
                  Technologies. If we cannot agree on an arbitrator, then either
                  parties shall appoint one (01) arbitrator and both appointed
                  arbitrators shall appoint one (01) arbitrator who shall be
                  presiding officer among three (03) designated arbitrators. You
                  agree that the arbitrator cannot award punitive damages to
                  either of us and agree to be bound by the arbitrator’s
                  findings. Award granted shall be executed before courts of
                  republic of India.
                </p>
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  23. No Waiver
                </h3>
                <p className="mb-1 mt-2 text-justify">
                  Cloudpoint Technologies’s failure to enforce at any time any
                  provision of these Terms does not constitute a waiver of that
                  provision or of any other provision of these Terms.
                  Responsible Disclosure Policy At Cloudpoint Technologies, we
                  take the security of our users’ data very seriously. We
                  encourage those who have discovered potential security
                  vulnerabilities in a Cloudpoint Technologies service to
                  disclose it to us in a responsible manner. We will work with
                  security researchers to validate and respond to
                  vulnerabilities that are reported to us. We won’t take legal
                  action against or suspend or terminate your account access
                  provided you discover and report security vulnerabilities in
                  accordance with this Responsible Disclosure Policy. Cloudpoint
                  Technologies reserves all of its legal rights in the event of
                  any noncompliance. Testing for Security Vulnerabilities You
                  may only test against an account for which you are the account
                  owner or an agent authorized by the account owner to conduct
                  such testing. Cloudpoint Technologies Prohibits the Following
                  Types of Research: • Accessing, or attempting to access, data
                  that does not belong to you • Executing, or attempting to
                  execute, a denial of service attack • Sending, or attempting
                  to send, unsolicited or unauthorized email, spam or other
                  forms of unsolicited messages • Testing third party websites,
                  applications or services that integrate with Cloudpoint
                  Technologies • Knowingly posting, transmitting, uploading,
                  linking to, sending or storing any malware, viruses or similar
                  harmful software • Research conducted by minors, individuals
                  on sanctions lists or individuals in countries on sanctions
                  lists Reporting Potential Vulnerabilities Share the details of
                  any suspected vulnerabilities with the Cloudpoint Technologies
                  Security Team by sending an email to
                  contactus@cloudpoint.co.in. Please do not publicly disclose
                  these details without express written consent from Cloudpoint
                  Technologies. In reporting any suspected vulnerabilities,
                  please include the following information: • • • • • • • •
                </p>

                <ul className="list-disc text-sm ml-5 text-justify">
                  <li>
                    
                    Exploit details with adequate information to allow us to
                    reproduce your steps
                  </li>
                  <li>Your email address</li>
                  <li>
                    Your name as it should be displayed on this page if you
                    would like it to be
                  </li>
                  <li>
                    Your Twitter handle if you would like it displayed next to
                    your name, on this page No Compensation Cloudpoint
                    Technologies does not compensate individuals or
                    organizations for identifying potential or confirmed
                    vulnerabilities.
                  </li>
                  <li>
                    Requests for monetary compensation will be deemed in
                    violation of this Responsible Disclosure Policy. Cloudpoint
                    Technologies’s Commitment To all security researchers who
                    follow this Responsible Disclosure Policy, Cloudpoint
                    Technologies promises to:
                  </li>
                  <li>
                    Acknowledge receipt of your report in a timely manner
                  </li>
                  <li>
                    Provide an estimated time frame for addressing the
                    vulnerability
                  </li>
                  <li>Notify you when the vulnerability is fixed </li>
                  <li>
                    Publicly acknowledge your responsible disclosure, if you
                    wish
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

export default TermsOfService;
