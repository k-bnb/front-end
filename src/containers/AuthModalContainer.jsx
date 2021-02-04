import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RegisterOrganism from '../components/UI/organisms/organisms-modals-auth/RegisterOrganism';
import { changeInput } from '../modules/auth';
import AuthModal from '../portal/modals/AuthModal';

const AuthModalContainer = ({ modal, setModal }) => {
  const [formState, setFormState] = useState('login');

  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.auth.login);
  console.log(email, password);

  const onChangeInput = (e) => {
    console.log('h');
    dispatch(changeInput(formState, e.target.name, e.target.value));
  };
  return (
    <>
      {/* <AuthModal
        onChangeInput={onChangeInput}
        formState={formState}
        setFormState={setFormState}
        email={email}
        password={password}
        modal={modal}
        setModal={setModal}
      /> */}
      <RegisterOrganism modal={modal} setModal={setModal} />
    </>
  );
};

export default AuthModalContainer;
