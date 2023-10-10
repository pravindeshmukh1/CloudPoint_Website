// module.exports = {
//   reactStrictMode: true,
//   images: {
//     domains: ["www.cloudsocial.io", "www.softwaresuggest.com"],
//   },
//   env: {
//     TAWK: "5fc258c9920fc91564cb894d",
//     STRAPI_URL: "https://strapi.cloudsocial.io/api/Blogs",
//     BEARER_TOKEN:
//       "Bearer 84a3506bcf2d03f2c02a53951d459adf5f3ed4621e43aec1fecf64039053e6b1768aa236342e33a8f280ef9fa5a1e1e3c1e8a373ea8823eb35ef9b3198722904984adfe0e109afa92cbe986d14b668ce544af6d1624eaccad4519902e32965bc21144b847e4d991f8ae5066988aa4ffbbf686f2ae084995cf14e834dfd8d0219",
//   },
// };

// next.config.mjs
import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    domains: ["www.cloudsocial.io", "www.softwaresuggest.com","content.cloudsocial.io"],
  },
  env: {
    DOMAIN_URL: "https://www.cloudsocial.io",
    TAWK: "5fc258c9920fc91564cb894d",
    STRAPI_URL: "https://strapi.cloudsocial.io/api",
    BEARER_TOKEN:
      "Bearer 84a3506bcf2d03f2c02a53951d459adf5f3ed4621e43aec1fecf64039053e6b1768aa236342e33a8f280ef9fa5a1e1e3c1e8a373ea8823eb35ef9b3198722904984adfe0e109afa92cbe986d14b668ce544af6d1624eaccad4519902e32965bc21144b847e4d991f8ae5066988aa4ffbbf686f2ae084995cf14e834dfd8d0219",
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
