import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import CircleDiv from '../../components/UI/atoms/atoms-main/DivStyle';
import TextStyle from '../../components/UI/atoms/atoms-main/TextStyle';
import { AiOutlineClose } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import Button from '../../components/UI/atoms/atoms-main/Button';
import Input from '../../components/UI/atoms/atoms-main/Input';
import { IoIosArrowBack } from 'react-icons/io';
import { RiArrowUpSLine } from 'react-icons/ri';

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
      }
    }
    .login-input {
      width: 400px;
      /* border: 1px solid red; */
      border-radius: 0;
      margin: 0 auto;
      .email-div {
        position: relative;
        width: 100%;
        height: 50px;
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
        .birthday {
          .birthday-text {
            display: block;
            font-size: 1.6rem;
          }
          span {
            display: block;
            margin-bottom: 10px;
            font-size: 1.4rem;
          }
        }
        .birthday-date {
          display: flex;
          justify-content: space-between;
          width: 100%;
          .month {
            position: relative;
            input {
              width: 220px;
              /* flex-grow: 10; */
              /* width: 100%; */
              height: 50px;

              /* margin-right: 10px; */
            }
            svg {
              position: absolute;
              bottom: 50%;
              right: 0;
              color: #000;

              font-size: 3rem;
              transform: rotate(180deg) translateY(-50%);
            }
          }
          .day {
            position: relative;
            input {
              width: 100px;
              /* flex-grow: 10; */
              height: 50px;
            }
            svg {
              position: absolute;
              bottom: 50%;
              right: 0;
              color: #000;
              font-size: 3rem;
              transform: rotate(180deg) translateY(-50%);
            }
          }
          .year {
            position: relative;
            input {
              width: 150px;
              /* flex-grow: 10; */
              height: 50px;
            }
            svg {
              position: absolute;
              bottom: 50%;
              right: 0;
              color: #000;
              font-size: 3rem;
              transform: rotate(180deg) translateY(-50%);
            }
          }
        }

        .submit-btn {
          /* padding: 10px 0;
          background-color: rgb(255, 90, 95);
          border-radius: 5px; */
        }
        span {
          font-size: 1.7rem;
        }

        .sigup-message {
          margin: 10px 0;
          span {
            font-size: 1.2rem;
            line-height: 1.6rem;
          }
        }
        .check-box {
          display: block;
          position: relative;
          input {
            background: 0;
          }
          input:checked {
            background-color: #008489;
          }
          input:checked + label::after {
            content: '';
            display: block;
            width: 11px;
            position: absolute;
            bottom: 50%;
            left: 5px;
            transform: translateY(50%);
            height: 11px;
            /* background-color: #000; */
            background: none;
            box-shadow: 1px -1px 1px 2px #008489, 1px 1px 1px 3px #008489;
          }
          label {
            color: #000;
            vertical-align: super;
          }
        }
      }
    }
    .signup-div {
      width: 90%;

      border-radius: 0;
      span {
        margin-right: 8px;
        font-size: 1.4rem;
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
          font-size: 1.5rem;
          vertical-align: middle;
        }
      }
      button {
        border: 0;
        padding: 10px 0;
        span {
          font-size: 1.5rem;

          vertical-align: middle;
        }
      }
      margin-bottom: 10px;
    }
  }
`;

const LoginPotal = ({ modal, setModal }) => {
  const [formState, setFormState] = useState(false);

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
  console.log(formState);
  useEffect(() => {
    setFormState(formState);
  }, [formState]);

  const signupBtn = useCallback(
    (e) => {
      e.preventDefault();
      setFormState(true);
      console.log(formState);
    },
    [formState],
  );
  const signinBtn = useCallback(
    (e) => {
      e.preventDefault();
      setFormState(false);
      console.log(formState);
    },
    [formState],
  );
  return (
    <Modaldiv className="bg" onClick={bgClick}>
      <form>
        <CircleDiv
          className={modal ? 'login-group active' : 'login-group'}
          style={formState ? { width: '590px' } : { width: '450px' }}
          logindiv
        >
          <Loginhead
            name={formState ? '회원가입' : '로그인'}
            modal={modal}
            setModal={setModal}
          />
          <LoginGoogle />

          <CircleDiv borderline className="or" />
          <CircleDiv className="email-login">
            <CircleDiv className="google-login">
              <CircleDiv
                style={formState ? { width: '520px' } : {}}
                className="login-input"
              >
                <div className="email-div">
                  <Input type="email" placeholder={'이메일 주소'} />
                  <GoMail />
                </div>

                <div className="email-div">
                  <Input
                    type={formState ? 'text' : 'password'}
                    placeholder={formState ? '이름' : '비밀번호 입력'}
                  />
                  <RiLock2Line />
                </div>
                {formState && (
                  <div className="email-div">
                    <Input type="password" placeholder="비밀번호 설정하기" />
                    <RiLock2Line />
                  </div>
                )}
                {formState || (
                  <Button className="password-ok">
                    <TextStyle greentextLine>비밀번호 보기</TextStyle>
                  </Button>
                )}
              </CircleDiv>
            </CircleDiv>
          </CircleDiv>
          <CircleDiv className="submit">
            <CircleDiv className="submit-div">
              {formState || (
                <Button className="search-password">
                  <TextStyle greentextLine>비밀번호를 잊으셨나요?</TextStyle>
                </Button>
              )}
              {formState && (
                <div className="birthday">
                  <TextStyle className="birthday-text" blackmiddlebold>
                    생일
                  </TextStyle>
                  <TextStyle blacknormal>
                    만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은
                    다른 에어비앤비 이용자에게 송개되지 않습니다.
                  </TextStyle>
                </div>
              )}
              {formState && (
                <div className="birthday-date">
                  <div className="month">
                    <Input placeholder="월" type="text" />
                    <RiArrowUpSLine />
                  </div>
                  <div className="day">
                    <Input placeholder="일" type="text" />
                    <RiArrowUpSLine />
                  </div>
                  <div className="year">
                    <Input placeholder="년" type="text" />
                    <RiArrowUpSLine />
                  </div>
                </div>
              )}
              {formState && (
                <CircleDiv className="sigup-message">
                  <TextStyle blacknormal>
                    에어비앤비의 회원 전용 할인, 추천 여행 정보, 프로모션 및
                    정책 변경사항을 이메일로 보내드립니다. 계정 관리의 환경설정
                    또는 프로모션 알림에서 언제든지 메시지 수신을 거부할 수
                    있습니다.
                  </TextStyle>
                </CircleDiv>
              )}
              {formState && (
                <div className="check-box">
                  <input id="ch" type="checkbox" />
                  <label for="ch">
                    에어비앤비에서 보내는 마케팅 메시지를 받고 싶지 않습니다.
                  </label>
                </div>
              )}
              <LoginBtn name={formState ? '회원가입' : '로그인'} />
            </CircleDiv>
          </CircleDiv>
          <CircleDiv borderline />
          <CircleDiv className="signup-div">
            {formState ? (
              <TextStyle blacknormal>이미 에어비앤비 계정이 있나요?</TextStyle>
            ) : (
              <TextStyle blacknormal>에어비앤비 계정이 없으세요?</TextStyle>
            )}
            {formState ? (
              <Button className="signup" onClick={signinBtn}>
                <TextStyle greentextLine>로그인</TextStyle>
              </Button>
            ) : (
              <Button className="signup" onClick={signupBtn}>
                <TextStyle greentextLine>회원가입</TextStyle>
              </Button>
            )}
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
