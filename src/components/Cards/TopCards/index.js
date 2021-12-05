import { CustomCarousel } from "../../Carousel/CustomElasticCarousel";
import {
  TopCards,
  TopSideCards,
  TopWideCards,
  TopWideCardContainer,
} from "./components";

export const TopCard = ({ posts, setOpenDrawer }) => {
  return (
    <TopCards>
      <TopWideCardContainer>
        <CustomCarousel>
          {posts &&
            posts.map((post, index) => (
              <TopWideCards
                setPost={setOpenDrawer}
                key={index}
                post={post}
              ></TopWideCards>
            ))}
        </CustomCarousel>
      </TopWideCardContainer>
      <TopSideCards />
    </TopCards>
  );
};
