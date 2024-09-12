import styled from "@emotion/styled";
import React from "react";
import MyDiaryLogo from "../images/mydiary_main_logo.png";
import KakaoIcon from "../images/btn_kakao.svg";
import NaverIcon from "../images/btnG_icon_circle.png";
import GoogleIcon from "../images/btn_google.svg";
import { Link } from "react-router-dom";

const WrapStyle = styled.div`
  position: relative;
  .login-inner {
    display: flex;
    width: 760px;
    height: 800px;
    /* 높이 임시로 설정 */
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .login-top {
      width: 80%;
      min-height: 80px;
      background: url(${MyDiaryLogo});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      margin-bottom: 50px;
    }

    .login-middle {
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-bottom: 40px;
    }

    a {
      width: 100%;
    }

    .kakao-login-group {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fee500;
      border-radius: 20px;
      gap: 5px;
    }
    .naver-login-group {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #03c75a;
      border-radius: 20px;
      gap: 5px;
    }
    .google-login-group {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      border-radius: 20px;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
      gap: 3px;
    }

    .kakao-icon {
      width: 35px;
      height: 35px;
      background: url(${KakaoIcon});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
    .kakao-login {
      background-color: #fee500;
    }

    .naver-icon {
      width: 35px;
      height: 35px;
      background: url(${NaverIcon});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
    .naver-login {
      background-color: #03c75a;
    }

    .google-icon-group {
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .google-icon {
      width: 18px;
      height: 100%;
      background: url(${GoogleIcon});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
    .google-login {
      background-color: #fff;
    }

    .login-bottom {
    }
  }
`;

const LoginRegisterPage = () => {
  return (
    <WrapStyle>
      <div className="login-inner">
        <div className="login-top"></div>
        <div className="login-middle">
          <Link to="">
            <div className="kakao-login-group">
              <div className="kakao-icon"></div>
              <div className="kakao-login">카카오로 시작하기</div>
            </div>
          </Link>
          <Link to="">
            <div className="naver-login-group">
              <div className="naver-icon"></div>
              <div className="naver-login">네이버로 시작하기</div>
            </div>
          </Link>
          <Link to="">
            <div className="google-login-group">
              <div className="google-icon-group">
                <div className="google-icon"></div>
              </div>
              <div className="google-login">Google로 시작하기</div>
            </div>
          </Link>
        </div>
        <div className="login-bottom">
          {/* 로그인페이지 이동 */}
          <Link to="">
            <div className="login">로그인하러 가기</div>
          </Link>
          {/* 회원가입페이지 이동 */}
          <Link to="">
            <div className="signup">아직 회원이 아니신가요?</div>
          </Link>
        </div>
      </div>
    </WrapStyle>
  );
};

export default LoginRegisterPage;
