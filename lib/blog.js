const myHeaders = new Headers();
myHeaders.append("Authorization", `${process.env.BEARER_TOKEN}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

export const getBlogList = async () => {
  const response = await fetch(
    `${process.env.STRAPI_URL}/Blogs`,
    requestOptions
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json(); // Parse the response as JSON
  const blogList = await data.data; // Parse the response as JSON
  return blogList;
};

export const getSingleBlog = async (slug) => {
  const response = await fetch(
    `${process.env.STRAPI_URL}/Blogs?filters[slug][$eq]=${slug}&populate=*`,
    requestOptions
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const blog = await response.json(); // Parse the response as JSON
  return blog;
};

export const getCategoriesBlogList = async (slug) => {
  const response = await fetch(
    `${process.env.STRAPI_URL}/blogs?filters[categories][$eq]=${slug}`,
    requestOptions
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json(); // Parse the response as JSON
  const blogList = await data.data; // Parse the response as JSON
  return blogList;
};
