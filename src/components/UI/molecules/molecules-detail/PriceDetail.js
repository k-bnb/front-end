import React from 'react';
import styled from 'styled-components';
import PriceListItem from './PriceList';
import moment from 'moment';

const PriceBox = styled.ul`
  display: block;
  margin-top: 24px;
  margin-block-end: 0;
  padding: 0;
`;

const PriceDetail = ({ infoRes, CheckInDate, detailObj }) => {
  const roomPrice = `${infoRes.roomCost}*2박`;

  const StartDate = moment(detailObj.startDate);
  const EndDate = moment(detailObj.endDate);
  const totalSchedule = EndDate.diff(StartDate, 'days');
  console.log(totalSchedule);

  return (
    <PriceBox>
      <PriceListItem
        detail={roomPrice}
        price={infoRes.roomCost * totalSchedule}
      />
      <PriceListItem detail="청소비" price={infoRes.cleaningCost} />
      <PriceListItem
        detail="서비스 수수료"
        price={(infoRes.roomCost * totalSchedule) / 10}
      />
      <PriceListItem detail="숙박세와 수수료" price={infoRes.tax} />
    </PriceBox>
  );
};

export default PriceDetail;
