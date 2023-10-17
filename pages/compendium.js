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
import { socialIcon } from "../public/assets/cardDetails";
import Image from "next/image";

const Compendium = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" name="CloudSocial Resource Compendium" />
        <title>Compendium - Social Media Resources by CloudSocial</title>
        <meta
          name="description"
          content="CloudSocial provides all the compendium resources which guide you to succeed in the CloudSocial media marketing platform."
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
              <h1
                className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated"
                data-wow-delay=".1s"
              >
              Quick Start Compendium
              </h1>
            </div>
            <hr className="mb-3 mt-3 text-gray-300" />
          </div>
        </section>
        <section className="pt-5 pb-20 lg:bg-contain bg-top bg-no-repeat">
          <div className="container">
            <div>
              <div className="main">
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  What is CloudSocial?
                </h4>
                <div className="text-sm mb-2">
                  CloudSocial is a cloud-based platform that allows you to
                  manage your social media platforms seamlessly and efficiently.
                  You can use CloudSocial to post content, schedule posts, and
                  monitor your feeds from a unified dashboard. In addition, it
                  also has email as a social channel for a truly 360˚experience.
                </div>
                <div className="text-sm mb-2">
                  It is a great tool for businesses that want to grow their
                  social media presence. It helps them keep track of their
                  follower base, as well as their engagement rates.
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2mb-3">
                  Given below are the key functionalities of CloudSocial :
                </h4>
                <div className="text-sm mb-2">
                  <b>1. Dashboard : </b>
                  The dashboard will provide you with an overall view of your
                  brand&#39;s activity across key parameters.
                </div>
                <div className="text-sm mb-2">
                  <b>2. Calendar : </b>This feature allows you to keep track of
                  all scheduled and published posts easily.
                </div>
                <div className="text-sm mb-2">
                  <b>3. Omnibox : </b>It will enables you to respond to any
                  incoming mentions (comments, messages, tweets and emails)
                  across the different social media platforms. The workflows
                  will make it easier for the team to respond quickly.
                </div>
                <div className="text-sm mb-2">
                  <b>4. Listen : </b>It helps you stay on top of social media
                  trends and ongoing events. Using Listening, you can monitor
                  all of your social networks, your competitors and spot
                  prospects from afar using unique keywords and additional
                  filter options to customize your search.
                </div>
                <div className="text-sm mb-2">
                  <b>5. Sentiment Analysis : </b>The Sentiment Analysis will
                  assist you in understanding what your customers are saying
                  about your brand so that you can respond appropriately.
                </div>
                <div className="text-sm mb-2">
                  <b>6. Analytics : </b>Analytics is a tool that can be used to
                  get insights into your strategy and help you plan for the
                  future. It helps you make the right decisions based on data
                  and not on guesses. CloudSocial also has a Net Promoter Score,
                  or NPS, which measures customer satisfaction. NPS works as a
                  loyalty metric that lets you improve customer loyalty over
                  time.
                </div>
                <div className="text-sm mb-2" id="account">
                  <b>7. Support : </b>We are available to assist you via live
                  chat, email, and online calls 24 hours a day, 7 days a week.
                </div>
                <hr className="mb-3 mt-3 text-gray-300" />

                <br />
                <h3 className="text-lg font-bold font-heading text-center">
                  Account-Related
                </h3>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">Let’s Begin</h4>
                <div className="text-sm mb-2 ">
                  This guide will help you set up your CloudSocial account. You
                  are just some easy steps away from managing your social media
                  profiles all from one place. Open your CloudSocial account in
                  another tab and follow along.
                </div>
                <ol className="text-sm mb-1 list-inside list-decimal">
                  <li>Create Users</li>
                  <li>Connect Social Account or Add Brands Social Profile</li>
                  <li>Publish your first Post</li>
                  <li>Manage your post queue with our CloudSocial Calendar</li>
                  <li>
                    Get overall performance activity from the Analytics section.
                  </li>
                  <li>
                    Respond to incoming mentions (all incoming messages across
                    the different social channels or email, are called mentions
                    in CloudSocial) in the Omnibox.
                  </li>
                </ol>
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Adding Users:
                </h4>
                <div className="text-sm mb-2">
                  Once you're logged in, you can create the user by following
                  the points mentioned below:
                </div>
                <ol className="text-sm mb-1 list-inside list-alphabet ml-2">
                  <li>
                    Hover your mouse cursor to the "Account" option available on
                    the left side of your screen and click on "Create User".
                  </li>
                  <li>You will be directed to the "Add User" page.</li>
                  <li>
                    Fill in the required details (First Name, Last Name, Mobile
                    Number, Email ID)
                  </li>
                  <li>
                    You can set or assign a role to the user as per your
                    requirement by selecting an option from the drop-down list.
                    (The number & type of roles are Pack dependent.) Back
                    Office, Brand Manager, Marketing, Analytics, Agency Manager,
                    and Agent
                  </li>
                  <li>
                    Only in case of Agent select the channels which you wish the
                    Agent should have access to (Facebook Profile, Facebook
                    Page, Facebook Ad, Facebook Group, Facebook Messenger,
                    Instagram Business Page, Twitter Profile, Twitter DM,
                    LinkedIn Business Page, YouTube Channel Page, Email and
                    Google My Business). For all other roles, it is
                    automatically selected.
                  </li>
                  <li>
                    You can set a temporary password for the new user. (Note:
                    The user can change their password later once they Log in.)
                  </li>
                  <li>Click on the "Submit" button.</li>
                </ol>
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="add user"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Add_User.png"
                  />
                </div>
                <br />
                <br />
                <div className="text-sm mb-2">
                  You can check the number of users and recently added user info
                  which will be visible on the right-side bar widget under the
                  "Recently Added" section.
                </div>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="recently added"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Recently_Added.png"
                    //
                  />
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Connecting Social Account or Adding Brands Social Profile:
                </h4>
                <div className="text-sm mb-2">
                  Once the users are created successfully. Now you need to add
                  your Social Channels/ Brands.
                </div>
                <ol className="text-sm mb-1 list-inside list-alphabet ml-2">
                  <li>
                    Hover your mouse cursor to the Account option available on
                    the left side of your screen and click on "Brand Creation".
                  </li>
                  <li>Wherein you need to set the "Brand Name".</li>
                  <li>
                    Add social media channels by clicking on the social media
                    icons available and entering your profile details to add the
                    account.
                  </li>
                  <li>You can also assign a specific agent to the brand.</li>
                  <li>You can assign all roles to a brand</li>
                  <li>
                    You can select the industry type from the drop-down list.
                  </li>
                  <li>Click on the "Submit" button.</li>
                </ol>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="brand creation"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Brand_Creation.png"
                  />
                </div>
                <br />
                <div className="text-sm mb-2">
                  You can connect multiple social media profiles with
                  CloudSocial. The number of profiles you can connect depends on
                  the plan you have chosen.
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Steps to add Facebook Page, Facebook page messenger, Profile,
                  Group, Ad Manager :
                </h4>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="connect to facebook page"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Connect_To_Facebook.png"
                  />
                </div>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="facebook login page"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Facebook_login.png"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="Facebook_Auth"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Facebook_Auth.png"
                  />
                </div>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="facebook auth page"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Facebook_Auth_2.png"
                  />
                </div>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="Facebook_Auth_3"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Facebook_Auth_3.png"
                  />
                </div>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="Page_selection"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Page_selection.png"
                  />
                </div>
                <br />
                <li className="text-sm mb-2">
                  Follow the same steps to add other channels as well.
                </li>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Steps to add Instagram Page:
                </h4>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="connect to instagram page"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Connect_To_Instagram.png"
                  />
                </div>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="Facebook_Auth_Insta_1"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Facebook_Auth_Insta_1.png"
                  />
                </div>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    style={{
                      // width: "100%",
                      // height: "100%",
                      marginTop: "10px",
                      border: "1px solid #8080802e",
                    }}
                    alt="Facebook_Auth_Insta_2"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Facebook_Auth_Insta_2.png"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    style={{
                      // width: "100%",
                      // height: "100%",
                      marginTop: "10px",
                      border: "1px solid #8080802e",
                    }}
                    alt="Facebook_Auth_Insta_3"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Facebook_Auth_Insta_3.png"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    style={{
                      // width: "100%",
                      // height: "100%",
                      marginTop: "10px",
                      border: "1px solid #8080802e",
                    }}
                    alt="Facebook_Auth_Insta_4"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Facebook_Auth_Insta_4.png"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    style={{
                      // width: "100%",
                      // height: "100%",
                      marginTop: "10px",
                      border: "1px solid #8080802e",
                    }}
                    alt="Facebook_Auth_Insta_5"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Facebook_Auth_Insta_5.png"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    style={{
                      // width: "100%",
                      // height: "100%",
                      marginTop: "10px",
                      border: "1px solid #8080802e",
                    }}
                    alt="Facebook_Auth_Insta_6"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Facebook_Auth_Insta_6.png"
                  />
                </div>

                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="Page_selection_Insta"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Page_selection_Insta.png"
                  />
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Steps to add Twitter Profile:
                </h4>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    style={{
                      // width: "100%",
                      // height: "100%",
                      marginTop: "10px",
                      border: "1px solid #8080802e",
                    }}
                    alt="Connect_To_twitter"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Connect_To_twitter.png"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    style={{
                      // width: "100%",
                      // height: "100%",
                      marginTop: "10px",
                      border: "1px solid #8080802e",
                    }}
                    alt="twiter_Auth_1"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/twiter_Auth_1.png"
                  />
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Steps to add LinkedIn Business Page:
                </h4>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    style={{
                      // width: "100%",
                      // height: "100%",
                      marginTop: "10px",
                      border: "1px solid #8080802e",
                    }}
                    alt="Connect_To_Linkedin"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Connect_To_Linkedin.png"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    style={{
                      // width: "100%",
                      // height: "100%",
                      marginTop: "10px",
                      border: "1px solid #8080802e",
                    }}
                    alt="LinkedIn_Login"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/LinkedIn_Login.png"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    style={{
                      // width: "100%",
                      // height: "100%",
                      marginTop: "10px",
                      border: "1px solid #8080802e",
                    }}
                    alt="LinkedIn_Auth_1"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/LinkedIn_Auth_1.png"
                  />
                </div>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="Page_selection_LinkedIn"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Page_selection_LinkedIn.png"
                  />
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Steps to add Pinterest:
                </h4>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    style={{
                      // width: "100%",
                      // height: "100%",
                      marginTop: "10px",
                      border: "1px solid #8080802e",
                    }}
                    alt="Connect_To_Pinterest"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Connect_To_Pinterest.png"
                  />
                </div>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="Login_To_Pinterest"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Login_To_Pinterest.png"
                  />
                </div>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="Pinterest_Auth"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Pinterest_Auth.png"
                  />
                </div>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="Page_selection_Pinterest"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Page_selection_Pinterest.png"
                  />
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Steps to add YouTube Business Channel:
                </h4>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    style={{
                      // width: "100%",
                      // height: "100%",
                      marginTop: "10px",
                      border: "1px solid #8080802e",
                    }}
                    alt="Connect_To_Youtube"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Connect_To_Youtube.png"
                  />
                </div>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    style={{
                      // width: "100%",
                      // height: "100%",
                      marginTop: "10px",
                      border: "1px solid #8080802e",
                    }}
                    alt="Login_To_Youtube"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Login_To_Youtube.png"
                  />
                </div>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    style={{
                      // width: "100%",
                      // height: "100%",
                      marginTop: "10px",
                      border: "1px solid #8080802e",
                    }}
                    alt="Youtube_Auth"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Youtube_Auth.png"
                  />
                </div>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="Page_selection_Youtube"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Page_selection_Youtube.png"
                  />
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Steps to add Email:
                </h4>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="Email_Channel_config"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Email_Channel_config.png"
                  />
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Steps to add Google My Business:
                </h4>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    style={{
                      // width: "100%",
                      // height: "100%",
                      marginTop: "10px",
                      border: "1px solid #8080802e",
                    }}
                    alt="Connect_To_GMB"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Connect_To_GMB.png"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    style={{
                      // width: "100%",
                      // height: "100%",
                      marginTop: "10px",
                      border: "1px solid #8080802e",
                    }}
                    alt="Login_To_GMB"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Login_To_GMB.png"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    style={{
                      // width: "100%",
                      // height: "100%",
                      marginTop: "10px",
                      border: "1px solid #8080802e",
                    }}
                    alt="Login_To_GMB_2"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Login_To_GMB_2.png"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    style={{
                      // width: "100%",
                      // height: "100%",
                      marginTop: "10px",
                      border: "1px solid #8080802e",
                    }}
                    alt="GMB_Auth"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/GMB_Auth.png"
                  />
                </div>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="Page_selection_GMB"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Page_selection_GMB.png"
                  />
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Steps to add Google Drive:
                </h4>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    style={{
                      // width: "100%",
                      // height: "100%",
                      marginTop: "10px",
                      border: "1px solid #8080802e",
                    }}
                    alt="Connect_To_Google_Drive"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Connect_To_Google_Drive.png"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    style={{
                      // width: "100%",
                      // height: "100%",
                      marginTop: "10px",
                      border: "1px solid #8080802e",
                    }}
                    alt="Login_To_Google_Drive"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Login_To_Google_Drive.png"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    style={{
                      // width: "100%",
                      // height: "100%",
                      marginTop: "10px",
                      border: "1px solid #8080802e",
                    }}
                    alt="Login_To_Google_Drive_2"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Login_To_Google_Drive_2.png"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    style={{
                      // width: "100%",
                      // height: "100%",
                      marginTop: "10px",
                      border: "1px solid #8080802e",
                    }}
                    alt="Google_Drive_Auth"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Google_Drive_Auth.png"
                  />
                </div>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="Page_selection_Google_Drive"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Page_selection_Google_Drive.png"
                  />
                </div>
                <br />
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Steps to add Google Business Messaging:
                </h4>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    style={{
                      // width: "100%",
                      // height: "100%",
                      marginTop: "10px",
                      border: "1px solid #8080802e",
                    }}
                    alt="Connect_To_BM"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Connect_To_BM.png"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    style={{
                      // width: "100%",
                      // height: "100%",
                      marginTop: "10px",
                      border: "1px solid #8080802e",
                    }}
                    alt="BM_Login_1"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/BM_Login_1.png"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    style={{
                      // width: "100%",
                      // height: "100%",
                      marginTop: "10px",
                      border: "1px solid #8080802e",
                    }}
                    alt="BM_Login_2"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/BM_Login_2.png"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    style={{
                      // width: "100%",
                      // height: "100%",
                      marginTop: "10px",
                      border: "1px solid #8080802e",
                    }}
                    alt="BM_Auth"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/BM_Auth.png"
                  />
                </div>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="BM_Agent_Url"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/BM_Agent_Url.png"
                  />
                </div>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    style={{
                      // width: "100%",
                      // height: "100%",
                      marginTop: "10px",
                      border: "1px solid #8080802e",
                    }}
                    alt="BM_congratulation"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/BM_congratulation.png"
                  />
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Steps to add Medium:
                </h4>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    style={{
                      // width: "100%",
                      // height: "100%",
                      marginTop: "10px",
                      border: "1px solid #8080802e",
                    }}
                    alt="Connect_To_Medium"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Connect_To_Medium.png"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    style={{
                      // width: "100%",
                      // height: "100%",
                      marginTop: "10px",
                      border: "1px solid #8080802e",
                    }}
                    alt="Connect_To_Medium_token"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Connect_To_Medium_token.png"
                  />
                </div>
                <div className="flex justify-center items-center" id="price">
                  <img
                    className="mt-3"
                    alt="Page_selection_Medium"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Page_selection_Medium.png"
                  />
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  What can a Super Admin do?
                </h4>
                <br />
                <div className="w-full hover-up-5 border-blue-gray-100  bg-blue-50 rounded shadow">
                  <table className="w-full min-w-max table-auto text-left ">
                    <tbody className="border-b border-blue-gray-100 bg-blue-50">
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Role
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Super Admin
                        </td>
                      </tr>
                      <tr className="border border-blue-gray-100 bg-blue-50">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Omnibox
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>
                            Can directly respond to the mention in Omnibox
                          </li>
                          <li>
                            Assign or Approve workflow:
                            <ol className="list-inside list-alphabet ml-2">
                              <li>Approve mention assigned to Super Admin</li>
                              <li>
                                Comment on mention assigned to Super Admin
                              </li>
                            </ol>
                          </li>
                          <li>
                            Assign FYI workflow or can email a specific mention
                            to the following roles:
                            <ol className="list-inside list-decimal">
                              <li>Back Office</li>
                              <li>Brand Manager</li>
                              <li>Marketing </li>
                              <li>Agency Manager</li>
                              <li>Agent</li>
                            </ol>
                          </li>
                        </td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Account
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>Create User</li>
                          <li>Users List</li>
                          <li>View Credit Balance</li>
                        </td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50 px-1 py-1">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Listen
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>Brand Creation</li>
                          <li>Post Count</li>
                        </td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50 px-1 py-1">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Publish
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>Actions</li>
                          <ul className="list-disc list-inside">
                            <li>Create</li>
                            <li>Publish</li>
                            <ol className="list-inside list-decimal">
                              <li>Publish now</li>
                              <li>Publish later</li>
                            </ol>
                            <li>Recurrence</li>
                            <ol className="list-inside list-decimal">
                              <li>
                                Recurrence can be set on
                                <ol className="list-inside list-alphabet ml-2">
                                  <li>Daily- every day</li>
                                  <li>
                                    Weekly – on the selected day of the week
                                  </li>
                                  <li>
                                    Monthly – on the selected date of the month
                                  </li>
                                  <li>
                                    Yearly – on the selected date of the year
                                  </li>
                                  <li>At fixed time</li>
                                </ol>
                              </li>
                            </ol>
                            <li>Pause</li>
                            <ol className="list-inside list-decimal ml-2">
                              <li>Approved post when recurrence is on</li>
                              <li>Sent post when recurrence is on</li>
                              <li>Resume</li>
                            </ol>
                            <li>Delete</li>
                            <ol className="list-inside list-decimal ml-2">
                              <li>Can delete post sent for approval</li>
                              <li>Can delete post which he has rejected</li>
                              <li>
                                Can delete post which are waiting for approval
                              </li>
                              <li>Can delete failed posts</li>
                              <li>Can delete paused posts</li>
                              <li>Can delete resumed posts</li>
                              <li>Can delete saved as drafts posts</li>
                              <li>
                                Can delete sent posts when recurrence is true
                              </li>
                              <li>Can take no action on deleted posts</li>
                            </ol>

                            <li>Save as draft</li>
                            <ol className="list-inside list-decimal ml-2">
                              <li>
                                Posts which he has created can be saved as
                                drafts
                              </li>
                              <li>
                                Can save as drafts posts which have failed
                              </li>
                            </ol>
                            <li>Reject</li>
                            <ol className="list-inside list-decimal ml-2">
                              <li>
                                Can reject posts which have been sent for
                                approval
                              </li>
                            </ol>
                            <li>Recall</li>
                            <ol className="list-inside list-decimal ml-2">
                              <li>
                                Only the immediate one is recalled when
                                recurrence is true, but future will continue
                              </li>
                              <li>
                                Only the immediate one is recalled when no
                                recurrence is set
                              </li>
                            </ol>
                            <li>Approve</li>
                            <ol className="list-inside list-decimal ml-2">
                              <li>Sent for approval posts</li>
                              <li>
                                Only the immediate one is recalled when no
                                recurrence is set
                              </li>
                              <li>Waiting for approval</li>
                              <li>Rejected posts</li>
                              <li>Failed posts</li>
                            </ol>
                            <li>Crello</li>
                            <li>Post</li>
                            <ol className="list-inside list-decimal ml-2">
                              <li>
                                Can post
                                <ol className="list-inside list-alphabet">
                                  <li>
                                    Select from available social media profiles
                                  </li>
                                </ol>
                              </li>
                              <li>
                                Can send post thru email to Agent/Brand
                                Manager/Agency Manager/Back Office/Super Admin
                              </li>
                            </ol>
                            <li>Calendar</li>
                            <li>FB Ad Manager</li>
                          </ul>
                        </td>
                      </tr>

                      <tr className="border-b border-blue-gray-100 bg-blue-50 px-1 py-1">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Reports & Analytics
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>Download the Reports</li>
                          <li>Checking the Analytics section</li>
                          <li>Mail Configuration</li>
                        </td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50 p-4">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Support
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>Email</li>
                          <li>Chat</li>
                          <li>Audio/ Video Calls</li>
                          <li>Raising Tickets to support team</li>
                        </td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50 p-4">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          # of roles
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>Silver Pack – 1 Super Admin</li>
                          <li>Gold Pack – 1 Super Admin</li>
                          <li>Platinum Pack – 1 Super Admin</li>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  What can a Back Office do?
                </h4>
                <br />
                <div className="w-full hover-up-5 border-blue-gray-100  bg-blue-50 rounded shadow">
                  <table className="w-full min-w-max table-auto text-left ">
                    <tbody className="border-b border-blue-gray-100 bg-blue-50">
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Role
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Super Admin
                        </td>
                      </tr>
                      <tr className="border border-blue-gray-100 bg-blue-50">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Omnibox
                        </td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Account
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>Create User</li>
                          <li>Users List</li>
                          <li>View Credit Balance</li>
                        </td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50 px-1 py-1">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Listen
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>Brand Creation</li>
                          <li>Set keyword for Listening</li>
                          <li>Post Count</li>
                        </td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50 px-1 py-1">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Publish
                        </td>
                      </tr>

                      <tr className="border-b border-blue-gray-100 bg-blue-50 px-1 py-1">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Reports & Analytics
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>Mail Configuration</li>
                        </td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50 p-4">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Support
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>Email</li>
                          <li>Chat</li>
                          <li>Audio/ Video Calls</li>
                          <li>Raising Tickets to support team</li>
                        </td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50 p-4">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          # of roles
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>Gold Pack – 1 Back Office</li>
                          <li>Platinum Pack – 1 Back Office</li>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  What can an Agency Manager do?
                </h4>
                <br />
                <div className="w-full hover-up-5 border-blue-gray-100  bg-blue-50 rounded shadow">
                  <table className="w-full min-w-max table-auto text-left ">
                    <tbody className="border-b border-blue-gray-100 bg-blue-50">
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Role
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Agency Manager
                        </td>
                      </tr>
                      <tr className="border border-blue-gray-100 bg-blue-50">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Omnibox
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>
                            Can directly respond to the mention in Omnibox
                          </li>
                          <li>
                            Assign or Approve workflow:
                            <ol className="list-inside list-alphabet ml-2">
                              <li>
                                Approve mention assigned to Agency Manager
                              </li>
                              <li>
                                Comment on mention assigned to Agency Manager
                              </li>
                              <li>
                                Can assign mention to Brand Manager and Super
                                Admin for Approval
                              </li>
                            </ol>
                          </li>
                          <li>
                            Assign FYI workflow or can email a specific mention
                            to the following roles:
                            <ol className="list-inside list-decimal ml-2">
                              <li>Super Admin</li>
                              <li>Back Office</li>
                              <li>Brand Manager</li>
                              <li>Marketing </li>
                              <li>Agent</li>
                            </ol>
                          </li>
                        </td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Account
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50 px-1 py-1">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Listen
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50 px-1 py-1">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Publish
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>Actions :</li>
                          <ol className="list-inside list-alphabet ml-2">
                            <li>Create</li>
                            <li>Publish</li>
                            <ol className="list-inside list-decimal ml-2">
                              <li className="list-inside list-roman ml-2">
                                Publish now
                              </li>
                              <li className="list-inside list-roman ml-2">
                                Publish later
                              </li>
                            </ol>
                            <li>Recurrence</li>
                            <ol className="list-inside list-roman ml-2">
                              <li type="">
                                Recurrence can be set on
                                <ol className="list-inside list-decimal ml-2">
                                  <li>Daily- every day</li>
                                  <li>
                                    Weekly – on the selected day of the week
                                  </li>
                                  <li>
                                    Monthly – on the selected date of the month
                                  </li>
                                  <li>
                                    Yearly – on the selected date of the year
                                  </li>
                                  <li>At fixed time</li>
                                </ol>
                              </li>
                            </ol>
                            <li>Delete</li>
                            <ol className="list-inside list-roman ml-2">
                              <li>Can delete post sent for approval</li>
                              <li>Can delete post which he has rejected</li>
                              <li>
                                Can delete post which are waiting for approval
                              </li>
                              <li>Can delete failed posts</li>
                              <li>Can delete saved as drafts posts</li>
                              <li>Can take no action on deleted posts</li>
                            </ol>

                            <li>Save as draft</li>
                            <ol className="list-inside list-roman ml-2">
                              <li>Can save as draft rejected post </li>
                            </ol>
                          </ol>
                          <li>Crello</li>
                          <li>Post</li>
                          <ol className="list-inside list-roman ml-2">
                            <li>Post is automatically publish once approved</li>
                            <li>Select from available social media profiles</li>
                          </ol>
                          <li>FB Ad Manager</li>
                        </td>
                      </tr>

                      <tr className="border-b border-blue-gray-100 bg-blue-50 px-1 py-1">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Reports & Analytics
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>Checking the Analytics section</li>
                        </td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50 p-4">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Support
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>Email</li>
                          <li>Chat</li>
                          <li>Audio/ Video Calls</li>
                          <li>Raising Tickets to support team</li>
                        </td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50 p-4">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          # of roles
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>
                            Agency Manager is available only in Platinum pack
                          </li>
                          <li>
                            As the number of brands for this pack is seven. A
                            particular Agency Manager can be either mapped to
                            one or all seven brands or two different Agency
                            Managers can be mapped to four and three different
                            brands respectively or any combination of up to two
                            Agency Manager users mapped to the seven brands ( 7
                            + 0\ 6 + 1\ 5 + 2\ 4 + 3\ 3 + 4 \ 2 + 5\ 1 + 6\ 0 +
                            7).
                          </li>
                          <li>
                            But two different Agency Managers cannot be mapped
                            to the same brand
                          </li>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  What can an Analytics user do?
                </h4>
                <br />
                <div className="w-full hover-up-5 border-blue-gray-100  bg-blue-50 rounded shadow">
                  <table className="w-full min-w-max table-auto text-left ">
                    <tbody className="border-b border-blue-gray-100 bg-blue-50">
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Role
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Analytics
                        </td>
                      </tr>
                      <tr className="border border-blue-gray-100 bg-blue-50">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Omnibox
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Account
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50 px-1 py-1">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Listen
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50 px-1 py-1">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Publish
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                      </tr>

                      <tr className="border-b border-blue-gray-100 bg-blue-50 px-1 py-1">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Reports & Analytics
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>Downloading the Reports</li>
                          <li>Checking the Analytics section</li>
                          <li>Email configuration</li>
                        </td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50 p-4">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Support
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>Email</li>
                          <li>Chat</li>
                          <li>Audio/ Video Calls</li>
                          <li>Raising Tickets to support team</li>
                        </td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50 p-4">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          # of roles
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>Gold Pack – 1 Analytics role</li>
                          <li>Platinum Pack – 2 Analytics roles</li>
                          <li>
                            One Analytics role can be mapped to multiple brands.
                          </li>
                          <li>
                            Under the Gold Pack – 1 Analytics role can be mapped
                            to all 3 Brands
                          </li>
                          <li>
                            Under the Platinum Pack – 7 users for this role can
                            be mapped. As the number of brands for this pack is
                            7. A particular analytics user can be either mapped
                            to one or all seven brands or two different
                            <br />
                            analytics users can be mapped to seven different
                            brands or any combination of up two analytics users
                            mapped to the seven brands ( 7 + 0 \ 6 + 1 \ 5 + 2 \
                            4 + 2 \ 3 +1\ 2 + 5 \ 1 + 6 \ 0 + 7 ).
                          </li>
                          <li>
                            But two different analytics users cannot be mapped
                            to the same brand
                          </li>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  What can a Brand Manager do?
                </h4>
                <br />

                <div className="w-full hover-up-5 border-blue-gray-100  bg-blue-50 rounded shadow">
                  <table className="w-full min-w-max table-auto text-left ">
                    <tbody className="border-b border-blue-gray-100 bg-blue-50">
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Role
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Brand Manager
                        </td>
                      </tr>
                      <tr className="border border-blue-gray-100 bg-blue-50">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Omnibox
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>
                            Can directly respond to the mention in Omnibox
                          </li>
                          <li>
                            Assign or Approve workflow:
                            <ol className="list-inside list-alphabet ml-2">
                              <li>Approve mention assigned to Brand Manager</li>
                              <li>
                                Comment on mention assigned to Brand Manager
                              </li>
                            </ol>
                          </li>
                          <li>
                            Assign FYI workflow or can email a specific mention
                            to the following roles
                          </li>
                          <ol className="list-inside list-decimal">
                            <li>Super Admin</li>
                            <li>Back Office</li>
                            <li>Marketing </li>
                            <li>Agency Manager</li>
                            <li>Agent</li>
                          </ol>
                        </td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Account
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50 px-1 py-1">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Listen
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50 px-1 py-1">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Publish
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                      </tr>

                      <tr className="border-b border-blue-gray-100 bg-blue-50 px-1 py-1">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Reports & Analytics
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>Checking the Analytics section</li>
                        </td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50 p-4">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Support
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>Email</li>
                          <li>Chat</li>
                          <li>Audio/ Video Calls</li>
                          <li>Raising Tickets to support team</li>
                        </td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50 p-4">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          # of roles
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>Gold Pack – Three Brand Managers</li>
                          <li>
                            Platinum Pack – Seven Brand Managers
                            <ol>
                              <li>
                                One brand manager can be assigned only to one
                                Brand
                              </li>
                              <li>
                                In case of Gold Pack, three Brand Managers will
                                be mapped to three different Brands
                              </li>
                              <li>
                                In case of Platinum Pack, seven Brand Managers
                                will be mapped to seven different Brands
                              </li>
                            </ol>
                          </li>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  What can a Marketing user do?
                </h4>
                <br />
                <div className="w-full hover-up-5 border-blue-gray-100  bg-blue-50 rounded shadow">
                  <table className="w-full min-w-max table-auto text-left ">
                    <tbody className="border-b border-blue-gray-100 bg-blue-50">
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Role
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Marketing
                        </td>
                      </tr>
                      <tr className="border border-blue-gray-100 bg-blue-50">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Omnibox
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Account
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50 px-1 py-1">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Listen
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>Brand Creation</li>
                          <li>Set keyword for Listening</li>
                          <li>Post Count</li>
                        </td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50 px-1 py-1">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Publish
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>Actions :</li>
                          <ol className="list-inside list-alphabet ml-2">
                            <li>Create</li>
                            <li>Publish</li>
                            <ol className="list-inside list-decimal ml-2">
                              <li className="list-inside list-roman ml-2">
                                Publish now
                              </li>
                              <li className="list-inside list-roman ml-2">
                                Publish later
                              </li>
                            </ol>
                            <li>Recurrence</li>
                            <ol>
                              <li className="list-inside list-roman ml-2">
                                Recurrence can be set on
                                <ol className="list-inside list-decimal ml-2">
                                  <li>Daily- every day</li>
                                  <li>
                                    Weekly – on the selected day of the week
                                  </li>
                                  <li>
                                    Monthly – on the selected date of the month
                                  </li>
                                  <li>
                                    Yearly – on the selected date of the year
                                  </li>
                                  <li>At fixed time</li>
                                </ol>
                              </li>
                            </ol>
                            <li>Pause</li>
                            <ol className="list-inside list-roman ml-2">
                              <li>When recurrence is on</li>
                              <li>Approved post when recurrence is on</li>
                              <li>Resume</li>
                            </ol>
                            <li>Delete</li>
                            <ol className="list-inside list-roman ml-2">
                              <li>Can delete post sent for approval</li>
                              <li>Can delete post which he has rejected</li>
                              <li>
                                Can delete post which are waiting for approval
                              </li>
                              <li>Can delete failed posts</li>
                              <li>Can delete paused posts</li>
                              <li>Can delete resumed posts</li>
                              <li>Can delete saved as drafts posts</li>
                              <li>
                                Can delete sent posts when recurrence is true
                              </li>
                              <li>Can take no action on deleted posts</li>
                            </ol>
                            <li>Save as draft</li>
                            <ol className="list-inside list-roman ml-2">
                              <li>
                                Posts which he has created can be saved as
                                drafts
                              </li>
                              <li>
                                Can save as drafts posts which have failed
                              </li>
                            </ol>
                          </ol>
                          <li>Reject</li>
                          <ol className="list-inside list-roman ml-2">
                            <li>
                              Can reject posts which have been sent for approval
                            </li>
                          </ol>
                          <li>Recall</li>
                          <ol className="list-inside list-roman ml-2">
                            <li>
                              Only the immediate one is recalled when recurrence
                              is true, but future will continue
                            </li>
                            <li>
                              Only the immediate one is recalled when no
                              recurrence is set
                            </li>
                          </ol>

                          <li>Approve</li>
                          <ol className="list-inside list-roman ml-2">
                            <li>Sent for approval posts</li>
                            <li>Waiting for approval</li>
                            <li>Rejected posts</li>
                            <li>Failed posts</li>
                          </ol>

                          <li>Crello</li>
                          <li>Post</li>
                          <ol className="list-inside list-alphabet ml-2">
                            <li>
                              Can post
                              <ol className="list-inside list-roman ml-2">
                                <li>
                                  Select from available social media profiles
                                </li>
                              </ol>
                            </li>
                            <li>
                              Can send post thru email to Agent/Brand
                              Manager/Agency Manager/Back Office/Super Admin
                            </li>
                          </ol>
                          <li>Calendar</li>
                          <li>FB Ad Manager</li>
                        </td>
                      </tr>

                      <tr className="border-b border-blue-gray-100 bg-blue-50 px-1 py-1">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Reports & Analytics
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>Downloading the Reports</li>
                          <li>Checking the Analytics section</li>
                        </td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50 p-4">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Support
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>Email</li>
                          <li>Chat</li>
                          <li>Audio/ Video Calls</li>
                          <li>Raising Tickets to support team</li>
                        </td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50 p-4">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          # of roles
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>Gold Pack – 1 marketing role</li>
                          <li>Platinum Pack – 7 marketing roles</li>
                          <li>
                            One Marketing can be mapped to multiple brands.
                          </li>
                          <li>
                            Under the Gold Pack – 1 Marketing can be mapped to
                            all 3 Brands
                          </li>
                          <li>
                            Under the Platinum Pack – 7 users for this role can
                            be mapped.
                          </li>
                          <li>
                            As the number of brands for this pack is 7. A
                            particular marketing user can be either mapped to
                            one or all seven brands or seven different marketing
                            users can be mapped to seven different brands or any
                            combination of up to seven Marketing users mapped to
                            the seven brands ( 7 + 0 \ 6 + 1 \ 5 + 2 \ 4 + 3 \ 3
                            + 4 \ 2 + 5 \ 1 + 6 \ 0 + 7 \ 2+2+2+1\1+1+1+1+3).
                          </li>
                          <li>
                            But two different Marketing users cannot be mapped
                            to the same brand
                          </li>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br />

                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  What can an Agent do?
                </h4>
                <br />
                <div className="w-full hover-up-5 border-blue-gray-100  bg-blue-50 rounded shadow">
                  <table className="w-full min-w-max table-auto text-left ">
                    <tbody className="border-b border-blue-gray-100 bg-blue-50">
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Role
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Agent
                        </td>
                      </tr>
                      <tr className="border border-blue-gray-100 bg-blue-50">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Omnibox
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>
                            Can directly respond to the mention in Omnibox
                          </li>
                          <li>
                            Assign or Approve workflow:
                            <ol className="list-inside list-alphabet ml-2">
                              <li>
                                Can assign a mention to Brand Manager / Agency
                                Manager/Super Admin for approval
                              </li>
                              <li>
                                Can comment back to the sender on a specific
                                mention
                              </li>
                            </ol>
                          </li>
                          <li>
                            Assign FYI workflow or can email a specific mention
                            to the following roles:
                          </li>
                          <ol className="list-inside list-decimal ml-2">
                            <li>Super Admin</li>
                            <li>Back Office</li>
                            <li>Brand Manager</li>
                            <li>Marketing </li>
                            <li>Agency Manager</li>
                          </ol>
                        </td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Account
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50 px-1 py-1">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Listen
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50 px-1 py-1">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Publish
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                      </tr>

                      <tr className="border-b border-blue-gray-100 bg-blue-50 px-1 py-1">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Reports & Analytics
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50 p-4">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Support
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>Email</li>
                          <li>Chat</li>
                          <li>Audio/ Video Calls</li>
                          <li>Raising Tickets to support team</li>
                        </td>
                      </tr>
                      <tr className="border-b border-blue-gray-100 bg-blue-50 p-4">
                        <td className="text-md border font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          # of roles
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <li>Silver Pack – Two Agents</li>
                          <li>Gold Pack – Three Agents</li>
                          <li>Platinum Pack – Ten Agents role</li>
                          <ol className="list-inside list-roman ml-2">
                            <li>
                              A specific agent mapped to one brand or a specific
                              social media channel
                            </li>
                            <li>
                              One Agent cannot be mapped to multiple Brands
                            </li>
                            <li>
                              Multiple agents can be mapped to the same brand or
                              channel
                            </li>
                          </ol>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  How do I assign Pseudo names to my Roles?
                </h4>
                <div className="text-sm mb-2">
                  Pseudo names can be easily assigned to roles. All you have to
                  do is follow the steps listed below in the exact same order.
                </div>
                <ol className="text-sm mb-1">
                  <li>
                    Hover the cursor on the top right corner for Profile
                    Settings
                  </li>
                  <li>Click on the Role Editing option</li>
                  <li>Select the user you which to assign a Pseudo name</li>
                  <li id="publish">
                    Enter your desired Pseudo name under <b>“Role New Name”</b>
                  </li>
                  <li>
                    Click the on <b>Update Name </b>Button.
                  </li>
                </ol>
                <hr className="mb-3 mt-3 text-gray-300" />

                <br />
                <h3 className="text-lg font-bold font-heading text-center">
                  Publish Related
                </h3>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Publishing your first Post:
                </h4>
                <div className="text-sm mb-2">
                  Hover your mouse cursor to the "Publish" option available on
                  the left side of your screen and click on "Post".
                </div>
                <div className="text-sm mb-2">
                  If you want to create a New Post.
                </div>
                <ol className="text-sm mb-1 list-inside list-alphabet ml-2">
                  <li>Click on “New Post”.</li>
                  <li>You set the “Campaign Name or Title” of your post.</li>
                  <li>
                    You can select an image from your system or type an image or
                    GIF URL.
                  </li>
                  <li>
                    You can write more about the post in the text section.
                  </li>
                  <li>
                    In case if you have multiple brands, you can select the
                    specific brand from the drop-down list for which the post is
                    being published.
                  </li>
                  <li>
                    More, you can add your creatives from Google Drive, Pixabay
                    and Crello
                  </li>
                  <li>You can also set Tags for YouTube.</li>
                  <li>Further you can also set:</li>
                  <li>
                    Privacy Status for YouTube (Public, Private or Unlisted)
                  </li>
                  <ol className="text-sm mb-1 list-inside list-decimal ml-2">
                    <li>Audience on Facebook (Public or Restricted)</li>
                    <li>
                      If restricted, then the age limit for the post viewer’s
                      option will become available.
                    </li>
                    <li>Location</li>
                    <li>
                      Action (Whether to Publish Now or Publish Later by saving
                      it as a draft)
                    </li>
                    <li>
                      Setting up recurrence for the post and recurrence date
                      range. Daily – will publish the post daily, Weekly – will
                      publish the post on that day of the week every week,
                      monthly – will publish the post on that date of the month
                      every month and annual will publish on that date of the
                      year every year, kindly note when setting up recurrence
                      please ensure that the validity of the pack is till that
                      date.
                    </li>
                    <li>Setting up the Time Zone, Date, and Time.</li>
                    <li>
                      Then you can save it or send it for approval before
                      publishing (this functionality is available in the
                      Platinum pack).
                    </li>
                  </ol>
                </ol>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="Create_New_Post"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Create_New_Post.png"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3 "
                    alt="Create_New_Post_Target"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Create_New_Post_Target.png"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="Create_New_Post_schedule"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Create_New_Post_schedule.png"
                  />
                </div>
                <br />
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  What is Pixabay?
                </h4>
                <div className="text-sm mb-2">
                  Pixabay is a vibrant community of creatives, sharing
                  copyright-free images, vides, and music. All contents are
                  released under the Pixabay License, which makes them safe to
                  use without asking for permission or giving credit to the
                  artist - even for commercial purposes.
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  How do I use Pixabay?
                </h4>
                <div className="text-sm mb-2">
                  Users can access Pixabay content by clicking on the Pixabay
                  button placed on the Publish screen. Users may select the
                  desired content and download it. This downloaded content may
                  be attached to the publishing post.
                </div>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="Create_Pixabay"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Create_Pixabay.png"
                  />
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  How do I use Crello?
                </h4>
                <div className="text-sm mb-2">
                  You can create Images and Animations for Social Media in
                  Minutes. You can save time on design with the integrated
                  feature Crello. Need new content to post to your Facebook,
                  Instagram, YouTube, or Pinterest? Create an image and post it
                  to your pages right away. No design skills are necessary.
                </div>
                <ol className="text-sm mb-1 list-inside list-decimal ml-2">
                  <li>Click on Publish - Post</li>
                  <li>Create a Post</li>
                  <li>
                    You need to click on “Create Crello” available at the
                    Top-Right corner of the Textbox
                  </li>
                  <li>You need an account to start your designing in Crello</li>
                  <li>
                    Kindly register an account and if already registered kindly
                    Login.
                  </li>
                  <li>Design the post as per your desire.</li>
                  <li>Click on “Save”</li>
                </ol>
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="Create_Crello"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Create_Crello.png"
                  />
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Scheduling a Post
                </h4>
                <div className="text-sm mb-2">
                  By clicking on the 'Publish Later' option, you will be able to
                  schedule a post later. You can select the location, time zone,
                  date, and time for publishing that post. If you want to repeat
                  this post over a period, select the type of recurrence and
                  date range.
                </div>
                {/* <br /> */}
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="Scheduling_Post"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Scheduling_Post.png"
                  />
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Saving posts as drafts.
                </h4>
                <div className="text-sm mb-2">
                  We understand that, at times, you would like to draft your
                  posts and review them later. This practice will help you avoid
                  errors. Also, you might find a nice piece of content and wish
                  to save it for later. 
                </div>
                <div className="text-sm mb-2">
                  Hence, CloudSocial provides you with an option to save posts
                  as drafts.
                </div>
                <div className="text-sm mb-2">
                  You can save your drafts by following the steps mentioned
                  below:
                </div>
                <li className="text-sm mb-1">
                  <b>
                    Click on Publish - Click on Post - Create a Post - Fill in
                    the required details - Select the status “Save As Draft” -
                    Click on Save
                  </b>
                </li>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="Saving_posts_as_drafts_1"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Saving_posts_as_drafts_1.png"
                    //
                  />
                </div>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="Saving_posts_as_drafts_2"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Saving_posts_as_drafts_2.png"
                  />
                </div>
                <div className=" mb-2 mt-3">
                  Now your post is saved, and you can view it later under the
                  <b> History</b> Tab.
                </div>
                <br />
                <h3 className="text-lg font-bold font-heading text-center">Calendar</h3>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Managing your post queue with our CloudSocial Calendar
                </h4>
                <div className="text-sm mb-2">
                  You can find the Calendar under Publish. Here you can find all
                  the published content or schedule for later. This utility,
                  provides a consolidated view of all scheduled posts by day,
                  week, or month across all social media channels.
                </div>
                <div className="text-sm mb-2">
                  You can view post information by hovering your cursor over a
                  post, which will display detailed information about the post.
                  You can use Social Calendar to edit and reschedule your posts.
                  It displays the posts that are currently in the queue,
                  allowing you to keep track of your posts.
                </div>
                <ol className="text-sm list-inside list-decimal ml-2">
                  <li>Title of the Post</li>
                  <li>
                    If a recurrence is set, then:
                    <ol className="text-sm list-inside list-alphabet ml-2">
                      <li>Start Date</li>
                      <li>End Date</li>
                      <li>
                        Type of recurrence – Daily, Weekly, Monthly, Annually
                        with the timestamp.
                      </li>
                    </ol>
                  </li>
                  <li>Publisher Name</li>
                  <li>Approver Name</li>
                  <li>Status of the Post</li>
                  <li>Attachment (If any)</li>
                  <li>Recall option</li>
                  <li>An option to delete or pause (If recurrence is set)</li>
                </ol>
                <div className="text-sm mb-1">
                  From Calendar you can check the status of your post on:
                </div>
                <ol className="text-sm mb-1 list-inside list-decimal">
                  <li>Daily basis.</li>
                  <li>Weekly basis.</li>
                  <li>Monthly basis. </li>
                </ol>
                <div className="text-sm mb-1">
                  Post Title with set colors define the status of the Post.
                </div>
                <ol className="text-sm mb-1 list-inside list-decimal">
                  <li>Daily basis</li>
                  <li>Weekly basis.</li>
                  <li>Monthly basis. </li>
                </ol>
                <br />
                <div className="px-3 py-3 flex justify-between flex-wrap">
                  <div className="text-sm mb-1 flex">
                    <span
                      style={{
                        backgroundColor: "#ff8c00",
                        height: "25px",
                        width: "25px",
                        borderRadius: "50%",
                        display: "inline-block",
                        marginRight: "5px",
                      }}
                    ></span>
                    Approved and Publish
                  </div>
                  <div className="text-sm mb-1 flex">
                    <span
                      style={{
                        backgroundColor: "#f65d5c",
                        height: "25px",
                        width: "25px",
                        borderRadius: "50%",
                        display: "inline-block",
                        marginRight: "5px",
                      }}
                    ></span>
                    Reject{" "}
                  </div>
                  <div className="text-sm mb-1 flex">
                    <span
                      style={{
                        backgroundColor: "#33a5f1",
                        height: "25px",
                        width: "25px",
                        borderRadius: "50%",
                        display: "inline-block",
                        marginRight: "5px",
                      }}
                    ></span>
                    Waiting for approval
                  </div>
                  <div className="text-sm mb-1 flex">
                    <span
                      style={{
                        backgroundColor: "#59df6b",
                        height: "25px",
                        width: "25px",
                        borderRadius: "50%",
                        display: "inline-block",
                        marginRight: "5px",
                      }}
                    ></span>
                    Sent
                  </div>
                  <div className="text-sm mb-1 flex">
                    <span
                      style={{
                        backgroundColor: "#a4a4ab",
                        height: "25px",
                        width: "25px",
                        borderRadius: "50%",
                        display: "inline-block",
                        marginRight: "5px",
                      }}
                    ></span>
                    Resumed
                  </div>
                  <div className="text-sm mb-1 flex">
                    <span
                      style={{
                        backgroundColor: "#9ba4e3",
                        height: "25px",
                        width: "25px",
                        borderRadius: "50%",
                        display: "inline-block",
                        marginRight: "5px",
                      }}
                    ></span>
                    Paused
                  </div>
                </div>

                <div className="text-sm mb-2">
                  You can easily identify the posts which belong to different
                  accounts. As we have an iconic representation of the platform
                  before the title of the post.
                </div>
                <div className="w-full flex justify-center items-center">
                  {socialIcon.map((data) => {
                    return (
                      <img key={data.id}
                        style={{
                          width: "7%",
                          padding: "10px",
                        }}
                        alt={data.title}
                        loading="lazy"
                        src={data.img}
                      />
                    );
                  })}
                </div>

                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="Calendar_1"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Calendar_1.png"
                  />
                </div>
                <br />
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="Calendar_2"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Calendar_2.png"
                  />
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Post Generating an Error
                </h4>
                <div className="text-sm mb-2">
                  You might get an error while publishing a post due to the
                  following reasons:
                </div>
                <div className="text-sm mb-2">
                  <li>
                    The posts were rejected by the social media platform. In
                    such cases, you can review the error message that appears
                    when you submit the post, fix the content error, and then
                    post it at the instance, or set the post's recurrence.
                  </li>
                  <li>
                    You might have accidentally violated the terms and
                    conditions of a particular social media site and hence, you
                    aren't able to publish any posts for that account.
                  </li>
                  <li>
                    You might have exceeded the character limit for a post (e.g.
                    Tweets can be of up to 280 characters only). You can check
                    the character limit for different social media networking
                    platforms.
                  </li>
                  <li>
                    You might have uploaded some image or video which is larger
                    in size or it might be in a different file format which the
                    social networking websites may not support. You can check
                    the list of the size and formats of the file which are
                    supported on different social platforms.
                  </li>
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Does CloudSocial provide direct Instagram Scheduling?
                </h4>
                <div className="text-sm mb-2">
                  Yes, CloudSocial allows you to schedule direct Instagram
                  posts.
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  My social media accounts are showing as locked
                </h4>
                <div className="text-sm mb-2">
                  Currently you will not see that in CloudSocial. However if you
                  notice that on your account outside CloudSocial, then you
                  should contact your media accounts provider
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  What does PTAT stands for?
                </h4>
                <div className="text-sm mb-2">
                  The term PTAT stands for People Talking about this - this
                  Facebook term represents the number of users who created a
                  story about a page. The story could be any of the following
                  actions:
                  <li className="mt-2">Like a page</li>
                  <li>Post on the page</li>
                  <li>Like a post</li>
                  <li>Comment on a post</li>
                  <li>Share a post</li>
                  <li>Answer a question</li>
                  <li>RSVP to a page’s event</li>
                  <li>Mention the page in a post</li>
                  <li>Mention the page in a photo</li>
                  <li>Check in at a place</li>
                  <li>Share a check-in deal</li>
                  <li>Like a check-in deal</li>
                  <li>Write a recommendation</li>
                  <li>Claim an offer</li>
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Can I add a protected Twitter account?
                </h4>
                <div className="text-sm mb-2">
                  If you decided to protect your own Tweets, they will still
                  synchronize within CloudSocial. However, if a user you don't
                  follow mentions you in a protected Tweet, it will be
                  impossible for us to synchronize it.
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">Shorten URLs</h4>
                <div className="text-sm mb-2">
                  A URL shortener is a good option when you have a lengthy or
                  unattractive URL that you want to share online in social
                  media, instant messaging or even in blogs and email. One of
                  the most common reasons why people want a short URL is to save
                  character space when typing messages on Twitter and other
                  social networking sites.
                </div>
                <div className="text-sm mb-2">
                  Shortening any long URL is very simple, all you need to do is
                  just follow the steps given below:
                </div>
                <ol className="text-sm mb-2">
                  <li>Click on Publish - Post</li>
                  <li>Create a Post </li>
                  <li>You need to insert the lengthy URL in the Textbox.</li>
                  <li>
                    A button to shorten the URL will be displayed below the
                    Textbox.
                  </li>
                  <li>
                    Click on <b>Shorten URL</b>
                  </li>
                </ol>
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="Shorten_URL"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Shorten_URL.png"
                  />
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Creating Post in different languages
                </h4>
                <div className="text-sm mb-2">
                  CloudSocial helps you create posts in different languages to
                  target different audiences across the globe and expand your
                  business limit. You can post in any other language apart from
                  English, all you need to do is type the text elsewhere, copy,
                  it and then paste it into the text box you see in 'Create
                  Post'.
                </div>
                <div className="text-sm mb-2">
                  The post will be published on your social networking site as
                  you pasted it.
                </div>
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Which platforms support multiple images, GIF, video, and
                  Carousel?
                </h4>
                <div className="text-sm mb-2">
                  CloudSocial allows you to add images, GIF and video to make
                  your posts visually attractive. Some platforms don't support
                  posts with multiple images due to their API restrictions.
                  However, the following platforms support multiple image posts:
                  <ul className="list-inside list-disc ml-2">
                    <li >Facebook</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                  </ul>
                </div>
                <div className="text-sm mb-2">
                  GIF posts are supported by the following platform:
                  <ul className="list-inside list-disc ml-2">
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                  </ul>
                </div>
                <div className="text-sm mb-2">
                  The following platforms don't support GIF posts:
                  <ul className="list-inside list-disc ml-2">
                    <li>Instagram</li>
                  </ul>
                </div>
                <div className="text-sm mb-2">
                  Video posts are supported for the following platform:
                  <ul className="list-inside list-disc ml-2">
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>YouTube</li>
                  </ul>
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  How are my videos shared on social media?
                </h4>
                <div className="text-sm mb-2">
                  This is how your videos will be shared on different social
                  networks:
                  <ul className="list-inside list-disc ml-2">
                    <li>
                      On Facebook, your video post will be shared just like any
                      other image post you share on Facebook.
                    </li>
                    <li>
                      On Twitter, videos of 140 seconds will be shared as like
                      any other posts on Twitter.
                    </li>
                  </ul>
                </div>
                <div className="text-sm mb-2">
                  CloudSocial supports the following video formats:
                  <ul className="list-inside list-disc ml-2">
                    <li>avi</li>
                    <li>mp4</li>
                    <li>mov</li>
                  </ul>
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Can I add hashtags in my posts?
                </h4>
                <div className="text-sm mb-2">
                  Yes. You can add hashtag to your posts. The hashtags will
                  appear like plain text when you create the posts, however,
                  once they are published, they will be converted into clickable
                  hashtags.
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Why can’t I see the link preview in my Twitter post?
                </h4>
                <div className="text-sm mb-2">
                  We don’t support link preview in CloudSocial. 
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Why do my posts show ‘Published by CloudSocial’ on Facebook
                  Page/Group?
                </h4>
                <div className="text-sm mb-2">
                  When you use a platform (like CloudSocial) to publish posts on
                  your Facebook Page and Groups, your posts show 'Published by
                  the *name of the tool*'.
                </div>
                <div className="text-sm mb-2">
                  Don't worry! In case of the Facebook Pages, only you (the
                  admin) can see this - other users won't be shown 'Published by
                  CloudSocial'. 
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  How many posts can I schedule?
                </h4>
                <div className="text-sm mb-2">
                  There is no limit to the amount of posts or comments you can
                  publish or schedule with any subscription to CloudSocial.
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Uploaded image is rotated or upside down. Why?
                </h4>
                <div className="text-sm mb-2">
                  It can happen when you upload image, for example photo taken
                  on smartphone, that it's rotated or completely upside down.
                </div>
                <div className="text-sm mb-2">
                  Orientation of the image or photo is written in file's
                  metadata (or Exit data), which are not handled by CloudSocial.
                  If the file's rotation is not "fixed" using another tool that
                  handled the Exit data and that overwrites the metadata, the
                  image can be upside down or rotated.
                </div>
                <div className="text-sm mb-2">
                  As a solution, you can try to open the photo in a software or
                  tool that works with image files and save it.
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Where can I find my Facebook scheduled posts?
                </h4>
                <div className="text-sm mb-2">
                  You can find your scheduled posts in the calendar view within
                  the Publishing tab, with a small Facebook icon they have in
                  the calendar.
                </div>
                <div className="text-sm mb-2">
                  Calendar Feature is not available for Silver Pack Subscription
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Is it possible to edit a Facebook post already published?
                </h4>
                <div className="text-sm mb-2">
                  It's not possible to edit a Facebook post already published
                  directly in CloudSocial. If you need to edit a Facebook post
                  already published, you can do it on Facebook - please note
                  that you can only edit text of the post, add/remove location
                  or tag someone. You cannot edit the image, for example.
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Is it possible to target my post to a specific country?
                </h4>
                <div className="text-sm mb-2">
                  Yes! First, to target any post to a specific country type the
                  name of the country in the field provided. You can enter
                  specific country (only one country)
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Is it possible to target my post to a specific city?
                </h4>
                <div className="text-sm mb-2">
                  Posts made through CloudSocial can be geotargeted down to the
                  country level and city level.
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Can I create and publish an album to my Facebook page?
                </h4>
                <div className="text-sm mb-2">
                  Yes, you can publish an album to your Facebook page.
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Different types of Tweets
                </h4>
                <div className="text-sm mb-2">
                  On Twitter, there are few different types of tweets:
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  General tweet
                </h4>
                <div className="text-sm mb-1">
                  A message posted to twitter containing text, photos, a GIF,
                  and/or video. Basically, these are all tweets that do not
                  start with a "@" symbol.
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">Mentions</h4>
                <div className="text-sm mb-1">
                  A Tweet containing another account’s Twitter username,
                  preceded by the "@" symbol. For example: “Hello @CloudSocial!”
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">Replies</h4>
                <div className="text-sm mb-1">
                  A reply is when you respond to another person's Tweet - you
                  can respond to another Tweet from Omnibox section in
                  CloudSocial.
                </div>
                <div className="text-sm mb-1">
                  Then there are few other types of tweets, you can learn more
                  about them here
                </div>
                <div className="text-sm mb-1">
                  When you post a Tweet beginning with a @username, only people
                  who follow both you and the account you are mentioning will
                  see the Tweet in their Home timeline. If you’d like all your
                  followers to see the Tweet, the best way is to Retweet, Quote
                  Tweet your Tweet or to put a dot "." symbol just before the
                  username, just like this.@usernsame My tweet
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  What views are available from the Calendar?
                </h4>
                <div className="text-sm mb-2">Daily, Weekly, and Monthly</div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  How do I tag a user on Instagram?
                </h4>
                <div className="text-sm mb-2">
                  You can use @ sign with username in the post
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  No image displayed for Instagram posts
                </h4>
                <div className="text-sm mb-2">
                  Please reach out to the customer support team via the support
                  section.
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  How do I publish an Instagram Story?
                </h4>
                <div className="text-sm mb-2">
                  Instagram does not allow publishing through Social Media
                  Platforms
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Is it possible to edit Instagram posts already published?
                </h4>
                <div className="text-sm mb-2">
                  CloudSocial does not support edit option to already publish
                  posts on Instagram
                </div>
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Errors while posting HUMAN
                </h4>
                <div className="text-sm mb-2">
                  Post comprising video is not supported on LinkedIn
                </div>
                <div className="text-sm mb-2">
                  Text post is not supported on YouTube.
                </div>
                <div className="text-sm mb-2">
                  Post comprising image or animation is not supported on
                  YouTube.
                </div>
                <div className="text-sm mb-2">
                  Facebook post failed. Page Name: you Facebook Page name
                </div>
                <div className="text-sm mb-2">
                  Twitter post failed. Page Name: your twitter page name
                </div>
                <div className="text-sm mb-2">
                  LinkedIn: Failed. Something went wrong. Please try again
                  later.
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Can I publish video on my YouTube channel?
                </h4>
                <div className="text-sm mb-2">
                  Yes, you can publish a post on your YouTube channel with
                  CloudSocial
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  How do I delete YouTube videos?
                </h4>
                <div className="text-sm mb-2">
                  Using the Recall post you can delete your YouTube Vides. To
                  recall the post you can follow below two methods:
                </div>
                <div className="text-sm mb-2">
                  First method:
                  <ul className="list-inside list-disc ml-2">
                    <li>Go to Publish -Calendar - click on History Tab</li>
                    <li>Click on your YouTube Post</li>
                    <li>
                      Then at the right bottom choose Select Status as recall
                      and save
                    </li>
                  </ul>
                </div>
                <div className="text-sm mb-2">
                  Second method:
                  <ul className="list-inside list-disc ml-2">
                    <li>Go to publish- Calendar -then </li>
                    <li>
                      Mouse over on your YouTube post then at the bottom choose
                      Select Status as recall
                    </li>
                  </ul>
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  How do I categorize my YouTube videos with labels?
                </h4>
                <div className="text-sm mb-2">
                  As of now CloudSocial do not categorize YouTube videos with
                  labels
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Character Limit & Format restrictions on Social Networking
                  Platforms
                </h4>
                <br />
                <div className="w-full1 hover-up-5 border-blue-gray-100  bg-blue-50 rounded shadow">
                  <table className="w-full min-w-max table-auto text-left overflow-x-auto">
                    <thead>
                      <tr className="border border-blue-gray-100 bg-blue-50 ">
                        <th className="text-sm font-bold font-heading border px-1 py-1">
                          Channels
                        </th>
                        <th className="text-sm font-bold font-heading border px-1 py-1">
                          Mention/
                          <br />
                          Reply
                        </th>
                        <th className="text-sm font-bold font-heading border px-1 py-1">
                          Post only Text
                        </th>
                        <th className="text-sm font-bold font-heading border px-1 py-1">
                          Post <br />
                          with <br />
                          attachment
                        </th>
                      </tr>
                    </thead>
                    <tbody className="border-b border-blue-gray-100 bg-blue-50">
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Facebook Profile
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          NA
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          NA
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          NA
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Facebook Page
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          8000
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          5000
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          5000
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Facebook Group
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          NA
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          NA
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          NA
                        </td>
                      </tr>

                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Facebook Ad
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          NA
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          NA
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          NA
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Facebook Messenger
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          8000
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          NA
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          NA
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Instagram Business Page
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          2173
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          NA
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          NA
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Twitter Profile
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          280
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          5000
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          5000
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Twitter DM
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          8000
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          NA
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          NA
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          LinkedIn Business Page
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          1250
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          5000
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          5000
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          9800
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          NA
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          5000
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          5000
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Email
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          No Limit
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          NA
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          NA
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Format for uploading a post on Social Networking Platforms.
                </h4>
                <br />

                <div className="w-full hover-up-5 border-blue-gray-100  bg-blue-50 rounded shadow">
                  <table className="w-full min-w-max table-auto text-left ">
                    <thead>
                      <tr className="border  border-blue-gray-100 bg-blue-50 ">
                        <th className="text-sm font-bold font-heading border px-1 py-1">
                          Action
                        </th>
                        <th className="text-sm font-bold font-heading border px-1 py-1">
                          Channels
                        </th>
                        <th className="text-sm font-bold font-heading border px-1 py-1">
                          Attachment type
                        </th>
                        <th className="text-sm font-bold font-heading border px-1 py-1">
                          Format Supported
                        </th>
                      </tr>
                    </thead>
                    <tbody className="border-b border-blue-gray-100 bg-blue-50">
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Post
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Facebook
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Image
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          jpg, jpeg, png
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Video
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          avi, flv, wmv, mp4
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          GIF
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Gif
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Twitter
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Image
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          jpg, jpeg, png
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Video
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          mp4
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          GIF
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Gif
                        </td>
                      </tr>

                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          LinkedIn
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Image
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          jpg, jpeg, png
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Video
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          N/A
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          GIF
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Gif
                        </td>
                      </tr>

                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          YouTube
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Image
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          jpg, jpeg, png
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Video
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          avi, flv, wmv, mp4
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          GIF
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Gif
                        </td>
                      </tr>

                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Comment
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Facebook
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Image
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          jpg, jpeg, png
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Video
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          N/A
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          GIF
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Gif
                        </td>
                      </tr>

                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Twitter
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Image
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          jpg, jpeg, png
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Video
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          mp4
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          GIF
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Gif
                        </td>
                      </tr>

                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          LinkedIn
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Image
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          N/A
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Video
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          N/A
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          GIF
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          N/A
                        </td>
                      </tr>

                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          YouTube
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Image
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          N/A
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Video
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          N/A
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1"></td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          GIF
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          N/A
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br />
                <h3 className="text-lg font-bold font-heading text-center">Ad Manager</h3>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  FB Ad Manage
                </h4>
                <div className="text-sm mb-2">Connect Facebook Ad manager.</div>
                <div className="text-sm mb-2">
                  <ol className="list-inside list-decimal">
                    <li>
                      Create Ad Campaign from the CloudSocial Publish Ad section
                      by following the steps mentioned below:
                      <ol className="list-inside list-alphabet ml-2">
                        <li className="mt-1">
                          Hover your mouse cursor to the “Publish" option
                          available on the left side of your screen and click on
                          “Ad".
                        </li>
                        <li className="mt-1">
                          You can select the category of the campaign as in
                          (​Link Clicks, Reach, Post Engagement)
                        </li>
                        <li>You can set the campaign name.</li>
                        <li className="mt-1">
                          hen you need to select the Ad Account Name (Use your
                          own name or the name of the business you'll advertise.
                          You can change this later).
                        </li>
                        <li className="mt-1">
                          You can set the Audience Type (​Location, Age, Gender,
                          Languages)
                        </li>
                        <li className="mt-1">
                          You can set the Budget on (Daily/ Lifetime budget)
                          with the Start Date and End Date.
                        </li>
                        <li className="mt-1">Click on the “Proceed" button.</li>
                      </ol>
                    </li>
                  </ol>
                  <br />
                  <div>
                    <img
                      className="mt-3"
                      alt="FB_Ad_Manager_1"
                      loading="lazy"
                      src="https://content.cloudsocial.io/wp-content/uploads/faq/FB_Ad_Manager_1.png"
                    />
                    <br />
                    <img
                      className="mt-3"
                      alt="FB_Ad_Manager_2"
                      loading="lazy"
                      src="https://content.cloudsocial.io/wp-content/uploads/faq/FB_Ad_Manager_2.png"
                    />
                  </div>
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Difference between having an Admin role on a Facebook Page and
                  having an Admin role on a Facebook Ad Account
                </h4>
                <div className="text-sm mb-2">
                  There is a difference between being an Admin on a Facebook
                  Page (= administering Facebook Page) and being an Admin on a
                  Facebook Ad Account (= administering Ad Account).
                </div>
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Admin on Facebook Page
                </h4>
                <div className="text-sm mb-2">
                  If you are using Business Manager, you can check on which
                  Facebook Pages you are Admin by following these steps:
                </div>
                <ol className="text-sm list-inside list-decimal ml-2">
                  <li>Select your Business Account</li>
                  <li>Select Business Settings</li>
                  <li>Select People and Assets - People</li>
                  <li>You can check your role(s) on the right side</li>
                </ol>
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="FB_Ad_Manager_3"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/FB_Ad_Manager_3.png"
                  />
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Admin on Facebook Ad Account
                </h4>
                <div className="text-sm mb-2">
                  If you are using Business Manager, you can check whether you
                  are Admin on given Ad Account by following these steps:
                </div>
                <ol className="text-sm list-inside list-decimal ml-2">
                  <li>Go to Business Settings</li>
                  <li>Select Accounts and then Ad accounts on the left</li>
                  <li>Choose corresponding ad account</li>
                  <li>Click on People tab</li>
                  <li>
                    Make sure you're listed among the people managing given ad
                    account
                  </li>
                </ol>
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="FB_Ad_Manager_4"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/FB_Ad_Manager_4.png"
                  />
                </div>
                <h4
                  className="text-md font-bold font-heading mb-2mt-3"
                  id="omnibox"
                >
                  IMPORTANT NOTE: Please note that in order to configure your
                  Facebook Ad Account in CloudSocial (to have your ad comments
                  synced), you need to have role (Advertiser or above) on the Ad
                  Account - having a role (even Admin) on the Facebook Page
                  isn’t enough.
                </h4>
                <hr className="mb-3 mt-3 text-gray-300" />

                <br />
                <h3 className="text-lg font-bold font-heading text-center">
                  Omnibox Related
                </h3>
                <br />
                <div className="text-sm mb-2">
                  If you are handling multiple social media profiles, you know
                  how much time it takes to juggle all of them while also
                  actively participating in every conversation on each Page.
                  Hence, CloudSocial has come up with a solution – Omnibox – an
                  inbox for all your conversations.
                </div>
                <h4 className="text-md font-bold font-heading mb-2mt-3">
                  What is Omnibox
                </h4>
                <div className="text-sm mb-2">
                  Omnibox is a destination where you will be able to access and
                  respond all the mentions and tickets coming from the social
                  media channels which are currently supported by our platform.
                  Following action can be performed under Omnibox:
                </div>
                <h4 className="text-md font-bold font-heading mb-2mt-2">
                  Function in Omnibox
                </h4>
                <ul className="text-sm list-inside list-disc ml-2">
                  <li>
                    You can search any specific ticket mention or keyword in
                    Omnibox
                  </li>
                  <li>
                    You can set filter and categorize data through Ticket
                    Status, Channel, and Date Range.
                  </li>
                  <li>
                    You can arrange it by newest first, Share type, and
                    Priority.
                  </li>
                  <li>
                    You can export the data in XLS and PDF format or directly
                    mail the selected data.
                  </li>
                  <li>
                    An agent can assign mentions to his colleagues who are
                    mapped in the system.
                  </li>
                  <li>
                    Reply to comments on Facebook Page, Twitter profile,
                    LinkedIn Business Page, and YouTube channel page.
                  </li>
                  <li>
                    Reply to inbox messages on Facebook Page Messenger,
                    Instagram DM, Twitter DM and Google Business messaging.
                  </li>
                  <li>Reply to Incoming Emails</li>
                  <li>
                    All users can assign (FYI/Approve) mentions to his
                    colleagues/superiors within the same brand
                  </li>
                </ul>
                <div className="text-sm mb-2">
                  Message with set colors define the status of the messages.
                </div>

                <br />

                {/* <Table className="tableDetail" bordered responsive>
                  <tbody>
                    <tr className="text-sm mb-1" style={{ width: "100px" }}>
                      <td>
                        <div
                          className="text-sm mb-1"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "10px",
                          }}
                        >
                          <div className="approve"></div>
                          <div>Approved</div>
                        </div>
                      </td>
                      <td>
                        <div
                          className="text-sm mb-1"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "10px",
                          }}
                        >
                          <div className="mycomment"></div>
                          <div>My Comment</div>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-sm mb-1" style={{ width: "100px" }}>
                      <td>
                        <div
                          className="text-sm mb-1"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "10px",
                          }}
                        >
                          <div className="feedback"></div>
                          <div>Other Feedback</div>
                        </div>
                      </td>
                      <td>
                        <div
                          className="text-sm mb-1"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "10px",
                          }}
                        >
                          <div className="message"></div>
                          <div>Regular message</div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table> */}

                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="Omnibox_1"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Omnibox_1.png"
                  />
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Mention Management in Omnibox
                </h4>
                <div className="text-sm mb-2">
                  A mention can be assigned by the following options:
                  <ol className="list-inside list-decimal">
                    <li>Role based.</li>
                    <li>Email.</li>
                  </ol>
                </div>
                <div className="text-sm font-bold mb-2">Role based</div>
                <div className="text-sm mb-2">
                  In this option the agent can only assign the mention to the
                  user/role who have the access to the Omnibox.
                </div>
                <ul className="text-sm list-inside list-disc ml-2">
                  <li>
                    In Silver pack agent and Super Admin can assign mention to
                    each other
                  </li>
                  <li>
                    In Gold pack all users including Agent, Super Admin and
                    Brand Manager can assign mention to other Agent, Super Admin
                    and Brand Manager
                  </li>
                  <li>
                    In Platinum pack all users including Agent, Super Admin,
                    Agency Manager and Brand Manager can assign mention to other
                    Agent, Super Admin, Agency Manager and Brand Manager
                  </li>
                </ul>
                <div className="text-sm font-bold mb-2 mt-2">Email</div>
                <div className="text-sm mb-2">
                  In this option the user can email the mention information to
                  all the user working under the same Brand.
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="Omnibox_2"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Omnibox_2.png"
                  />
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Category under the Role-based option
                </h4>
                <div className="text-sm mb-2">
                  Under the role-based option, mentions can be assigned either
                  as an FYI or as an Approval.
                </div>
                <ul className="text-sm list-inside list-disc ml-2 mb-2">
                  <li>
                    If it’s assigned as an FYI, then no revert is expected from
                    the recipient.
                  </li>
                  <li>
                    If it’s assigned for seeking Approval, the workflow is as
                    follow:
                  </li>
                </ul>
                <div className="text-sm mb-2">
                  1. The agent can only seek approval from the role who is
                  authorized to approve.
                </div>
                <div className="text-sm mb-2">
                  2. The Approver has 3 options with regards to each case either
                  he can approve, or approve and respond himself, or he can add
                  his comments or thoughts with regards to the case.
                </div>
                <div className="text-sm mb-2">
                  3. Once an approver has responded with his comments to the
                  case, it will be available to other approvers under the “My
                  Comment” filter and to the agent the under “Others Feedback”
                  filter.
                </div>
                <div className="text-sm mb-2">
                  4. Neither agent nor approver can respond to the mention till
                  the approver approves once it’s approved either the agent or
                  the approver can reply to the mention.
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="Omnibox_3"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Omnibox_3.png"
                    //
                  />
                </div>
                <br />
                <div className="text-sm mb-2">
                  Setting priorities to the mentions
                </div>
                <div className="text-sm mb-2">
                  Yes, we can set the priority to a mention depending upon the
                  criticality. The priority option available are as follow:
                </div>
                <ol className="text-sm list-inside list-decimal ml-2">
                  <li>High</li>
                  <li>Medium</li>
                  <li>Low</li>
                </ol>
                <div className="flex justify-center items-center">
                  <img
                    className=" mt-3"
                    alt="Omnibox_4"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Omnibox_4.png"
                    //
                  />
                </div>
                <br />
                <h6 className="text-md font-bold font-heading mb-2 mt-2">
                  Other Features in Omnibox
                  </h6>
                <ol className="text-sm list-inside list-decimal ml-2">
                  <li>You can set Tags to the incoming mentions</li>
                  <li>You can set emoji to the incoming mentions</li>
                  <li>You set the different statuses to the mentions (Response,
                  In-Progress, Soft-Close and Ignore)</li>
                  <li>You will be able to view the Current Message, Current
                  Status of the Related Post, Chat History, Post Traction, Basic
                  Details, and Social Media Profiles.</li>
                  <li>You can customize your tags in the brand creation section</li>
                </ol>
               
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="Omnibox_5"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Omnibox_5.png"
                  />
                </div>
                <br />
                <h6 className="text-md font-bold font-heading mb-2 mt-2">
                  I want to send a DM to a user, but I can't. Why?
                </h6>
                <div className="text-sm mb-2">Twitter </div>
                <div className="text-sm mb-2">
                  You can start a private conversation or create a group
                  conversation with anyone who follows you. You can also enable
                  receiving direct messages from anyone. More info here.
                </div>
                <div className="text-sm mb-2">
                  Also, you can reply to a tweet an in direct message (DM), but
                  you need to meet the conditions above. You can receive tweets
                  and comments made on your Twitter Profile and also read direct
                  messages under Twitter DM.
                </div>
                <br />
                <h6 className="text-md font-bold font-heading mb-2 mt-2">
                  Can I send a private message to anyone on Facebook? Or To whom
                  can I send a private message on Facebook?
                  </h6>
                <div className="text-sm mb-2">Facebook</div>
                <div className="text-sm mb-2">
                  According to Facebook's own rules, you can send private
                  messages "...to anyone who has sent a message to your Page."
                  In other words, you can't initiate the conversation from your
                  end - you can only send a message to someone who contacted you
                  via private message earlier.
                </div>
                <div className="text-sm mb-2">
                  You can, however, reply in a private message to comment. You
                  can receive comments on any post made by your page, wall post,
                  and direct message under FB Messenger.
                </div>
                <br />
                <h6 className="text-md font-bold font-heading mb-2 mt-2">
                  How often do you synchronize my Facebook page?
                  </h6>
                <div className="text-sm mb-2">
                  On every event like page addition, Omnibox refresh, mention
                  reply, publish a post, post recall.
                </div>
                <br />
                <h6 className="text-md font-bold font-heading mb-2 mt-2">
                  How often do you synchronize items in my Twitter Inbox?
                  </h6>
                <div className="text-sm mb-2">
                  On every event like Twitter DM addition, Omnibox refresh and
                  mention reply.
                </div>
                <br />
                <h6 className="text-md font-bold font-heading mb-2 mt-2">
                  Does CloudSocial support group message on Twitter?
                  </h6>
                <div className="text-sm mb-2">
                  CloudSocial does not support group messages on Twitter.
                </div>
                <br />
                <h6 className="text-md font-bold font-heading mb-2 mt-2">
                  How often are my Instagram comments synced?
                  </h6>
                <div className="text-sm mb-2">
                  On every event like Instagram page addition, Omnibox refresh
                  and mention reply.
                </div>
                <br />
                <h6 className="text-md font-bold font-heading mb-2 mt-2">
                  How often are comments under my videos synced?
                  </h6>
                <div className="text-sm mb-2">
                  On every event like YouTube page addition, Omnibox refresh and
                  mention reply.
                </div>
                <br />
                <h6 className="text-md font-bold font-heading mb-2 mt-2">
                  What can I find in my YouTube Inbox?
                  </h6>
                <div className="text-sm mb-2">
                  Your YouTube Inbox contains all public comments on your
                  videos. By using channel filter in Omnibox you can
                  specifically look at YouTube.
                </div>
                <br />
                <div className="text-md font-bold font-heading mb-2 mt-2">
                  Where are my LinkedIn private messages?
                </div>
                <div className="text-sm mb-2">
                  LinkedIn API doesn't allow us to sync your private messages,
                  so we do not support LinkedIn private messages
                </div>
                <br />
                <div className="text-md font-bold font-heading" id="listen">
                  How far back do you sync LinkedIn comments?
                </div>
                <div className="text-sm mb-2">
                  We don’t sync old comments, we sync comments after adding the
                  page in CloudSocial.
                </div>
                <hr className="mb-3 mt-3 text-gray-300" />

                <br />
                <h3 className="text-lg font-bold font-heading text-center">
                  Listen Related
                </h3>
                <br />
                <h6 className="text-md font-bold font-heading mb-2 mt-2">
                  Social Listen (Keyword search)
                  </h6>
                <div className="text-sm mb-2">
                  Keyword research is the foundation of any online marketing
                  strategy. Before you develop any content, it's important to
                  know what your target market is looking for. Search for words
                  or phrases related to your products or services. The power of
                  keyword research lies in better understanding your target
                  market and how they are searching for your content, services,
                  or products. Keyword research provides you with specific
                  search data that can help you answer questions like:
                </div>
                <ol className="text-sm mb-1 list-inside list-decimal ml-2">
                  <li>What are people searching for?</li>
                  <li>How many people are searching for it?</li>
                  <li>In what format do they want that information?</li>
                </ol>
                <div className="text-sm mb-2">
                  You can enter the keywords your wish to get the result of into
                  the keyword search bar to discover average monthly search
                  volume and similar keywords. With the help of this data, you
                  can target the audience better.
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="mt-3"
                    alt="Omnibox_6"
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/Omnibox_6.png"
                  />
                </div>
                <br />
                <div className="text-sm mb-2" id="pricing">
                  The Keyword Search bar can be found in Listen under Set
                  Keywords. You need to set the keywords as per your desire. All
                  the keyword search results will be reflected on the same
                  screen.
                </div>

                <hr className="mb-3 mt-3 text-gray-300" />
                <br />
                <h3 className="text-lg font-bold font-heading text-center">
                  Pricing and Pack related
                </h3>
                <br />
                <h6 className="text-md font-bold font-heading mb-2 mt-2">
                  Help me choose the best pack according to my requirements?
                  </h6>
                <div className="text-sm mb-2">
                  CloudSocial provides you with 3 different packages. You can
                  select the package which fits your requirements best.
                </div>
                <div className="text-sm mb-2">
                  If you are a small businessman or solopreneur then go for
                  Silver,
                </div>
                <div className="text-sm mb-2">
                  For Brands, we recommend Gold and Platinum for Social, Digital
                  Agencies, and Marketing Agencies.
                </div>

                <br />

                <div className="w-full hover-up-5 border-blue-gray-100 bg-blue-50 rounded shadow">
                  <table className="w-full min-w-max table-auto text-left ">
                    <thead>
                      <tr className="border  border-blue-gray-100 bg-blue-50 ">
                        <th className="text-md font-bold font-heading mb-2 border px-1 py-1">
                          #
                        </th>
                        <th className="text-md font-bold font-heading mb-2 border px-1 py-1">
                          Silver
                        </th>
                        <th className="text-md font-bold font-heading mb-2 border px-1 py-1">
                          Gold
                        </th>
                        <th className="text-md font-bold font-heading mb-2 border px-1 py-1">
                          Platinum
                        </th>
                      </tr>
                    </thead>
                    <tbody className="border-b border-blue-gray-100 bg-blue-50">
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Monthly/ Annually
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <Link href="/pricing" legacyBehavior>
                            <a className="text-blue-500">Silver</a>
                          </Link>
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <Link href="/pricing" legacyBehavior>
                            <a className="text-blue-500">Gold</a>
                          </Link>
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          <Link href="/pricing" legacyBehavior>
                            <a className="text-blue-500">Platinum</a>
                          </Link>
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          No. of Brands
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          1
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          3
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          7
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          No. of Roles
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          2
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          6
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          7
                        </td>
                      </tr>

                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          No. of Users
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          3
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          15
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          50
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          No. of Advance Listen Mentions
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          -
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          2000*
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          10,000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="text-sm mb-2">
                  Note: CloudSocial offers a 30-day free trial - a trial you can
                  take without adding your card details. Features offered in the
                  trial will be as per the plan you choose.  You can sign up for
                  a free trial now!
                </div>

                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">Silver Pack</h4>
                <br />
                <div className="text-sm mb-2">
                  The Silver Pack is &nbsp;
                  <b>
                    <i>best suited for start-ups, SME's, shops, individuals.</i>
                  </b>
                </div>

                <ul className="text-sm list-inside list-disc mb-2 ml-2">
                  <li>
                    The contract/validity for Silver Pack is 30 and 365 days
                    named as Silver 30 or Silver 365.
                  </li>
                  <li>One Brand can be configured in this Pack.</li>
                  <li>Silver pack consists of two roles.</li>
                  <li>
                    Users per role are as follows:
                    <ol className="list-inside list-decimal ml-2">
                      <li>Super Admin – One</li>
                      <li>Agents – Two</li>
                    </ol>
                  </li>
                </ul>

                <div className="text-sm mb-2">
                  The roles actual name can be renamed with a pseudo name for
                  the specific roles as per the business requirement. However,
                  functionalities will be pre-defined as per the role
                  entitlement.
                </div>

                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">Gold Pack</h4>
                <br />
                <div className="text-sm mb-2">
                  The Gold Pack is best suited for brands.
                </div>

                <ul className="text-sm list-inside list-disc mb-2 ml-2">
                  <li>
                    The contract / validity for Gold Pack is 30 and 365 days named
                    as Gold 30 or Gold 365.
                  </li>
                  <li>Three Brands can be configured in this Pack.</li>
                  <li>
                    Gold pack consists of six roles. User per role are as
                    follows:
                  </li>
                  <ol className="text-sm list-inside list-decimal mb-2 ml-2">
                    <li>Super Admin – One</li>
                    <li>Back Office – One</li>
                    <li>Brand Manager – Three</li>
                    <li>Marketing – One</li>
                    <li>Analytics – Three</li>
                    <li>Agents – Six</li>
                  </ol>
                </ul>

                <div className="text-sm mb-2">
                  The role’s actual name can be renamed with a pseudo name for
                  the specific roles as per the business requirement. However,
                  functionalities will be pre-defined as per the role
                  entitlement.
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Platinum Pack
                </h4>
                <br />
                <div className="text-sm mb-2">
                  The Platinum Pack is &nbsp;
                  <b>
                    <i>best suited for social, digital & marketing agencies.</i>
                  </b>
                </div>

                <ul className="text-sm list-inside list-disc mb-2 ml-2">
                  <li>
                    The contract/validity for the Platinum pack is 30 and 365
                    days named as Platinum 30 or Platinum 365.
                  </li>
                  <li>Seven Brands can be configured in this Pack.</li>
                  <li>
                    Platinum Pack consists of seven roles. User per role are as
                    follows:
                  </li>
                  <ol className="text-sm list-inside list-decimal mb-2 ml-2">
                    <li>Super Admin – One</li>
                    <li>Back Office – One</li>
                    <li>Agency Manager – Seven</li>
                    <li>Analytics – Seven </li>
                    <li>Brand Manager – Seven</li>
                    <li>Marketing – Seven</li>
                    <li>Agents – Fourteen</li>
                  </ol>
                </ul>

                <div className="text-sm mb-2">
                  The roles actual name can be renamed with a pseudo name for
                  the specific roles as per the business requirement. However,
                  functionalities will be pre-defined as per the role
                  entitlement.
                </div>

                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Which all social channels can be managed through CloudSocial?
                </h4>
                <br />
                <div className="text-sm mb-2">
                  You can manage your Social Media presence across all these
                  profiles:
                </div>
                <ul className="text-sm list-inside list-disc mb-2 ml-2">
                  <li>Facebook Business Page</li>
                  <li>Facebook Ad Manager</li>
                  <li>Facebook Messenger</li>
                  <li>Facebook Groups</li>
                  <li>Facebook Profile</li>
                  <li>Instagram Business Page</li>
                  <li>Instagram Ad Manager</li>
                  <li>Twitter Profile</li>
                  <li>Twitter DM</li>
                  <li>LinkedIn Business Page</li>
                  <li>Pinterest</li>
                  <li>YouTube Channel Page</li>
                  <li>Email</li>
                  <li>Medium</li>
                  <li>Google My Business</li>
                  <li>Google Analytics</li>
                  <li>Google Business Messaging</li>
                </ul>

                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">Silver </h4>
                <br />
                <div className="w-full hover-up-5 border-blue-gray-100  bg-blue-50 rounded shadow">
                  <table className="w-full min-w-max table-auto text-left ">
                    <thead>
                      <tr className="border  border-blue-gray-100 bg-blue-50 text-center">
                        <th className="text-md font-bold font-heading mb-2 border px-1 py-1">
                          #
                        </th>
                        <th className="text-md font-bold font-heading mb-2 border px-1 py-1">
                          Silver
                          <br />
                          Best suited for <br /> start-ups, SME's, shops,
                          individuals
                        </th>
                      </tr>
                    </thead>
                    <tbody className="border border-blue-gray-100 bg-blue-50">
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm font-bold mb-1 bg-blue-100 px-1 py-1">
                          Publish
                        </td>
                        <td className="text-sm mb-1 bg-blue-100 px-1 py-1"></td>
                      </tr>

                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Posting Rich Media Content
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Bulk Media Upload
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Tagging
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Recall Post
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Global Time Zone Selection
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Audience Targeting
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/close-o.svg"
                            alt="close"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Social Calendar
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/close-o.svg"
                            alt="close"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Insta-Alerts via Email
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/close-o.svg"
                            alt="close"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Create Content Instantly with Crello and Pixabay
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Facebook and Instagram Ad Manager Integrated
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          URL Shortner
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm font-bold mb-1 bg-blue-100 px-1 py-1">
                          ORM - Omnibox & Respond
                        </td>
                        <td className="text-sm mb-1 bg-blue-100 px-1 py-1"></td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Omni Social Channel Inbox
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Quickly Respond with Status – Close, Soft Close, In
                          Progress, Ignore
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Keyword Search
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>

                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Filters – Date Range, Respond Status, Social Channel
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Sorting by Date
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Export to CSV, PDF
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/close-o.svg"
                            alt="close"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Share via Email
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/close-o.svg"
                            alt="close"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Sentiment Tagging
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm font-bold mb-1 bg-blue-100 px-1 py-1">
                          Listen
                        </td>
                        <td className="text-sm mb-1 bg-blue-100 px-1 py-1"></td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Sniff Social Channels for Keywords, Phrases, #Hashtags
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/close-o.svg"
                            alt="close"
                          />
                        </td>
                      </tr>

                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Filter Mentions by Date Range, Media Type, Social
                          Channel
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          In-mention Search
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>

                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Export to CSV, PDF
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/close-o.svg"
                            alt="close"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm font-bold mb-1 bg-blue-100 px-1 py-1">
                          Analytics
                        </td>
                        <td className="text-sm mb-1 bg-blue-100 px-1 py-1"></td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Unified Dashboard
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/close-o.svg"
                            alt="close"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Social Channels Report
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/close-o.svg"
                            alt="close"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Analytics
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/close-o.svg"
                            alt="close"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Sentiment Analysis
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/close-o.svg"
                            alt="close"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">Gold </h4>
                <br />
                <div className="w-full hover-up-5 border-blue-gray-100 bg-blue-50 rounded shadow">
                  <table className="w-full min-w-max table-auto text-left ">
                    <thead>
                      <tr className="border  border-blue-gray-100 bg-blue-50 text-center">
                        <th className="text-md font-bold font-heading mb-2 border px-1 py-1">
                          #
                        </th>
                        <th className="text-md font-bold font-heading mb-2 border px-1 py-1">
                          Gold
                          <br />
                          Best suited for brands
                        </th>
                      </tr>
                    </thead>
                    <tbody className="border border-blue-gray-100 bg-blue-50">
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm font-bold mb-1 bg-blue-100 px-1 py-1">
                          Publish
                        </td>
                        <td className="text-sm mb-1 bg-blue-100 px-1 py-1"></td>
                      </tr>

                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Posting Rich Media Content
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Bulk Media Upload
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Tagging
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Recall Post
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Global Time Zone Selection
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Audience Targeting
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Social Calendar
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Insta-Alerts via Email
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Create Content Instantly with Crello and Pixabay
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Facebook and Instagram Ad Manager Integrated
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          URL Shortner
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm font-bold mb-1 bg-blue-100 px-1 py-1">
                          ORM - Omnibox & Respond
                        </td>
                        <td className="text-sm mb-1 bg-blue-100 px-1 py-1"></td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Omni Social Channel Inbox
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Quickly Respond with Status – Close, Soft Close, In
                          Progress, Ignore
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Keyword Search
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>

                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Filters – Date Range, Respond Status, Social Channel
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Sorting by Date
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Export to CSV, PDF
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Share via Email
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Sentiment Tagging
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm font-bold mb-1 bg-blue-100 px-1 py-1">
                          Listen
                        </td>
                        <td className="text-sm mb-1 bg-blue-100 px-1 py-1"></td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Sniff Social Channels for Keywords, Phrases, #Hashtags
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>

                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Filter Mentions by Date Range, Media Type, Social
                          Channel
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          In-mention Search
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>

                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Export to CSV, PDF
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm font-bold mb-1 bg-blue-100 px-1 py-1">
                          Analytics
                        </td>
                        <td className="text-sm mb-1 bg-blue-100 px-1 py-1"></td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Unified Dashboard
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Social Channels Report
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Analytics
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Sentiment Analysis
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">Platinum</h4>
                <br />
                <div className="w-full hover-up-5 border-blue-gray-100 bg-blue-50 rounded shadow">
                  <table className="w-full min-w-max table-auto text-left ">
                    <thead>
                      <tr className="border border-blue-gray-100 bg-blue-50 text-center">
                        <th className="text-md font-bold font-heading mb-2 border px-1 py-1">
                          #
                        </th>
                        <th className="text-md font-bold font-heading mb-2 border px-1 py-1">
                          Platinum
                          <br />
                          Best suited for
                          <br />
                          social, digital
                          <br />
                          &<br />
                          marketing agencies
                        </th>
                      </tr>
                    </thead>
                    <tbody className="border border-blue-gray-100 bg-blue-50">
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm font-bold mb-1 bg-blue-100 px-1 py-1">
                          Publish
                        </td>
                        <td className="text-sm mb-1 bg-blue-100 px-1 py-1"></td>
                      </tr>

                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Posting Rich Media Content
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Bulk Media Upload
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Tagging
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Recall Post
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Global Time Zone Selection
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Audience Targeting
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Social Calendar
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Insta-Alerts via Email
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Create Content Instantly with Crello and Pixabay
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Facebook and Instagram Ad Manager Integrated
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          URL Shortner
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm font-bold mb-1 bg-blue-100 px-1 py-1">
                          ORM - Omnibox & Respond
                        </td>
                        <td className="text-sm mb-1 bg-blue-100 px-1 py-1"></td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Omni Social Channel Inbox
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Quickly Respond with Status – Close, Soft Close, In
                          Progress, Ignore
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Keyword Search
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>

                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Filters – Date Range, Respond Status, Social Channel
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Sorting by Date
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Export to CSV, PDF
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Share via Email
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Sentiment Tagging
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm font-bold mb-1 bg-blue-100 px-1 py-1">
                          Listen
                        </td>
                        <td className="text-sm mb-1 bg-blue-100 px-1 py-1"></td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Sniff Social Channels for Keywords, Phrases, #Hashtags
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>

                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Filter Mentions by Date Range, Media Type, Social
                          Channel
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          In-mention Search
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>

                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Export to CSV, PDF
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm font-bold mb-1 bg-blue-100 px-1 py-1">
                          Analytics
                        </td>
                        <td className="text-sm mb-1 bg-blue-100 px-1 py-1"></td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Unified Dashboard
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Social Channels Report
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Analytics
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Sentiment Analysis
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Comparison of all three packs.
                </h4>
                <br />
                <div className="w-full hover-up-5 border-blue-gray-100  bg-blue-50 rounded shadow">
                  <table className="w-full min-w-max table-auto text-left ">
                    <thead>
                      <tr className="border  border-blue-gray-100 bg-blue-50 text-center">
                        <th className="text-md font-bold font-heading mb-2 border px-1 py-1">
                          #
                        </th>
                        <th className="text-md font-bold font-heading mb-2 border px-1 py-1">
                          Gold
                          <br />
                          Best suited for brands
                        </th>
                        <th className="text-md font-bold font-heading mb-2 border px-1 py-1">
                          Gold
                          <br />
                          Best suited for brands
                        </th>
                        <th className="text-md font-bold font-heading mb-2 border px-1 py-1">
                          Gold
                          <br />
                          Best suited for brands
                        </th>
                      </tr>
                    </thead>
                    <tbody className="border border-blue-gray-100 bg-blue-50">
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Publish
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 px-1 py-1"></td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Posting Rich Media Content
                        </td>
                        <td className="text-sm bg-blueGray-100 border-r px-1 py-1 ">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                        <td className="text-sm bg-blueGray-100 border-r px-1 py-1">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                        <td className="text-sm bg-blueGray-100 border-r px-1 py-1 ">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Bulk Media Upload
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Tagging
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Recall Post
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Global Time Zone Selection
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Audience Targeting
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Social Calendar
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Insta-Alerts via Email
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Create Content Instantly with Crello and Pixabay
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Facebook and Instagram Ad Manager Integrated
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          URL Shortner
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          ORM - Omnibox & Respond
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 px-1 py-1"></td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Omni Social Channel Inbox
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Quickly Respond with Status – Close, Soft Close, In
                          Progress, Ignore
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Keyword Search
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>

                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Filters – Date Range, Respond Status, Social Channel
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Sorting by Date
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Export to CSV, PDF
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Share via Email
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Sentiment Tagging
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Listen
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 px-1 py-1"></td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Sniff Social Channels for Keywords, Phrases, #Hashtags
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>

                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Filter Mentions by Date Range, Media Type, Social
                          Channel
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          In-mention Search
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>

                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Export to CSV, PDF
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border border-blue-gray-100 bg-blue-50">
                        <td className="text-sm font-bold mb-1 bg-blueGray-100 px-1 py-1">
                          Analytics
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 px-1 py-1"></td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Unified Dashboard
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Social Channels Report
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Analytics
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img  
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          Sentiment Analysis
                        </td>
                        <td className="text-sm bg-blueGray-100 px-1 py-1 flex justify-around">
                          <img
                            className="w-6 h-5 mr-2"
                            src="/assets/imgs/icons/check-o.svg"
                            alt="check"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div> */}

                <hr className="mb-3 mt-3 text-gray-300" />
                <br />

                <h3 className="text-lg font-bold font-heading text-center">
                  Payment and Subscription Related
                </h3>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Do you need my credit/ Debit card information to start a
                  trial?
                </h4>
                <div className="text-sm mb-2">
                  No, we don’t need your credit card details to start a 30-day
                  free trial. However, once your free trial is completed, you
                  will need to subscribe to one of our paid packs – Silver pack,
                  Gold pack, or Platinum Pack.
                </div>
                <br />

                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Is there a CloudSocial Free Account
                </h4>
                <div className="text-sm mb-2">
                  CloudSocial is a subscription-based platform and offers a
                  30-day free trial. We offer customers the ability to manage
                  all of their social media channels from one place. The
                  features available during the trial will vary on the plan you
                  select. You can start your free trial right now!
                </div>

                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Is there any limitation during the free trial?
                </h4>
                <div className="text-sm mb-2">
                  During the trial, the functionality will be as per the pack
                  chosen. The number of mentions will be as per the respective
                  Trial pack entitlements.
                </div>
                <div className="text-sm mb-2">
                  At the end of your trial pack, your data and setup remain
                  intact provided you subscribe to a paid pack. You can log in
                  and select a plan by subscribing to continue the service.
                </div>
                <br />

                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Can I renew my free trial with CloudSocial?
                </h4>
                <div className="text-sm mb-2">
                  Currently, we do not have an option to renew the free trial.
                  You can subscribe to a monthly or annual pack at the end of
                  the Trial period.
                </div>
                <br />

                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Can I subscribe to paid plans during a free trial?
                </h4>
                <div className="text-sm mb-2">
                  Yes, you can subscribe to paid plans anytime during the free
                  trial. You can pay by credit card or debit card. You can also
                  contact us if you need any help in subscribing from our
                  support team.
                </div>

                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">Silver </h4>
                <div className="w-full hover-up-5 border-blue-gray-100 rounded shadow">
                  <table className="w-full min-w-max table-auto text-left ">
                    <thead>
                      <tr className="border border-blue-gray-100 bg-blue-50 ">
                        <th className="text-md font-bold font-heading mb-2 border px-1 py-1">
                          Approved and Publish
                        </th>
                        <th className="text-md font-bold font-heading mb-2 border px-1 py-1">
                          From Trial Silver
                        </th>
                        <th className="text-md font-bold font-heading mb-2 border px-1 py-1">
                          From Trial Gold
                        </th>
                      </tr>
                    </thead>
                    <tbody className="border-b border-blue-gray-100 bg-blue-50">
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm font-bold mb-1 bg-blueGray-100 border px-1 py-1">
                          To Silver 30
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          YES - immediate
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          YES - immediate
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm font-bold mb-1 bg-blueGray-100 border px-1 py-1">
                          To Silver 365
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          YES - immediate
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          YES - immediate
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm font-bold mb-1 bg-blueGray-100 border px-1 py-1">
                          To Gold 30
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          YES - immediate
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          YES - immediate
                        </td>
                      </tr>
                      <tr className="px-3 py-3 border-b border-blue-gray-100 bg-blue-50">
                        <td className="text-sm font-bold mb-1 bg-blueGray-100 border px-1 py-1">
                          To Gold 365
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          YES - immediate
                        </td>
                        <td className="text-sm mb-1 bg-blueGray-100 border px-1 py-1">
                          YES - immediate
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  How do I download my invoice?
                </h4>
                <div className="text-sm mb-2">
                  The invoice is emailed to you automatically. Kindly check the
                  inbox of your registered email id. You can also find in the
                  Account Management portal of FastSpring, the link for the same
                  is in the activation success email.
                </div>
                <ol className="text-sm mb-1 list-inside list-alphabet ml-2">
                  <li>Click on the link Manage Your Orders in the Email</li>
                  <li>You will be redirected to the Fast spring website</li>
                  <li>
                    Enter your registered email Id for confirmation and click on
                    continue
                  </li>
                  <li>
                    Open the email received and click on “Manage Your Orders”
                  </li>
                  <li>A dashboard will open</li>
                </ol>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  How do I change my billing details?
                </h4>
                <div className="text-sm mb-2">
                  Please contact support for the same.
                </div>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  How do I update my credit card details?
                </h4>

                <div className="text-sm mb-2">
                  At the time of checkout, you can change your card details,
                  even if you have stored them.
                </div>
                <div className="text-sm mb-2">
                  1. You can also open the Email which you received at the time
                  of activation success.
                </div>
                <ol className="text-sm mb-2 list-inside list-alphabet ml-2">
                  <li>Click on the link Manage Your Orders in the Email</li>
                  <li>You will be redirected to the Fast spring website</li>
                  <li>
                    Enter your registered email Id for confirmation and click on
                    continue
                  </li>
                  <li>
                    Open the email received and click on “Manage Your Orders”
                  </li>
                  <li>A dashboard will open</li>
                  <li>Customer can manage their credit card detail</li>
                </ol>

                <br />
                <h6 className="text-md font-bold font-heading mb-2 mt-2">
                  How can I change my payment method?
                </h6>
                <div className="text-sm mb-2">
                  1. You can select the payment method at the time of checkout.
                </div>
                <div className="text-sm mb-2">
                  2. You can also open the Email which you received at the time
                  of activation success.ut.
                </div>
                <ol className="text-sm mb-2 list-inside list-alphabet ml-2">
                  <li>Click on the link Manage Your Orders in the Email</li>
                  <li>You will be redirected to the Fast spring website</li>
                  <li>
                    Enter your registered email Id for confirmation and click on
                    continue
                  </li>
                  <li>
                    Open the email received and click on “Manage Your Orders”
                  </li>
                  <li>A dashboard will open</li>
                  <li>Customer can manage their credit card detail</li>
                </ol>

                <br />
                <h6 className="text-md font-bold font-heading mb-2 mt-2">
                  Why was my credit card declined? My PayPal payment didn't go
                  through. What should I do?
                  </h6>
                <div className="text-sm mb-2">
                  In case you see the message saying the credit card was
                  declined, there might be several reasons for that. Based on
                  our experience, in most cases, there are either insufficient
                  funds on the bank account, or your bank is blocking foreign
                  transactions on your bank account.
                </div>
                <div className="text-sm mb-2">
                  In both cases, we recommend first to check with your bank -
                  check whether you have enough funds on the account, or whether
                  your bank is blocking payments abroad.
                </div>
                <div className="text-sm mb-2">
                  If none of the above is the case, drop us a message, we'll
                  have a look If none of above is the case, drop us a message,
                  we’ll have a look 😉
                </div>

                <br />
                <h6 className="text-md font-bold font-heading mb-2 mt-2">
                  Why do I pay VAT/GST? Why do I see a FastSpring checkout
                  window?
                  </h6>
                <div className="text-sm mb-2">
                  FastSpring is the reseller of CloudSocial. This means that
                  FastSpring is the merchant and seller of record for the sale
                  of our products. FastSpring will collect all applicable taxes
                  from the customers, and report and pay those taxes to the
                  appropriate taxation authorities.
                </div>
                <div className="text-sm mb-2">
                  Most sales in the EU and some specific other geographic
                  locations require us to collect and remit VAT or GST to the
                  appropriate authorities. Tax rates differ by country, and
                  customers in some locations can enter their VAT IDs as part of
                  the checkout process if they are exempt from payment of the
                  tax.
                </div>
                <br />
                <h6 className="text-md font-bold font-heading mb-2 mt-2">
                  Do I have to pay GST in India? Does the price include GST in
                  India?
                  </h6>
                <h6 className="text-md font-bold font-heading mb-2 mt-2">
                  India GST Exemption
                  </h6>

                <div className="text-sm mb-2">
                  Eligible businesses making digital purchases can avoid paying
                  GST by providing their valid GST ID at the time of purchase.
                  For those providing a GST ID, FastSpring does not collect GST,
                  and the GST ID appears on the invoice we provide at purchase
                  completion.
                </div>
                <h6 className="text-md font-bold font-heading mb-2 mt-2">
                  FastSpring's Goods and Services Tax Number for India
                  </h6>
                <h6 className="text-md font-bold font-heading mb-2 mt-2">
                  Our tax ID for India is 9917USA29028OS1.
                  </h6>
                <div className="text-sm mb-1">Link for human :</div>
                <div className="text-sm mb-1">
                  <a
                    href="https://community.fastspring.com/s/article/About-VAT-and-Sales-Tax#indiaexemption"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-500 mb-1"
                  >
                    https://community.fastspring.com /s/article/
                    About-VAT-and-Sales-Tax#indiaexemption
                  </a>
                </div>

                <ol className="text-sm mb-2 ml-2">
                  <ul>- Africa</ul>
                  <ul>- Americas</ul>
                  <ul>- Asia</ul>
                  <ul>- Europe</ul>
                  <ul>- Oceania</ul>
                </ol>

                <br />
                <h6 className="text-md font-bold font-heading mb-2 mt-2">
                  Can I switch from PayPal to a credit card?
                </h6>
                <div className="text-sm mb-1">
                  You can select from the available payment methods at the time
                  of checkout. <br /> You can also open the Email which you
                  received at the time of activation success.
                </div>
                <ol className="list-inside list-alphabet ml-2">
                  <li className="text-sm mb-1">
                    Click on link Manage Your Orders in the Email
                  </li>
                  <li className="text-sm mb-1">
                    You will be redirected to Fast spring website
                  </li>
                  <li className="text-sm mb-1">
                    Enter your registered email Id for confirmation and click on
                    continue
                  </li>
                  <li className="text-sm mb-1">
                    Open the email received and click on “Manage your Orders”
                  </li>
                  <li className="text-sm mb-1">A dashboard will open</li>
                  <li className="text-sm mb-1">
                    Customer can manage their credit card detail
                  </li>
                </ol>
                <br />
                <h6 className="text-md font-bold font-heading mb-2 mt-2">
                  Can I switch from a credit card to a PayPal account?
                </h6>
                <div className="text-sm mb-1">
                  You can select from the available payment methods at the time
                  of checkout. <br />
                  You can also open the Email which you received at the time of
                  activation success.
                </div>
                <ol className="list-inside list-alphabet ml-2">
                  <li className="text-sm mb-1">
                    Click on link Manage Your Orders in the Email
                  </li>
                  <li className="text-sm mb-1">
                    You will be redirected to Fast spring website
                  </li>
                  <li className="text-sm mb-1">
                    Enter your registered email Id for confirmation and click on
                    continue
                  </li>
                  <li className="text-sm mb-1">
                    Open the email received and click on “Manage your Orders”
                  </li>
                  <li className="text-sm mb-1">A dashboard will open</li>
                  <li className="text-sm mb-1">
                    Customer can manage their credit card detail
                  </li>
                </ol>
                <br />
                <h6 className="text-md font-bold font-heading mb-2 mt-2">
                  When will I be billed for my annual subscription?
                </h6>
                <div className="text-sm mb-1">
                  Billing of annual subscription is based on the same principle
                  as in case of monthly billing – imagine you start your annual
                  subscription on, let’s say, March 25th, 2018. As you complete
                  the subscription process, you’ll be billed the same day and
                  the next billing date is exactly one year from the start – on
                  March 24th, 2019.
                </div>
                <div className="text-sm mb-1">
                  Don’t worry however – we’ll send you an email 1 week before
                  the annual subscription is supposed to be renewed, so that you
                  have time to manage everything.
                </div>
                <br />
                <div className="text-md font-bold font-heading mb-2 mt-2">
                  Administration & Docs
                </div>
                <div className="text-sm mb-1">
                  Find the administration docs below:
                </div>
                <div className="text-sm mb-1">Privacy policy:</div>
                <div className="text-sm mb-1">
                  <a
                    href="https://content.iubenda.com/privacy-policy/84213336"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 mb-1"
                  >
                    https://content.iubenda.com/privacy-policy/84213336
                  </a>
                </div>
                <div className="text-sm mb-1">Terms of service:</div>
                <div className="text-sm mb-1">
                  <a
                    href="https://content.iubenda.com/terms-and-conditions/84213336"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 mb-1"
                  >
                    https://content.iubenda.com/terms-and-conditions/84213336
                  </a>
                </div>
                <div className="text-sm mb-1">
                  Everything you need to know about CloudSocial & GDPR widget at
                  bottom of website which pops up
                </div>
                {/* <div className="flex justify-center items-center">
                  <img
                    
                    className="mt-3"
                    alt={data.alt}
                    loading="lazy"
                    src="https://content.cloudsocial.io/wp-content/uploads/faq/GDPR_widget.png"
                    
                  />
                </div> */}
                <div className="text-sm mt-2">
                  Info on CloudSocial Affiliate program:
                </div>
                <div className="text-sm mb-1">
                  <a
                    href="https://cloudsocial.postaffiliatepro.com/"
                    target="_blank"
                    className="  prefinery-form-cta"
                  >
                    https://cloudsocial.postaffiliatepro.com /affiliates/
                  </a>
                </div>
                <br />
                <h6 className="text-md font-bold font-heading mb-2 mt-2">
                  What is the Refund policy? How can I cancel my CloudSocial
                  subscription?
                </h6>
                <div className="text-sm mb-1">
                  CloudSocial does not allow you to cancel your subscription.
                  You can continue to use the platform till the expiry of your
                  current pack.
                </div>
                <br />
                <div className="text-md font-bold font-heading mb-2 mt-2">
                  I need invoice copy?
                </div>
                <div className="text-sm mb-1">
                  We mail all invoices to you. Kindly check your inbox of your
                  registered email id. You can also find in the Account
                  Management portal of FastSpring, the link for the same is in
                  activation success email.
                </div>
                <ol className="text-sm mb-1 list-inside list-alphabet ml-2">
                  <li>Click on link Manage Your Orders in the Email</li>
                  <li>You will be redirected to Fast spring website</li>
                  <li>
                    Enter your registered email Id for confirmation and click on
                    continue
                  </li>
                  <li>
                    Open the email received and click on “Manage your Orders”
                  </li>
                  <li>A dashboard will open</li>
                </ol>
                <br />
                <div className="text-md font-bold font-heading mb-2 mt-2">
                  I need an invoice but I've already cancelled my account. How
                  should I proceed?
                </div>
                <div className="text-sm mb-1">
                  If you need an older invoice, for account that you’ve already
                  cancelled in the past, then first we recommend to check your
                  email inbox (and spam box, as well), since we send you all the
                  invoices directly to your email. The email would have come
                  from
                  <a
                    href="mailto:support@cloudsocial.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 mb-1"
                  >
                    &nbsp; support@cloudsocial.io
                  </a>
                </div>
                <div className="text-sm mb-1">
                  If you did not find the invoice you need, then drop us an
                  email and we’ll search the universe to find that document for
                  you 🙂
                </div>
                <div className="text-sm mb-1">
                  It would be awesome if you include email of your account or
                  the name of the page so that we can find it easily. Thanks!
                </div>
                <br />
                <div className="text-md font-bold font-heading mb-2 mt-2">
                  Which means of payment do you accept?
                </div>
                <div className="text-sm mb-1">
                  FastSpring accepts a wide variety of payment methods from our
                  customers. The payment methods available vary depending on the
                  customer’s location and the type of transaction being
                  processed. <br /> We accept Visa, MasterCard, American
                  Express. <br /> If you can’t pay online, please send an email
                  to
                  <a
                    href="mailto:support@cloudsocial.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 mb-1"
                  >
                    &nbsp; support@cloudsocial.io
                  </a>
                </div>
                <div className="text-sm mb-1">
                  (don’t forget to include how many accounts you’d like to add!
                  🙂"
                </div>
                <div className="text-sm mb-1">Human –</div>

                <div className="text-sm mb-1">
                  <a
                    href="https://community.fastspring.com/s/article/Payment-Methods-Accepted-by-FastSpring"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 mb-1"
                  >
                    https://community.fastspring.com/s/
                    article/Payment-Methods-Accepted-by-FastSpring
                  </a>
                </div>
                <br />
                {/* <div className="text-md font-bold font-heading mb-2 mt-2">
                  Is CloudSocial available in languages other than English?
                </div>
                <div className="text-sm mb-1">
                  As of now we are available in English. However, we are working
                  on adding different languages in which the platform will be
                  available in.
                </div>
                <br />
                <div className="text-md font-bold font-heading mb-2 mt-2">
                  I wish to delete my Account with CloudSocial?
                </div>
                <div className="text-sm mb-1">
                  We request you to contact out support on
                  <a
                    href="mailto:support@cloudsocial.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 mb-1"
                  >
                    &nbsp; support@cloudsocial.io
                  </a>
                </div>
                <br />
                <div className="text-md font-bold font-heading mb-2 mt-2">
                  How can I deal with time zones in CloudSocial?
                </div>
                <div className="text-sm mb-1">
                  You can define your time zone while setting up your profile in
                  CloudSocial.
                </div>
                <br />
                <div className="text-md font-bold font-heading mb-2 mt-2">
                  How to enable/disable two-factor authentication (2FA) in
                  CloudSocial?
                </div>
                <div className="text-sm mb-1">
                  This Feature is currently not available.
                </div> */}
                <div className="text-md font-bold font-heading mb-2 mt-2">
                  I just subscribed, but I still see I'm on trial, why is that?
                </div>
                <div className="text-sm mb-1">
                  Probably, the payment did not go through the gateway. Kindly
                  raise a ticket and will get back to you shortly.
                </div>
                <br />
                <div className="text-md font-bold font-heading mb-2 mt-2">
                  How can I subscribe to CloudSocial?
                </div>
                <div className="text-sm mb-1" id="login">
                  Just sign up for a free trial and within your trial account
                  you can subscribe at any time. You can pay by credit card and
                  other payment options available as per your country. You can
                  also Contact us if you prefer help in subscribing from our
                  Support team.
                </div>
                <hr className="mb-3 mt-3 text-gray-300" />
                <br />

                <h3 className="text-lg font-bold font-heading text-center">
                  Login Related
                </h3>
                <br />
                <div className="text-md font-bold font-heading mb-2 mt-2">
                  I can't log in to CloudSocial?
                </div>
                <div className="text-sm mb-1">
                  If you’re facing a problem with login on desktop, there may be
                  several reasons of this issue.
                </div>
                <div className="text-md font-bold font-heading mb-2 mt-2">Step 1:</div>
                <div className="text-sm mb-1">
                  First, please make sure you’re using one of the supported
                  browsers and check if it’s up to date:
                </div>
                <ul className="text-sm list-inside list-disc mb-2 ml-2">
                  <li>Google Chrome</li>
                  <li>Microsoft Edge</li>
                  <li>Mozilla Firefox</li>
                  <li>Safari</li>
                  <li>
                    (Internet Explorer is no longer supported by Microsoft, thus
                    we no longer support it either.)
                  </li>
                </ul>
                <div className="text-md font-bold font-heading mb-2 mt-2">Step 2:</div>
                <div className="text-sm mb-1">
                  If your browser is up to date, try to delete the cache of your
                  browser and log in again. Hopefully you’ll be able to log in
                  then. Also please make sure AdBlock or any other browser
                  extension that may be blocking JavaScript from running, is
                  disabled. You can also set up the exception in AdBlock
                  settings, for following domain:
                  <a
                    href="https://app.cloudsocial.io/"
                    target="_blank"
                    className=" "
                  >
                    &nbsp; https://app.cloudsocial.io/
                  </a>
                </div>
                <div className="text-md font-bold font-heading mb-2 mt-2">Step 3:</div>
                <div className="text-sm mb-1">
                  If you’re still facing problem with login, try to open this
                  link and remove the Manager app from the list. Open
                  CloudSocial in a new tab and try to log in, making sure you
                  grant all the permissions.
                </div>
                <div className="text-md font-bold font-heading mb-2 mt-2">Step 4:</div>
                <div className="text-sm mb-1">
                  If you still can’t log in, there may be several reasons. It
                  can be due to the security settings of your network. If you’re
                  working from a computer that is connected to the corporate
                  network, you may need to contact your IT department to
                  whitelist CloudSocial in the network. This typically applies
                  to banks, non-governments organizations, etc.
                </div>
                <div className="text-md font-bold font-heading mb-2 mt-2">Step 5:</div>
                <div className="text-sm mb-1">
                  If you’ve been through all this and still can’t log in, don’t
                  give up! Open the Console of your browser (Ctrl+Shift+J) combo
                  or F12 key on Windows, or Cmd+Shift+J on Mac). Then open
                  CloudSocial, try to log in and take a screenshot (or record a
                  video) for us. We’ll be happy to look into what’s happening
                  there.
                </div>
                <div className="text-md font-bold font-heading mb-2 mt-2">Step 6:</div>
                <div className="text-sm mb-1">Special DNS use case</div>
                <div className="text-sm mb-2">
                  If you’re doing a web development and you’re using a localhost
                  on your PC, there may be a problem with opening certain
                  webpages, such as CloudSocial, for example. Wamp, EasyPHP
                  Deserver and similar tools can block ports or re-route the
                  connection, which can cause the inability to load some
                  webpages. If you´re facing this problem, try to turn off your
                  localhost software and login again.
                </div>
                <div className="text-sm mb-1">
                  If you’re on a network, on which you had to set DNS manually,
                  rather than obtaining it automatically, there may be a problem
                  with loading CloudSocial as well (screenshot below). In this
                  case, switching the address to a Google address can help.
                  Here’s an article where you can find the settings and how to
                  change them.
                </div>
                <div className="text-md font-bold font-heading mb-2 mt-2">
                  Addresses should be:
                </div>
                <ul className="text-sm list-inside list-disc mb-2 ml-2">
                  <li>Google primary DNS: 8.8.8.8.</li>
                  <li>Alternative server: 8.8.4.4.</li>
                </ul>
                <div className="text-sm mb-1">
                  If you’re facing problem with login on your mobile, there may
                  be several reasons:
                </div>
                <div className="text-sm mb-2">
                  First, make sure you're logged in with an appropriate Facebook
                  profile in your Facebook mobile app. If you're switching
                  between multiple profiles, please double check you're
                  connected with the one you use to connect with, to
                  CloudSocial. Then try again.
                </div>
                <div className="text-sm mb-2">
                  if the correct Facebook profile is selected, try to log out
                  and log back in in your Facebook mobile app and then try
                  again.
                </div>
                <div className="text-sm mb-1">if this still doesn’t help:</div>
                <div className="text-sm mb-2">
                  uninstall and install it again open Facebook app first, sign
                  in with appropriate Facebook Profile
                </div>
                <div className="text-sm mb-2">
                  If there’s still a problem with login, feel free to contact us
                  with the as many details of your setup and whether you’ve
                  already tried some of the above, and we’ll be happy to help!
                </div>
                <ul>
                  <li
                    className="text-md font-bold font-heading mb-2mt-2"
                    id="referral"
                  >
                    This page/account is deactivated." Why do I see this
                    message? What does it mean?
                  </li>
                  <div className="text-sm mb-1">
                    You will receive this message when your trial has expired
                  </div>
                </ul>
                <hr className="mb-3 mt-3 text-gray-300" />
                <br />

                <h3 className="text-lg font-bold font-heading text-center">
                  Referral Related
                </h3>
                <br />
                <div className="text-sm mb-1">
                  Please visit cloudsocial.io and click on Refer Us tab to get
                  details on our affiliate program.
                </div>
                <br />

                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Do I have to pay to register as an affiliate?
                </h4>
                <div className="text-sm mb-1">
                  No. You can join CloudSocial’s Affiliate Program for free!
                </div>

                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  How do I register myself for CloudSocial’s Affiliate Program?
                </h4>
                <div className="text-sm mb-1">
                  Please visit cloudsocial.io and click on Refer Us tab to get
                  details on our affiliate program.
                </div>

                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Are there any restrictions as to how I can promote
                  CloudSocial?
                </h4>
                <div className="text-sm mb-1">Yes</div>
                <ol className="text-sm mb-2 list-inside list-decimal ml-2">
                  <li>
                    Spamming is not allowed. If you are found spamming, your
                    affiliate account will be closed immediately.
                  </li>
                  <li>
                    You are not allowed to run ads on the following brand
                    keywords - 'CloudSocial', Cloud Social, 'CloudSocial', and
                    cloud social and competitor brand keywords - 'Hootsuite',
                    'buffer', 'sprout social', 'Agorapulse' and so on…
                  </li>
                  <li>
                    You are not allowed to create and promote any coupons in the
                    name of CloudSocial. If you are found creating and promoting
                    any coupons, your account will be suspended, and your
                    commission will be denied.
                  </li>
                  <li>
                    You are not allowed to sign up for CloudSocial using your
                    own referral link to get a commission. If you're found to be
                    doing so, your commission will be denied, and your account
                    will be suspended permanently.
                  </li>
                </ol>

                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  Why has my commission not been credited?
                </h4>
                <div className="text-sm mb-1">
                  If you are an existing affiliate, please log in to your
                  affiliate account for details
                </div>
                <div className="text-sm mb-1">
                  However in exceptional circumstances
                </div>
                <div className="text-sm mb-1">
                  We hold your commission in the following cases:
                </div>
                <ol className="text-sm mb-1 list-inside list-decimal ml-2">
                  <li>
                    You have been spamming and/or using other illegal methods to
                    promote CloudSocial.
                  </li>
                  <li>
                    You have been subscribing to CloudSocial using your own
                    subscription link to get a discount.
                  </li>
                  <li>
                    You have been violating the CloudSocial affiliate terms.
                  </li>
                </ol>
                <div className="text-sm mb-1">
                  In the above-mentioned cases, your affiliate account will be
                  closed immediately, and you'll loose all commissions that you
                  have on balance.
                </div>

                <hr className="mb-3 mt-3 text-gray-300" />
                <br />

                <h3 id="support" className="text-lg font-bold font-heading text-center text-center">
                  Support Related
                </h3>
                <br />
                <h4 className="text-md font-bold font-heading mb-2 mt-2">
                  What kind of support do you provide?
                </h4>
                <div className="text-sm mb-1">
                  We take supporting you very seriously. Should you need any
                  help in configuring or using CloudSocial we are there to
                  support you. You can reach our support team through the
                  Support Tab inside of CloudSocial. You can raise a ticket,
                  chat, or send us an email. We are open 24x7x365 days a year.
                  This is across all our packs.
                </div>
                <hr className="mb-3 mt-3 text-gray-300" />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Compendium;
