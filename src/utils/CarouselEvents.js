export function moveNext() {
  console.log("Moving Carousel to Next");
  return function dispatchMove(onClick) {
    onClick.next();
  };
}
export function movePrev() {
  console.log("Moving Carousel to prev");
  return function dispatchMove(onClick) {
    onClick.next();
  };
}
