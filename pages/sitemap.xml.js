import { getBlogList } from "../lib/apiCall";

//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = `${process.env.STRAPI_URL}/Blogs`;
const domain = "https://cloudpoint.co.in";
const domainUrl = `${process.env.DOMAIN_URL}/blog`;

function generateSiteMap(blogList) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
       <loc>${`${domain}/video`}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
       <loc>${`${domain}/literature`}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
       <loc>${`${domain}/integration`}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
       <loc>${`${domain}/compendium`}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
       <loc>${`${domain}/pricing`}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
       <loc>${`${domain}/blog`}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
       <loc>${`${domain}/privacy-policy`}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
       <loc>${`${domain}/terms-of-service`}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
       <loc>${`${domain}/gdpr`}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
      <loc>${`${domain}/security`}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
    <loc>${`${domain}/ebook`}</loc>
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
