import styled from "@emotion/styled";
import { colorSystem } from "../styles/color";

const ButtonStyle = styled.button`
  cursor: pointer;
  font-family: "Pretendard Variable";
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 30px;
  border: 1px solid ${colorSystem.primary};
  &:hover {
    /* border: 1px solid ${(props) => props.hoverBorder}; */
    border: 1px solid ${colorSystem.primary};
    background-color: ${(props) => props.hoverBg};
    color: ${(props) => props.hoverColor};
  }
`;

const MainButtonStyle = styled(ButtonStyle)`
  background-color: ${colorSystem.primary};
  color: ${colorSystem.white};
  &:hover {
    border: 1px solid ${colorSystem.p700};
    background-color: ${colorSystem.p700};
  }
`;

// const ActionButtonStyle = styled(ButtonStyle)`
//   background-color: ${colorSystem.white};
//   color: ${colorSystem.p700};
//   &:hover {
//     background-color: #d3dce9;
//   }
// `;

const MainButton = ({ label = "버튼", onClick }) => {
  return <MainButtonStyle onClick={onClick}>{label}</MainButtonStyle>;
};

// const ActionButton = ({ label = "버튼", onClick }) => {
//   return <ActionButtonStyle onClick={onClick}>{label}</ActionButtonStyle>;
// };
export { MainButton };
