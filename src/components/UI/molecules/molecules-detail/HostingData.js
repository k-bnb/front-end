import React from 'react';
import styled from 'styled-components';
import Text from '../../atoms/atoms-detail/DetailText';

const HostingDataContainer = styled.div`
  padding: 48px 0 24px;
  display: flex;
  justify-content: space-between;
`;

const HostInfo = styled.h2`
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  margin-top: 0;
  margin-bottom: 8px;
`;

const HostImgBox = styled.div`
  height: 56px;
  width: 56px;
  background: rgb(221, 221, 221);
  border-radius: 50%;
  overflow: hidden;
`;

const HostImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: bottom;
`;

const HostingData = ({ infoRes }) => {
  const hostImage = infoRes.hostImgURL;

  return (
    <HostingDataContainer>
      <div>
        <HostInfo>{infoRes.hostName}님이 호스팅하는 펜션</HostInfo>
        <div aria-label="숙소 상세 정보">
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
        </div>
      </div>
      <HostImgBox>
        <HostImg src={hostImage} alt="호스트 사진" />
      </HostImgBox>
    </HostingDataContainer>
  );
};

export default HostingData;
