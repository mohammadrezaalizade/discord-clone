import styled from "styled-components";
import Header from "./Header";
import { HiDownload } from "react-icons/hi";

const HomePage = () => {

  return (
    <Wapper>
      <Header />
      <Content>
        <ContentIntroduce>
          <h1>Your palce to talk</h1>
          <p>
            Whether you’re part of a school club, gaming group, worldwide art
            community, or just a handful of friends that want to spend time
            together, Discord makes it easy to talk every day and hang out more
            often.
          </p>
          <BtnContainer>
            <button id="discordApp">
              <HiDownload /> Download for Mac
            </button>
            <button id="discordBrowser">Open Discord in your browser</button>
          </BtnContainer>
        </ContentIntroduce>
        <img src="/asset/images/homepage2.svg" alt="homepage2" />
      </Content>
    </Wapper>
  );
};

const Wapper = styled.div`
  background: #295de7;
  height: 100vh;
  scroll-behavior: smooth;
  overflow-y: hidden;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
  flex-direction: column;
  padding: 2rem 10rem;
  position: relative;
  bottom: 5rem;

  img {
    height: 50rem;
    width: 50rem;
    transform: scale(0.9);
    overflow-y: hidden;
  }

  @media only screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;

    img {
      height: 100%;
      width: 100%;
      transform: scale(0.9);
      overflow-y: hidden;
    }
  }
`;
const ContentIntroduce = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 2rem;

  color: #fff;
  user-select: none;
  h1 {
    font-size: 3rem;
  }
  p {
    width: 40rem;
    font-size: 2rem;
    text-align: center;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 45rem;

  button {
    border: none;
    border-radius: 2rem;
    padding: 1rem 1.5rem;
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: 600;
    color: #ccc;
  }

  #discordApp {
    color: #1f2937;
  }
  #discordBrowser {
    background-color: #1f2937;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export default HomePage;
