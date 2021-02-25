import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ProfileToggleModal from '../../components/UI/organisms/organisms-header/ProfileToggleModal';
import { reserveConfirm, userInfo } from '../../modules/user';
import Modal from '../../portal/Modal';
import AuthModalContainer from '../AuthModalContainer';
const ProfileToggleModalContainer = ({
  isOpen,
  setIsOpen,
  formState,
  setFormState,
  modal,
  setModal,
}) => {
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
