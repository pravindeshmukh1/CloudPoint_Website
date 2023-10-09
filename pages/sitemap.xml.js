import { getBlogList } from "../lib/blog";

//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = `${process.env.STRAPI_URL}/Blogs`;
const domain = "https://cloudsocial.io";
const domainUrl = `${process.env.DOMAIN_URL}/blog`;

function generateSiteMap(blogList) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
       <loc>${`${domain}/video`}</loc>
       <loc>${`${domain}/literature`}</loc>
       <loc>${`${domain}/integration`}</loc>
       <loc>${`${domain}/compendium`}</loc>
       <loc>${`${domain}/pricing`}</loc>
       <loc>${`${domain}/blog`}</loc>
       <loc>${`${domain}/privacy-policy`}</loc>
       <loc>${`${domain}/terms-of-service`}</loc>
       <loc>${`${domain}/gdpr`}</loc>
       <loc>${`${domain}/security`}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
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
  const blogList = await getBlogList();

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
