import React from 'react';
import styled from 'styled-components';
import ReservationContent from '../atoms/ReservationContent';
import ReservationTitle from '../atoms/ReservationTitle';
import ReservationUnderLine from '../atoms/ResevationUnderLine';
import TextStyle from '../atoms/TextStyle';

const Container = styled.section`
  width: 100%;
  padding-left: 2.4rem;
  border-left: 0.8rem solid rgb(255, 175, 15);
`;

const PaddingContainer = styled(ReservationContent)`
  padding: 2.4rem 0;
`;

const ReservationRefundOrganism = () => {
  return (
    <>
      <Container>
        <ReservationTitle sub children='환불 정책' />
        <PaddingContainer
          normal
          children='2월 3일 3:00 PM 전에 예약을 취소하면 첫 1박 요금 및 서비스 수수료를 제외한 요금의 50%가 환불됩니다.'
        />
        <div>
          <TextStyle
            blackSmallBold
            children='호스트가 제공하는 환불 정책이 내게 적합한지 확인하세요.'
          />
          <TextStyle
            graySmallNormal
            children='코로나19와 같이 이미 알려진 사건 또는 일반적인 악천후와 같이 예측 가능한 사건으로 인한 여행 장애는 에어비앤비의 정상참작이 가능한 상황 정책의 적용 대상이 아닐 수 있습니다'
          />
        </div>
      </Container>
      <ReservationUnderLine />
    </>
  );
};

export default ReservationRefundOrganism;
