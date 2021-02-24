import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../../atoms/atoms-main/Button';
import Input from '../../atoms/atoms-main/Input';
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
const PersonalInfoBirthinputStyle = styled.div`
  input {
    padding: 15px;
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

const PersonalInfoBirthinput = ({
  personInfoChange,
  ChangeInputBtn,
  birth,
  loading,
  fix,
}) => {
  const birthRef = useRef();
  console.log(birthRef);
  useEffect(() => {
    if (fix.birth) {
      birthRef?.current?.focus();
    }
  }, [fix.birth]);
  return (
    <PersonalInfoBirthinputStyle>
      <div>
        <Input
          type="date"
          name="birth"
          onChange={personInfoChange}
          ref={birthRef}
          required
          pattern="\d{4}-\d{2}-\d{2}"
        />
      </div>
      <Button name="birth" value={birth} onClick={ChangeInputBtn} save>
        {!loading['user/CHANGE_INPUT_USER_BIRTH_SUBMIT'] && '저장'}
        {loading['user/CHANGE_INPUT_USER_BIRTH_SUBMIT'] && (
          <div className="animation">
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </Button>
    </PersonalInfoBirthinputStyle>
  );
};

export default PersonalInfoBirthinput;
