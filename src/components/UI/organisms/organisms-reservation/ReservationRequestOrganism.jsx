import React from 'react';
import styled from 'styled-components';
import ReservationClientNotice from '../../atoms/atoms-reservation/ReservationClientNotice';
import ReservationContent from '../../atoms/atoms-reservation/ReservationContent';
import ReservationTitle from '../../atoms/atoms-reservation/ReservationTitle';
import ReservationUnderLine from '../../atoms/atoms-reservation/ResevationUnderLine';
import ReservationHostMolecule from '../../molecules/molecules-reservation/ReservationHostMolecule';

const PaddingContainer = styled.div`
  padding: 1.6rem 0;
`;

const LayoutReservationContent = styled(ReservationContent)`
  margin-bottom: 0.4rem;
`;

const ReservationRequestOrganism = ({ change, hostName, hostImgURL }) => {
  return (
    <section>
      <ReservationTitle sub children="필수 입력 정보" />
      <PaddingContainer>
        <LayoutReservationContent bold children="호스트에게 메세지 보내기" />
        <ReservationContent
          normal
          children="호스트에게 여행 목적과 도착 예정 시간을 알려주세요."
        />
      </PaddingContainer>
      <ReservationHostMolecule hostName={hostName} hostImgURL={hostImgURL} />
      <ReservationClientNotice host change={change} />
      <ReservationUnderLine />
    </section>
  );
};

export default ReservationRequestOrganism;
