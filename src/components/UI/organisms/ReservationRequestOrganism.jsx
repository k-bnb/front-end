import React from 'react';
import styled from 'styled-components';
import ReservationClientNotice from '../atoms/ReservationClientNotice';
import ReservationContent from '../atoms/ReservationContent';
import ReservationTitle from '../atoms/ReservationTitle';
import ReservationUnderLine from '../atoms/ResevationUnderLine';
import ReservationHostMolecule from '../molecules/ReservationHostMolecule';

const PaddingContainer = styled.div`
  padding: 1.6rem 0;
`;

const LayoutReservationContent = styled(ReservationContent)`
  margin-bottom: 0.4rem;
`;

const ReservationRequestOrganism = () => {
  return (
    <section>
      <ReservationTitle sub children='필수 입력 정보' />
      <PaddingContainer>
        <LayoutReservationContent bold children='호스트에게 메세지 보내기' />
        <ReservationContent
          normal
          children='호스트에게 여행 목적과 도착 예정 시간을 알려주세요.'
        />
      </PaddingContainer>
      <ReservationHostMolecule />
      <ReservationClientNotice host />
      <ReservationUnderLine />
    </section>
  );
};

export default ReservationRequestOrganism;
