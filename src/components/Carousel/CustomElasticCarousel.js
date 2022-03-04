import PropTypes from 'prop-types';
import Carousel from 'react-elastic-carousel';

export function CustomCarousel({ children, renderedArrow }) {
  return (
    <Carousel
      itemsToShow={1}
      itemsToScroll={1}
      renderArrow={({ type, onClick }) => {
        return (
          <div ref={renderedArrow} onClick={onClick}>
            {type === 'prev' ? '' : ''}
          </div>
        );
      }}
      renderPagination={({ type, onClick }) => (
        <div onClick={onClick}>{type === 'prev' ? '' : ''}</div>
      )}
    >
      {children}
    </Carousel>
  );
}
CustomCarousel.propTypes = {
  children: PropTypes.node,
  renderedArrow: PropTypes.node
};

CustomCarousel.defaultProps = {
  children: () => {
    return <div></div>;
  },
  renderedArrow: () => {
    return <div></div>;
  }
};
