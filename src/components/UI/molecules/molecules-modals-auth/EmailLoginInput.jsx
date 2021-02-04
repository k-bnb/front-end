import React from 'react';
import Button from '../../atoms/atoms-main/Button';
import CircleDiv from '../../atoms/atoms-main/DivStyle';
import Input from '../../atoms/atoms-main/Input';
import TextStyle from '../../atoms/atoms-main/TextStyle';
import { GoMail } from 'react-icons/go';
import { RiLock2Line } from 'react-icons/ri';
import styled from 'styled-components';

const EmailInputStyle = styled.div`
  width: 400px;
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

      svg {
        color: rgba(0, 0, 0, 0.4);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 10px;
      }
    }
  }
  .pass-div {
    text-align: right;
    .password-ok {
      border: 0;

      span {
        font-size: 0.8rem;
      }
    }
  }
`;

const EmailLoginInput = ({ email, password, onChange }) => {
  console.log('dsdf', email);
  return (
    <EmailInputStyle>
      <CircleDiv className="email-login">
        <CircleDiv className="google-login">
          <CircleDiv className="login-input">
            <div className="email-div">
              <Input
                type="email"
                name="email"
                value={email}
                placeholder={'이메일 주소'}
                onChange={onChange}
              />
              {/* <input
                type="email"
                name="email"
                value={email}
                placeholder={'이메일 주소'}
                onChange={onChange}
              /> */}
              <GoMail />
            </div>

            <div className="email-div">
              <Input
                value={password}
                name="password"
                type="password"
                placeholder="비밀번호 입력"
                onChange={onChange}
              />
              {/* <input
                type="password"
                value={password}
                name="password"
                placeholder="비밀번호 입력"
                onChange={onChange}
              /> */}
              <RiLock2Line />
            </div>
          </CircleDiv>
          <div className="pass-div">
            <Button className="password-ok">
              <TextStyle greentextLine>비밀번호 보기</TextStyle>
            </Button>
          </div>
        </CircleDiv>
      </CircleDiv>
    </EmailInputStyle>
  );
};

export default EmailLoginInput;
