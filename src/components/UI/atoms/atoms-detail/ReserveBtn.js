import React from 'react';
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

  ${(props) =>
    props.half &&
    css`
      width: 100px;
    `}
`;

const ReserveBtn = ({
  half,
  DetailHeaderRef,
  moveToReserve,
  NoBookingDate,
}) => {
  if (!NoBookingDate) {
    return (
      <ReservationBtn half={half} ref={DetailHeaderRef} onClick={moveToReserve}>
        예약하기
      </ReservationBtn>
    );
  } else {
    return (
      <ReservationBtn
        half={half}
        ref={DetailHeaderRef}
        onClick={moveToReserve}
        NoBookingDate={NoBookingDate}
      >
        예약 가능 여부 보기
      </ReservationBtn>
    );
  }
};
export default ReserveBtn;
