import React from 'react';
import ModalTemplate from '../../../templates/templates-modal/ModalTemplate';
import CircleDiv from '../../atoms/atoms-main/DivStyle';
import AuthGoogle from '../../molecules/molecules-modals-auth/AuthGoogle';
import AuthHead from '../../molecules/molecules-modals-auth/AuthHead';
import BackLogin from '../../molecules/molecules-modals-auth/BackLogin';
import EmailLoginInput from '../../molecules/molecules-modals-auth/EmailLoginInput';
import EmailLoginSubmit from '../../molecules/molecules-modals-auth/EmailLoginSubmit';
import LoginGoSignupBtn from '../../molecules/molecules-modals-auth/LoginGoSignupBtn';

const LoginOraganisms = ({
  modal,
  setModal,
  onChange,
  email,
  password,
  onSubmit,
  changeRegister,
}) => {
  return (
    <ModalTemplate modal={modal} setModal={setModal} onSubmit={onSubmit}>
      <AuthHead name="로그인" modal={modal} setModal={setModal} />
      <AuthGoogle />

      {/* 또는 border */}
      <CircleDiv borderline className="or" />
      {/* 이메일 인풋  */}
      <EmailLoginInput onChange={onChange} email={email} password={password} />
      {/* 이메일 전송 인풋 */}
      <EmailLoginSubmit />
      {/* 또는 border */}
      <CircleDiv borderline />

      <LoginGoSignupBtn changeRegister={changeRegister} />
      <BackLogin />
    </ModalTemplate>
  );
};

export default LoginOraganisms;
