import React, { useEffect, useRef, useState } from 'react';

import styled, { keyframes, css } from 'styled-components';
import Button from '../../atoms/atoms-main/Button';
import PageLoading from './PageLoading';
const ani = keyframes`
  0%,
  80%,
  100% {
    transform: scale(1);
  }
  40% {
    transform: scale(0);
  }

`;

const ani1 = keyframes`
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  70% {
    transform: scale(0.5);
  }

`;
const ani3 = keyframes`
  0%,
  80%,
  100% {
    transform: scale(1);
  }
  40% {
    transform: scale(0);
  }
`;

const boxFade = keyframes`
	0% {
		transform: translateY(100%);
	}
	50% {

    transform: translateY(50%);
	}
	100% {

    transform: translateY(0%);

	}
`;

const boxFade1 = keyframes`
	0% {
		/* width: 0; */

	
    transform: translateY(0%);
	}
	50% {

		transform: translateY(50%);
	}
	100% {

		transform: translateY(100%);
	}
`;
const NoEmailModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  /* animation: ${boxFade} 0.2s ease-in alternate forwards; */
  ${(props) => {
    return (
      props.disappear &&
      css`
        /* animation: ${boxFade1} 0.4s ease-in alternate forwards; */
      `
    );
  }}
  .emailClass {
    position: relative;
    background-color: #fff;
    width: 400px;
    border-radius: 15px;
    padding: 50px;
    h1 {
      margin: 0;
      margin: 10px 0;
      text-align: center;
    }
    span {
      display: block;
      text-align: center;
      color: red;
      font-size: 1.4rem;
      margin: 10px 0;
    }
    div {
      display: flex;
      justify-content: center;
      input {
        width: 300px;
        height: 40px;
        padding: 0 10px;
        border: 1px solid rgba(0, 0, 0, 0.4);
        border-radius: 5px;
      }
      button {
        display: flex;
        width: 150px;
        height: 50px;
        margin-top: 30px;
        align-items: center;
        justify-content: center;
        border: 1px solid #000;
        &:focus {
          outline: 1px solid #fff;
        }
        .animation {
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 0;
          & div:nth-child(1) {
            width: 10px;
            height: 10px;
            background-color: #5f3737;
            animation: ${ani} 1s infinite ease-in-out;
            animation-fill-mode: both;

            display: block;
            border-radius: 50%;
          }
          & div:nth-child(2) {
            width: 10px;
            height: 10px;
            background-color: #bea0a0;
            animation: ${ani1} 1s infinite ease-in-out;
            animation-fill-mode: both;
            display: block;
            border-radius: 50%;
          }
          & div:nth-child(3) {
            width: 10px;
            height: 10px;
            background-color: #c23636;
            animation: ${ani3} 1s infinite ease-in-out;
            animation-fill-mode: both;
            display: block;
            border-radius: 50%;
          }
        }
      }
    }

    .cancelBtn {
      position: absolute;
      background: none;
      padding: 15px;
      border: 0;
      border-left: 1px solid rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      border-top-left-radius: 0;
      cursor: pointer;
      top: 0;
      right: 0;
      color: rgba(0, 0, 0, 0.4);
      &:hover {
        border-top-right-radius: 15px;
        color: #fff;
        background-color: #aa8e8e;
      }
    }
  }
`;
const NoEmailModal = ({
  loading,
  emailCheck,
  email,
  ChangeInputBtn,
  personInfoChange,
  personInfoEmailSubmit,
  emailOk,
  personInfoEmailSubmitKeypress,
  cancelModalEmail,
}) => {
  const [animation, setAnimation] = useState(false);
  const [localModalState, setLocalModalState] = useState(emailOk);
  const emailsRef = useRef();

  useEffect(() => {
    emailsRef?.current?.focus();
    if (localModalState && !emailOk) {
      setAnimation(true);
      setTimeout(() => {
        setAnimation(false);
      }, 0);
    }
    setLocalModalState(emailOk);
  }, [localModalState, emailOk]);
  if (
    (emailCheck?.code === -1001 || emailCheck?.code === -1002) &&
    !animation &&
    !localModalState
  )
    return null;
  return (
    <NoEmailModalStyle className="bg" onClick={cancelModalEmail}>
      <div className="emailClass" disappear={!emailOk}>
        {!loading['user/CHANGE_INPUT_USER_EMAIL_SUBMIT'] ? (
          <>
            <h1>이메일을 다시 입력해 주세요.</h1>
            <span>
              {emailCheck?.code === -1002 && 'email양식에 맞지 않습니다.'}
              {emailCheck?.code === -1001 && 'email이 중복 되었습니다.'}
            </span>
            <div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={personInfoChange}
                ref={emailsRef}
                onKeyPress={personInfoEmailSubmitKeypress}
              />
            </div>
            <div>
              <Button
                name="email"
                value={email}
                save
                onClick={personInfoEmailSubmit}
                tabIndex="2"
              >
                {' '}
                {!loading['user/CHANGE_INPUT_USER_EMAIL_SUBMIT'] && '저장'}
                {loading['user/CHANGE_INPUT_USER_EMAIL_SUBMIT'] && (
                  <div className="animation">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                )}
              </Button>
            </div>
            <button className="cancelBtn" onClick={cancelModalEmail}>
              x
            </button>
          </>
        ) : (
          <PageLoading />
        )}
      </div>
    </NoEmailModalStyle>
  );
};

export default NoEmailModal;

//PageLoading
