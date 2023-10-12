import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { addEbookUser } from "../../lib/apiCall";

const Ebook = () => {
  const router = useRouter();
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
      // createdAt: new Date(),
    });
  };

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event) {
    // console.log("🚀 ~ file: index.js:29 ~ event:", event);
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      if (validateForm()) {
        // console.log("🚀 ~ file: index.js:35 ~ formData:", formData);
        await addEbookUser(formData).then((data) => {
          // console.log("🚀 ~ file: blog.js:175 ~ response:", data);
          const localData = {
            name: data.data.attributes.name,
            email: data.data.attributes.email,
            phoneNumber: data.data.attributes.phoneNumber,
          };

          localStorage.setItem("user", JSON.stringify(localData));
          // handlePdfOpen();
          router.push("/ebook");
        });
      }
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <section className="py-20 bg-blue-500">
      <div className="container">
        <div className="flex flex-wrap -mx-4 mb-12 wow animate_animated animate_fadeIn animated hover-up-5">
          <div className="w-full lg:w-1/2 px-4 lg:pr-20 lg:pt-4 order-1 lg:order-0">
            <div className="text-center max-w-xl mx-auto">
              <h2 className="mb-4 text-3xl lg:text-3xl text-white font-bold font-heading">
                <span>Subscribe now to </span>
                <span className="text-blue-200">Our Newsletter</span> <br />
                <span>and E-Book.</span>
              </h2>
              <p className="mb-8 text-blueGray-200">
                Elevate your social media marketing game with our free <br />{" "}
                in-depth guides.
              </p>
              {/* {error && <div style={{ color: "red" }}>{error}</div>} */}
              <form onSubmit={onSubmit}>
                <div className="flex flex-wrap max-w-lg mx-auto">
                  <div className="w-full">
                    <div className="flex w-full md:w-2/31 px-3 mb-3 md:mb-0 md:mr-6 bg-blue-500 border border-blue-300 rounded">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="h-6 w-6 my-auto text-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="currentColor"
                          d="M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"
                        />
                      </svg>
                      <input
                        className="w-full pl-3 py-4 text-xs text-white placeholder-white font-semibold leading-none bg-blue-500 outline-none"
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
                  <div className="w-full">
                    <div className="flex w-full md:w-2/31 px-3 mb-3 mt-2 md:mb-0 md:mr-6 bg-blue-500 border border-blue-300 rounded">
                      <svg
                        className="h-6 w-6 my-auto text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                      <input
                        className="w-full pl-3 py-4 text-xs text-white placeholder-white font-semibold leading-none bg-blue-500 outline-none"
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
                  <div className="w-full">
                    <div className="flex w-full md:w-2/31 px-3 mb-3 mt-2 md:mb-0 md:mr-6 bg-blue-500 border border-blue-300 rounded">
                      <svg
                        className="h-6 w-6 my-auto text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        // class="bi bi-telephone-fill"
                        viewBox="0 0 20 20"
                        width={30}
                        height={30}
                        style={{ color: "white", marginTop: "15px" }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                          // fill="#656f8d"
                        ></path>
                      </svg>
                      <input
                        className="w-full pl-3 py-4 text-xs text-white placeholder-white font-semibold leading-none bg-blue-500 outline-none"
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
                  <div className="flex w-full md:w-2/31 mb-3 mt-2 md:mb-0 md:mr-61 justify-end">
                    <button
                      className="w-full md:w-auto mt-2 py-4 px-8 text-xs text-white text-blue-800 hover:text-white font-semibold leading-none border border-blue-300 hover:border-blue-300 bg-white hover:bg-blue-500 rounded transition duration-300 ease-in-out"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? "Loading" : "Sign Up"}{" "}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-11 jump">
            <Link href="/ebook" legacyBehavior>
              <a>
                <Image
                  className=" object-cover rounded drop-shadow"
                  src="https://content.cloudsocial.io/wp-content/uploads/image/guide/CloudSocial%20Guide.webp"
                  alt="Publish-Calendar"
                  priority
                  // layout="fill"
                  width={1000}
                  height={1000}
                  // objectFit="contain"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ebook;
