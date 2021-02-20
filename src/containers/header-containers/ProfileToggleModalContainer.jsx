import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ProfileToggleModal from '../../components/UI/organisms/organisms-header/ProfileToggleModal';
import { reserveConfirm, userInfo } from '../../modules/user';
const ProfileToggleModalContainer = ({
  formState,
  setFormState,
  detailPageBtn,
}) => {
  // isOpen -> true일 경우 profileToggleModal에서 ProfileToggleItems을 켜주고 꺼주고..
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false); // authmodal 렌더링

  // formState -> 'login', 'register'로 상태 전환 해줌.
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const history = useHistory();

  // 예약 내역
  const reservationClick = () => {
    dispatch(reserveConfirm({ token }));
    history.push('/reserveconfirm');
  };
  const userInfoClick = () => {
    dispatch(userInfo(token));
    history.push('/personInfo');
  };
  return (
    <ProfileToggleModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      formState={formState}
      setFormState={setFormState}
      token={token}
      dispatch={dispatch}
      reservationClick={reservationClick}
      userInfoClick={userInfoClick}
      modal={modal}
      setModal={setModal}
    />
  );
};

export default ProfileToggleModalContainer;
