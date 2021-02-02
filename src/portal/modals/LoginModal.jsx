import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import CircleDiv from '../../components/UI/atoms/atoms-main/DivStyle';
import TextStyle from '../../components/UI/atoms/atoms-main/TextStyle';
import { AiOutlineClose } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import Button from '../../components/UI/atoms/atoms-main/Button';
import Input from '../../components/UI/atoms/atoms-main/Input';
import { IoIosArrowBack } from 'react-icons/io';
import { GoMail } from 'react-icons/go';
import { RiLock2Line } from 'react-icons/ri';
import Loginhead from '../../components/UI/molecules/molecules-main/Loginhead';
import LoginGoogle from '../../components/UI/molecules/molecules-main/LoginGoogle';
import LoginBtn from '../../components/UI/molecules/molecules-main/LoginBtn';
import { keyframes } from 'styled-components';

const boxFade = keyframes`
	0% {
		opacity: 0;
		transform: translateY(100%);
	}
	50% {
		opacity: 1;
	}
	100% {
		opacity: 1;
	}
`;
const Modaldiv = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);

  .login-group {
    display: flex;
    justify-content: flex-start;
    &.active {
      animation: ${boxFade} 0.2s ease-in alternate forwards;
    }
    .login-text {
      display: flex;
      align-items: center;

      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 0;
      width: 100%;
      height: 60px;
      color: #000;
      button {
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
        svg {
          font-size: 15px;
        }
      }
      span {
        margin: 0 auto;
      }
    }

    .main-login {
      display: flex;

      justify-content: center;
      align-items: flex-start;
      margin-top: 10px;
      align-items: center;
      border-radius: 0;

      .google-login {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        align-items: center;
        border-radius: 5px;
        button {
          width: 400px;
          height: 40px;
          display: flex;

          justify-content: center;
          align-items: center;
          border: 2px solid rgb(0, 0, 0, 0.5);
          svg {
            vertical-align: sub;
            font-size: 20px;
            margin-right: 14px;
          }
        }
      }
    }

    .or {
      position: relative;
      &::before {
        content: '또는';
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        background-color: rgb(255, 255, 255);
        transform: translateX(-50%) translateY(-50%);
        color: rgb(0, 0, 0, 0.4);
        text-align: center;
        width: 65px;
        height: 23px;
      }
    }
    .login-input {
      width: 100%;
      border-radius: 0;
      margin: 0 auto;
      .email-div {
        position: relative;

        height: 50px;
        width: 400px;
        margin-bottom: 10px;
        input {
          height: 100%;
          box-sizing: border-box;
          /* margin-bottom: 10px; */
        }
        svg {
          color: rgba(0, 0, 0, 0.4);
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 10px;
        }
      }
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .password-ok {
        border: 0;
        width: 30%;

        span {
          font-size: 0.8rem;
        }
      }
    }
    .submit {
      /* background-color: red; */
      border-radius: 0;
      width: 88%;

      .submit-div {
        display: flex;
        flex-direction: column;
        .search-password {
          width: 30%;
          margin: 0;
          height: 10px;
          border: 0;
          span {
            display: block;
            font-size: 0.4rem;
          }
          margin-bottom: 10px;
        }
        /* .submit-btn {
					padding: 10px 0;
					background-color: rgb(255, 90, 95);
					border-radius: 5px;
				} */
      }
    }
    .signup-div {
      width: 90%;

      border-radius: 0;
      span {
        margin-right: 8px;
        font-size: 0.8rem;
      }
      .signup {
        background: none;
        border: 0;
      }
      margin-bottom: 10px;
    }

    .back {
      width: 90%;
      /* border: 1px solid red; */
      border-radius: 0;

      span {
        svg {
          color: #008489;
          vertical-align: middle;
        }
      }
      button {
        border: 0;
        padding: 10px 0;
        span {
          font-size: 0.8rem;

          vertical-align: middle;
        }
      }
      margin-bottom: 10px;
    }
  }
`;

const LoginPotal = ({ modal, setModal }) => {
  // const noScroll = useCallback(() => {
  // 	if (modal) {
  // 		document.body.style.overflow = 'hidden';
  // 		document.querySelector('html').scrollTop = window.scrollY;
  // 		window.scrollTo(0, 0);
  // 	}
  // }, [modal]);
  // console.log(modal);

  // window.addEventListener('scroll', noScroll);

  const bgClick = useCallback(
    (e) => {
      if (!e.target.matches('.bg')) return;
      setModal(false);
    },
    [setModal],
  );

  return (
    <Modaldiv className="bg" onClick={bgClick}>
      <form>
        <CircleDiv
          className={modal ? 'login-group active' : 'login-group'}
          logindiv
        >
          <Loginhead name="로그인" modal={modal} setModal={setModal} />
          <LoginGoogle />
          <CircleDiv borderline className="or" />
          <CircleDiv className="email-login">
            <CircleDiv className="google-login">
              <CircleDiv className="login-input">
                <div className="email-div">
                  <Input type="email" placeholder={'이메일 주소'} />
                  <GoMail />
                </div>
                <div className="email-div">
                  <Input type="password" placeholder={'비밀번호 입력'} />
                  <RiLock2Line />
                </div>
                <Button className="password-ok">
                  <TextStyle greentextLine>비밀번호 보기</TextStyle>
                </Button>
              </CircleDiv>
            </CircleDiv>
          </CircleDiv>
          <CircleDiv className="submit">
            <CircleDiv className="submit-div">
              <Button className="search-password">
                <TextStyle greentextLine>비밀번호를 잊으셨나요?</TextStyle>
              </Button>
              <LoginBtn name="로그인" />
            </CircleDiv>
          </CircleDiv>
          <CircleDiv borderline />
          <CircleDiv className="signup-div">
            <TextStyle blacknormal>에어비앤비 계정이 없으세요?</TextStyle>
            <Button className="signup">
              <TextStyle greentextLine>회원가입</TextStyle>
            </Button>
          </CircleDiv>
          <CircleDiv className="back">
            <TextStyle blacknormal>
              <IoIosArrowBack />
            </TextStyle>
            <Button className="signup">
              <TextStyle greentextLine>뒤로</TextStyle>
            </Button>
          </CircleDiv>
        </CircleDiv>
      </form>
    </Modaldiv>
  );
};

export default LoginPotal;
