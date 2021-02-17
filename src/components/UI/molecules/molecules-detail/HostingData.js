import React from 'react';
import styled from 'styled-components';
import Text from '../../atoms/atoms-detail/DetailText';

const HostingDataContainer = styled.div`
  padding: 48px 0 24px;
`;

const dataWrapper = styled.div`
  display: flex;
`;

const HostInfo = styled.div`
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 8px;
`;

const HostingData = ({ infoRes }) => (
  <HostingDataContainer>
    <HostInfo>Joy님이 호스팅하는 펜션</HostInfo>
    <dataWrapper>
      <Text big noPadding>
        최대 인원 {infoRes.peopleLimit}명.
      </Text>
      <Text big noPadding>
        침실 {infoRes.bedRoomNum}개.
      </Text>
      <Text big noPadding>
        침대 {infoRes.bedNum}개.
      </Text>
      <Text big noPadding>
        욕실 {infoRes.bathRoomNum}개
      </Text>
    </dataWrapper>
  </HostingDataContainer>
);

export default HostingData;
