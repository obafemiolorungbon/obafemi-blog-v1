import styled from "styled-components";
import { TopWideCards } from "./TopWideCard";
import { TopSideCards } from "./TopSideCard";
import { TopWideCardContainer } from "./TopWideCardContainer";
const TopCardsBase = styled.section`
  height: 45%;
  display: flex;
  width: 100%;
  justify-content: space-between;
  cursor: pointer;
`;

export const TopCards = (props) => {
  return <TopCardsBase>{props.children}</TopCardsBase>;
};

export { TopWideCards, TopSideCards, TopWideCardContainer };
