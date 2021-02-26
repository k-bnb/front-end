import React, { useEffect } from 'react';
import styled from 'styled-components';
import { extractDay } from '../../../../lib/extractMonthDate';
import { moneyfilter } from '../../../../lib/moneyfilter';
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

const ReservationCostDetailOrganism = ({
  infoRes,
  reserveLocationDetail,
  checkDateSearch,
  RoomTablePhotoImgURL,
}) => {
  const {
    name,
    roomCost,
    cleaningCost,
    tax,
    bedNum,
    bathRoomNum,
    grade,
    commentCount,
  } = infoRes;

  const { city, neighborhood } = reserveLocationDetail;

  const RoomDay =
    checkDateSearch.startDate || checkDateSearch.endDate
      ? extractDay(checkDateSearch.startDate, checkDateSearch.endDate)
      : '/';
  const roomTaxPrice = !isNaN(roomCost) ? roomCost * RoomDay : 0;

  // useEffect(() => {}, []);

  const hostInfoChildren = {
    title: `${city}, ${neighborhood}`,
    content: name,
    roomInfo: `침대 ${bedNum}개 · 욕실 ${bathRoomNum}개`,
    rate: `${grade.toFixed(1)} (${commentCount})`,
  };

  // 임시 고정값, 상세보기 페이지 redux state로 변경 예정
  const staticChildren = {
    cost: `₩${moneyfilter(roomCost)} x ${RoomDay}박`,
    cleaningFee: '청소비',
    serviceFee: '서비스 수수료',
    lodgmentFee: '숙박세와 수수료',
    totalFee: '총 합계 (KRW)',
  };

  const dataChildren = {
    cost: `₩${moneyfilter(roomTaxPrice)}`,
    cleaningFee: `₩${moneyfilter(cleaningCost)}`,
    serviceFee: `₩${moneyfilter(tax)}`,
    lodgmentFee: `₩${moneyfilter(roomTaxPrice * 0.2)}`,
    totalFee: `₩${
      !isNaN(roomCost)
        ? moneyfilter(roomTaxPrice + cleaningCost + tax + roomTaxPrice * 0.1)
        : moneyfilter(0)
    }`,
  };

  return (
    <Container>
      <div className="host-info">
        <ReservationSummaryMolecule
          children={hostInfoChildren}
          RoomTablePhotoImgURL={RoomTablePhotoImgURL}
        />
      </div>
      <ReservationUnderLine />
      <ReservationTitle
        sub
        children="요금 세부정보"
        className="cost-detail-title"
      />
      <CostContainer>
        <ReservationCostMoecule children={staticChildren} />
        <ReservationCostMoecule price children={dataChildren} />
      </CostContainer>
    </Container>
  );
};

export default ReservationCostDetailOrganism;
