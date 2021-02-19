import React, { useEffect } from 'react';
import Button from '../../atoms/atoms-main/Button';
import CircleDiv from '../../atoms/atoms-main/DivStyle';
import Input from '../../atoms/atoms-main/Input';
import TextStyle from '../../atoms/atoms-main/TextStyle';
import { GoMail } from 'react-icons/go';
import { RiLock2Line } from 'react-icons/ri';
import styled from 'styled-components';
import { checkEmailValidation } from '../../../../lib/validationCheck';
import LoaderIcon from 'react-loader-icon';

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

const EmailLoginInput = ({
  email,
  password,
  onChange,
  checkEmail,
  loginValidation,
  setLoginValidation,
  isFirst,
  setIsFirst,
  serverLoginError,
  setServerLoginError,
  isLoading,
  loginError,
}) => {
  useEffect(() => {
    if (loginError === -1000)
      setServerLoginError('존재하지 않는 이메일 입니다.');
    else if (loginError === -1002)
      setServerLoginError('이메일 또는 비밀번호가 잘못되었습니다.');
    else setServerLoginError('');
  }, [loginError]);
  return (
    <EmailInputStyle>
      <CircleDiv className="email-login">
        <CircleDiv className="google-login">
          <CircleDiv className="login-input">
            <div className="email-div">
              <Input
                type="email"
                name="loginEmail"
                value={email}
                placeholder={'이메일 주소'}
                onChange={(e) => {
                  onChange(e);
                  setServerLoginError(false);
                }}
                checkEmail={checkEmail}
                onFocus={() => {}}
                onBlur={() => {
                  setIsFirst({ ...isFirst, emailInput: false });
                  setLoginValidation({
                    ...loginValidation,
                    emailValidation: checkEmailValidation(email),
                  });
                }}
              />
              <GoMail />
            </div>
            <div
              style={{
                textAlign: 'center',
                height: '20px',
                color: 'red',
                lineHeight: '10px',
              }}
            >
              {!isFirst.emailInput && !loginValidation.emailValidation && (
                <div>이메일 양식이 올바르지 않습니다.</div>
              )}
            </div>

            <div className="email-div">
              <Input
                value={password}
                name="loginPassword"
                type="password"
                placeholder="비밀번호 입력"
                onChange={(e) => {
                  onChange(e);
                  setServerLoginError(false);

                  setLoginValidation({
                    ...loginValidation,
                    passwordValidation: password
                      ? password.length >= 8
                        ? true
                        : false
                      : false,
                  });
                }}
                onBlur={() => {
                  setIsFirst({ ...isFirst, passwordInput: false });
                  setLoginValidation({
                    ...loginValidation,
                    passwordValidation: password
                      ? password.length >= 8
                        ? true
                        : false
                      : false,
                  });
                }}
              />
              <RiLock2Line />
            </div>
            <div
              style={{
                textAlign: 'center',
                height: '20px',
                color: 'red',
                lineHeight: '10px',
              }}
            >
              {!isFirst.passwordInput &&
                !loginValidation.passwordValidation && (
                  <div>비밀번호는 8자 이상 입력해 주세요.</div>
                )}
            </div>
            {isLoading['auth/LOGIN'] && (
              <div
                style={{
                  textAlign: 'center',
                  height: '20px',
                  color: 'red',
                  lineHeight: '10px',
                }}
              >
                <LoaderIcon color={'red'} size={30} />
              </div>
            )}
            {!isLoading['auth/LOGIN'] && serverLoginError && (
              <div
                style={{
                  textAlign: 'center',
                  height: '20px',
                  color: 'red',
                  lineHeight: '10px',
                }}
              >
                {serverLoginError}
              </div>
            )}
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
