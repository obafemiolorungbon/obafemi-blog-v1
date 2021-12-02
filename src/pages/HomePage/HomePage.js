import React from "react";
import Cards from "../../components/Cards/Cards";
import HomePageLayout from "../../Layouts/HomePageLayout";
import { useGetPostsByUserQuery } from "../../utils/API_Handler";
import { GET_USER_ARTICLES } from "../../utils/constants";
import { Spinner } from "react-bootstrap";
export default function HomePage() {
  const { data: posts, isLoading } = useGetPostsByUserQuery({
    query: GET_USER_ARTICLES,
    variables: { page: 0 },
  });
  return (
    <HomePageLayout>
      {isLoading && <Spinner className="Spinner" animation="grow" />}{" "}
      {!isLoading && <Cards posts={posts} />}
    </HomePageLayout>
  );
}
