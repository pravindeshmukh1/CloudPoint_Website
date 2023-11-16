import Link from "next/link";
import Script from "next/script";
import React from "react";
import { useState, useEffect } from "react";

const Header = ({ handleHidden }) => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <header
        className={
          scroll
            ? "bg-transparent sticky-bar mt-4 stick"
            : "bg-transparent sticky-bar mt-4"
        }
      >
        <div className="container bg-transparent">
          <nav className="bg-transparent flex justify-between items-center py-3">
            <Link href="/" legacyBehavior>
              <a className="text-3xl font-semibold leading-none">
                <img
                  className="h-6" //h-10
                  src="/assets/imgs/logos/CloudPoint.png"
                  alt="CloudPoint"
                  style={{marginBottom:"5px !important"}}
                />
              </a>
            </Link>
            <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
              {/* <li className="group relative pt-4 pb-4 has-child">
                <Link href="/" legacyBehavior>
                  <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                    Home
                  </a>
                </Link>
                <ul className="drop-down-menu min-w-200">
                  <li>
                    <Link
                      href="https://calendly.com/cloudsocial-support/csdemo"
                      legacyBehavior
                    >
                      <a
                        className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500"
                        target="_blank"
                      >
                        ScheduleDemo
                      </a>
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li className="pt-4 pb-4">
                <Link href="/" legacyBehavior>
                  <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500" >
                  Home
                  </a>
                </Link>
              </li>
              <li className="pt-4 pb-4">
                <Link href="https://content.cloudsocial.io/managedservice" legacyBehavior>
                  <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500" target="_blank">
                  Managed Service
                  </a>
                </Link>
              </li>
              <li className="group relative pt-4 pb-4 has-child">
                <Link href="#" legacyBehavior>
                  <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                    Resources
                  </a>
                </Link>
                <ul className="drop-down-menu min-w-200">
                  <li>
                    <Link href="/video" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                      Case Study Video
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/literature" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Case Study Doc
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="pt-4 pb-4">
                <Link href="/blog" legacyBehavior>
                  <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                    Blog
                  </a>
                </Link>
              </li>
             
            </ul>
            <div className="lg:hidden">
              <button
                className="navbar-burger flex items-center py-2 px-3 text-blue-500 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300"
                onClick={handleHidden}
              >
                <svg
                  className="fill-current h-4 w-4"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
