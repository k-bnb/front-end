import React from 'react';
import styled from 'styled-components';
import Input from '../../atoms/atoms-main/Input';
import MainInfoParagraph from '../../atoms/atoms-main/MainInfoParagraph';

const InputContainer = styled.div`
  position: relative;
  width: 40rem;
  height: 5rem;
  margin-bottom: 1rem;
  /* text-align: center; */
  color: #000;
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
    right: 1rem;
  }
`;

const AuthRegisterdate = () => {
  return (
    <>
      <MainInfoParagraph>
        만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은 에어비앤비의
        다른 회원에게 공개되지 않습니다.
      </MainInfoParagraph>
      <InputContainer>
        <Input type="date" required pattern="\d{4}-\d{2}-\d{2}" />
      </InputContainer>
    </>
  );
};

export default AuthRegisterdate;
