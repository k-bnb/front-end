import React from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUserCircle } from 'react-icons/fa';

const ProfileButtonBlock = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 77px;
  height: 42px;
  padding: 5px 5px 5px 12px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 21px;
  color: #222;
  cursor: pointer;

  svg:first-child {
    font-size: 16px;
  }
  svg:last-child {
    font-size: 30px;
  }
`;

const ProfileButton = ({ handleOnClick }) => {
  // handleOnClick 함수는 모달창을 껐다 켜주는 토글 함수
  return (
    <ProfileButtonBlock onClick={handleOnClick}>
      <GiHamburgerMenu />
      <FaUserCircle />
    </ProfileButtonBlock>
  );
};

export default ProfileButton;
