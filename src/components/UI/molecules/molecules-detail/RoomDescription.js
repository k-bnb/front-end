import React from 'react';
import styled from 'styled-components';
import Text from '../../atoms/atoms-detail/DetailText';

const DescriptionContainer = styled.div`
  padding: 32px 0 32px;
  border-top: 1px solid rgb(221, 221, 221);
  border-bottom: 1px solid rgb(221, 221, 221);
`;

const HostContact = styled(Text)`
  padding: 28px 5px 12px;
  cursor: pointer;
`;

const RoomDescription = ({ infoRes }) => (
  <DescriptionContainer aria-label="숙소 상세 설명">
    <Text paddingTop big lineHight>
      {infoRes.description}
      <br />
    </Text>
    <Text block paddingTop big lineHight>
      저희 숙소는 안전하고 편안하게 지내실수 있는 아늑한 공간입니다.
      <br />
      주변에 음식점과 편의시설이 많고 가까워서 편하게 지내실수 있습니다.
      <br />
    </Text>
    <Text block paddingTop big lineHight>
      방내부에 침대와 수납장, 냉장고, 싱크대, 전자레인지 등이 기본으로 준비되어
      있습니다.
      <br />
      바닥난방 또는 에어컨 냉방이 가능하고, 와이파이가 가능합니다.
    </Text>
    <HostContact block underline bold big>
      호스트에게 연락하기
    </HostContact>
  </DescriptionContainer>
);

export default RoomDescription;
