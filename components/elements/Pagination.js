import Link from "next/link";

export default function Pagination({
  blogList,
  currentPage,
  pagination,
  perpage,
}) {
  //  console.log("🚀 ~ file: Pagination.js:9 ~ blogList:", blogList.data);
  const { meta } = pagination;
  const lastPage = Math.ceil(meta.pagination.total / perpage);
  
  return (
    <div>
      <div className="flex flex-wrap -mx-3">
        {blogList &&
          blogList.data.map((data, index) => {
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
                  <Link href={`/blog/${data.attributes.slug}`} legacyBehavior>
                    <a className="hover:text-blue-500">
                      {data.attributes.title}
                    </a>
                  </Link>
                </h3>
                <p className="text-blueGray-400 leading-loose text-justify">
                  {data.attributes.description}
                </p>
              </div>
            );
          })}
      </div>

      <div className="text-center">
        {currentPage > 1 && (
          <Link
            className="text-blue Gray-600 hover:text-blue Gray-500 btn-accent hover-up-2"
            href={`?page=${currentPage - 1}`}
          >
            ⬅ Previous
          </Link>
        )}

        {currentPage < lastPage && (
          <Link
            className="text-blue Gray-600 hover:text-blue Gray-500 btn-accent hover-up-2"
            href={`?page=${currentPage + 1}`}
          >
            Next ➡
          </Link>
        )}
      </div>
    </div>
  );
}
