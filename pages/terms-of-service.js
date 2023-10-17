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
        <meta charSet="utf-8" name="CloudSocial Terms Of Service" />
        <title>Terms Of Service | CloudSocial</title>
        <meta
          name="description"
          content="Check out CloudSocial Terms Of Service."
        />
        <link rel="canonical" href="https://cloudsocial.io/terms-of-service" key="canonical" />
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
                  www.cloudsocial.io
                </span>
              </h1>
              <h6>This Website collects some Personal Data from its Users.</h6>
            </div>

            <div className="text-center lg:text-left lg:text-base mb-5">
              <p className="mb-1 text-justify">
                These Terms govern the use of this Website, and, any other
                related Agreement or legal relationship with the Owner in a
                legally binding way. Capitalized words are defined in the
                relevant dedicated section of this document.
              </p>
              <p className="mb-1  mt-2">
                The User must read this document carefully.
              </p>
            </div>

            <hr className="mb-3 mt-3 text-gray-300" />
            <h3 className="text-md font-bold font-heading">
              This Website is provided by :
            </h3>
            <p className="mb-1 text-justify">
              CloudSocial Technologies Pte Ltd.
              <br />
              68 Circular Road,
              <br />
              #02-01, 049422 Singapore
            </p>
            <p className="mb-3 text-justify">
              <b>Owner contact email :</b>{" "}
              <a
                className="text-blue-400 word-break"
                href="mailto:support@cloudsocial.io"
                target="_blank"
              >
                support@cloudsocial.io
              </a>
            </p>
            <hr className="mb-3 mt-3 text-gray-300" />
            <div className="w-full text-center lg:text-left text-lg lg:text-base font-semibold1 lg:font-normal mb-2 lg:mb-0 px-3">
              <div className="text-left text-sm">
                <h3 className="text-md font-bold font-heading">
                  "This Website" refers to
                </h3>

                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  Methods of processing
                </h3>
                <ul className="list-disc list-inside text-sm ml-4 text-justify">
                  <li>
                    Acceptance of Terms Your use of services offered by
                    CloudSocial.io (powered by CLOUDSOCIAL TECHNOLOGIES PTE LTD)
                    is subject to the terms of a legal agreement between you and
                    CloudSocial.io. This page explains how the agreement is made
                    up and sets out some of the terms of that agreement
                    (referred as Terms of Service (TOS) in this document). The
                    name CloudSocial has been used interchangeable with
                    CloudSocial or CloudSocial.io or cloudsocial or CLOUDSOCIAL
                    TECHNOLOGIES PTE LTD. In order to use the Services, you must
                    first agree to the Terms. You may not use the Services if
                    you do not accept the Terms of Use. You may not access the
                    services if you are our direct competitor, except with our
                    prior written consent. In addition, you may not access the
                    services for purposes of monitoring their availability,
                    performance or functionality, or for any other benchmarking
                    or competitive purposes. Definitions “Third party platforms”
                    means a third-party social media website like Facebook,
                    Twitter, Instagram, LinkedIn, YouTube. for which you have
                    authenticated CloudSocial to collect information. “We, Us or
                    Our” means CloudSocial.io or CLOUDSOCIAL TECHNOLOGIES PTE
                    LTD. “You or Your” means the company or an individual on
                    behalf of your company who is signing up for CloudSocial.io
                    services Account Registration When you register, you ensure
                    that any registration information you give to CloudSocial
                    will always be accurate, correct and up to date. You ensure
                    that you maintain the security of any logins, passwords, or
                    other credentials that you select or that are provided to
                    you for use of the Service. You will notify us immediately
                    of any unauthorized use of your account or any other breach
                    of security by emailing us at{" "}
                    <a
                      className="text-blue-400 word-break"
                      href="mailto:support@cloudsocial.io"
                      target="_blank"
                    >
                      support@cloudsocial.io
                    </a>
                    . Services offered by CloudSocial CloudSocial is constantly
                    evolving in order to provide the best possible experience,
                    services and information for its users. You acknowledge and
                    agree that the form and nature of the services which we
                    provide may add or modify from time to time without prior
                    notice to you. By using CloudSocial ‘s services you agree to
                    the following disclaimer: The contents of this website are
                    for informational purposes only. CloudSocial disclaims any
                    liability for any information that may have become outdated
                    since the last time the particular piece of information was
                    updated. CloudSocial reserves the right to make changes and
                    corrections to any part of the content of this website at
                    any time without prior notice. Free Trial We may offer you
                    free trials for selected Packages and/or features of the
                    Service, including a 30 (thirty) days trial period. Once
                    your free trial period ends, your ability to access certain
                    features of the service will terminate. CloudSocial reserves
                    the right to determine if you are eligible for a free trial
                    and to discontinue any free trial without notice in our sole
                    discretion. Fees; No Refunds We may charge fees for certain
                    packages and/or add-ons and/or features, either on a
                    one-time or a subscription basis (“Paid Services”).
                    CloudSocial reserves the right to implement fees or change
                    the fees for certain services at any time by providing you
                    notice of a pricing change 7 days before the end of prior
                    term. If you purchase any Paid Services through credit card,
                    you authorize CloudSocial through FastSpring the seller on
                    record to process and charge the credit card identified by
                    you (which you represent and warrant that you are authorized
                    to use) including all applicable taxes. If FastSpring does
                    not receive payment from your credit card provider, you
                    agree to pay all amounts due upon demand and CloudSocial may
                    suspend your access to the Services. All sales are final and
                    CloudSocial will not issue refunds, including for prepaid
                    yearly fees. Content on the Site We do not own the content
                    that we fetch from our search engines. The content may be
                    indecent, offensive, inaccurate, unlawful, or otherwise
                    objectionable. We shall have no obligation to preview,
                    verify, flag, modify, filter, or remove any Indexed Content,
                    even if requested to do so, although We may do so at our
                    sole discretion. Indexed content is provided “AS IS”,
                    exclusive of any warranty whatsoever. Your use of Indexed
                    Content is at your sole risk, and we shall not be liable to
                    you or any third party based on Indexed Content. Social
                    Platforms Authentication You shall enable CloudSocial to
                    access your third-party social platform accounts. You
                    acknowledge and agree that we may access, collect, process,
                    and/or store information or content, regardless of whether
                    such content is your data or Content, from such Third-Party
                    Social Platform accounts and/or website. Except for our
                    obligations with respect to your data, CloudSocial shall not
                    be responsible or liable for: (i) any content provided by
                    You or Your Users to any Third Party Social Platform or
                    other website, and any content accessed by You, Your Users
                    or any third party from any Third-Party Social Media
                    Platform or websites; (ii) any interactions or
                    communications between You and/or Your Users and any third
                    parties through any Third-Party Social Platform or websites;
                    or (iii) any transactions relating to a separate agreement
                    or arrangement between You or Your Users and any Third-Party
                    Social Platform provider or websites. Confidential
                    Information “Confidential Information” means all
                    confidential information disclosed by a party (“Disclosing
                    Party”) to the other party (“Receiving Party”), whether
                    orally or in writing, that is designated as confidential or
                    that reasonably should be understood to be confidential
                    given the nature of the information and the circumstances of
                    disclosure. Your Confidential Information shall include Your
                    Data; Our Confidential Information shall include CloudSocial
                    Services; and Confidential Information of each party shall
                    include the terms and conditions of this Agreement and all
                    Order Forms, as well as business and marketing plans,
                    technology and technical information, product plans and
                    designs, and business processes disclosed by such party.
                    However, Confidential Information shall not include any
                    information that (i) is or becomes generally known to the
                    public without breach of any obligation owed to the
                    Disclosing Party; (ii) was known to the Receiving Party
                    prior to its disclosure by the Disclosing Party without
                    breach of any obligation owed to the Disclosing Party; (iii)
                    is received from a third party without breach of any
                    obligation owed to the Disclosing Party; or (iv) was
                    independently developed by the Receiving Party. Protection
                    of Confidential Information : The Receiving Party shall (i)
                    use the same degree of care that it uses to protect the
                    confidentiality of its own confidential information of like
                    kind (but in no event less than reasonable care), (ii) not
                    use any Confidential Information of the Disclosing Party for
                    any purpose outside the scope of this Agreement, and (iii)
                    except as otherwise authorized by the Disclosing Party in
                    writing, to limit access to Confidential Information of the
                    Disclosing Party to those of its and its Affiliates’
                    employees, contractors and agents who need such access for
                    purposes consistent with this Agreement and who have signed
                    agreements with the Receiving Party containing protections
                    no less stringent than those herein. Neither party shall
                    disclose the terms of this Agreement or any Order Form to
                    any third party other than its Affiliates and their legal
                    counsel and accountants without the other party’s consent.
                    Responsibilities Our Responsibilities: We shall: (i) provide
                    Our basic support for the Purchased CloudSocial services to
                    You at no additional charge, and (ii) use commercially
                    reasonable efforts to make the CloudSocial Services
                    available 24 hours a day, 7 days a week, except for: (a)
                    planned downtime (of which We shall give at least 8 hours
                    notice via email and which We shall schedule to the extent
                    practicable during the weekend hours from 6:00 p.m. Saturday
                    to 3:00 a.m. Monday IST), or (b) any unavailability caused
                    by circumstances beyond Our reasonable control, including
                    without limitation, acts of God, acts of government, floods,
                    fires, earthquakes, civil unrest, acts of terror, strikes,
                    downtime or delays by an Internet Service Provider or
                    Third-party Social Platform, or denial of service attacks.
                    Your Responsibilities: You shall: (i) be responsible for
                    Users’ compliance with this Agreement; (ii) be responsible
                    for the accuracy, quality and legality of Your Data and of
                    the means by which You acquired Your Data; (iii) use
                    commercially reasonable efforts to prevent unauthorized
                    access to or use of the CloudSocial Services, and notify us
                    promptly of any such unauthorized access or use. You shall
                    not: (a) make the CloudSocial Services available to anyone
                    other than authorized Users; (b) sell, resell, rent, or
                    lease the CloudSocial Services; (c) interfere with or
                    disrupt the integrity or performance of the CloudSocial
                    Services or third-party data contained therein; or (d)
                    attempt to gain unauthorized access to the CloudSocial
                    Services or their related systems or networks. Proprietary
                    Rights You acknowledge and agree that CloudSocial.io (or
                    CLOUDSOCIAL TECHNOLOGIES PTE LTD) own all legal right, title
                    and interest in and to the Services, including any
                    intellectual property rights which subsist in the Services
                    (whether those rights happen to be registered or not, and
                    wherever in the world those rights may exist). You further
                    acknowledge that the Services may contain information which
                    is designated confidential by us and that you shall not
                    disclose such information without our prior written consent.
                    Nothing in the Terms gives you a right to use any of our
                    trade names, trade-marks, service marks, logos, domain
                    names, and other distinctive brand features. Third party
                    links Occasionally, at our discretion, we may include or
                    offer third party products or services on our website. These
                    third party sites have separate and independent Terms of
                    Service. We therefore have no responsibility or liability
                    for the content and activities of these linked sites.
                    Nonetheless, we seek to protect the integrity of our site
                    and welcome any feedback about these sites. Please refer to
                    the Terms of Service of third party products YouTube Terms
                    of Use When you agree to terms and conditions you are
                    agreeing to be bound by the YouTube Terms of Service at{" "}
                    <a
                      className="text-blue-400 word-break"
                      href="https://www.youtube.com/t/terms"
                      target="_blank"
                    >
                      https://www.youtube.com/t/terms
                    </a>{" "}
                    and Google privacy policy at{" "}
                    <a
                      className="text-blue-400 word-break"
                      href="https://policies.google.com/privacy"
                      target="_blank"
                    >
                      http://www.google.com/policies/privacy
                    </a>{" "}
                    CloudSocial accesses your account with YouTube/Google
                    through the API Client and reads your account data, user
                    information, including API Data relating to your account and
                    stores it in CloudSocial for displaying the information in
                    your CloudSocial account. If you wish to discontinue, you
                    can revoke CloudSocial access from your data via the Google
                    security settings at{" "}
                    <a
                      className="text-blue-400 word-break"
                      href="https://myaccount.google.com/connections?filters=3,4&hl=en_GB"
                      target="_blank"
                    >
                      https://security.google.com/settings/security/permissions
                    </a>{" "}
                    For any questions or complaints about the CloudSocial’s
                    privacy practices you can contact us at{" "}
                    <a
                      className="text-blue-400 word-break"
                      href="mailto:support@cloudsocial.io"
                      target="_blank"
                    >
                      support@cloudsocial.io.
                    </a>{" "}
                    Facebook Terms of Service –{" "}
                    <a
                      className="text-blue-400 word-break"
                      href="https://www.facebook.com/terms.php"
                      target="_blank"
                    >
                      https://www.facebook.com/terms.php
                    </a>{" "}
                    By using CloudSocial you are agreeing to be bound by the
                    Facebook Terms of Service. Instagram Terms of Service –{" "}
                    <a
                      className="text-blue-400 word-break"
                      href="https://help.instagram.com/581066165581870"
                      target="_blank"
                    >
                      https://help.instagram.com/581066165581870
                    </a>{" "}
                    By using CloudSocial you are agreeing to be bound by the
                    Instagram Terms of Service. Twitter Terms of Service –{" "}
                    <a
                      className="text-blue-400 word-break"
                      href="https://twitter.com/en/tos"
                      target="_blank"
                    >
                      https://twitter.com/en/tos
                    </a>{" "}
                    By using CloudSocial you are agreeing to be bound by the
                    Twitter Terms of Service. LinkedIn Terms of Service –{" "}
                    <a
                      className="text-blue-400 word-break"
                      href="https://www.linkedin.com/legal/l/service-terms"
                      target="_blank"
                    >
                      https://legal.linkedin.com/service-specific-terms
                    </a>{" "}
                    By using CloudSocial you are agreeing to be bound by the
                    LinkedIn Terms of Service. Privacy Terms We respect the
                    personal nature of the information you provide us on our web
                    site and recognize the importance of protecting this
                    information. In adopting this privacy policy (“Privacy
                    Policy”), our intent is to balance our legitimate business
                    interests in collecting and using your personal information
                    with your reasonable expectations of privacy. This Privacy
                    Policy may be revised or updated at any time and we
                    encourage you to check back often to ensure that you are
                    familiar with the most recent version and the terms of our
                    Privacy Policy. What information do we collect? We collect
                    information from you when you register on our site or fill
                    out a form. When registering on our site, as appropriate,
                    you may be asked to enter your: name, e-mail address or
                    phone number. What do we use your information for? Any of
                    the information we collect from you may be used in one of
                    the following ways: To personalize your experience Your
                    information helps us to better respond to your individual
                    needs To improve our website We continually strive to
                    improve our website offerings based on the information and
                    feedback we receive from you To improve customer service
                    Your information helps us to more effectively respond to
                    your customer service requests and support needs To process
                    transactions Your information, whether public or private,
                    will not be sold, exchanged, transferred, or given to any
                    other company for any reason whatsoever, without your
                    consent, other than for the express purpose of delivering
                    the purchased product or service requested. To send periodic
                    emails The email address you provide may be used to send you
                    information, respond to inquiries, and/or other requests or
                    questions. How do we protect your information? We use a
                    third-party platform FastSpring to process your payments.
                    Please refer to the Privacy Policies of FastSpring{" "}
                    <a
                      className="text-blue-400 word-break"
                      href="https://fastspring.com/privacy/"
                      target="_blank"
                    >
                      https://fastspring.com/privacy/
                    </a>{" "}
                    Do we use cookies? Yes (Cookies are small files that a site
                    or its service provider transfers to your computers hard
                    drive through your Web browser (if you allow) that enables
                    the sites or service providers systems to recognize your
                    browser and capture and remember certain information. We use
                    cookies to understand and save your preferences for future
                    visits. Do we disclose any information to outside parties?
                    We do not sell, trade, or otherwise transfer to outside
                    parties your personally identifiable information. This does
                    not include trusted third parties who assist us in operating
                    our website, conducting our business, or servicing you, so
                    long as those parties agree to keep this information
                    confidential. We may also release your information when we
                    believe release is appropriate to comply with the law,
                    enforce our site policies, or protect ours or others rights,
                    property, or safety. However, non-personally identifiable
                    visitor information may be provided to other parties for
                    marketing, advertising, or other uses. Third party links
                    Occasionally, at our discretion, we may include or offer
                    third party products or services on our website. These third
                    party sites have separate and independent privacy policies.
                    We therefore have no responsibility or liability for the
                    content and activities of these linked sites. Nonetheless,
                    we seek to protect the integrity of our site and welcome any
                    feedback about these sites. Please refer to the Privacy
                    Policies of third-party products:
                    <br />
                    <a
                      className="text-blue-400 word-break"
                      href=" https://www.youtube.com/about/policies/#community-guidelines"
                      target="_blank"
                    >
                      https://www.youtube.com/about/policies/#community-guidelines
                    </a>{" "}
                    <br />
                    <a
                      className="text-blue-400 word-break"
                      href="https://www.facebook.com/policy.php"
                      target="_blank"
                    >
                      https://www.facebook.com/policy.php
                    </a>{" "}
                    <br />
                    <a
                      className="text-blue-400 word-break"
                      href="https://twitter.com/en/privacy"
                      target="_blank"
                    >
                      https://twitter.com/en/privacy
                    </a>{" "}
                    <br />
                    <a
                      className="text-blue-400 word-break"
                      href="https://help.instagram.com/155833707900388"
                      target="_blank"
                    >
                      https://help.instagram.com/155833707900388
                    </a>{" "}
                    <br />
                    <a
                      className="text-blue-400 word-break"
                      href="https://www.linkedin.com/legal/privacy-policy"
                      target="_blank"
                    >
                      https://www.linkedin.com/legal/privacy-policy
                    </a>{" "}
                    <br />
                    Use By Minors Prohibited CloudSocial is committed to
                    protecting the privacy of children. Neither our Website nor
                    our Software are designed or intended for use by individuals
                    under the age of 18 without parental supervision.
                    CloudSocial is not responsible for determining the age of
                    its users and has no liability whatsoever should a minor use
                    our Website to acquire services that would otherwise be
                    prohibited due to the minor’s age. CloudSocial encourages
                    parents to monitor their children’s Internet usage as a
                    result. Online Privacy Policy Only This online privacy
                    policy applies only to information collected through our
                    website and not to information collected offline. Your
                    Consent By using our site, you consent to our privacy
                    policy. Questions About This Privacy Policy Should you have
                    a question about privacy policy of our Website and/or
                    Software, please email to{" "}
                    <a
                      className="text-blue-400 word-break"
                      href="mailto:support@cloudsocial.io"
                      target="_blank"
                    >
                      support@cloudsocial.io
                    </a>
                    .
                  </li>
                </ul>

                <hr className="mb-3 mt-3 text-gray-300" />
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  What the User should know at a glance
                </h3>

                <ul className="list-disc list-inside text-sm ml-4 text-justify">
                  <li>
                    Please note that some provisions in these Terms may only
                    apply to certain categories of Users. In particular, certain
                    provisions may only apply to Consumers or to those Users
                    that do not qualify as Consumers. Such limitations are
                    always explicitly mentioned within each affected clause. In
                    the absence of any such mention, clauses apply to all Users.
                  </li>
                </ul>
                <hr className="mb-3 mt-3 text-gray-300" />

                <h4 className="text-md font-bold font-heading text-lg mt-4 mb-3">
                  TERMS OF USE
                </h4>
                <p className="mb-1 text-justify">
                  Unless otherwise specified, the terms of use detailed in this
                  section apply generally when using this Website.
                </p>
                <p className="mb-1 text-justify">
                  Single or additional conditions of use or access may apply in
                  specific scenarios and in such cases are additionally
                  indicated within this document.
                </p>
                <p className="mb-1 text-justify">
                  By using this Website, Users confirm to meet the following
                  requirements:
                </p>
                <ul className="list-disc list-inside text-sm ml-4">
                  <li>
                    There are no restrictions for Users in terms of being
                    Consumers or Business Users;
                  </li>
                </ul>

                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  Account registration
                </h3>
                <p className="mb-1 text-justify">
                  To use the Service Users must register or create a User
                  account, providing all required data or information in a
                  complete and truthful manner.
                </p>

                <p className="mb-1 text-justify">
                  Failure to do so will cause unavailability of the Service.
                </p>
                <p className="mb-1 text-justify">
                  Users are responsible for keeping their login credentials
                  confidential and safe. For this reason, Users are also
                  required to choose passwords that meet the highest standards
                  of strength permitted by this Website.
                </p>
                <p className="mb-1 text-justify">
                  By registering, Users agree to be fully responsible for all
                  activities that occur under their username and password.
                </p>
                <p className="mb-1 text-justify">
                  Users are required to immediately and unambiguously inform the
                  Owner via the contact details indicated in this document, if
                  they think their personal information, including but not
                  limited to User accounts, access credentials or personal data,
                  have been violated, unduly disclosed or stolen.
                </p>
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  Account termination
                </h3>

                <p className="mb-1 text-justify">
                  Users can terminate their account and stop using the Service
                  subject to the conditions and according to the procedures
                  outlined in the relevant section of this Website.
                </p>
                <p className="mb-1 text-justify">
                  However, termination of the account will not be possible until
                  the subscription period paid for by the User has expired.
                </p>

                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  Account suspension and deletion
                </h3>
                <p className="mb-1 text-justify">
                  The Owner reserves the right to suspend or terminate the
                  User's account at any time and without notice, at the Owner's
                  sole discretion, in these cases:
                </p>
                <ul className="list-disc list-inside text-sm ml-4">
                  <li>User has violated these Terms; and/or</li>
                  <li>
                    User's access or use of this Website may cause injury to the
                    Owner, other Users or third parties; and/or
                  </li>
                  <li>
                    the use of this Website by the User may cause violation of
                    law or regulations; and/or
                  </li>
                  <li>
                    in case of an investigation by legal action or governmental
                    involvement; and/or
                  </li>
                  <li>
                    the account or its use is deemed to be, at the Owner’s sole
                    discretion inappropriate or offensive or in violation of
                    these Terms.
                  </li>
                </ul>

                <p className="mb-1 text-justify">
                  The suspension or deletion of User accounts shall not entitle
                  Users to any claims for compensation, damages or
                  reimbursement.
                </p>
                <p className="mb-1 text-justify">
                  The suspension or deletion of accounts due to causes
                  attributable to the User does not exempt the User from paying
                  any applicable fees or prices.
                </p>

                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  Content on this Website
                </h3>
                <p className="mb-1 text-justify">
                  Unless where otherwise specified or clearly recognizable, all
                  content available on this Website is owned or provided by the
                  Owner or its licensors.
                </p>
                <p className="mb-1 text-justify">
                  The Owner undertakes its utmost effort to ensure that the
                  content provided on this Website infringes no applicable legal
                  provisions or third-party rights. However, it may not always
                  be possible to achieve such a result.
                </p>
                <p className="mb-1 text-justify">
                  In such cases, without prejudice to any legal prerogatives of
                  Users to enforce their rights, Users are kindly asked to
                  preferably report related complaints using the contact details
                  provided in this document.
                </p>
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  Rights regarding content on this Website - All rights reserved
                </h3>
                <p className="mb-1 text-justify">
                  The Owner holds and reserves all intellectual property rights
                  for any such content.
                </p>
                <p className="mb-1 text-justify">
                  In particular, but without limitation, Users may not copy,
                  download, share (beyond the limits set forth below), modify,
                  translate, transform, publish, transmit, sell, sublicense,
                  edit, transfer/assign to third parties or create derivative
                  works from the content available on this Website, nor allow
                  any third party to do so through the User or their device,
                  even without the User's knowledge.
                </p>
                <p className="mb-1 text-justify">
                  Where explicitly stated on this Website, the User may
                  download, copy and/or share some content available through
                  this Website for its sole personal and non-commercial use and
                  provided that the copyright attributions and all the other
                  attributions requested by the Owner are correctly implemented.
                </p>
                <p className="mb-1 text-justify">
                  Any applicable statutory limitation or exception to copyright
                  shall stay unaffected.
                </p>
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  Access to external resources
                </h3>
                <p className="mb-1 text-justify">
                  Through this Website Users may have access to external
                  resources provided by third parties. Users acknowledge and
                  accept that the Owner has no control over such resources and
                  is therefore not responsible for their content and
                  availability.
                </p>
                <p className="mb-1 text-justify">
                  Conditions applicable to any resources provided by third
                  parties, including those applicable to any possible grant of
                  rights in content, result from each such third parties’ terms
                  and conditions or, in the absence of those, applicable
                  statutory law.
                </p>
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  Acceptable use
                </h3>
                <p className="mb-1 text-justify">
                  This Website and the Service may only be used within the scope
                  of what they are provided for, under these Terms and
                  applicable law.
                </p>
                <p className="mb-1 text-justify">
                  Users are solely responsible for making sure that their use of
                  this Website and/or the Service violates no applicable law,
                  regulations or third-party rights.
                </p>
                <p className="mb-1 text-justify">
                  Therefore, the Owner reserves the right to take any
                  appropriate measure to protect its legitimate interests
                  including by denying Users access to this Website or the
                  Service, terminating contracts, reporting any misconduct
                  performed through this Website or the Service to the competent
                  authorities – such as judicial or administrative authorities -
                  whenever Users engage or are suspected to engage in any of the
                  following activities:
                </p>
                <ul className="list-disc list-inside text-sm ml-4">
                  <li>violate laws, regulations and/or these Terms;</li>
                  <li>infringe any third-party rights;</li>
                  <li>considerably impair the Owner’s legitimate interests;</li>
                  <li>offend the Owner or any third party.</li>
                </ul>

                <h4 className="text-md font-bold font-heading text-lg mt-4 mb-3">
                  Liability and indemnification
                </h4>
                <h4 className="text-md font-bold font-heading text-lg mt-4 mb-3">
                  Australian Users
                </h4>
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  Limitation of liability
                </h3>
                <p className="mb-1 text-justify">
                  Nothing in these Terms excludes, restricts or modifies any
                  guarantee, condition, warranty, right or remedy which the User
                  may have under the Competition and Consumer Act 2010 (Cth) or
                  any similar State and Territory legislation and which cannot
                  be excluded, restricted or modified (non-excludable right). To
                  the fullest extent permitted by law, our liability to the
                  User, including liability for a breach of a non-excludable
                  right and liability which is not otherwise excluded under
                  these Terms of Use, is limited, at the Owner’s sole
                  discretion, to the re-performance of the services or the
                  payment of the cost of having the services supplied again.
                </p>

                <h4 className="text-md font-bold font-heading text-lg mt-4 mb-3">
                  US Users
                </h4>

                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  Disclaimer of Warranties
                </h3>
                <p className="mb-1 font-bold text-justify">
                  This Website is provided strictly on an “as is” and “as
                  available” basis. Use of the Service is at Users’ own risk. To
                  the maximum extent permitted by applicable law, the Owner
                  expressly disclaims all conditions, representations, and
                  warranties — whether express, implied, statutory or otherwise,
                  including, but not limited to, any implied warranty of
                  merchantability, fitness for a particular purpose, or
                  non-infringement of third-party rights. No advice or
                  information, whether oral or written, obtained by user from
                  owner or through the Service will create any warranty not
                  expressly stated herein.
                </p>
                <p className="mb-1 font-bold text-justify">
                  Without limiting the foregoing, the Owner, its subsidiaries,
                  affiliates, licensors, officers, directors, agents,
                  co-branders, partners, suppliers and employees do not warrant
                  that the content is accurate, reliable or correct; that the
                  Service will meet Users’ requirements; that the Service will
                  be available at any particular time or location, uninterrupted
                  or secure; that any defects or errors will be corrected; or
                  that the Service is free of viruses or other harmful
                  components. Any content downloaded or otherwise obtained
                  through the use of the Service is downloaded at users own risk
                  and users shall be solely responsible for any damage to Users’
                  computer system or mobile device or loss of data that results
                  from such download or Users’ use of the Service.
                </p>
                <p className="mb-1 font-bold text-justify">
                  The Owner does not warrant, endorse, guarantee, or assume
                  responsibility for any product or service advertised or
                  offered by a third party through the Service or any
                  hyperlinked website or service, and the Owner shall not be a
                  party to or in any way monitor any transaction between Users
                  and third-party providers of products or services.
                </p>
                <p className="mb-1 font-bold text-justify">
                  The Service may become inaccessible or it may not function
                  properly with Users’ web browser, mobile device, and/or
                  operating system. The owner cannot be held liable for any
                  perceived or actual damages arising from Service content,
                  operation, or use of this Service.
                </p>
                <p className="mb-1 font-bold text-justify">
                  Without limiting the foregoing, the Owner, its subsidiaries,
                  affiliates, licensors, officers, directors, agents,
                  co-branders, partners, suppliers and employees do not warrant
                  that the content is accurate, reliable or correct; that the
                  Service will meet Users’ requirements; that the Service will
                  be available at any particular time or location, uninterrupted
                  or secure; that any defects or errors will be corrected; or
                  that the Service is free of viruses or other harmful
                  components. Any content downloaded or otherwise obtained
                  through the use of the Service is downloaded at users own risk
                  and users shall be solely responsible for any damage to Users’
                  computer system or mobile device or loss of data that results
                  from such download or Users’ use of the Service.
                </p>
                <p className="mb-1 font-bold text-justify">
                  Federal law, some states, and other jurisdictions, do not
                  allow the exclusion and limitations of certain implied
                  warranties. The above exclusions may not apply to Users. This
                  Agreement gives Users specific legal rights, and Users may
                  also have other rights which vary from state to state. The
                  disclaimers and exclusions under this agreement shall not
                  apply to the extent prohibited by applicable law.
                </p>

                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  Limitations of liability
                </h3>
                <p className="mb-1 font-bold text-justify">
                  To the maximum extent permitted by applicable law, in no event
                  shall the Owner, and its subsidiaries, affiliates, officers,
                  directors, agents, co-branders, partners, suppliers and
                  employees be liable for
                </p>

                <ul className="list-disc list-inside text-sm ml-4 font-bold text-justify">
                  <li>
                    any indirect, punitive, incidental, special, consequential
                    or exemplary damages, including without limitation damages
                    for loss of profits, goodwill, use, data or other intangible
                    losses, arising out of or relating to the use of, or
                    inability to use, the Service; and
                  </li>
                  <li>
                    any damage, loss or injury resulting from hacking, tampering
                    or other unauthorized access or use of the Service or User
                    account or the information contained therein;
                  </li>
                  <li>any errors, mistakes, or inaccuracies of content;</li>
                  <li>
                    personal injury or property damage, of any nature
                    whatsoever, resulting from User access to or use of the
                    Service;
                  </li>
                  <li>
                    any unauthorized access to or use of the Owner’s secure
                    servers and/or any and all personal information stored
                    therein;
                  </li>
                  <li>
                    any interruption or cessation of transmission to or from the
                    Service;
                  </li>
                  <li>
                    any bugs, viruses, trojan horses, or the like that may be
                    transmitted to or through the Service;
                  </li>
                  <li>
                    any errors or omissions in any content or for any loss or
                    damage incurred as a result of the use of any content
                    posted, emailed, transmitted, or otherwise made available
                    through the Service; and/or
                  </li>
                  <li>
                    the defamatory, offensive, or illegal conduct of any User or
                    third party. In no event shall the Owner, and its
                    subsidiaries, affiliates, officers, directors, agents,
                    co-branders, partners, suppliers and employees be liable for
                    any claims, proceedings, liabilities, obligations, damages,
                    losses or costs in an amount exceeding the amount paid by
                    User to the Owner hereunder in the preceding 12 months, or
                    the period of duration of this agreement between the Owner
                    and User, whichever is shorter.
                  </li>
                </ul>

                <p className="mb-1 mt-2 font-bold text-justify">
                  This limitation of liability section shall apply to the
                  fullest extent permitted by law in the applicable jurisdiction
                  whether the alleged liability is based on contract, tort,
                  negligence, strict liability, or any other basis, even if
                  company has been advised of the possibility of such damage.
                </p>
                <p className="mb-1 font-bold text-justify">
                  Some jurisdictions do not allow the exclusion or limitation of
                  incidental or consequential damages, therefore the above
                  limitations or exclusions may not apply to User. The terms
                  give User specific legal rights, and User may also have other
                  rights which vary from jurisdiction to jurisdiction. The
                  disclaimers, exclusions, and limitations of liability under
                  the terms shall not apply to the extent prohibited by
                  applicable law.
                </p>

                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  Indemnification
                </h3>
                <p className="mb-1 font-bold text-justify">
                  The User agrees to defend, indemnify and hold the Owner and
                  its subsidiaries, affiliates, officers, directors, agents,
                  co-branders, partners, suppliers and employees harmless from
                  and against any and all claims or demands, damages,
                  obligations, losses, liabilities, costs or debt, and expenses,
                  including, but not limited to, legal fees and expenses,
                  arising from
                </p>

                <ul className="list-disc list-inside text-sm ml-4 font-bold text-justify">
                  <li>
                    User’s use of and access to the Service, including any data
                    or content transmitted or received by User;
                  </li>
                  <li>
                    User’s violation of these terms, including, but not limited
                    to, User’s breach of any of the representations and
                    warranties set forth in these terms;
                  </li>
                  <li>
                    User’s violation of any third-party rights, including, but
                    not limited to, any right of privacy or intellectual
                    property rights;
                  </li>
                  <li>
                    User’s violation of any statutory law, rule, or regulation;
                  </li>
                  <li>
                    any content that is submitted from User’s account, including
                    third party access with User’s unique username, password or
                    other security measure, if applicable, including, but not
                    limited to, misleading, false, or inaccurate information;
                  </li>
                  <li>User’s wilful misconduct; or</li>
                  <li>
                    statutory provision by User or its affiliates, officers,
                    directors, agents, co-branders, partners, suppliers and
                    employees to the extent allowed by applicable law.
                  </li>
                </ul>

                <h4 className="text-md font-bold font-heading text-lg mt-4 mb-3">
                  Common provisions
                </h4>

                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  No Waiver
                </h3>
                <p className="mb-3 text-justify">
                  The Owner’s failure to assert any right or provision under
                  these Terms shall not constitute a waiver of any such right or
                  provision. No waiver shall be considered a further or
                  continuing waiver of such term or any other term.
                </p>
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  Service interruption
                </h3>

                <p className="mb-3 text-justify">
                  To ensure the best possible service level, the Owner reserves
                  the right to interrupt the Service for maintenance, system
                  updates or any other changes, informing the Users
                  appropriately.
                </p>
                <p className="mb-3 text-justify">
                  Within the limits of law, the Owner may also decide to suspend
                  or terminate the Service altogether. If the Service is
                  terminated, the Owner will cooperate with Users to enable them
                  to withdraw Personal Data or information in accordance with
                  applicable law.
                </p>
                <p className="mb-3 text-justify">
                  Additionally, the Service might not be available due to
                  reasons outside the Owner’s reasonable control, such as “force
                  majeure” (eg. labor actions, infrastructural breakdowns or
                  blackouts etc).
                </p>
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  Service reselling
                </h3>
                <p className="mb-3 text-justify">
                  Users may not reproduce, duplicate, copy, sell, resell or
                  exploit any portion of this Website and of its Service without
                  the Owner’s express prior written permission, granted either
                  directly or through a legitimate reselling programme.
                </p>

                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  Privacy policy
                </h3>

                <p className="mb-3 text-justify">
                  To learn more about the use of their Personal Data, Users may
                  refer to the privacy policy of this Website.
                </p>

                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  Intellectual property rights
                </h3>

                <p className="mb-3 text-justify">
                  Without prejudice to any more specific provision of these
                  Terms, any intellectual property rights, such as copyrights,
                  trademark rights, patent rights and design rights related to
                  this Website are the exclusive property of the Owner or its
                  licensors and are subject to the protection granted by
                  applicable laws or international treaties relating to
                  intellectual property.
                </p>
                <p className="mb-3 text-justify">
                  All trademarks — nominal or figurative — and all other marks,
                  trade names, service marks, word marks, illustrations, images,
                  or logos appearing in connection with this Website are, and
                  remain, the exclusive property of the Owner or its licensors
                  and are subject to the protection granted by applicable laws
                  or international treaties related to intellectual property.
                </p>

                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  Changes to these Terms
                </h3>

                <p className="mb-3 text-justify">
                  The Owner reserves the right to amend or otherwise modify
                  these Terms at any time. In such cases, the Owner will
                  appropriately inform the User of these changes.
                </p>
                <p className="mb-3 text-justify">
                  Such changes will only affect the relationship with the User
                  for the future.
                </p>
                <p className="mb-3 text-justify">
                  The continued use of the Service will signify the User’s
                  acceptance of the revised Terms. If Users do not wish to be
                  bound by the changes, they must stop using the Service.
                  Failure to accept the revised Terms, may entitle either party
                  to terminate the Agreement.
                </p>
                <p className="mb-3 text-justify">
                  The applicable previous version will govern the relationship
                  prior to the User's acceptance. The User can obtain any
                  previous version from the Owner.
                </p>
                <p className="mb-3 text-justify">
                  If required by applicable law, the Owner will specify the date
                  by which the modified Terms will enter into force.
                </p>

                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  Assignment of contract
                </h3>
                <p className="mb-3 text-justify">
                  The Owner reserves the right to transfer, assign, dispose of
                  by novation, or subcontract any or all rights or obligations
                  under these Terms, taking the User’s legitimate interests into
                  account. Provisions regarding changes of these Terms will
                  apply accordingly.
                </p>
                <p className="mb-3 text-justify">
                  Users may not assign or transfer their rights or obligations
                  under these Terms in any way, without the written permission
                  of the Owner.
                </p>

                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  Contacts
                </h3>
                <p className="mb-3 text-justify">
                  All communications relating to the use of this Website must be
                  sent using the contact information stated in this document.
                </p>
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  Severability
                </h3>

                <p className="mb-3 text-justify">
                  Should any provision of these Terms be deemed or become
                  invalid or unenforceable under applicable law, the invalidity
                  or unenforceability of such provision shall not affect the
                  validity of the remaining provisions, which shall remain in
                  full force and effect.
                </p>
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  US Users
                </h3>
                <p className="mb-3 text-justify">
                  Any such invalid or unenforceable provision will be
                  interpreted, construed and reformed to the extent reasonably
                  required to render it valid, enforceable and consistent with
                  its original intent. These Terms constitute the entire
                  Agreement between Users and the Owner with respect to the
                  subject matter hereof, and supersede all other communications,
                  including but not limited to all prior agreements, between the
                  parties with respect to such subject matter. These Terms will
                  be enforced to the fullest extent permitted by law.
                </p>
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  EU Users
                </h3>
                <p className="mb-3 text-justify">
                  Should any provision of these Terms be or be deemed void,
                  invalid or unenforceable, the parties shall do their best to
                  find, in an amicable way, an agreement on valid and
                  enforceable provisions thereby substituting the void, invalid
                  or unenforceable parts.
                </p>
                <p className="mb-3 text-justify">
                  In case of failure to do so, the void, invalid or
                  unenforceable provisions shall be replaced by the applicable
                  statutory provisions, if so permitted or stated under the
                  applicable law.
                </p>
                <p className="mb-3 text-justify">
                  Without prejudice to the above, the nullity, invalidity or the
                  impossibility to enforce a particular provision of these Terms
                  shall not nullify the entire Agreement, unless the severed
                  provisions are essential to the Agreement, or of such
                  importance that the parties would not have entered into the
                  contract if they had known that the provision would not be
                  valid, or in cases where the remaining provisions would
                  translate into an unacceptable hardship on any of the parties.
                </p>

                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  Governing law
                </h3>
                <p className="mb-3 text-justify">
                  These Terms are governed by the law of the place where the
                  Owner is based, as disclosed in the relevant section of this
                  document, without regard to conflict of laws principles.
                </p>

                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  Exception for European Consumers
                </h3>
                <p className="mb-3 text-justify">
                  However, regardless of the above, if the User qualifies as a
                  European Consumer and has their habitual residence in a
                  country where the law provides for a higher consumer
                  protection standard, such higher standards shall prevail.
                </p>

                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  Venue of jurisdiction
                </h3>
                <p className="mb-3 text-justify">
                  The exclusive competence to decide on any controversy
                  resulting from or connected to these Terms lies with the
                  courts of the place where the Owner is based, as displayed in
                  the relevant section of this document.
                </p>
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  Exception for European Consumers
                </h3>
                <p className="mb-3 text-justify">
                  The above does not apply to any Users that qualify as European
                  Consumers, nor to Consumers based in Switzerland, Norway or
                  Iceland.
                </p>

                <hr className="mb-3 mt-3 text-gray-300" />

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
                        <h3 className="text-md font-bold font-heading mt-4 mb-2">
                          This Website (or this Application)
                        </h3>
                        <p className="mb-3 text-justify">
                          The property that enables the provision of the
                          Service.
                        </p>

                        <h3 className="text-md font-bold font-heading mt-4 mb-2">
                          Agreement
                        </h3>
                        <p className="mb-3 text-justify">
                          Any legally binding or contractual relationship
                          between the Owner and the User, governed by these
                          Terms.
                        </p>

                        <h3 className="text-md font-bold font-heading mt-4 mb-2">
                          Business User
                        </h3>
                        <p className="mb-3 text-justify">
                          Any User that does not qualify as a Consumer.
                        </p>

                        <h3 className="text-md font-bold font-heading mt-4 mb-2">
                          European (or Europe)
                        </h3>
                        <p className="mb-3 text-justify">
                          Applies where a User is physically present or has
                          their registered offices within the EU, regardless of
                          nationality.
                        </p>

                        <h3 className="text-md font-bold font-heading mt-4 mb-2">
                          Owner (or We)
                        </h3>
                        <p className="mb-3 text-justify">
                          Indicates the natural person(s) or legal entity that
                          provides this Website and/or the Service to Users.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-4 mb-2">
                          Service
                        </h3>
                        <p className="mb-3 text-justify">
                          The service provided by this Website as described in
                          these Terms and on this Website.
                        </p>
                        <h3 className="text-md font-bold font-heading mt-4 mb-2">
                          Terms
                        </h3>
                        <p className="mb-3 text-justify">
                          All provisions applicable to the use of this Website
                          and/or the Service as described in this document,
                          including any other related documents or agreements,
                          and as updated from time to time.
                        </p>

                        <h3 className="text-md font-bold font-heading mt-4 mb-2">
                          User (or You)
                        </h3>
                        <p className="mb-3 text-justify">
                          Indicates any natural person or legal entity using
                          this Website.
                        </p>

                        <h3 className="text-md font-bold font-heading mt-4 mb-2">
                          Consumer
                        </h3>
                        <p className="mb-3 text-justify">
                          Any User qualifying as a natural person who accesses
                          goods or services for personal use, or more generally,
                          acts for purposes outside their trade, business, craft
                          or profession.
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <hr className="mb-3 mt-3 text-gray-300" />

                <p className="mb-1 text-justify">
                  Latest update: September 22, 2021
                </p>
                <p className="mb-1 text-justify">
                  <a
                    className="text-blue-400 word-break"
                    href="https://www.iubenda.com/en/terms-and-conditions-generator"
                    target="_blank"
                  >
                    iubenda
                  </a>{" "}
                  hosts this content and only collects{" "}
                  <a
                    className="text-blue-400 word-break"
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
          </div>
        </section>
      </Layout>
    </>
  );
};

export default TermsOfService;
