import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Modal from '../../../../portal/Modal';
import Button from '../../atoms/atoms-main/Button';
// import Input from '../../atoms/atoms-main/Input';
import TextStyle from '../../atoms/atoms-main/TextStyle';
import NoEmailModal from './NoEmailModal';
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
const PersonalInfoEmailInputStyle = styled.div`
  div {
    width: 100%;

    input {
      margin-top: 20px;
      width: 100%;
      padding: 15px;
      outline: none;
      height: 50px;
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      &:focus {
        border: 1px solid #008489;
      }
    }
  }
  button {
    display: flex;

    .animation {
      padding: 0;
      display: flex;
      margin-top: 10px;
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
`;

const PersonalInfoEmailInput = ({
  personInfoChange,
  email,
  ChangeInputBtn,
  loading,
  emailCheck,
  fix,
}) => {
  const emailRef = useRef();
  useEffect(() => {
    if (fix.emailAddress) {
      emailRef?.current?.focus();
    }
  }, [fix.emailAddress]);

  return (
    <PersonalInfoEmailInputStyle>
      <TextStyle>언제든지 확인하실 수 있는 주소를 사용하세요</TextStyle>
      <div>
        <input
          type="text"
          name="email"
          value={email}
          ref={emailRef}
          onChange={personInfoChange}
          onFocus={() => {
            console.log('dd');
          }}
        />
      </div>
      <Button name="email" value={email} onClick={ChangeInputBtn} save>
        {!loading['user/CHANGE_INPUT_USER_EMAIL_SUBMIT'] && '저장'}
        {loading['user/CHANGE_INPUT_USER_EMAIL_SUBMIT'] && (
          <div className="animation">
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </Button>
    </PersonalInfoEmailInputStyle>
  );
};

export default PersonalInfoEmailInput;
