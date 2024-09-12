import React from "react";
import "../styles/common.css";
import MainPageLogo from "../images/mydiary_white_logo.png";
import PageLogo from "../images/mydiary_main_logo.png";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  min-height: 100px;
  background: #fff;
  color: #000;
  padding: 20px;
  top: ${(props) => (props.hide ? "-100px" : "0")}; /* 스크롤 시 헤더 숨기기 */
  left: 0;
  z-index: 1000;
`;

const TransparentHeader = styled(HeaderStyle)`
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.1);
  color: #fff; /* 투명 배경 위의 글자 색상 조정 */

  ul {
    display: flex;
    width: 40%;
    justify-content: space-around;
    font-size: 1.2rem;
  }
  li {
    display: flex;
  }

  .nav-menu {
    color: #fff;
  }

  .login {
    color: #fff;
  }
`;

const Logo = styled.img`
  height: 40px;
`;

const Header = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  return isMainPage ? (
    <TransparentHeader>
      <Link to="/">
        <Logo src={MainPageLogo} alt="Site Logo" />
      </Link>
      <ul>
        <li>
          <Link to="/">
            <div className="nav-menu">about</div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div className="nav-menu">diary</div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div className="nav-menu">calendar</div>
          </Link>
        </li>
      </ul>
      <Link to="/loginregister">
        <div className="login">로그인</div>
      </Link>
    </TransparentHeader>
  ) : (
    <HeaderStyle>
      <Link to="/">
        <Logo src={PageLogo} alt="Site Logo" />
      </Link>
    </HeaderStyle>
  );
};

export default Header;
