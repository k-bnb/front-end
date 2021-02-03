import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInput } from '../../modules/auth';
import LoginModal from './LoginModal';

const LoginModalContainer = ({ modal, setModal }) => {
  const [formState, setFormState] = useState('login');

  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.auth.login);
  console.log(email, password);

  const onChangeInput = (e) => {
    console.log('h');
    dispatch(changeInput(formState, e.target.name, e.target.value));
  };
  return (
    <LoginModal
      onChangeInput={onChangeInput}
      formState={formState}
      setFormState={setFormState}
      email={email}
      password={password}
      modal={modal}
      setModal={setModal}
    />
  );
};

export default LoginModalContainer;
