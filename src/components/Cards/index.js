import { TopCard } from './TopCards';
import PropTypes from 'prop-types';

export const Card = ({ posts }) => {
  return <TopCard posts={posts} />;
};
Card.propTypes = {
  posts: PropTypes.array
};
Card.defaultProps = {
  post: []
};
