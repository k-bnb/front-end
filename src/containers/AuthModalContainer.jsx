import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginOraganisms from '../components/UI/organisms/organisms-modals-auth/LoginOraganisms';
import RegisterOrganism from '../components/UI/organisms/organisms-modals-auth/RegisterOrganism';
import {
  changeInput,
  clearError,
  initialzeInput,
  // login,
  // register,
} from '../modules/auth';
import { finishLoading, startLoading } from '../modules/loading';
import * as API from '../lib/api/auth';

const AuthModalContainer = ({
  modal,
  setModal,
  formState,
  setFormState,
  isOpen,
  setIsOpen,
  fromDetailPageBtn,
}) => {
  const dispatch = useDispatch();

  const { registerError, loginError } = useSelector((state) => state.auth);

  const isLoading = useSelector((state) => state.loading);

  const [serverLoginError, setServerLoginError] = useState(null);
  const [serverRegisterError, setServerRegisterError] = useState(null);

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

  const onChange = async (e) => {
    dispatch(changeInput(formState, e.target.name, e.target.value));
  };

  const onLoginSubmit = async (e) => {
    e.preventDefault();
    dispatch(clearError('login'));
    dispatch(startLoading('auth/LOGIN'));
    try {
      const response = await API.login({
        email: loginEmail,
        password: loginPassword,
      });
      localStorage.setItem('token', response.data.accessToken);
      if (!loginError) {
        await delay(1000).then(() => {
          dispatch(finishLoading('auth/LOGIN'));
          setModal(false);
          dispatch({ type: 'auth/LOGIN_SUCCESS', payload: response.data });
        });
      }
    } catch (e) {
      dispatch({ type: 'auth/LOGIN_FAILURE', payload: e.response.data });
      if (loginError) {
        setServerLoginError(e.response.data);
      }
    }

    delay(1000).then(() => dispatch(finishLoading('auth/LOGIN')));
  };

  useEffect(() => {
    if (loginError === -1002)
      setServerLoginError('이메일 또는 비밀번호가 잘못되었습니다.');
    else setServerLoginError('');
  }, [loginError]);

  useEffect(() => {
    if (registerError === -1001) {
      setServerRegisterError('이미 사용중인 이메일 입니다.');
    } else setServerRegisterError('');
  }, [registerError]);

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      dispatch(clearError('login'));
      dispatch(clearError('register'));
      dispatch(initialzeInput('login'));
      dispatch(initialzeInput('register'));
      setIsFirst({
        emailInput: true,
        nameInput: true,
        passwordInput: true,
        dateInput: true,
      });

      document.body.style.overflowY = 'unset';
    };
  }, [formState]);

  const onRegisterSubmit = async (e) => {
    e.preventDefault();
    dispatch(clearError('register'));
    dispatch(startLoading('auth/REGISTER'));
    try {
      const response = await API.register({
        email: registerEmail,
        name: name,
        password: registerPassword,
        birth: birth,
      });
      localStorage.setItem('token', response.data.accessToken);
      if (!registerError) {
        await delay(1000).then(() => {
          dispatch(finishLoading('auth/REGISTER'));
          setModal(false);
          dispatch({ type: 'auth/REGISTER_SUCCESS', payload: response.data });
        });
      }
    } catch (e) {
      await dispatch({
        type: 'auth/REGISTER_FAILURE',
        payload: e.response.data,
      });
      if (registerError) {
        setServerLoginError(e.response.data);
      }
    }
    delay(1000).then(() => dispatch(finishLoading('auth/REGISTER')));
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
          serverLoginError={serverLoginError}
          setServerLoginError={setServerLoginError}
          isLoading={isLoading}
          loginError={loginError}
          dispatch={dispatch}
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
          serverRegisterError={serverRegisterError}
          setServerRegisterError={setServerRegisterError}
          isLoading={isLoading}
          dispatch={dispatch}
        />
      )}
    </>
  );
};

export default AuthModalContainer;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
