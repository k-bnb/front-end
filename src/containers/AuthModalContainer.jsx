import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginOraganisms from '../components/UI/organisms/organisms-modals-auth/LoginOraganisms';
import RegisterOrganism from '../components/UI/organisms/organisms-modals-auth/RegisterOrganism';
import { changeInput, initialzeInput, login, register } from '../modules/auth';

const AuthModalContainer = ({
  modal,
  setModal,
  formState,
  setFormState,
  isOpen,
  setIsOpen,
}) => {
  const dispatch = useDispatch();
  const [checkEmail, setCheckEmail] = useState(null);

  const [isFirst, setIsFirst] = useState({
    emailInput: true,
    nameInput: true,
    passwordInput: true,
    dateInput: true,
  });

  const [registerValidation, setRegisterValidation] = useState({
    emailValidation: false,
    nameValidation: false,
    passwordValidation: {
      isLongerThanEight: false,
      hasEveryCharacter: false,
      doesContainInfo: false,
    },
    dateValidation: false,
  });

  const [loginValidation, setLoginValidation] = useState({
    emailValidation: false,
    passwordValidation: false,
  });

  const { loginEmail, loginPassword } = useSelector(
    (state) => state.auth.login,
  );

  const { registerEmail, name, registerPassword, birth } = useSelector(
    (state) => state.auth.register,
  );

  const isEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(
    loginEmail,
  );

  useEffect(() => {
    setCheckEmail(isEmail);

    // return () => {
    //   dispatch(initialzeInput('register'));
    //   dispatch(initialzeInput('login'));
    // };
  }, [isEmail]);
  console.log(checkEmail);

  const onChange = async (e) => {
    dispatch(changeInput(formState, e.target.name, e.target.value));
  };

  const onLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ loginEmail, loginPassword }));
    setIsOpen(false);
  };

  const onRegisterSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ registerEmail, name, registerPassword, birth }));
    setIsOpen(false);
  };

  const changeRegister = () => {
    setFormState(() => 'register');
  };
  return (
    <>
      {formState === 'login' && (
        <LoginOraganisms
          formState={formState}
          setFormState={setFormState}
          onChange={onChange}
          onSubmit={onLoginSubmit}
          email={loginEmail}
          password={loginPassword}
          modal={modal}
          setModal={setModal}
          changeRegister={changeRegister}
          registerValidation={registerValidation}
          setRegisterValidation={setRegisterValidation}
          isFirst={isFirst}
          setIsFirst={setIsFirst}
          loginValidation={loginValidation}
          setLoginValidation={setLoginValidation}
        />
      )}
      {formState === 'register' && (
        <RegisterOrganism
          formState={formState}
          setFormState={setFormState}
          onChange={onChange}
          onSubmit={onRegisterSubmit}
          name={name}
          email={registerEmail}
          password={registerPassword}
          birth={birth}
          modal={modal}
          setModal={setModal}
          registerValidation={registerValidation}
          setRegisterValidation={setRegisterValidation}
          isFirst={isFirst}
          setIsFirst={setIsFirst}
        />
      )}
    </>
  );
};

export default AuthModalContainer;
