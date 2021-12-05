import ReactIcon from "../../assets/ReactIcon.png";
import NodeIcon from "../../assets/NodeIcon.png";
import MongoIcon from "../../assets/Mongo.png";
import DSAIcon from "../../../assets/DSA.png";
import ShitIcon from "../../assets/Shit.png";
import styled from "styled-components";

const TopSideCard = styled.div`
  width: 15%;
  background-color: white;
  border-radius: var(--card-border-radius);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--box-shadow);

  &_Wrapper {
    width: 80%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &_IconContainer {
    display: flex;
    width: 100%;
    height: 15%;
    align-items: center;
    justify-content: space-between;
  }
  &_Icons {
    background-color: #edf1f4;
    height: 100%;
    width: 21%;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: black;
    }
    img {
      width: 70%;
    }
  }
  &_Text {
    width: 70%;

    p {
      font-family: "Roboto", sans-serif;
      font-size: 0.9vw;
      color: #7e8689;
    }
  }
`;

export const TopSideCards = () => {
  return (
    <TopSideCard>
      <div className="TopSideCard_Wrapper">
        <div className="TopSideCard_IconContainer">
          <div className="TopSideCard_Icons">
            <img alt="React" src={ReactIcon} />
          </div>
          <div className="TopSideCard_Text">
            <p>React</p>
          </div>
        </div>
        <div className="TopSideCard_IconContainer">
          <div className="TopSideCard_Icons">
            <img alt="Node" src={NodeIcon} />
          </div>
          <div className="TopSideCard_Text">
            <p>Node</p>
          </div>
        </div>
        <div className="TopSideCard_IconContainer">
          <div className="TopSideCard_Icons">
            <img alt="Mongo" src={MongoIcon} />
          </div>
          <div className="TopSideCard_Text">
            <p>Mongo DB</p>
          </div>
        </div>
        <div className="TopSideCard_IconContainer">
          <div className="TopSideCard_Icons">
            <img alt="Data Structures" src={DSAIcon} />
          </div>
          <div className="TopSideCard_Text">
            <p>DSA</p>
          </div>
        </div>
        <div className="TopSideCard_IconContainer">
          <div className="TopSideCard_Icons">
            <img alt="Shitpost" src={ShitIcon} />
          </div>
          <div className="TopSideCard_Text">
            <p>Shitpost</p>
          </div>
        </div>
      </div>
    </TopSideCard>
  );
};
