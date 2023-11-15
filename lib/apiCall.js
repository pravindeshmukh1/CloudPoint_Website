const myHeaders = new Headers();
myHeaders.append("Authorization", `${process.env.BEARER_TOKEN}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

export const getBlogList = async () => {
  const response = await fetch(
    `${process.env.STRAPI_URL}/Blogs/?populate=*`,
    requestOptions
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json(); // Parse the response as JSON
  const blogList = await data.data; // Parse the response as JSON
  return blogList;
};
// with pagination
export const getBlogListPagination = async (page,PER_PAGE) => {

  const res = await fetch(
    `${process.env.STRAPI_URL}/Blogs/?populate=*&?sort=id:desc&pagination[page]=${page}&pagination[pageSize]=${PER_PAGE}`,
    requestOptions
  );


  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  // const blogList = await res.json(); // Parse the response as JSON

  return res;
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
    `${process.env.STRAPI_URL}/blogs?filters[categories][$eq]=${slug}&populate=*`,
    requestOptions
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json(); // Parse the response as JSON
  const blogList = await data.data; // Parse the response as JSON
  return blogList;
};

export const addEbookUser = async (formData) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `${process.env.BEARER_TOKEN}`);

  var raw = JSON.stringify({
    data: {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    },
  });
  console.log("🚀 ~ file: apiCall.js:81 ~ raw:", raw);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const response = await fetch(
    `${process.env.STRAPI_URL}/cp-users`,
    requestOptions
  );
  const data = await response.json(); // Parse the response as JSON
  return data;
};

export const getEbookList = async () => {
  const response = await fetch(
    `${process.env.STRAPI_URL}/ebooks?populate=*`,
    requestOptions
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json(); // Parse the response as JSON
  const blogList = await data.data; // Parse the response as JSON
  return blogList;
};
