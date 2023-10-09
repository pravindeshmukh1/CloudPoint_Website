import React from "react";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import { getCategoriesBlogList } from "../../lib/apiCall";

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  //console.log("slug", slug);

  try {
    const blogList = await getCategoriesBlogList(slug);
    // console.log(blogList);

    return { props: { blogList } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } }; // Handle errors gracefully
  }
};
const categories = ({ blogList }) => {
  return (
    <>
      <Layout>
        <section className="py-20">
          <div className="container">
            <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">
              Our Blog
            </h1>
            <ul className="flex text-gray-500 text-sm lg:text-sm pb-12 wow animate__animated animate__fadeIn animated">
              <li className="inline-flex items-center">
                <Link href="/blog" legacyBehavior>
                  <a className="hover:text-blue-500 text-gray-800">Home</a>
                </Link>

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
            </ul>

            <div className="">
              {blogList?.map((data, index) => {
                return (
                  <div key={index}>
                    {index % 2 === 0 ? (
                      <>
                        <div className="flex flex-wrap -mx-4 mb-12 wow animate__animated animate__fadeIn animated hover-up-5">
                          <div className="w-full lg:w-1/2 px-4 lg:pr-20 lg:pt-4 order-1 lg:order-0">
                            <Link href="/blog" legacyBehavior>
                              <a>
                                <span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600">
                                  {data.attributes.categories}
                                </span>
                              </a>
                            </Link>
                            <h3 className="my-4 text-xl md:text-2xl font-bold font-heading">
                              <Link
                                href={`/blog/${data.attributes.slug}`}
                                legacyBehavior
                              >
                                <a className="hover:text-blue-500">
                                  {data.attributes.title}
                                </a>
                              </Link>
                            </h3>
                            <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400 text-justify">
                              {data.attributes.description}
                            </p>
                            <Link
                              href={`/blog/${data.attributes.slug}`}
                              legacyBehavior
                            >
                              <a className="text-xs font-semibold text-blue-600">
                                <span>Read More</span>
                                <svg
                                  className="inline-block w-4 h-4 ml-1"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                  ></path>
                                </svg>
                              </a>
                            </Link>
                          </div>
                          <div className="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
                            <Link
                              href={`/blog/${data.attributes.slug}`}
                              legacyBehavior
                            >
                              <a>
                                <img
                                  className="h-80 w-full object-cover rounded"
                                  src="/assets/imgs/placeholders/img-6.png"
                                  alt={data.attributes.title}
                                />
                              </a>
                            </Link>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex flex-wrap -mx-4 mb-12 wow animate__animated animate__fadeIn animated hover-up-5">
                          <div className="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
                            <Link
                              href={`/blog/${data.attributes.slug}`}
                              legacyBehavior
                            >
                              <a>
                                <img
                                  className="h-80 w-full object-cover rounded"
                                  src="/assets/imgs/placeholders/img-6.png"
                                  alt={data.attributes.title}
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="w-full lg:w-1/2 px-4 lg:pr-20 lg:pt-4 order-1 lg:order-0">
                            <Link href="/blog" legacyBehavior>
                              <a>
                                <span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600">
                                  {data.attributes.categories}
                                </span>
                              </a>
                            </Link>
                            <h3 className="my-4 text-xl md:text-2xl font-bold font-heading">
                              <Link
                                href={`/blog/${data.attributes.slug}`}
                                legacyBehavior
                              >
                                <a className="hover:text-blue-500">
                                  {data.attributes.title}
                                </a>
                              </Link>
                            </h3>
                            <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400 text-justify">
                              {data.attributes.description}
                            </p>
                            <Link
                              href={`/blog/${data.attributes.slug}`}
                              legacyBehavior
                            >
                              <a className="text-xs font-semibold text-blue-600">
                                <span>Read More</span>
                                <svg
                                  className="inline-block w-4 h-4 ml-1"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                  ></path>
                                </svg>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-5">
        </section>
      </Layout>
    </>
  );
};

export default categories;
