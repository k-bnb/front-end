import React from 'react';
import styled from 'styled-components';
import ReservationTitle from '../../atoms/atoms-reservation/ReservationTitle';
import ReservationUnderLine from '../../atoms/atoms-reservation/ResevationUnderLine';
import ReservationSummaryMolecule from '../../molecules/molecules-reservation/ReservationSummaryMolecule';
import ReservationCostMoecule from '..//../molecules/molecules-reservation/ReservationCostMoecule';

const Container = styled.article`
  margin-top: 2.4rem;
  position: sticky;
  top: 12rem;
  padding: 2.4rem;
  border: 0.1rem solid rgb(221, 221, 211);
  border-radius: 1.2rem;
  .cost-detail-title {
    margin: 2.4rem 0;
  }

  .host-info {
    height: 100%;
  }
`;

const CostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ReservationCostDetailOrganism = () => {
  const hostInfoChildren = {
    title: 'Donggyo-dong, Mapo-gu의 집 전체',
    content: 'Signature in \n HONGDAE[2ROOM&3BED&3minute&free',
    roomInfo: '침대 3개 · 욕실 1개',
    rate: '4.7',
  };

  // 임시 고정값, 상세보기 페이지 redux state로 변경 예정
  const staticChildren = {
    cost: '₩43,000 x 2박',
    cleaningFee: '청소비',
    serviceFee: '서비스 수수료',
    lodgmentFee: '숙박세와 수수료',
    totalFee: '총 합계 (KRW)',
  };

  const dataChildren = {
    cost: '₩86,000',
    cleaningFee: '₩29,000',
    serviceFee: '₩16,235',
    lodgmentFee: '₩1,624',
    totalFee: '₩132,859',
  };

  return (
    <Container>
      <div className="host-info">
        <ReservationSummaryMolecule children={hostInfoChildren} />
      </div>
      <ReservationUnderLine />
      <ReservationTitle
        sub
        children="요금 세부정보"
        className="cost-detail-title"
      />
      <CostContainer>
        <ReservationCostMoecule children={staticChildren} />
        <ReservationCostMoecule children={dataChildren} />
      </CostContainer>
    </Container>
  );
};

export default ReservationCostDetailOrganism;
