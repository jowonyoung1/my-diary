import styled from "@emotion/styled";
import { colorSystem } from "../styles/color";

const PolaroidStyle = styled.div`
  @font-face {
    font-family: "HakgyoansimGeurimilgiTTF-R";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/2408-5@1.0/HakgyoansimGeurimilgiTTF-R.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  position: relative;
  width: 300px;
  height: 330px;
  padding: 10px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;
  display: flex-start;
  flex-direction: column;
  align-items: center;
  transform: rotate(${(props) => props.rotation}deg); /* 회전 값 적용 */
  transition: transform 0.3s ease;
  &:hover {
    transform: rotate(${(props) => props.rotation}deg) translateY(-15px); /* 호버 시 이동 효과 */
  }

  img {
    width: 100%;
    height: 90%;
    object-fit: cover;
  }

  .caption {
    padding: 5px;
    font-family: "HakgyoansimGeurimilgiTTF-R", cursive;
    font-size: 1.2rem;
    font-weight: 500;
    color: ${colorSystem.g900};
  }
`;

const Polaroid = ({ src, alt, caption, rotation = 0 }) => {
  return (
    <PolaroidStyle rotation={rotation}>
      <img src={src} alt={alt} />
      {caption && <div className="caption">{caption}</div>}
    </PolaroidStyle>
  );
};

export default Polaroid;
