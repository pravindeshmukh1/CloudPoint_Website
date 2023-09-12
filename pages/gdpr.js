import React from "react";
import Layout from "../components/layout/Layout";
import Head from "next/head";

const GDPR = () => {
  return (
    <>
      <Head>
      <meta charSet="utf-8" name="CloudSocial GDPR Policy" />
        <title>GDPR | General Data Protection Regulation (GDPR) CloudSocial</title>
        <meta
          name="description"
          content="Know about How CloudSocial is compliant with the GDPR - General Data Protection Regulation."
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
                GDPR
              </h2>
            </div>
            <div className="w-full text-center lg:text-left text-lg lg:text-base font-semibold lg:font-normal mb-2 lg:mb-0 px-3">
              <div className="text-left text-sm">
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  CloudSocial and the General Data Protection Regulation (GDPR)
                </h3>
                <p className="mb-3">
                  In 2016 the European Commission approved and adopted a new
                  framework for European data protection law called the General
                  Data Protection Regulation (GDPR). The GDPR requirements have
                  become effective on May 25, 2018 and have affected all
                  companies who are processing personal data of individuals in
                  the EU. Here at CloudSocial we embrace the GDPR regulation and
                  see it as an opportunity to further improve how we communicate
                  with you, use and share your data and fundamentally, how we
                  place your privacy, security and rights at the forefront of
                  everything that we do. As both a data controller and
                  processor, we have taken measures to ensure our compliance
                  with the GDPR.
                </p>
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  GDPR preparedness checklist
                </h3>

                <p className="mb-3">
                  We have ensured complete compliance with the GDPR. Below is a
                  high-level overview of the key activities we have performed:
                </p>

                <ul className="list-disc list-inside text-sm ml-4">
                  <li>Appointed a Data Protection Officer</li>
                  <li>
                    Conducted an internal audit to ensure that all third parties
                    and suppliers used by CloudSocial are GDPR compliant
                  </li>
                  <li>
                    Perform necessary changes to the platform (incl. easier to
                    access communication preference controls, explicit
                    acceptance of Terms and Privacy Policies on signup)
                  </li>
                  <li>Updated our Privacy Policy</li>
                  <li>Updated our Terms & Conditions</li>
                  <li>
                    Created a dedicated page to document our GDPR activities and
                    compliance
                  </li>
                  <li>
                    Created a dedicated page to outline how we secure our
                    customers data
                  </li>
                  <li>Communicate our compliance with our customers.</li>
                </ul>
                <hr className="mb-3 mt-3 text-gray-300" />

                <h4 className="text-md font-bold font-heading mt-4 mb-2 text-lg mt-4 mb-3">
                  Frequently Asked Questions
                </h4>

                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  Frequently Asked Questions
                </h3>
                <p className="mb-3">
                  Does CloudSocial have a Data Processing Agreement (DPA) we can
                  sign?
                </p>
                <p className="mb-3">
                  As a Data Processor, our updated Terms & Conditions include
                  the necessary data processing clauses. When we are acting as a
                  Data Controller, the terms of our Privacy Policy will govern.
                  If you specifically require a signed copy of our Terms &
                  Conditions, then please contact{" "}
                  <a className="text-blue-400" href="mailto:support@cloudsocial.io" target="_blank">
                    support@cloudsocial.io
                  </a>{" "}
                  and we will send you a copy to sign.
                </p>
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  Where does CloudSocial store its data?
                </h3>
                <p className="mb-3">
                  Our server infrastructure is hosted by Amazon Web Services
                  (AWS) - in their North Virginia (US) region. You can read more
                  about our Security provisions and overview by heading to our
                  Security section.
                </p>
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  Can you delete my data or answer any other questions about my
                  data?
                </h3>
                <p className="mb-3">
                  Please login to your account and navigate to ‘Delete my
                  Account’ sections to permanently delete your CloudSocial
                  account and it’s associated data. Alternatively, you may email
                  us if you'd like to exercise your rights under GDPR. You can
                  request to have your data deleted as well as request further
                  information on how your data is being used - amongst other
                  things.
                </p>
                <h3 className="text-md font-bold font-heading mt-4 mb-2">
                  How is my data being used?
                </h3>
                <p className="mb-3">
                  We are continually auditing the third-party services that we
                  use, in order to ensure that we are only making use of
                  services that add value to CloudSocial, the product and its
                  customers. To view a full list of those that we use, please
                  head over to our Privacy Policy. If you have any further
                  questions please don't hesitate to get in touch with us via
                  our Support Chat or by emailing us on{" "}
                  <a className="text-blue-400" href="mailto:support@cloudsocial.io" target="_blank">
                    support@cloudsocial.io
                  </a>
                  .{" "}
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

export default GDPR;
