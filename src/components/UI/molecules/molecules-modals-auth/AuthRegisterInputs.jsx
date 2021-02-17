import React from 'react';
import styled from 'styled-components';
import Input from '../../atoms/atoms-main/Input';
import { GoMail } from 'react-icons/go';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import * as CHECK from '../../../../lib/validationCheck';
import InputPasswordCondition from './InputPasswordCondition';

const InputContainer = styled.div`
  position: relative;
  width: 40rem;
  height: 5rem;
  margin-bottom: 1rem;
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

const AuthRegisterInputs = ({
  email,
  name,
  password,
  onChange,
  registerValidation,
  setRegisterValidation,
  isFirst,
  setIsFirst,
  setServerRegisterError,
  serverRegisterError,
  isLoading,
}) => {
  console.log(registerValidation.nameValidation);
  console.log(isFirst);

  return (
    <>
      <InputContainer>
        <Input
          type="text"
          name="name"
          value={name}
          placeholder={'이름'}
          onChange={onChange}
          onBlur={(e) => {
            setRegisterValidation({
              ...registerValidation,
              nameValidation: CHECK.checkNameValidation(name),
            });
            setIsFirst({
              ...isFirst,
              nameInput: false,
            });
          }}
        />
        <AiOutlineUser />
      </InputContainer>
      <span
        style={{
          height: '15px',
          lineHeight: '5px',
          fontSize: '10px',
          color: 'red',
        }}
      >
        {!registerValidation.nameValidation && !isFirst.nameInput && (
          <>올바른 이름을 입력 해주세요.</>
        )}
      </span>
      <InputContainer>
        <Input
          type="email"
          name="registerEmail"
          value={email}
          placeholder={'이메일 주소'}
          onChange={(e) => {
            setServerRegisterError(false);
            onChange(e);
          }}
          onBlur={(e) => {
            setRegisterValidation({
              ...registerValidation,
              emailValidation: CHECK.checkEmailValidation(email),
            });
            setIsFirst({
              ...isFirst,
              emailInput: false,
            });
          }}
        />
        <GoMail />
      </InputContainer>
      <span
        style={{
          height: '15px',
          lineHeight: '5px',
          fontSize: '10px',
          color: 'red',
        }}
      >
        {!registerValidation.emailValidation && !isFirst.emailInput && (
          <>이메일 양식이 올바르지 않습니다.</>
        )}
      </span>
      <InputContainer>
        <Input
          type="password"
          name="registerPassword"
          value={password}
          placeholder={'비밀번호 입력'}
          onChange={(e) => {
            onChange(e);
            setRegisterValidation({
              ...registerValidation,
              passwordValidation: CHECK.checkPasswordValidation(
                name,
                email,
                password,
              ),
            });
          }}
          onBlur={(e) => {
            if (!e.target.value)
              setRegisterValidation({
                ...registerValidation,
                passwordValidation: {
                  isLongerThanEight: false,
                  hasEveryCharacter: false,
                  doesContainInfo: false,
                },
              });
          }}
          onFocus={() => {
            setIsFirst({ ...isFirst, passwordInput: false });
          }}
        />
        <RiLockPasswordLine />
      </InputContainer>
      <div
        style={{
          lineHeight: '5px',
          fontSize: '10px',
          color: 'red',
        }}
      >
        {!isFirst.passwordInput && (
          <InputPasswordCondition
            registerValidation={registerValidation}
            setRegisterValidation={setRegisterValidation}
            isFirst={isFirst}
            setIsFirst={setIsFirst}
          />
        )}
      </div>
    </>
  );
};

export default AuthRegisterInputs;
