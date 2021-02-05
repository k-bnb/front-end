import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileToggleModal from '../components/UI/organisms/organisms-header/ProfileToggleModal';

const ProfileToggleModalContainer = () => {
  // isOpen -> true일 경우 profileToggleModal에서 ProfileToggleItems을 켜주고 꺼주고..
  const [isOpen, setIsOpen] = useState(false);
  // formState -> 'login', 'register'로 상태 전환 해줌.
  const [formState, setFormState] = useState(null); // 초기값은 null, 로그인 버튼 누르면 login으로, 회원가입 누르면 'register'
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  return (
    <ProfileToggleModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      formState={formState}
      setFormState={setFormState}
      token={token}
      dispatch={dispatch}
    />
  );
};

export default ProfileToggleModalContainer;
