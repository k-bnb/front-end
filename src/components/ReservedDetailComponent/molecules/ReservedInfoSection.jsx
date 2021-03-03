import React from 'react';
import styled from 'styled-components';
import HostInfoMainSection from './HostInfoMainSection';
import HostInfoTitleSection from './HostInfoTitleSection';
import RoomIntroSection from './RoomIntroSection';
const ReservedInfoSectionStyle = styled.section`
  overflow-y: scroll;

  height: 100%;
  background-color: #fff;
`;
const ReservedInfoSection = () => {
  return (
    <ReservedInfoSectionStyle>
      <HostInfoTitleSection />
      <RoomIntroSection />
      <HostInfoMainSection />
    </ReservedInfoSectionStyle>
  );
};

export default ReservedInfoSection;
