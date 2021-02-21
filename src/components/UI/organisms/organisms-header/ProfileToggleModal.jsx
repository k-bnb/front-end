import React from 'react';
import styled from 'styled-components';
import ProfileButton from '../../atoms/atoms-header/ProfileButton';
import ProfileToggleItems from '../../molecules/molecules-header/ProfileToggleItems';

const ProfileToggleBlock = styled.div`
  position: absolute;
  z-index: 1000;
  right: 35px;
  top: 20px;

  & > ul {
    position: absolute;
    top: 50px;
    right: 0;
  }
`;

const ProfileToggleModal = ({
  isOpen,
  setIsOpen,
  formState,
  setFormState,
  token,
  dispatch,
  reservationClick,
  userInfoClick,
  modal,
  setModal,
}) => {
  const handleOnClick = () => {
    setIsOpen(!isOpen); // 토글로 모달창을 켜고 닫는다.
  };

  return (
    <ProfileToggleBlock>
      <ProfileButton
        handleOnClick={handleOnClick}
        token={token}
      ></ProfileButton>
      {isOpen && (
        <ProfileToggleItems
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
      )}
    </ProfileToggleBlock>
  );
};

export default ProfileToggleModal;
