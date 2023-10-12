import React from "react";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import MarkdownRenderer from "../../components/elements/MarkdownRenderer";
import style from "./markdown-styles.module.css";
import gfm from "remark-gfm";
import Head from "next/head";
import Image from "next/image";
import { getSingleBlog } from "../../lib/apiCall";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookShareButton,
  GithubIcon,
  HatenaIcon,
  InstagramIcon,
  InstapaperIcon,
  InstapaperShareButton,
  LineIcon,
  LinkedinIcon,
  LinkedinShareButton,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  SpotifyIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  TwitterShareButton,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WhatsappShareButton,
  WorkplaceIcon,
} from "next-share";
import Ebook from "../../components/elements/Ebook";

function LinkRenderer(props) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  );
}

// export async function getServerSideProps(context) {
export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  // console.log(slug);
  try {
    // const myHeaders = new Headers();
    // myHeaders.append("Authorization", `${process.env.BEARER_TOKEN}`);

    // const requestOptions = {
    //   method: "GET",
    //   headers: myHeaders,
    //   redirect: "follow",
    // };

    // const response = await fetch(
    //   `${process.env.STRAPI_URL}/Blogs?filters[slug][$eq]=${slug}&populate=*`,
    //   requestOptions
    // );

    // if (!response.ok) {
    //   throw new Error(`HTTP error! Status: ${response.status}`);
    // }

    // const data = await response.json(); // Parse the response as JSON

    const data = await getSingleBlog(slug);

    //  console.log(data);

    return { props: { data, slug } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } }; // Handle errors gracefully
  }
};

