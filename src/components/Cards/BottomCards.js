export const BottomCards = ({ NavigatorLeft, NavigatorRight, navigate }) => {
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
                    <NavigatorLeft onclick={navigate} />
                    <NavigatorRight onclick={navigate} />
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
};
