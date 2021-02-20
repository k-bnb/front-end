import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

const ReservationBtn = styled.button`
  background: #d70466;
  color: white;
  min-width: 110px;
  width: 100%;
  border-radius: 8px;
  border: none;
  text-align: center;
  line-height: 20px;
  font-size: 16px;
  font-weight: 600;
  padding: 14px 24px;
  white-space: nowrap;
  transition: opacity 1.25s ease 0s;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:active {
    transform: scale(0.95);
  }

  ${(props) =>
    props.half &&
    css`
      width: 100px;
    `}
`;

const ReserveBtn = ({ half, DetailHeaderRef }) => {
  const determineShowAuthModal = () => {
    const token = localStorage.getItem('token');

    if (token) return;
  };

  return (
    <ReservationBtn
      half={half}
      ref={DetailHeaderRef}
      onClick={determineShowAuthModal}
    >
      예약하기
    </ReservationBtn>
  );
};
export default ReserveBtn;
