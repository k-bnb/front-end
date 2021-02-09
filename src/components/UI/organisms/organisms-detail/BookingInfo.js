import React from 'react';
import styled from 'styled-components';
import ReserveBtn from '../../atoms/atoms-detail/ReserveBtn';
import DatePersonBox from '../../molecules/molecules-detail/DatePersonBox';
import OneDayPrice from '../../molecules/molecules-detail/OneDayPrice';
import PriceDetail from '../../molecules/molecules-detail/PriceDetail';
import TotalPrice from '../../molecules/molecules-detail/TotalPrice';

const BookingInfoContainer = styled.div`
  position: sticky;
  top: 200px;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 1px;
  padding-bottom: 48px;
  min-width: 216px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;

  .notice {
    margin-top: 16px;
    white-space: normal;
    font-size: 14px;
    text-align: center;
    word-break: normal;
  }
`;

const BookingInfo = () => (
  <BookingInfoContainer>
    <OneDayPrice />
    <DatePersonBox />
    <ReserveBtn></ReserveBtn>
    <span className="notice">예약 확정 전에는 요금이 청구되지 않습니다.</span>
    <PriceDetail />
    <TotalPrice />
  </BookingInfoContainer>
);

export default BookingInfo;
