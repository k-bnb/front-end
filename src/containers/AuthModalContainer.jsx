import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginOraganisms from '../components/UI/organisms/organisms-modals-auth/LoginOraganisms';
import { changeInput, login } from '../modules/auth';

const LoginModalContainer = ({ modal, setModal }) => {
  const [formState, setFormState] = useState('login');

  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.auth.login);
  console.log('안녕', email, password);

  const onChange = (e) => {
    console.log('change');
    dispatch(changeInput(formState, e.target.name, e.target.value));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  return (
    <LoginOraganisms
      formState={formState}
      setFormState={setFormState}
      onChange={onChange}
      onSubmit={onSubmit}
      email={email}
      password={password}
      modal={modal}
      setModal={setModal}
    />
  );
};

export default LoginModalContainer;
