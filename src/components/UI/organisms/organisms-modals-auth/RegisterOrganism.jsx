import React, { useEffect } from 'react';
import styled from 'styled-components';
import ModalTemplate from '../../../templates/templates-modal/ModalTemplate';
import Text from '../../atoms/atoms-header/Text';
import CircleDiv from '../../atoms/atoms-main/DivStyle';
import AuthBtn from '../../molecules/molecules-modals-auth/AuthBtn';
import AuthGoogle from '../../molecules/molecules-modals-auth/AuthGoogle';
import AuthHead from '../../molecules/molecules-modals-auth/AuthHead';
import AuthRegisterdate from '../../molecules/molecules-modals-auth/AuthRegisterDate';
import AuthRegisterInputs from '../../molecules/molecules-modals-auth/AuthRegisterInputs';
import LoaderIcon from 'react-loader-icon';

const BtnContainer = styled.div`
  width: 40rem;
  height: 5rem;
  margin: 2.4rem 0;
  position: relative;

  .register-to-login {
    position: absolute;
    top: -25px;
    left: 0;
  }
`;

const RegisterOrganism = ({
  formState,
  setFormState,
  onChange,
  onSubmit,
  name,
  email,
  password,
  birth,
  modal,
  setModal,
  registerValidation,
  setRegisterValidation,
  isFirst,
  setIsFirst,
  serverRegisterError,
  setServerRegisterError,
  isLoading,
  dispatch,
}) => {
  return (
    <ModalTemplate modal={modal} setModal={setModal} signup onSubmit={onSubmit}>
      <AuthHead name="회원가입" setModal={setModal} />
      <AuthGoogle />
      <CircleDiv borderline className="or" />
      <AuthRegisterInputs
        onChange={onChange}
        email={email}
        password={password}
        name={name}
        registerValidation={registerValidation}
        setRegisterValidation={setRegisterValidation}
        isFirst={isFirst}
        setIsFirst={setIsFirst}
        serverRegisterError={serverRegisterError}
        setServerRegisterError={setServerRegisterError}
        isLoading={isLoading}
      />
      <AuthRegisterdate
        onChange={onChange}
        name={name}
        birth={birth}
        registerValidation={registerValidation}
        setRegisterValidation={setRegisterValidation}
        isFirst={isFirst}
        setIsFirst={setIsFirst}
      />
      {isLoading['auth/REGISTER'] && (
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
      {!isLoading['auth/REGISTER'] && serverRegisterError && (
        <div
          style={{
            textAlign: 'center',
            height: '20px',
            color: 'red',
            lineHeight: '10px',
          }}
        >
          {serverRegisterError}
        </div>
      )}
      <BtnContainer>
        <AuthBtn
          name="회원가입"
          disabled={
            !(
              registerValidation.emailValidation &&
              registerValidation.nameValidation &&
              registerValidation.passwordValidation.isLongerThanEight &&
              registerValidation.passwordValidation.hasEveryCharacter &&
              registerValidation.passwordValidation.doesContainInfo &&
              registerValidation.dateValidation
            )
          }
        />
      </BtnContainer>
      <CircleDiv borderline />
      <Text
        className="register-to-login"
        bold
        noPadding
        blue
        onClick={() => {
          setIsFirst({
            emailInput: true,
            nameInput: true,
            passwordInput: true,
            dateInput: true,
          });
          setFormState('login');
        }}
      >
        로그인
      </Text>
    </ModalTemplate>
  );
};

export default RegisterOrganism;
