import React from "react";
import Cards from "../../components/Cards/Cards";
import HomePageLayout from "../../Layouts/HomePageLayout";
import { useGetPostsByUserQuery } from "../../utils/API_Handler";
import { GET_USER_ARTICLES } from "../../utils/constants";
export default function HomePage() {
  const { data: posts, isLoading } = useGetPostsByUserQuery({
    query: GET_USER_ARTICLES,
    variables: { page: 0 },
  });
  return (
    <HomePageLayout>{!isLoading && <Cards posts={posts} />}</HomePageLayout>
  );
}
