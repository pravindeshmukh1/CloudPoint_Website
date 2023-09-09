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
      <Script>
        {`prefinery=window.prefinery||function(){(window.prefinery.q=window.prefinery.q||[]).push(arguments)};`}
      </Script>
      <Script
        src="https://widget.prefinery.com/widget/v2/4eezyyb5.js"
        defer
      ></Script>

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
                  src="/assets/imgs/logos/CSLogo.svg"
                  alt="CloudSocial"
                />
              </a>
            </Link>
            <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
              <li className="group relative pt-4 pb-4 has-child">
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
                  <li>
                    <Link href="/" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Landing page 1
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-2" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Landing page 2
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-3" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Landing page 3
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-4" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Landing page 4
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-5" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Landing page 5
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="group relative pt-4 pb-4 has-child">
                <Link href="#" legacyBehavior>
                  <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                    Resources
                  </a>
                </Link>
                <ul className="drop-down-menu min-w-200">
                  <li>
                    <Link href="/portfolio" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Portfolio
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/team" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Team
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/testimonials" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Testimonials
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/integration" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Integration
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/compendium" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                      Compendium
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faqs" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Faqs
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/privacy-policy" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Privacy Policy
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.iubenda.com/privacy-policy/84213336/cookie-policy"
                      class="iubenda-nostyle no-brand iubenda-noiframe iubenda-embed iubenda-noiframe"
                      legacyBehavior
                    >
                      <a
                        className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500"
                        target="_blank"
                      >
                        Cookie Policy
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Terms Of Service
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/gdpr" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        GDPR
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/security" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Security
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Services
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        About Us
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/404" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        404
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className="pt-4 pb-4">
                <Link href="/about" legacyBehavior>
                  <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                    About Us
                  </a>
                </Link>
              </li> */}

              <li className="pt-4 pb-4">
                <Link href="/pricing" legacyBehavior>
                  <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                    Pricing
                  </a>
                </Link>
              </li>
              {/* <li className="pt-4 pb-4">
                  <Link href="https://calendly.com/cloudsocial-support/csdemo" legacyBehavior>
                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500" target="_blank">
                    ScheduleDemo
                    </a>
                  </Link>
                </li> */}
              <li className="pt-4 pb-4">
                <Link
                  legacyBehavior
                  href="https://cloudsocial.postaffiliatepro.com"
                  className=""
                >
                  <a
                    className="prefinery-form-cta text-sm font-semibold text-blueGray-600 hover:text-blueGray-500"
                    target="_blank"
                  >
                    Refer Us
                  </a>
                </Link>
              </li>
              <li className="group relative pt-4 pb-4 has-child">
                <Link href="#" legacyBehavior>
                  <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                    Blog
                  </a>
                </Link>
                <ul className="drop-down-menu min-w-200">
                  <li>
                    <Link href="/blog" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Category 1
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-2" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Category 2
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-single" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Single 1
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-single-2" legacyBehavior>
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Single 2
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className="pt-4 pb-4">
                <Link href="/contact" legacyBehavior>
                  <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                    Contact
                  </a>
                </Link>
              </li> */}
            </ul>
            <div className="hidden lg:block">
              {/* <Link
                href="https://app.cloudsocial.io/accounts/login"
                legacyBehavior
              >
                <a className="btn-accent hover-up-2" target="_blank">
                  Log In
                </a>
              </Link>
              <Link href="/signup" legacyBehavior>
                <a className="btn-primary hover-up-2">Sign Up</a>
              </Link> */}
              <ul className="hidden lg:flex lg:items-center lg:w-auto">
                <li className="group relative">
                  <Link
                    href="https://app.cloudsocial.io/accounts/login"
                    legacyBehavior
                  >
                    <a
                      className="text-blue Gray-600 hover:text-blue Gray-500 btn-accent hover-up-2"
                      target="_blank"
                    >
                      Log In
                    </a>
                  </Link>
                </li>
                <li className="group relative ">
                  {/* <Link
                    href="https://app.cloudsocial.io/accounts/login"
                    legacyBehavior
                  > */}
                  <a
                    className="text-blue Gray-600 hover:text-blue Gray-500 btn-primary hover-up-2"
                    target="_blank"
                  >
                    Start Free Trail
                  </a>
                  {/* </Link> */}
                  <ul className="drop-down-menu min-w-200 mt-2">
                    <li>
                      <Link
                        href="https://app.cloudsocial.io/accounts/gold/9"
                        legacyBehavior
                      >
                        <a
                          className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500"
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
                          className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500"
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
