import React from 'react';
import styled from 'styled-components';

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
  padding: 10px 20px;
  white-space: nowrap;
  transition: opacity 1.25s ease 0s;
  cursor: pointer;
`;

const ReserveBtn = () => <ReservationBtn>예약하기</ReservationBtn>;
export default ReserveBtn;
