import { getBlogList } from "../lib/blog";

//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = `${process.env.STRAPI_URL}/Blogs`;
const domainUrl1 = "https://www.cloudsocial.io/blog";
const domainUrl = `${process.env.DOMAIN_URL}/blog`;

function generateSiteMap(blogList) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
     ${blogList
       .map(({ id, attributes }) => {
         return `
       <url>
           <loc>${`${domainUrl}/${attributes.slug}`}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>monthly</changefreq>
            <priority>1.0</priority>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps = async ({ res }) => {
  //   const myHeaders = new Headers();
  //   myHeaders.append("Authorization", `${process.env.BEARER_TOKEN}`);

  //   const requestOptions = {
  //     method: "GET",
  //     headers: myHeaders,
  //     redirect: "follow",
  //   };
  //   // We make an API call to gather the URLs for our site
  //   const request = await fetch(EXTERNAL_DATA_URL, requestOptions);
  //   const data = await request.json();
  //   const blogList = await data.data;

  const blogList = await getBlogList();

  //console.log("🚀 ~ file: sitemap.xml.js:38 ~ blogList:", blogList);

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(blogList);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
