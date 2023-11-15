import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import TextEffect from "../components/elements/TextEffect";
import Link from "next/link";
import { addEbookUser } from "../lib/apiCall";

const Home = () => {
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    const newErrors = {};
    // Add validation rules here
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    // if (!formData.message) {
    //   newErrors.name = "message is required";
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      createdAt: new Date(),
    });
  };

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event) {
    // console.log("🚀 ~ file: index.js:29 ~ event:", event);
    event.preventDefault();
    setIsLoading(true);
    setError(null); // Clear previous errors when a new request starts

    try {
      if (validateForm()) {
        // console.log("🚀 ~ file: index.js:35 ~ formData:", formData);
        await addEbookUser(formData).then((data) => {
          // console.log(
          //   "🚀 ~ file: blog.js:175 ~ response:",
          //   data.data.attributes.name
          // );
          const localData = {
            name: data.data.attributes.name,
            email: data.data.attributes.email,
            message: data.data.attributes.message,
          };

          // localStorage.setItem("user", JSON.stringify(localData));
          // handlePdfOpen();
          // router.push("/ebook");
        });
      }
    } catch (error) {
      // Capture the error message to display to the user
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <Layout>
        <section
          className="pb-8 bg-top bg-cover bg-no-repeat relative -mt-24 pt-24"
          style={{
            backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')",
          }}
        >
          <div className="hidden md:block absolute top-0 left-0 mt-32">
            <img
              className="h-64 lg:h-80 jump"
              src="/assets/imgs/illustrations/at_the_park.svg"
              alt="at_the_park"
            />
          </div>
          <div className="hidden md:block absolute top-0 right-0 mt-32">
            <img
              className="h-64 lg:h-80 jump"
              src="/assets/imgs/illustrations/delivered.svg"
              alt="delivered"
            />
          </div>
          <div className="container">
            <div className="mt-12 mb-12">
              <div className="max-w-lg mx-auto mb-8 text-center">
                {/* <span className="inline-block px-3 py-2 text-xs font-semibold bg-blue-200 text-blue-500 rounded-full uppercase">
                  New Event
                </span> */}
                <h2 className="text-3xl md:text-5xl mt-4 mb-4 font-bold font-heading">
                  <span>CloudPoint</span>
                  <span className="text-blue-600">
                    <sup className="text-blue-600">&#174;</sup>{" "}
                  </span>
                  <span>Technologies</span>
                </h2>
                <div className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn">
                  Your Partner in{" "}
                  <strong className="text-blue-500">
                    Customer Success Journey{" "}
                  </strong>
                  {/* <span
                    className="typewrite d-inline text-brand"
                    data-period="3000"
                    data-type='["Web Agency", "Social Marketing" ]'
                  >
                    <TextEffect text1="Web Agency" text2="Social Marketing" />
                  </span> */}
                </div>
                <div className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn mt-8">
                  An Omni channel customer service to ensure customer
                  satisfaction and company success{" "}
                  {/* <strong className="text-blue-500">
                    Customer Success Journey{" "}
                  </strong> */}
                </div>
              </div>
              <div className="max-w-2xl mx-auto text-center">
                {/* <div className="flex flex-wrap">
                                    <div className="flex flex-1 mb-4 mr-4 px-4 rounded bg-blueGray-50">
                                        <svg className="h-6 w-6 my-auto mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                        </svg>
                                        <input className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none" type="email" placeholder="Type your e-mail" />
                                    </div>
                                    <div className="flex flex-1 mb-4 lg:mr-4 px-4 rounded bg-blueGray-50">
                                        <svg className="h-6 w-6 my-auto mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                                        </svg>
                                        <input className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none" type="email" placeholder="Password" />
                                    </div>
                                    <div className="w-full lg:w-auto">
                                        <a className="block w-full py-4 px-6 mb-2 lg:w-auto text-xs text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded" href="#">Register</a>
                                    </div>
                                </div> */}
              </div>
            </div>
            {/* <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto pb-4">
                            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                <img className="mx-auto" src="/assets/imgs/logos/brands/brand-1.png" alt="Monst" />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                <img className="mx-auto" src="/assets/imgs/logos/brands/brand-2.png" alt="Monst" />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                <img className="mx-auto" src="/assets/imgs/logos/brands/brand-3.png" alt="Monst" />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                <img className="mx-auto" src="/assets/imgs/logos/brands/brand-4.png" alt="Monst" />
                            </div>
                            <div className="hidden md:block w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn" data-wow-delay=".9s">
                                <img className="mx-auto" src="/assets/imgs/logos/brands/brand-5.png" alt="Monst" />
                            </div>
                        </div> */}
          </div>
        </section>

        <section className="py-12">
          <div className="container py-12 mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 px-3 order-1 md:order-0">
                <div className="max-w-md">
                  <h3
                    className="mb-4 text-3xl md:text-3xl font-bold font-heading wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    How we work?
                  </h3>
                  <p
                    className="mb-6 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn"
                    data-wow-delay=".5s"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    luctus eget justo et iaculis.
                  </p>
                  <ul>
                    <li
                      className="py-4 wow animate__animated animate__fadeIn"
                      data-wow-delay=".7s"
                    >
                      <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">
                        1
                      </span>
                      <span>Expand Your Reach</span>
                    </li>
                    <li
                      className="py-4 wow animate__animated animate__fadeIn"
                      data-wow-delay=".9s"
                    >
                      <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">
                        2
                      </span>
                      <span>Annualized Growth</span>
                    </li>
                    <li
                      className="pt-4 wow animate__animated animate__fadeIn"
                      data-wow-delay=".11s"
                    >
                      <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">
                        3
                      </span>
                      <span>Book Your Providers</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="w-full md:w-1/2 px-3 order-0 md:order-1 mb-12 md:mb-0 wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
              >
                <img
                  className="sm:max-w-sm lg:max-w-full mx-auto"
                  src="/assets/imgs/illustrations/podcast.svg"
                  alt="Monst"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50">
          <div className="container">
            <div className="flex flex-wrap lg:flex-nowrap">
              <div className="flex flex-wrap lg:max-w-sm mx-auto">
                <img
                  className="jump sm:max-w-sm lg:max-w-full mx-auto wow animate__animated animate__fadeIn"
                  data-wow-delay=".5s"
                  src="/assets/imgs/illustrations/tasks.svg"
                  alt="Monst"
                />
              </div>
              <div className="w-full lg:w-auto">
                <div className="lg:pl-32">
                  <div className="mb-4">
                    <span
                      className="text-xs py-1 px-3 text-blue-600 font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeIn"
                      data-wow-delay=".1s"
                    >
                      Why choose us
                    </span>
                    <h2
                      className="text-4xl mt-3 font-bold font-heading wow animate__animated animate__fadeIn"
                      data-wow-delay=".3s"
                    >
                      Key Features
                    </h2>
                  </div>
                  <div
                    className="flex items-start py-4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".5s"
                  >
                    <div className="w-8 mr-5 text-blue-500">
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
                          strokeWidth="2"
                          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold font-heading">
                        Expand Your Reach
                      </h3>
                      <p className="text-blueGray-400 leading-loose">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Veritatis expedita animi.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex items-start py-4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".7s"
                  >
                    <div className="w-8 mr-5 text-blue-500">
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
                          strokeWidth="2"
                          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold font-heading">
                        Annualized Growth
                      </h3>
                      <p className="text-blueGray-400 leading-loose">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Veritatis expedita animi.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex items-start py-4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".9s"
                  >
                    <div className="w-8 mr-5 text-blue-500">
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
                          strokeWidth="2"
                          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold font-heading">
                        Book Your Providers
                      </h3>
                      <p className="text-blueGray-400 leading-loose">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Veritatis expedita animi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </section>

        <section className="py-20">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="max-w-md mb-8 mx-auto">
                <span
                  className="text-sm text-blueGray-400 wow animate__animated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  Contact Us
                </span>
                <h2
                  className="mt-2 text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  Book consultation
                </h2>
                <p
                  className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  Don't hesitate to drop us an email or just use the contact
                  form below
                </p>
              </div>
              <div>
                <form onSubmit={onSubmit}>
                  <div
                    className="mb-4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name ? (
                      <p
                        className="mb-2 text-xs flex justify-end pr-3"
                        style={{ color: "darkred" }}
                      >
                        {errors.name}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>

                  <div
                    className="mb-4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                      type="email"
                      placeholder="name@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email ? (
                      <p
                        className="mb-2 text-xs flex justify-end pr-3"
                        style={{ color: "darkred" }}
                      >
                        {errors.email}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div
                    className="mb-4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <textarea
                      className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none"
                      placeholder="Message..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div
                    className="flex justify-between items-center wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
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
                      className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? "Loading" : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-blueGray-50">
          <div className="container">
            <div className="max-w-lg mx-auto mb-12 text-center">
              <span
                className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                Our Team
              </span>
              <h2
                className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                Meet our awesome team
              </h2>
              <p
                className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                luctus eget justo et iaculis.
              </p>
            </div>
            <div className="flex flex-wrap">
              <div
                className="w-full md:w-1/2 py-5 md:px-5 wow animate__animated animate__fadeIn"
                data-wow-delay=".1s"
              >
                <div className="px-6 py-10 bg-white shadow rounded">
                  <div className="flex items-center mb-4">
                    <img
                      className="h-16 w-16 rounded-full object-cover"
                      src="assets/imgs/placeholders/img-1.png"
                      alt="Monst"
                    />
                    <div className="pl-4">
                      <p className="text-lg font-bold">Michael Jackson</p>
                      <p className="text-blue-600">CEO</p>
                    </div>
                  </div>
                  <p className="leading-loose text-blueGray-400 mb-5 text-sm">
                    Donec consequat tortor risus, at auctor felis consequat a.
                    Donec quis dolor sem. Sed sollicitudin magna in hendrerit
                    pulvinar. Vestibulum non quam velit.
                  </p>
                  <div className="flex space-x-2">
                    <a href="#">
                      <img
                        src="assets/imgs/icons/facebook-blue.svg"
                        alt="Monst"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="assets/imgs/icons/instagram-blue.svg"
                        alt="Monst"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="w-full md:w-1/2 py-5 md:px-5 wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                <div className="px-6 py-10 bg-white shadow rounded">
                  <div className="flex items-center mb-4">
                    <img
                      className="h-16 w-16 rounded-full object-cover"
                      src="assets/imgs/placeholders/img-2.jpg"
                      alt="Monst"
                    />
                    <div className="pl-4">
                      <p className="text-lg font-bold">Oprah Winfrey</p>
                      <p className="text-blue-600 text-sm">
                        Head of Development
                      </p>
                    </div>
                  </div>
                  <p className="leading-loose text-blueGray-400 mb-5 text-sm">
                    Donec consequat tortor risus, at auctor felis consequat a.
                    Donec quis dolor sem. Sed sollicitudin magna in hendrerit
                    pulvinar. Vestibulum non quam velit.
                  </p>
                  <div className="flex space-x-2">
                    <a href="#">
                      <img
                        src="assets/imgs/icons/facebook-blue.svg"
                        alt="Monst"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="assets/imgs/icons/instagram-blue.svg"
                        alt="Monst"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="w-full md:w-1/2 py-5 md:px-5 wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
              >
                <div className="px-6 py-10 bg-white shadow rounded">
                  <div className="flex items-center mb-4">
                    <img
                      className="h-16 w-16 rounded-full object-cover"
                      src="assets/imgs/placeholders/img-5.jpg"
                      alt="Monst"
                    />
                    <div className="pl-4">
                      <p className="text-lg font-bold">Leonardo</p>
                      <p className="text-blue-600 text-sm">
                        Head of Operations
                      </p>
                    </div>
                  </div>
                  <p className="leading-loose text-blueGray-400 mb-5 text-sm">
                    Donec consequat tortor risus, at auctor felis consequat a.
                    Donec quis dolor sem. Sed sollicitudin magna in hendrerit
                    pulvinar. Vestibulum non quam velit.
                  </p>
                  <div className="flex space-x-2">
                    <a href="#">
                      <img
                        src="assets/imgs/icons/facebook-blue.svg"
                        alt="Monst"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="assets/imgs/icons/twitter-blue.svg"
                        alt="Monst"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="w-full md:w-1/2 py-5 md:px-5 wow animate__animated animate__fadeIn"
                data-wow-delay=".7s"
              >
                <div className="px-6 py-10 bg-white shadow rounded">
                  <div className="flex items-center mb-4">
                    <img
                      className="h-16 w-16 rounded-full object-cover"
                      src="assets/imgs/placeholders/img-6.png"
                      alt="Monst"
                    />
                    <div className="pl-4">
                      <p className="text-lg font-bold">Jerry Seinfeld</p>
                      <p className="text-blue-600 text-sm">
                        Head of Development
                      </p>
                    </div>
                  </div>
                  <p className="leading-loose text-blueGray-400 mb-5 text-sm">
                    Donec consequat tortor risus, at auctor felis consequat a.
                    Donec quis dolor sem. Sed sollicitudin magna in hendrerit
                    pulvinar. Vestibulum non quam velit.
                  </p>
                  <div className="flex space-x-2">
                    <a href="#">
                      <img
                        src="assets/imgs/icons/facebook-blue.svg"
                        alt="Monst"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="assets/imgs/icons/instagram-blue.svg"
                        alt="Monst"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="assets/imgs/icons/twitter-blue.svg"
                        alt="Monst"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-20 xl:bg-contain bg-top bg-no-repeat"
          style={{
            backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')",
          }}
          id="key-features"
        >
          <div className="container">
            <div className="max-w-lg mx-auto mb-12 text-center">
              <h2
                className="my-2 text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
                data-wow-delay=".1s"
              >
                We are Revolutionizing <br />
                <span className="text-blue-500">
                  Customer Lifecycle Management
                </span>
              </h2>
              <p
                className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                We incorporate{" "}
                <strong className="text-blue-500">
                  tech, strategy and execution
                </strong>{" "}
                into customer lifecycle management.
              </p>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <div className="text-blue-500 mx-auto mb-4">
                    <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 font-bold font-heading">
                    Command Center Operations
                  </h3>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".5s"
                >
                  <div className="text-blue-500 mx-auto mb-4">
                    <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 font-bold font-heading">Consultancy</h3>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".7s"
                >
                  <div className="text-blue-500 mx-auto mb-4">
                    <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 font-bold font-heading">
                    Voice Analytics
                  </h3>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".9s"
                >
                  <div className="text-blue-500 mx-auto mb-4">
                    <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 font-bold font-heading">
                    Suite of services & products for better customer interaction
                    management
                  </h3>
                </div>
              </div>
              {/* <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <div className="text-blue-500 mx-auto mb-4">
                    <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 font-bold font-heading">
                    Right Solutions
                  </h3>
                  <p className="text-sm text-blueGray-400">
                    We believe brand interaction is key to communication. Real
                    innovations and positive customer experience are the heart
                    of success.
                  </p>
                </div>
              </div> */}
            </div>
            <div className="text-center">
              <Link href="/testimonials" legacyBehavior>
                <a
                  href="/testimonials"
                  className="inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  Show more Testimonials
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container text-center">
            <div className="max-w-lg mx-auto mb-16">
              <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">
                {" "}
                About Our Expert
              </span>
              <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading">
                Lead By Our{" "}
                <span className="text-blue-500"> Pioneers of Success </span>
              </h2>
              {/* <p className="text-blueGray-400 leading-loose">Our IT services converge business and technology experts to help to manage business categories</p> */}
            </div>
            <div className="flex flex-wrap justify-center -mx-5" sty>
              <div className="w-1/21 lg:w-1/3 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <img
                    className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top"
                    src="/assets/imgs/logos/himanshu.png"
                    alt="Monst"
                  />
                  <strong className="mt-6 mb-2 text-md">Himanshu Patil</strong>
                  <p className="text-gray-500 text-xs mt-3 mb-3">
                    Co Founder & Director
                  </p>
                  <p className="leading-loose text-blueGray-400 mb-5 text-sm border-t border-blue-500">
                    Seasoned business leader with career spanning 30+ years, he
                    has built businesses for many organizations ranging from
                    consumer durables to automobiles to retail and pay tv. He
                    has been an entrepreneur in the past at Plugin Sales where
                    he co founded a first of its kind multi brand consumer
                    durable retail chain which rapidly grew to be western
                    India's largest chain.
                  </p>
                </div>
              </div>
              <div className="w-1/21 lg:w-1/3 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".3s"
                >
                  <img
                    className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top"
                    src="/assets/imgs/logos/rahul.png"
                    alt="Monst"
                  />
                  <strong className="mt-6 mb-2 text-md">Rahul Raina</strong>
                  <p className="text-gray-500 text-xs mt-3 mb-3">
                    Chief Executive Officer
                  </p>
                  <p className="leading-loose text-blueGray-400 mb-5 text-sm border-t border-blue-500">
                    Satcom and Media Professional with over 20 Years of
                    experience in Network Operations and Project Delivery.
                    Responsible for setting up & operating Videocon d2h's Satcom
                    and data center operations with industry leading uptime.
                    Strong focus on process.
                  </p>
                </div>
              </div>
              <div className="w-1/21 lg:w-1/3 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".5s"
                >
                  <img
                    className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top"
                    src="/assets/imgs/logos/vinod.png"
                    alt="Monst"
                  />
                  <strong className="mt-6 mb-2 text-md">Vinod Hakhu</strong>
                  <p className="text-gray-500 text-xs mt-3 mb-3">
                    Co Founder & Director
                  </p>
                  <p className="leading-loose text-blueGray-400 mb-5 text-sm border-t border-blue-500">
                    25+ years of experience in Pay TV. IT. Telecom and Consumer
                    Electronics Industry. Manage various aspects of Service
                    Delivery/Operations on Global level for B2B and B2C,
                    Strategy and Operational Execution. At d2h managed +20
                    million customers & Yearly revenues of +3500 Crores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
