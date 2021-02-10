import React from 'react';
import styled from 'styled-components';
import Text from '../../atoms/atoms-detail/DetailText';

const HostingDataContainer = styled.div`
  padding: 48px 0 24px;
`;

const HostInfo = styled.div`
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 8px;
`;

const HostingData = ({ peopleLimit, bedRoomNum, bedNum, bathRoomNum }) => (
  <HostingDataContainer>
    <HostInfo>Joy님이 호스팅하는 펜션</HostInfo>
    <div className="simple-data">
      <Text big>최대 인원 2명{peopleLimit}.</Text>
      <Text big>침실 1개{bedRoomNum}.</Text>
      <Text big>침대 1개{bedNum}</Text>
      <Text big>욕실 1개{bathRoomNum}</Text>
    </div>
  </HostingDataContainer>
);

export default HostingData;
