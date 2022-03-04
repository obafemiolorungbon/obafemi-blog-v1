import styled from 'styled-components';
import { TopWideCards } from './TopWideCard';
import { TopSideCards } from './TopSideCard';
import { TopWideCardContainer } from './TopWideCardContainer';
import PropTypes from 'prop-types';
const TopCardsBase = styled.section`
  height: 45%;
  display: flex;
  width: 100%;
  justify-content: space-between;
  cursor: pointer;
`;

const TopCards = (props) => {
  return <TopCardsBase>{props.children}</TopCardsBase>;
};
TopCards.propTypes = {
  children: PropTypes.node
};
TopCards.defaultProps = {
  children: () => {
    return <div></div>;
  }
};
export { TopWideCards, TopSideCards, TopWideCardContainer, TopCards };
