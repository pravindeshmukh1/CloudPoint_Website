import React, { useState } from "react";
import Link from "next/link";

const MobileMenu = ({ hiddenClass, handleRemove }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div
        className={`${hiddenClass} navbar-menu relative z-50 transition duration-300`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto transition duration-300">
          <div className="flex items-center mb-8">
            <Link href="#" legacyBehavior>
              <a className="mr-auto text-3xl font-semibold leading-none">
                <img
                  className="h-10"
                  src="/assets/imgs/logos/CSLogo.svg"
                  alt="CloudSocial"
                />
              </a>
            </Link>
            <button className="navbar-close" onClick={handleRemove}>
              <svg
                className="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul className="mobile-menu">
              <li
                className={
                  isActive.key == 1
                    ? "mb-1 menu-item-has-children rounded-xl active"
                    : "mb-1 menu-item-has-children rounded-xl"
                }
                onClick={() => handleToggle(1)}
              >
                <span className="menu-expand">+</span>
                <Link href="/" legacyBehavior>
                  <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover-up-2 hover:text-blue-500 rounded-xl">
                    Home
                  </a>
                </Link>
                <ul
                  className={
                    isActive.key == 1
                      ? "dropdown pl-5 border rounded-xl border-blueGray-200"
                      : "hidden"
                  }
                >
                  <li>
                    <Link
                      href="https://calendly.com/cloudsocial-support/csdemo"
                      legacyBehavior
                    >
                      <a
                        className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500"
                        target="_blank"
                      >
                        ScheduleDemo
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://content.cloudsocial.io/managedservice"
                      legacyBehavior
                    >
                      <a
                        className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500"
                        target="_blank"
                      >
                        Managed Service
                      </a>
                    </Link>
                  </li>
                  {/* <li>
                                        <Link href="/index-3" legacyBehavior>
                                            <a className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Home 3</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/index-4" legacyBehavior>
                                            <a className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Home 4</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/index-5" legacyBehavior>
                                            <a className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Home 5</a>
                                        </Link>
                                    </li> */}
                </ul>
              </li>
              <li
                className={
                  isActive.key == 1
                    ? "mb-1 menu-item-has-children rounded-xl active"
                    : "mb-1 menu-item-has-children rounded-xl"
                }
                onClick={() => handleToggle(2)}
              >
                <span className="menu-expand">+</span>
                <Link href="#" legacyBehavior>
                  <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover-up-2 hover:text-blue-500 rounded-xl">
                    Resources
                  </a>
                </Link>
                <ul
                  className={
                    isActive.key == 2
                      ? "dropdown pl-5 border rounded-xl border-blueGray-200"
                      : "hidden"
                  }
                >
                  <li>
                    <Link href="video" legacyBehavior>
                      <a className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                        Video
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="literature" legacyBehavior>
                      <a className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                        Literature
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="integration" legacyBehavior>
                      <a className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                        Integration
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="compendium" legacyBehavior>
                      <a className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                        Compendium
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ebook" legacyBehavior>
                      <a className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                        E-book
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="mb-1 rounded-xl">
                <Link href="/pricing" legacyBehavior>
                  <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl">
                    Pricing
                  </a>
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="https://cloudsocial.postaffiliatepro.com"
                  legacyBehavior
                >
                  <a
                    className="prefinery-form-cta block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500"
                    target="_blank"
                  >
                    Refer Us
                  </a>
                </Link>
              </li>
              <li className="mb-1 rounded-xl">
                <Link href="/blog" legacyBehavior>
                  <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl">
                    Blog
                  </a>
                </Link>
              </li>
              {/* <li
                className={
                  isActive.key == 2
                    ? "mb-1 menu-item-has-children rounded-xl active"
                    : "mb-1 menu-item-has-children rounded-xl"
                }
                onClick={() => handleToggle(3)}
              >
                <span className="menu-expand">+</span>
                <Link href="#" legacyBehavior>
                  <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover-up-2 hover:text-blue-500 rounded-xl">
                    Blog
                  </a>
                </Link>
                <ul className={isActive.key == 3 ? "dropdown pl-5 border rounded-xl border-blueGray-200" : "hidden"}>
                  <li>
                    <Link href="/blog" legacyBehavior>
                      <a className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                        Category 1
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-2" legacyBehavior>
                      <a className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                        Category 2
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-single" legacyBehavior>
                      <a className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                        Single 1
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-single-2" legacyBehavior>
                      <a className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                        Single 2
                      </a>
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li className={"mb-1 menu-item-has-children rounded-xl"}>
                <Link
                  href="https://app.cloudsocial.io/accounts/login"
                  legacyBehavior
                >
                  <a
                    className="text-blue Gray-600 hover:text-blue Gray-500 btn-accent hover-up-2 block text-center"
                    target="_blank"
                  >
                    Log In
                  </a>
                </Link>
              </li>
              <li
                className={
                  isActive.key == 1
                    ? "mb-1 menu-item-has-children rounded-xl active"
                    : "mb-1 menu-item-has-children rounded-xl"
                }
                onClick={() => handleToggle(4)}
              >
                {/* <span className="menu-expand">+</span> */}
                <Link href="#" legacyBehavior>
                  <a className="text-white btn-primary hover:text-blue Gray-500 btn-accent hover-up-2 block text-center">
                    Start Free Trial
                  </a>
                </Link>
                <ul
                  className={
                    isActive.key == 4
                      ? "dropdown pl-5 border rounded-xl border-blueGray-200"
                      : "hidden"
                  }
                >
                  <li>
                    <Link
                      href="https://app.cloudsocial.io/accounts/gold/9"
                      legacyBehavior
                    >
                      <a
                        className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500"
                        target="_blank"
                      >
                        Brand
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://app.cloudsocial.io/accounts/platinum/17"
                      legacyBehavior
                    >
                      <a
                        className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500"
                        target="_blank"
                      >
                        Agency
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            {/* <div className="mt-4 pt-6 border-t border-blueGray-100">
                            <Link href="/https://app.cloudsocial.io/accounts/login" legacyBehavior>
                                <a className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 text-white rounded"  target="_blank">Log In</a>
                            </Link>
                            <Link href="/login" legacyBehavior>
                                <a className="block px-4 py-3 mb-2 text-xs text-center text-blue-500 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded"  target="_blank">Start Free Trail</a>
                            </Link>
                        </div> */}
          </div>
          <div className="mt-auto">
            <p className="my-4 text-xs text-blueGray-400">
              <span>Get in Touch</span>
              <br />
              {/* <span className="text-blue-500 hover:text-blue-500 underline">
              support@cloudsocial.io
              </span> */}
              <span>
                <a
                  className="text-blue-500 hover:text-blue-500 underline"
                  href="mailto:support@cloudsocial.io"
                  target="_blank"
                >
                  support@cloudsocial.io
                </a>
              </span>
            </p>
            <a
              className="inline-block px-2"
              target="_blank"
              href="https://www.facebook.com/cloudsocial.io"
            >
              <img src="/assets/imgs/icons/facebook-blue.svg" alt="facebook" />
            </a>
            <a
              className="inline-block px-2"
              target="_blank"
              href="https://twitter.com/Cloudsocial_"
            >
              <img src="/assets/imgs/icons/twitter-blue.svg" alt="twitter" />
            </a>
            <a
              className="inline-block px-2"
              target="_blank"
              href="https://www.instagram.com/challenge/?next=https%3A%2F%2Fwww.instagram.com%2Fcloudsocial.io%2F%3F__coig_challenged%3D1"
            >
              <img
                src="/assets/imgs/icons/instagram-blue.svg"
                alt="instagram"
              />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
