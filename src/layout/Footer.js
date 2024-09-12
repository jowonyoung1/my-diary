import React from "react";
import "../styles/common.css";
import styled from "@emotion/styled";
import { colorSystem } from "../styles/color";
import FooterLogo from "../images/mydiary_main_logo.png";

const FooterStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: ${colorSystem.g900};
  background: ${colorSystem.p100};

  .inner {
    width: 100%;
    margin: 10px auto;
    display: flex;
    position: relative;
  }
`;

const FooterTop = styled.div`
  display: flex;
  position: absolute;
  top: 0px;
  right: 0px;
  margin-top: 10px;
  ul {
    display: flex;
  }

  li {
    display: flex;
    margin: 0 3px;
  }

  .privacy {
    font-weight: 600;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-top: 30px;
  margin-bottom: 30px;
  .footer-logo {
    width: 180px;
    background: url(${FooterLogo});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

  ul {
    display: block;
  }

  li {
    display: flex;
    padding: 3px;
    > p {
      font-size: 0.8rem;
      margin-right: 5px;
    }
  }

  .copyright {
    margin-top: 7px;
    color: ${colorSystem.g700};
    font-size: 0.8rem;
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <div className="inner">
        <FooterTop>
          <ul>
            <li>
              <a href="#">회사소개</a>
            </li>
            <li>
              <a href="#">이용약관</a>
            </li>
            <li className="privacy">
              <a href="#">개인정보처리방침</a>
            </li>
          </ul>
        </FooterTop>
        <FooterBottom>
          <div className="footer-logo"></div>
          <div>
            <ul>
              <li>
                <p>마이다이어리(주) |</p>
                <p>대표자:조원영</p>
              </li>
              <li>
                <p>대구광역시 중구 중앙로1, 중앙빌딩 5층 |</p>
                <p>사업자등록번호: 111-11-11111 |</p>
              </li>
              <li className="copyright">© 2024 My Diary. All Rights Reserved.</li>
            </ul>
          </div>
        </FooterBottom>
      </div>
    </FooterStyle>
  );
};

export default Footer;
