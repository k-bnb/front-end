import React, { useEffect } from 'react';
import styled from 'styled-components';
import ProfileButton from '../../atoms/atoms-header/ProfileButton';
import ProfileToggleItems from '../../molecules/molecules-header/ProfileToggleItems';

const ProfileToggleBlock = styled.div`
  position: absolute;
  right: 35px;
  top: 20px;
  z-index: 10;

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
        />
      )}
    </ProfileToggleBlock>
  );
};

export default ProfileToggleModal;
