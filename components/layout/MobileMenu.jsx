import React, { useState } from "react";
import Link from "next/link";
import { footerIcon } from "../../public/assets/cardDetails";

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
                  src="/assets/imgs/logos/CloudPoint.png"
                  alt="CloudPoint"
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
                  href="mailto:contactus@cloudpoint.co.in"
                  target="_blank"
                >
                  contactus@cloudpoint.co.in
                </a>
              </span>
            </p>

            {footerIcon.map(({ img, href, alt, id }) => (
              <a
                className="inline-block px-2"
                target="_blank"
                href={href}
                key={id}
              >
                <img src={img} className="h-5" alt={alt} />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
