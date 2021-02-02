import React from 'react';
import styled from 'styled-components';

const ReservationBtn = styled.button`
  background: #ff385c;
  color: white;
  /* min-width: 200px; */
  width: 100%;
  min-width: 100px;
  border-radius: 8px;
  border: none;
  text-align: center;
  line-height: 20px;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 20px;
  white-space: nowrap;
`;

const ReserveBtn = () => {
  return <ReservationBtn>예약하기</ReservationBtn>;
};
export default ReserveBtn;
