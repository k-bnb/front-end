import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../../atoms/atoms-main/Button';
import TextStyle from '../../atoms/atoms-main/TextStyle';
import { CgLoadbarAlt } from 'react-icons/cg';
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
const PersonalNameInputStyle = styled.div`
  .person-info {
    display: flex;
    flex-direction: row;
    margin-bottom: 0;
    /* flex-wrap: wrap; */
    div {
      display: flex;
      flex-direction: column;
      margin-right: 15px;

      width: 100%;
      margin-top: 15px;
      label {
        font-size: 1.8rem;
      }
      input {
        padding: 10px;
        outline: none;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        height: 40px;
        margin-top: 10px;
        &:focus {
          box-sizing: border-box;

          border-width: 1px;
          border-color: #008489;
        }
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
const PersonalNameInput = ({
  personInfoChange,
  name,
  inputFocus,
  ChangeInputBtn,
  loading,
}) => {
  return (
    <PersonalNameInputStyle>
      <TextStyle>
        허가증이나 여권 등 여행 서류에 기재외더 있는 이름을 말합니다.
      </TextStyle>
      <div className="person-info">
        <div>
          <label htmlFor="">이름</label>
          <input
            value={name}
            type="text"
            name={'name'}
            onChange={personInfoChange}
            onClick={inputFocus}
          />
        </div>
      </div>
      <Button onClick={ChangeInputBtn} save>
        {!loading && '저장'}
        {loading && (
          <div className="animation">
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </Button>
    </PersonalNameInputStyle>
  );
};

export default PersonalNameInput;
