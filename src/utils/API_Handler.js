import axios from "axios";

export async function GetData(url) {
  return axios.get(url).then((data) => console.log(data));
}

export async function postGraphQL(query, variables) {
  try {
    const data = await fetch("https://api.hashnode.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
    const serialisedData = await data.json();
    const {
      data: {
        user: {
          publication: { posts: post },
        },
      },
    } = serialisedData;
    return post;
  } catch (error) {
    console.log(error);
  }
}
