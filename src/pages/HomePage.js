import React, { useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";
import HomePageLayout from "../Layouts/HomePageLayout";
import { postGraphQL } from "../utils/API_Handler";
import { GET_USER_ARTICLES } from "../utils/constants";
export default function HomePage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const posts = await postGraphQL(GET_USER_ARTICLES, { page: 0 });
      setPosts(posts);
    }
    getPosts();
  }, []);
  console.log(posts);
  return (
    <HomePageLayout>
      <Cards posts={posts} />
    </HomePageLayout>
  );
}
