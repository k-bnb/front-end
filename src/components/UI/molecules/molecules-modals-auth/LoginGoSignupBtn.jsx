import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/atoms-main/Button';
import CircleDiv from '../../atoms/atoms-main/DivStyle';
import TextStyle from '../../atoms/atoms-main/TextStyle';

const LoginGoSignupBtnStyle = styled.div`
  width: 400px;
  .signup {
    border: 0;
    margin-left: 2%;
  }
`;

const LoginGoSignupBtn = ({ changeRegister, disabled }) => {
  return (
    <LoginGoSignupBtnStyle>
      <CircleDiv className="signup-div">
        <TextStyle blacknormal>에어비앤비 계정이 없으세요?</TextStyle>

        {/* <Button className="signup" onClick={signupBtn}> */}
        <Button className="signup" onClick={changeRegister}>
          <TextStyle greentextLine>회원가입</TextStyle>
        </Button>
      </CircleDiv>
    </LoginGoSignupBtnStyle>
  );
};

export default LoginGoSignupBtn;
