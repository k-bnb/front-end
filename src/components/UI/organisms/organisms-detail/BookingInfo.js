import React from 'react';
import styled from 'styled-components';
import ReserveBtn from '../../atoms/atoms-detail/ReserveBtn';
import DatePersonBox from '../../molecules/molecules-detail/DatePersonBox';
import OneDayPrice from '../../molecules/molecules-detail/OneDayPrice';
import PriceDetail from '../../molecules/molecules-detail/PriceDetail';
import TotalPrice from '../../molecules/molecules-detail/TotalPrice';
import moment from 'moment';

const PositionBox = styled.div`
  position: sticky;
  z-index: 100;
  top: 160px;
  margin-bottom: 100px;
`;

const BookingInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 216px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  margin-top: 48px;
  padding: 24px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;

  .notice {
    margin-top: 16px;
    white-space: normal;
    font-size: 14px;
    text-align: center;
    word-break: normal;
  }
`;

const BookingInfo = ({
  DetailHeaderRef,
  moveToReserve,
  detailObj,
  infoRes,
}) => {
  const StartDate = moment(detailObj.startDate);
  const EndDate = moment(detailObj.endDate);
  const totalSchedule = EndDate.diff(StartDate, 'days');

  console.log(totalSchedule);

  return (
    <PositionBox>
      <BookingInfoContainer>
        <OneDayPrice infoRes={infoRes} />
        <DatePersonBox detailObj={detailObj} />
        <ReserveBtn
          DetailHeaderRef={DetailHeaderRef}
          moveToReserve={moveToReserve}
        ></ReserveBtn>
        <span className="notice">
          예약 확정 전에는 요금이 청구되지 않습니다.
        </span>
        <PriceDetail
          infoRes={infoRes}
          detailObj={detailObj}
          totalSchedule={totalSchedule}
        />
        <TotalPrice
          infoRes={infoRes}
          detailObj={detailObj}
          totalSchedule={totalSchedule}
        />
      </BookingInfoContainer>
    </PositionBox>
  );
};

export default BookingInfo;
