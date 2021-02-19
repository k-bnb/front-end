import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/atoms-main/Button';
// import Input from '../../atoms/atoms-main/Input';
import TextStyle from '../../atoms/atoms-main/TextStyle';

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
`;

const PersonalInfoEmailInput = ({
  personInfoChange,
  email,
  ChangeInputBtn,
}) => {
  return (
    <PersonalInfoEmailInputStyle>
      <TextStyle>언제든지 확인하실 수 있는 주소를 사용하세요</TextStyle>
      <div>
        <input
          type="text"
          name="email"
          value={email}
          onChange={personInfoChange}
          onFocus={() => {
            console.log('dd');
          }}
        />
      </div>
      <Button onClick={ChangeInputBtn} save>
        저장
      </Button>
    </PersonalInfoEmailInputStyle>
  );
};

export default PersonalInfoEmailInput;