const BlogSingle = ({ data, slug }) => {
  const url = process.env.DOMAIN_URL + "/blog/" + slug;
  // console.log("🚀 ~ file: [slug].js:90 ~ url:", url);
  // console.log("BlogSingle", data);
  //   React.useEffect(() => {
  //     let config = {
  //       method: "get",
  //       maxBodyLength: Infinity,
  //       url: `http://localhost:1337/api/Blogs?filters[slug][$eq]=${slug}`,
  //       headers: {
  //         Authorization:
  //           "Bearer 3e6fce4f34c4fff7a81f239ef287b2489faff60413f555ece563524e6b58de423bfb578960ea8485c561a9c8b65e51b66a90c33da066be5183b86b278e9b33aba777b6b51d4c350dffd7c42d5c1ccccef186435a61aca59c103269c9cd4153b9878abf8660fc3f1b0dbc243fdb2732104be82fbe17157b40e8df79ed0b14d99c",
  //       },
  //     };

  //     axios
  //       .request(config)
  //       .then((response) => {
  //         console.log(JSON.stringify(response.data), "single blog");
  //         setblogDetails(response.data.data[0]);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" name="CloudSocial Solution" />
        <title>{data.data[0].attributes.metaTitle}</title>
        <meta
          name="description"
          content={`${data.data[0].attributes.metaDescription}`}
        />
      </Head>
      <Layout>
        <section className="pb-20">
          <div className="flex justify-center">
            <img
              className="w-2/3 h-128 object-cover1 rounded relative"
              src={`https://strapi.cloudsocial.io${data.data[0].attributes.thumbnail.data[0].attributes.url}`}
              alt={data.data[0].attributes.title}
            />
          </div>
          <div className="container">
            <div className="text-center">
              <h2 className="text-4xl md:text-4xl mt-4 text-blue-400 font-bold font-heading">
                {data.data[0].attributes.title}
              </h2>
            </div>
            <div className="flex justify-end px-2">
              <div className="text-center mb-6">
                <span className="text-base md:text-lg">
                  <div className="flex">
                    <span className="text-base md:text-lg px-2">
                      <Link
                        href={`/categories/${data.data[0].attributes.categories}`}
                        legacyBehavior
                      >
                        <a className="text-blueGray-200 hover:underline">
                          <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">
                            {data.data[0].attributes.categories}
                          </span>
                        </a>
                      </Link>
                    </span>

                    <div className="flex items-center">
                      <svg
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        style={{
                          color: "gray",
                          marginTop: "1px",
                          display: "initial",
                        }}
                      >
                        <path
                          fill="#a8a79f"
                          d="M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-blueGray-500 text-xs px-1 flex items-center">
                      {data.data[0].attributes.postBy}
                    </span>
                    <div className="flex items-center px-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={20}
                        height={20}
                        style={{
                          color: "gray",
                          marginTop: "1px",
                          display: "initial",
                        }}
                      >
                        <path
                          d="M2,19c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3v-8H2V19z M19,4h-2V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v1H9V3c0-0.6-0.4-1-1-1S7,2.4,7,3v1H5C3.3,4,2,5.3,2,7v2h20V7C22,5.3,20.7,4,19,4z"
                          fill="#a8a99f"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-blueGray-500  text-xs flex items-center">
                      {data.data[0].attributes.date}
                    </span>
                  </div>

                  <div className="flex justify-end item-center">
                    <div className="hover-up-5 wow animate_animated animate_fadeIn mr-1">
                      <FacebookShareButton
                        url={url}
                        quote={data.data[0].attributes.title}
                        hashtag={data.data[0].attributes.title}
                      >
                        <FacebookIcon size={32} round />
                      </FacebookShareButton>
                    </div>
                    <div className="hover-up-5 wow animate_animated animate_fadeIn mr-1">
                      <InstapaperShareButton
                        url={url}
                        subject={data.data[0].attributes.title}
                        body={data.data[0].attributes.description}
                      >
                        <InstagramIcon size={32} round />
                      </InstapaperShareButton>
                    </div>
                    <div className="hover-up-5 wow animate_animated animate_fadeIn mr-1">
                      <TwitterShareButton
                        url={url}
                        title={data.data[0].attributes.title}
                      >
                        <TwitterIcon size={32} round />
                      </TwitterShareButton>
                    </div>
                    <div className="hover-up-5 wow animate_animated animate_fadeIn mr-1">
                      <LinkedinShareButton url={url}>
                        <LinkedinIcon size={32} round />
                      </LinkedinShareButton>
                    </div>
                    <div className="hover-up-5 wow animate_animated animate_fadeIn mr-1">
                      <WhatsappShareButton
                        url={url}
                        separator=" :: "
                        title={data.data[0].attributes.title}
                      >
                        <WhatsappIcon size={32} round />
                      </WhatsappShareButton>
                    </div>
                    <div className="hover-up-5 wow animate_animated animate_fadeIn mr-1">
                      <EmailShareButton
                        url={url}
                        subject={data.data[0].attributes.title}
                        body={data.data[0].attributes.description}
                      >
                        <EmailIcon size={32} round />
                      </EmailShareButton>
                    </div>
                  </div>
                </span>
              </div>
            </div>
            {/* <div
              className="max-w-2xl mx-auto"
              dangerouslySetInnerHTML={{ 
                __html: data.data[0].attributes.content,
              }}
            />

            {/* <ReactMarkdown
              components={{
                h2: "h1",
                ol:"number",
                listStyle:"auto",
                em: ({ node, ...props }) => (
                  // <i style={{ color: "red" }} {...props} />
                  <ol style={{ color: "red",listStyle:"auto" }} {...props} />
                ),
              }}
              children={data.data[0].attributes.content}
            /> */}
            <ReactMarkdown
              className={style.reactMarkDown}
              components={{
                a: LinkRenderer,
                table: ({ node, ...props }) => (
                  <table style={{ border: "1px solid black" }} {...props} />
                ),
              }}
              skipHtml={true}
              allowDangerousHtml={true}
              // remarkPlugins={[gfm]} // table ,
              children={data.data[0].attributes.content}
            />
            {/* <MarkdownRenderer markdownContent={data.data[0].attributes.content} /> */}
          </div>
        </section>

        <Ebook />
      </Layout>
    </>
  );
};

export default BlogSingle;
