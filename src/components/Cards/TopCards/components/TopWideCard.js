import styled from "styled-components";
import Memoji from "../../assets/avatar4.png";
import Forward from "../../assets/forward.png";

const TopWideCard = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: space-between;

  &_Image {
    border-radius: var(--card-border-radius) !important;
    width: 50%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    img {
      border-radius: var(--card-border-radius);
    }
  }

  &_Text {
    display: flex;
    width: 45%;
    height: 95%;
    flex-direction: column;
    padding-right: 2%;
    justify-content: space-evenly;
  }

  &_Header {
    height: 30%;
    padding-right: 2.5%;

    p {
      font-weight: 500;
      font-size: 1.5vw;
      line-height: 1.5;
      font-family: "Roboto", sans-serif;
    }
  }

  &_Content {
    height: 40%;
    overflow: hidden;
    white-space: wrap;
    text-overflow: ellipsis;

    p {
      line-height: 1.5;
      color: #7e8689;
      font-size: 1.1vw;
      font-family: "Roboto", sans-serif;
    }
  }

  &_Author {
    height: 25%;
  }
  &_Author_Card {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &_Author_Card_Image {
    max-width: 50px;
    aspect-ratio: auto;
    border-radius: 50%;
    background-color: white;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &_TopWideCard_Author_Info {
    width: 80%;

    p:first-child {
      font-size: 1.2vw;
      margin-bottom: 4px;
      font-weight: 700;
      font-family: "Roboto", sans-serif;
    }

    p:last-child {
      font-size: 1vw;
      color: #7e8689;
      font-family: "Roboto", sans-serif;
    }

    &_Link {
      max-width: 5%;
      aspect-ratio: auto;

      img {
        width: 100%;
      }
    }
  }
`;

export const TopWideCards = ({ post, ...props }) => {
  const date = new Date(post.dateAdded);
  return (
    <TopWideCard onClick={() => props.setPost(post)}>
      <div
        className="TopWideCard_Image"
        style={{ backgroundImage: `url(${post.coverImage})` }}
      ></div>
      <div className="TopWideCard_Text">
        <div className="TopWideCard_Header">
          <p>{post.title}</p>
        </div>
        <div className="TopWideCard_Content">
          <p dangerouslySetInnerHTML={{ __html: post.brief }}></p>
        </div>
        <div className="TopWideCard_Author">
          <div className="TopWideCard_Author_Card">
            <div className="TopWideCard_Author_Image">
              <img alt="author" src={Memoji} />
            </div>
            <div className="TopWideCard_Author_Info">
              <p>{post.author.username}</p>
              <p>{date.toDateString()}</p>
            </div>
            <div className="TopWideCard_Link">
              <img alt="forward" src={Forward} />
            </div>
          </div>
        </div>
      </div>
    </TopWideCard>
  );
};
