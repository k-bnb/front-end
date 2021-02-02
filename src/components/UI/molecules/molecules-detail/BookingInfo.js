import React from 'react';
import styled from 'styled-components';
import ReserveBtn from '../../atoms/atoms-detail/ReserveBtn';

const BookingInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  margin-top: 80px;
  padding-right: 1px;
  padding-bottom: 48px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
`;

const BookingInfo = () => (
  <BookingInfoContainer>
    <ReserveBtn></ReserveBtn>
  </BookingInfoContainer>
);

export default BookingInfo;
