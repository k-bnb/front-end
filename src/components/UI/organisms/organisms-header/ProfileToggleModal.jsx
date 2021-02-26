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
  locationNow,
}) => {
  const handleOnClick = () => {
    // 이미 켜있었는데 끈경우, 로그인 버튼을 닫은것. -> 프로필 토글 버튼을 이용해서 로그인 한 것이 아님
    if (isOpen) {
      localStorage.removeItem('LFT');
      localStorage.removeItem('DGR');
    }
    // 새로 킨 경우 -> 로그인 하기 위해서 켰다고 가정하고 LFT 생성
    if (!isOpen) {
      localStorage.removeItem('DGR');
      localStorage.setItem('LFT', locationNow);
    }
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
