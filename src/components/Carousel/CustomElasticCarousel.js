import Carousel from "react-elastic-carousel";

export function CustomCarousel({ children, renderedArrow, navigateType }) {
  return (
    <Carousel
      itemsToShow={1}
      itemsToScroll={1}
      renderArrow={({ type, onClick }) => {
        return (
          <div ref={renderedArrow} onClick={onClick}>
            {type === "prev" ? "" : ""}
          </div>
        );
      }}
      renderPagination={({ type, onClick }) => (
        <div onClick={onClick}>{type === "prev" ? "" : ""}</div>
      )}
    >
      {children}
    </Carousel>
  );
}
