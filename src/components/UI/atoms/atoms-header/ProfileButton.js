import React from 'react';
import styled, { css } from 'styled-components';
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
  transition-delay: 1.5s;
  transition-property: red;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  }

  svg:first-child {
    font-size: 16px;
  }
  svg:last-child {
    font-size: 30px;
  }
  ${(props) =>
    props.token &&
    css`
      color: red;
    `}
`;

const ProfileButton = ({ handleOnClick, token }) => {
  // handleOnClick 함수는 모달창을 껐다 켜주는 토글 함수
  return (
    <ProfileButtonBlock onClick={handleOnClick} token={token}>
      <GiHamburgerMenu />
      <FaUserCircle />
    </ProfileButtonBlock>
  );
};

export default ProfileButton;
