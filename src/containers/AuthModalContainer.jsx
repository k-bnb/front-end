import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginOraganisms from '../components/UI/organisms/organisms-modals-auth/LoginOraganisms';
import RegisterOrganism from '../components/UI/organisms/organisms-modals-auth/RegisterOrganism';
import { changeInput, login, register } from '../modules/auth';

const AuthModalContainer = ({ modal, setModal, formState, setFormState }) => {
  const dispatch = useDispatch();

  const { loginEmail, loginPassword } = useSelector(
    (state) => state.auth.login,
  );
  const { registerEmail, name, registerPassword, birth } = useSelector(
    (state) => state.auth.register,
  );

  const isEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(
    registerEmail,
  );

  const onChange = (e) => {
    console.log('clicke');
    dispatch(changeInput(formState, e.target.name, e.target.value));

    if (e.target.name === 'name' && e.target.value !== 'kkk') {
      e.target.style.border = '1px solid red';
      return;
    }

    if (!isEmail && e.target.name === 'registerEmail') {
      e.target.style.border = '1px solid red';
      return;
    }

    if (e.target.name === 'registerPassword' && e.target.value !== 'iii') {
      e.target.style.border = '1px solid red';
      return;
    }

    e.target.style.border = '1px solid green';
  };

  const onLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ loginEmail, loginPassword }));
  };

  const onRegisterSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ registerEmail, name, registerPassword, birth }));
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
          birth={birth}
          modal={modal}
          setModal={setModal}
        />
      )}
    </>
  );
};

export default AuthModalContainer;
