import React from "react";
import Memoji from "../../assets/avatar4.png";
import CuriousMemoji from "../../assets/avatar6.png";
import Forward from "../../assets/forward.png";
import ReactIcon from "../../assets/ReactIcon.png";
import NodeIcon from "../../assets/NodeIcon.png";
import MongoIcon from "../../assets/Mongo.png";
import DSAIcon from "../../assets/DSA.png";
import ShitIcon from "../../assets/Shit.png";
import SearchIcon from "../../assets/Search.png";
import PlayIcon from "../../assets/PlayiconPlay.png";
import EyeIcon from "../../assets/EyeIconSeen.png";
import ProfilePic from "../../assets/Obafemi Olorungbon.png";
import NextForwardIcon from "../../assets/NextForwardIcon.png";
import PrevIcon from "../../assets/PrevForwardIcon.png";
function TopWideCard() {
  return (
    <div className="TopWideCard_Container">
      <div className="TopWideCard_Wrapper">
        <div className="TopWideCard_Image"></div>
        <div className="TopWideCard_Text">
          <div className="TopWideCard_Header">
            <p>
              Green Plants are going to Extinct about 500 times faster than they
              should, study finds
            </p>
          </div>
          <div className="TopWideCard_Content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi...
            </p>
          </div>
          <div className="TopWideCard_Author">
            <div className="TopWideCard_Author_Card">
              <div className="TopWideCard_Author_Image">
                <img alt="author" src={Memoji} />
              </div>
              <div className="TopWideCard_Author_Info">
                <p>Obafemi Joseph</p>
                <p>June 20, 2021</p>
              </div>
              <div className="TopWideCard_Link">
                <img alt="forward" src={Forward} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TopSideCard() {
  return (
    <div className="TopSideCard_Container">
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
    </div>
  );
}

function BottomCards() {
  return (
    <div className="BottomCardsWrapper">
      <div className="BottomCardLeftContainer">
        <div className="BottomCardLeftWrapper">
          <div className="BottomCardLeftImage"></div>
          <div className="BottomCardLeftText">
            <div className="BottomCardLeftTextHeader">
              <p>How to make the perfect morning coffee according to science</p>
            </div>
            <div className="BottomCardLeftTextProfile">
              <div className="BottomCardProfileImage">
                <img alt="profile" src={CuriousMemoji} />
              </div>
              <div className="BottomCardLeftInfo">
                <p>Aaron Omale</p>
                <p>20 August 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="BottomCardRightContainer">
        <div className="BottomCardRightWrapper">
          <div className="BottomTopCards">
            <div className="BottomTopLeftCard">
              <div className="BottomTopLeftCardWrapper">
                <div className="SearchBar">
                  <div className="inputWrapper">
                    <input placeholder="What will you like to read about today?" />
                  </div>
                  <div className="searcIconContainer">
                    <img alt="search" src={SearchIcon} />
                  </div>
                </div>
                <div className="Tags">
                  <p>#Database</p>
                  <p>#Testing</p>
                  <p>#UI Designs</p>
                  <p>#CSS</p>
                  <p>#Backend</p>
                </div>
              </div>
            </div>
            <div className="BottomTopRightCard">
              <div className="BottomTopRightCardWrapper">
                <div className="BottomTopRightCardMusicImage"></div>
                <div className="BottomTopRightCardMusicControl">
                  <div className="BottomTopRightCardMusicControllerIcon">
                    <img alt="play Icon" src={PlayIcon} />
                  </div>
                  <div className="BottomTopRightCardMusicInfo">
                    <p>One and Only</p>
                  </div>
                  <div className="BottomTopRightCardMusicStats">
                    <img alt="seen Icon" src={EyeIcon} />
                    <p>80,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="BottomBottomCards">
            <div className="BottomBottomLeftCard">
              <div className="ProfileCardWrapper">
                <div className="ProfileImage">
                  <img alt="Profile" src={ProfilePic} />
                </div>
                <div className="ProfileInfo">
                  <div className="ProfileInfoName">
                    <p>Obafemi Joseph</p>
                    <p>Software Developer</p>
                  </div>
                  <div className="ProfileInfoStats">
                    <div className="ProfileInfoStatsWrapper">
                      <div className="Stats">
                        <p>Articles</p>
                        <p>36</p>
                      </div>
                      <div className="Stats">
                        <p>Articles</p>
                        <p>36</p>
                      </div>
                      <div className="Stats">
                        <p>Articles</p>
                        <p>36</p>
                      </div>
                    </div>
                  </div>
                  <div className="ProfileInfoCTA">
                    <div className="ProfileInfoCTAWrapper">
                      <div className="ProfileInfoCTAChat">
                        <button>
                          <span>Chat</span>
                        </button>
                      </div>
                      <div className="ProfileInfoCTAChat">
                        <button>
                          <span>Follow</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="BottomBottomLeftCard">
              <div className="FeedBackCardWrapper">
                <div className="FeedbackBox">
                  <textarea placeholder="Have a message for me?" />
                </div>
                <div className="SubmitFeedback">
                  <button>Send</button>
                </div>
              </div>
            </div>
            <div className="BottomBottomRightCard">
              <div className="BottomBottomRightCardWrapper">
                <div className="BottomBottomRightTopCard">
                  <div className="BottomBottomRightTopCardNav">
                    <div className="BottomNavigate">
                      <img alt="Navigate" src={PrevIcon} />
                    </div>
                    <div className="BottomNavigate">
                      <img alt="Navigate" src={NextForwardIcon} />
                    </div>
                  </div>
                </div>
                <div className="BottomBottomRightBottomCard">
                  <div className="BottomBottomRightBottomCardSelections">
                    <div className="selections">
                      <p>Open Source</p>
                    </div>
                    <div className="selections">
                      <p>GitHub</p>
                    </div>
                    <div className="selections">
                      <p>Dev Fest</p>
                    </div>
                    <div className="selections">
                      <p>Start ups</p>
                    </div>
                    <div className="selections">
                      <p>Interships</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Cards(props) {
  return (
    <>
      <div className="Top-Cards">
        <TopWideCard />
        <TopSideCard />
      </div>
      <div className="Bottom-Cards">
        <BottomCards />
      </div>
    </>
  );
}
