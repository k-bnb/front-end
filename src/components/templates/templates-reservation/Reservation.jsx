import React from 'react';
import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { BiCalendarCheck } from 'react-icons/bi';
import ReservationInfoOrganism from '../../UI/organisms/organisms-reservation/ReservationInfoOrganism';
import ReservationRefundOrganism from '../../UI/organisms/organisms-reservation/ReservationRefundOrganism';
import ReservationRequestOrganism from '../../UI/organisms/organisms-reservation/ReservationRequestOrganism';
import ReservationTitle from '../../UI/atoms/atoms-reservation/ReservationTitle';
import ReservationCommonButton from '../../UI/atoms/atoms-reservation/ReservationCommonButton';
import CommonButton from '../../UI/atoms/atoms-reservation/CommonButton';

const TitleContainer = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 16rem;
  margin-top: 6.4rem;
  margin-bottom: 4rem;
`;

const MainContainer = styled.div`
  max-width: 1280px;
  width: 50%;
  padding: 0 8rem;
  margin: 0 8rem;
  margin-bottom: 4.8rem;
`;

const LayoutReservationTitle = styled(ReservationTitle)`
  margin-left: 6rem;
`;

const Reservation = () => {
  return (
    <section>
      <TitleContainer>
        <ReservationCommonButton back>
          <IoIosArrowBack />
        </ReservationCommonButton>
        <LayoutReservationTitle main children="예약 확인" />
      </TitleContainer>
      <MainContainer>
        <ReservationInfoOrganism />
        <ReservationRequestOrganism />
        <ReservationRefundOrganism />
        <CommonButton reservation>
          <BiCalendarCheck />
          예약하기
        </CommonButton>
      </MainContainer>
    </section>
  );
};

export default Reservation;
