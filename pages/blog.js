import React, { useState } from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import Head from "next/head";
import {
  addEbookUser,
  getBlogList,
  getBlogListPagination,
} from "../lib/apiCall";
import { useRouter } from "next/router";
import Image from "next/image";
import Ebook from "../components/elements/Ebook";
import Pagination from "../components/elements/Pagination";

// export const getServerSideProps = async (context) => {
//   const { slug } = context.query;
//   // console.log(slug);
//   try {
//     const blogList = await getBlogList();

//     return { props: { blogList } };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return { props: { data: null } }; // Handle errors gracefully
//   }
// };

const PER_PAGE = 3;

export async function getServerSideProps({ query: { page = 1 } }) {
  const res = await getBlogListPagination(page, PER_PAGE);

  const blogList = await res.json();
  // console.log("🚀 ~ file: blog.js:35 ~ blogList:", blogList.data);

  const currentPage = +page;
  const { meta } = blogList;
  const pagination = { meta };

  return {
    props: {
      blogList,
      currentPage,
      pagination,
    },
  };
}

const Blog = ({ blogList, currentPage, pagination }) => {
  //  console.log("🚀 ~ file: blog.js:22 ~ blogList:", blogList);
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="utf-8" name="CloudPoint" />
        <title>Cloudpoint Technologies Blogs</title>
        <meta
          name="description"
          content="Cloudpoint Technologies - Customer Lifecycle Management | Analytics | Business Intelligence | Social Command Center | CRM | Contract Lifecycle Management"
        />
        <link
          rel="canonical"
          href="https://cloudpoint.io/blog"
          key="canonical"
        />
      </Head>
      <Layout>
        <section className="py-20">
          <div className="container">
            <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">
              Our Blog
            </h1>
            <ul className="flex text-gray-500 text-sm lg:text-sm pb-12 wow animate__animated animate__fadeIn animated">
              <li className="inline-flex items-center">
                <a href="#" className="hover:text-blue-500 text-gray-800">
                  Home
                </a>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="h-5 w-auto text-gray-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </li>
              {/* <li className="inline-flex items-center">
                <a href="#" className="hover:text-blue-500 text-gray-800">
                  Our Services
                </a>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="h-5 w-auto text-gray-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </li>
              <li className="inline-flex items-center text-gray-400">
                <span>Web Development</span>
              </li> */}
            </ul>
            <div className="flex flex-wrap -mx-3">
              {/* {blogList?.map((data, index) => {
                return (
                  <div
                    className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated hover-up-5"
                    data-wow-delay=".1s"
                    key={index}
                  >
                    <Link href={`/blog/${data.attributes.slug}`} legacyBehavior>
                      <a>
                        <img
                          className="h-801 w-full object-cover1 rounded"
                          // src="/assets/imgs/placeholders/img-8.png"
                          src={`https://strapi.cloudsocial.io${data.attributes.thumbnail.data[0].attributes.url}`}
                          alt={data.attributes.title}
                        />
                      </a>
                    </Link>
                    <p className="mt-6 text-sm text-blue-400">
                      <Link
                        href={`/categories/${data.attributes.categories}`}
                        legacyBehavior
                      >
                        <a>
                          <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl mr-3">
                            {data.attributes.categories}
                          </span>
                        </a>
                      </Link>
                    </p>

                    <div className="flex justify-end mt-2">
                      <span className="flex items-center">
                        <svg
                          viewBox="0 0 1024 1024"
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          style={{
                            color: "gray",
                            display: "initial",
                          }}
                        >
                          <path
                            fill="#a8a79f"
                            d="M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"
                          ></path>
                        </svg>
                      </span>
                      <span className="text-blueGray-400 text-xs px-1 flex items-center">
                        {data.attributes.postBy}
                      </span>
                      <span className="flex items-center px-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={20}
                          height={20}
                          style={{
                            color: "gray",
                            display: "initial",
                          }}
                        >
                          <path
                            d="M2,19c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3v-8H2V19z M19,4h-2V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v1H9V3c0-0.6-0.4-1-1-1S7,2.4,7,3v1H5C3.3,4,2,5.3,2,7v2h20V7C22,5.3,20.7,4,19,4z"
                            fill="#a8a99f"
                          ></path>
                        </svg>
                      </span>
                      <span className="text-blueGray-400  text-xs flex items-center">
                        {data.attributes.date}
                      </span>
                    </div>
                    <h3 className="my-2 text-2xl font-bold font-heading">
                      <Link
                        href={`/blog/${data.attributes.slug}`}
                        legacyBehavior
                      >
                        <a className="hover:text-blue-500">
                          {data.attributes.title}
                        </a>
                      </Link>
                    </h3>
                  </div>
                );
              })} */}
              <Pagination
                blogList={blogList}
                currentPage={currentPage}
                pagination={pagination}
                perpage={PER_PAGE}
              />
            </div>
            {/* <div className="text-center">
              <Link href="/blog-2" legacyBehavior>
                <a className="hover-up-5 inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded">
                  Show all posts
                </a>
              </Link>
            </div> */}
          </div>
        </section>
        <Ebook />
      </Layout>
    </>
  );
};

export default Blog;
