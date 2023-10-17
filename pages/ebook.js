import { useEffect, useState, useRef, Fragment } from "react";
import Layout from "../components/layout/Layout";
import Head from "next/head";
import { Dialog, Transition } from "@headlessui/react";
import { addEbookUser, getEbookList } from "../lib/apiCall";
export const getServerSideProps = async () => {
  try {
    const eBookList = await getEbookList();
    // console.log("🚀 ~ file: ebook.js:10 ~ eBookList:", eBookList);

    return { props: { eBookList } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } }; // Handle errors gracefully
  }
};

const Ebook = ({ eBookList }) => {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);
  // console.log("🚀 ~ file: ebook.js:21 ~ eBookList:", eBookList);
  const [inViewport, setInViewport] = useState(false);

  const handleScroll = () => {
    const elements = document.getElementsByClassName("counterUp");
    if (elements.length > 0) {
      const element = elements[0];
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (isInViewport && !inViewport) {
        setInViewport(true);
      }
    }
  };
  const [localStorageData, setLocalStorageData] = useState("");
  useEffect(() => {
    const data = localStorage.getItem("user");
    // console.log("localStorageData", JSON.stringify(data));
    setLocalStorageData(data);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleShow = (url) => {
    if (localStorageData !== null) {
      window.open(url, "_blank");
      // console.log("if", localStorageData);
    } else {
      setOpen(true);
      // console.log("else", localStorageData);
    }
  };

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    // Other form fields
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
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number format";
    }

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
            phoneNumber: data.data.attributes.phoneNumber,
          };

          localStorage.setItem("user", JSON.stringify(localData));
          setOpen(false);
          const userData = localStorage.getItem("user");
          setLocalStorageData(userData);
          // handlePdfOpen();
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
      <Head>
        <meta charSet="utf-8" name="CloudSocial Resource E-Book" />
        <title>E-Book Social Media Resources | CloudSocial</title>
        <meta
          name="description"
          content="CloudSocial provides all the E-Book resources which guide you to succeed in the CloudSocial media marketing platform."
        />
        <link
          rel="canonical"
          href="https://cloudsocial.io/ebook"
          key="canonical"
        />
      </Head>
      <Layout>
        <section className="-mt-24 pt-40 pb-12 bg-blueGray-100">
          <div className="container">
            <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">
              Elevate your social media marketing game with our free in-depth
              guides.
            </h1>
          </div>
        </section>

        <section className="pt-20 pb-24 bg-blueGray-50" id="how-we-work">
          <div className="container">
            <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
              <div className="w-full  text-center mb-4 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">
                  <span>E-Book</span>
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 -mb-6 text-center justify-center">
              {eBookList?.map((book, index) => {
                return (
                  <div
                    className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                    key={index}
                    onClick={() => {
                      handleShow(book.attributes.pdfUrl);
                    }}
                  >
                    <div className="p-3 bg-white shadow rounded">
                      <div className="flex w-12 mb-1 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                        {book.id}
                      </div>
                      {/* <a href={book.attributes.pdfUrl} target="_blank"> */}
                      <img
                        className="h-full w-full mx-auto my-4"
                        src={`https://strapi.cloudsocial.io${book.attributes.thumbnail.data.attributes.url}`}
                        alt={book.attributes.title}
                      />
                      {/* <h3 className="mb-2 font-bold font-heading text-xl">
                            {book.attributes.title}
                          </h3> */}
                      {/* </a> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <Transition.Root show={open} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10"
              initialFocus={cancelButtonRef}
              onClose={setOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 pt-24">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 bg-blue-100">
                        <div className="sm:flex sm:items-start">
                          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <Dialog.Title
                              as="h3"
                              className="text-base font-semibold leading-6 text-gray-900"
                            >
                              E-book Form
                            </Dialog.Title>
                            <div className="mt-2 ">
                              <form onSubmit={onSubmit}>
                                <div
                                  className="p-4 bg-white rounded-lg flex flex-wrap max-w-md mx-auto wow animate_animated animate_fadeIn"
                                  data-wow-delay=".5s"
                                >
                                  <div className="w-full mb-2">
                                    <div className="flex w-full md:w-2/31 px-3 mb-3 md:mb-0 md:mr-6 bg-blueGray-100 rounded">
                                      <svg
                                        viewBox="0 0 1024 1024"
                                        className="h-6 w-6 my-auto text-blueGray-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"
                                        />
                                      </svg>
                                      <input
                                        className="w-full pl-3 py-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        // isInvalid={!!errors.name}
                                        placeholder="Type your name"
                                      />
                                    </div>
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
                                  <div className="w-full mb-2">
                                    <div className="flex w-full md:w-2/31 px-3 mb-3 md:mb-0 md:mr-6 bg-blueGray-100 rounded">
                                      <svg
                                        className="h-6 w-6 my-auto text-blueGray-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                      >
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                      </svg>
                                      <input
                                        className="w-full pl-3 py-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        // isInvalid={!!errors.email}
                                        placeholder="Type your e-mail"
                                      />
                                    </div>
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
                                  <div className="w-full mb-2">
                                    <div className="flex w-full md:w-2/31 px-3 mb-3 md:mb-0 md:mr-6 bg-blueGray-100 rounded">
                                      <svg
                                        className="h-6 w-6 my-auto text-blueGray-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        // class="bi bi-telephone-fill"
                                        viewBox="0 0 20 20"
                                        width={30}
                                        height={30}
                                        style={{
                                          color: "#656f8d",
                                          marginTop: "15px",
                                        }}
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                                          // fill="#656f8d"
                                        ></path>
                                      </svg>
                                      <input
                                        className="w-full pl-3 py-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none"
                                        type="tel"
                                        required
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        // isInvalid={!!errors.phoneNumber}
                                        placeholder="Type your phoneNumber"
                                      />
                                    </div>
                                    {errors.phoneNumber ? (
                                      <p
                                        className="mb-2 text-xs flex justify-end pr-3"
                                        style={{ color: "darkred" }}
                                      >
                                        {errors.phoneNumber}
                                      </p>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                  <div className="w-full mb-2 flex justify-end">
                                    <button
                                      className="w-full md:w-auto py-4 px-8 text-xs text-white font-semibold leading-none bg-blueGray-500 hover:bg-blueGray-600  rounded"
                                      onClick={() => setOpen(false)}
                                      ref={cancelButtonRef}
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      className="ml-2 w-full md:w-auto py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded"
                                      type="submit"
                                      disabled={isLoading}
                                    >
                                      {isLoading ? "Loading" : "Submit"}
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        </section>
      </Layout>
    </>
  );
};

export default Ebook;
