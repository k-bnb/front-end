import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ProfileToggleModal from '../../components/UI/organisms/organisms-header/ProfileToggleModal';
import { reserveConfirm, userInfo } from '../../modules/user';
import Modal from '../../portal/Modal';
import AuthModalContainer from '../AuthModalContainer';
const ProfileToggleModalContainer = () => {
  // isOpen -> true일 경우 profileToggleModal에서 ProfileToggleItems을 켜주고 꺼주고..
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false); // authmodal 렌더링

  // formState -> 'login', 'register'로 상태 전환 해줌.
  const [formState, setFormState] = useState(null); // 초기값은 null, 로그인 버튼 누르면 login으로, 회원가입 누르면 'register'
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const history = useHistory();

  // 예약 내역
  const reservationClick = () => {
    dispatch(userInfo(token));
    dispatch(reserveConfirm({ token }));
    history.push('/reserveconfirm');
  };
  const userInfoClick = () => {
    dispatch(userInfo(token));

    history.push('/personInfo');
  };
  console.log(history.location.pathname + history.location.search);

  return (
    <>
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
        locationNow={history.location.pathname + history.location.search}
      />
      {modal && (
        <Modal>
          <AuthModalContainer
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            modal={modal}
            setModal={setModal}
            formState={formState}
            setFormState={setFormState}
          />
        </Modal>
      )}
    </>
  );
};

export default ProfileToggleModalContainer;
