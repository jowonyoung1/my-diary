import styled from "@emotion/styled";
import MainPageImg from "../images/main-page.jpg";
import MainPageLogo from "../images/mydiary_white_logo.png";
import PolaroidImg from "../images/polaroid_sample.jpg";
import PolaroidImg2 from "../images/polaroid_sample2.jpg";
import PolaroidImg3 from "../images/polaroid_sample3.jpg";
import Polaroid from "../components/Polaroid";

const MainPageStyle = styled.div`
  width: 100%;
  height: 1080px;
  background-image: url(${MainPageImg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .main-logo {
    width: 400px;
    height: 100px;
    margin-bottom: 100px;
    background-image: url(${MainPageLogo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .polaroid-group {
    display: flex;
    gap: 120px;
  }
`;

const MainPage = () => {
  return (
    <MainPageStyle>
      <div className="main-logo"></div>
      <div className="polaroid-group">
        <Polaroid src={PolaroidImg} alt="Sample Polaroid Image" caption="아침으로 먹은 토스트" rotation={-5} /* 회전 값 설정 */ />
        <Polaroid src={PolaroidImg2} alt="Sample Polaroid Image" caption="제주도 여행간 날" rotation={10} />
        <Polaroid src={PolaroidImg3} alt="Sample Polaroid Image" caption="주말 아침 식물에 물주기" rotation={-2} />
      </div>
    </MainPageStyle>
  );
};

export default MainPage;
