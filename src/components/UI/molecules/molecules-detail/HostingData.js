import React from 'react';
import styled from 'styled-components';

const HostingDataContainer = styled.div`
  padding: 48px 0 24px;

  .simple-data {
    font-size: 16px;
  }
`;
const HostInfo = styled.div`
  color: rgb(34, 34, 34);
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 8px;
`;

const HostingData = () => (
  <HostingDataContainer>
    <HostInfo>Joy님이 호스팅하는 펜션</HostInfo>
    <div className="simple-data">최대 인원 2명.침실 1개.침대 1개.욕실 1개</div>
  </HostingDataContainer>
);

export default HostingData;
