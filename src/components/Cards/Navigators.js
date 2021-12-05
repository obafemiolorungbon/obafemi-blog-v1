export const PrevNavigation = ({ onclick }) => {
  return (
    <div
      onClick={() => {
        onclick();
      }}
      className="BottomNavigate"
    >
      <img alt="Navigate" src={PrevIcon} />
    </div>
  );
};

export const NextNavigation = ({ onclick }) => {
  return (
    <div
      onClick={() => {
        onclick();
      }}
      className="BottomNavigate"
    >
      <img alt="Navigate" src={NextForwardIcon} />
    </div>
  );
};
