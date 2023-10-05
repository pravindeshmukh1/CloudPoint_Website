import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { socialMedia } from "../../public/assets/cardDetails";
import YoutubeEmbed from "../elements/YoutubeEmbed";

SwiperCore.use([Navigation]);

const Slider1 = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        slidesPerView={1}
        spaceBetween={30}
        navigation={{
          prevEl: ".custom_prev",
          nextEl: ".custom_next",
        }}
      >
        {socialMedia.map(({ img, title, desc, listen, imgUrl, id }) => (
          <SwiperSlide key={id}>
            <div className="px-3 pb-5">
              <div className="card-slider group p-3">
                <div className="flex items-end mb-4">
                  <img className="" src={img} alt={title}/>
                  <h1 className="mx-2 text-xl font-semibold group-hover:text-blue-500">
                    <Link href="/services" legacyBehavior>
                      <a>{title}</a>
                    </Link>
                  </h1>
                </div>
                <div className="mb-4">
                  {/* <img className="rounded-xl" src={imgUrl} alt={title} /> */}
                  <YoutubeEmbed embedId={listen} />
                  <div className="flex justify-between items-end ">
                    <p className="mt-2 text-xs text-gray-500 group-hover:text-blue-500 text-justify">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <div className="px-3 pb-5">
            <div className="card-slider group">
              <img
                className="rounded-xl"
                src="/assets/imgs/placeholders/img-2.jpg"
                alt="Monst"
              />
              <div className="flex justify-between items-end">
                <div>
                  <h1 className="mt-5 text-xl font-semibold group-hover:text-blue-500">
                    <Link href="/services" legacyBehavior>
                      <a>User growth</a>
                    </Link>
                  </h1>
                  <p className="mt-2 text-xs text-gray-500">
                    Harvard university
                  </p>
                </div>
                <div>
                  <Link href="/services" legacyBehavior>
                    <a className="tracking-wide hover-up-2 mr-2 inline-block px-4 py-3 text-xs text-blue-500 font-semibold leading-none border border-blue-200 hover:border-blue-500 hover:text-white hover:bg-blue-500 rounded">
                      View Details
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-3 pb-5">
            <div className="card-slider group">
              <img
                className="rounded-xl"
                src="/assets/imgs/placeholders/img-3.jpg"
                alt="Monst"
              />
              <div className="flex justify-between items-end">
                <div>
                  <h1 className="mt-5 text-xl font-semibold group-hover:text-blue-500">
                    <Link href="/services" legacyBehavior>
                      <a>Products</a>
                    </Link>
                  </h1>
                  <p className="mt-2 text-xs text-gray-500">Cocacola., Co</p>
                </div>
                <div>
                  <Link href="/services" legacyBehavior>
                    <a className="tracking-wide hover-up-2 mr-2 inline-block px-4 py-3 text-xs text-blue-500 font-semibold leading-none border border-blue-200 hover:border-blue-500 hover:text-white hover:bg-blue-500 rounded">
                      View Details
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-3 pb-5">
            <div className="card-slider group">
              <img
                className="rounded-xl"
                src="/assets/imgs/placeholders/img-4.jpg"
                alt="Monst"
              />
              <div className="flex justify-between items-end">
                <div>
                  <h1 className="mt-5 text-xl font-semibold group-hover:text-blue-500">
                    <Link href="/services" legacyBehavior>
                      <a>Event</a>
                    </Link>
                  </h1>
                  <p className="mt-2 text-xs text-gray-500">
                    Oxford university
                  </p>
                </div>
                <div>
                  <Link href="/services" legacyBehavior>
                    <a className="tracking-wide hover-up-2 mr-2 inline-block px-4 py-3 text-xs text-blue-500 font-semibold leading-none border border-blue-200 hover:border-blue-500 hover:text-white hover:bg-blue-500 rounded">
                      View Details
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-3 pb-5">
            <div className="card-slider group">
              <img
                className="rounded-xl"
                src="/assets/imgs/placeholders/img-5.jpg"
                alt="Monst"
              />
              <div className="flex justify-between items-end">
                <div>
                  <h1 className="mt-5 text-xl font-semibold group-hover:text-blue-500">
                    <Link href="/services" legacyBehavior>
                      <a>Shopping</a>
                    </Link>
                  </h1>
                  <p className="mt-2 text-xs text-gray-500">Alibaba Co</p>
                </div>
                <div>
                  <Link href="/services" legacyBehavior>
                    <a className="tracking-wide hover-up-2 mr-2 inline-block px-4 py-3 text-xs text-blue-500 font-semibold leading-none border border-blue-200 hover:border-blue-500 hover:text-white hover:bg-blue-500 rounded">
                      View Details
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>

      <div id="carausel-2-columns-1-arrows" className="flex">
        <span className="mr-4 text-blue-500 flex slick-arrow custom_prev">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            ></path>
          </svg>
        </span>
        <span className="text-blue-500 flex slick-arrow custom_next">
          <svg
            className="w-6 h-6"
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
        </span>
      </div>
    </>
  );
};

export default Slider1;
