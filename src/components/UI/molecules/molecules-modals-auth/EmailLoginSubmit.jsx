import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/atoms-main/Button';
import CircleDiv from '../../atoms/atoms-main/DivStyle';
import TextStyle from '../../atoms/atoms-main/TextStyle';
import AuthBtn from './AuthBtn';

const EmailLoginStyle = styled.div`
  width: 400px;

  display: flex;
  flex-direction: column;
  .search-password {
    border: 0;
    margin-bottom: 2%;
  }
`;

const EmailLoginSubmit = ({ loginValidation }) => {
  return (
    <EmailLoginStyle>
      <CircleDiv className="submit">
        <CircleDiv className="submit-div">
          <AuthBtn
            name="로그인"
            disabled={
              !(
                loginValidation.emailValidation &&
                loginValidation.passwordValidation
              )
            }
          />
        </CircleDiv>
      </CircleDiv>
    </EmailLoginStyle>
  );
};
export default EmailLoginSubmit;
