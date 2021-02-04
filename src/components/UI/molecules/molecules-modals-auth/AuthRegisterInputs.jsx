import React from 'react';
import styled from 'styled-components';
import Input from '../../atoms/atoms-main/Input';
import { GoMail } from 'react-icons/go';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';

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

const AuthRegisterInputs = ({ email, name, password, onChange }) => {
  return (
    <>
      <InputContainer>
        <Input
          type="text"
          name="name"
          value={name}
          placeholder={'이름'}
          onChange={onChange}
        />
        <AiOutlineUser />
      </InputContainer>
      <InputContainer>
        <Input
          type="email"
          name="registerEmail"
          value={email}
          placeholder={'이메일 주소'}
          onChange={onChange}
        />
        <GoMail />
      </InputContainer>
      <InputContainer>
        <Input
          type="password"
          name="registerPassword"
          value={password}
          placeholder={'비밀번호 입력'}
          onChange={onChange}
        />
        <RiLockPasswordLine />
      </InputContainer>
    </>
  );
};

export default AuthRegisterInputs;
