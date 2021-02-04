import React from 'react';
import styled from 'styled-components';

const BookingBox = styled.div`
  position: relative;
  margin-bottom: 16px;
  border: 1px solid #989898;
  border-radius: 8px;
  width: 100%;
`;

const CheckDate = styled.div`
  height: 56px;
  width: 100%;
`;
const Personnel = styled.div`
  height: 56px;
  width: 100%;
`;

const DatePersonBox = () => (
  <BookingBox>
    <CheckDate></CheckDate>
    <Personnel></Personnel>
  </BookingBox>
);

export default DatePersonBox;
