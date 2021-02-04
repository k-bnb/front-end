import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginOraganisms from '../components/UI/organisms/organisms-modals-auth/LoginOraganisms';
import RegisterOrganism from '../components/UI/organisms/organisms-modals-auth/RegisterOrganism';
import { changeInput, login, register } from '../modules/auth';

const AuthModalContainer = ({ modal, setModal, formState, setFormState }) => {
  const dispatch = useDispatch();
  const { loginEmail, loginPassword } = useSelector(
    (state) => state.auth.login,
  );
  const {
    registerEmail,
    name,
    registerPassword,
    year,
    month,
    day,
  } = useSelector((state) => state.auth.register);

  const onChange = (e) => {
    console.log('change');
    dispatch(changeInput(formState, e.target.name, e.target.value));
  };

  const onLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ loginEmail, loginPassword }));
  };

  const onRegisterSubmit = (e) => {
    e.preventDefault();
    dispatch(
      register({ registerEmail, name, registerPassword, year, month, day }),
    );
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
          year={year}
          month={month}
          day={day}
          modal={modal}
          setModal={setModal}
        />
      )}
    </>
  );
};

export default AuthModalContainer;
