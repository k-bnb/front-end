import React from 'react';
import styled from 'styled-components';
import HostingData from './HostingData';
import BookingInfo from './BookingInfo';
import { TypeInfo } from './TypeInfo';
import { TextSummary } from './TextSummary';
import EmoticonNotice from './EmoticonNotice';

const InfoContainer = styled.div`
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  border-bottom: 1px solid rgb(221, 221, 221);
  /* padding: 0 80px; */
`;

const DetailInfo = styled.div`
  position: relative;
  width: 58.3%;
  margin: 0 auto;
`;

const BookingSummaryBox = styled.div`
  position: relative;
  width: 33.3%;
  margin-left: 8.3%;
`;

const DetailInfoContainer = () => (
  <InfoContainer>
    <DetailInfo>
      <HostingData />
      <TextSummary />
      <TypeInfo />
      <EmoticonNotice />
    </DetailInfo>
    <BookingSummaryBox>
      <BookingInfo />
    </BookingSummaryBox>
  </InfoContainer>
);

export default DetailInfoContainer;
