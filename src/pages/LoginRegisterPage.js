import styled from "@emotion/styled";
import React from "react";

const WrapStyle = styled.div`
  position: relative;
  .container {
    display: flex;
    width: 760px;
    height: 800px;
    /* 높이 임시로 설정 */
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: aliceblue;
  }
`;

const LoginRegisterPage = () => {
  return (
    <WrapStyle>
      <div className="container"></div>
    </WrapStyle>
  );
};

export default LoginRegisterPage;
