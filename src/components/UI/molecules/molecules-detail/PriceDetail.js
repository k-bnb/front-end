import React from 'react';
import styled from 'styled-components';
import { moneyfilter } from '../../../../lib/moneyfilter';
import PriceListItem from './PriceList';

const PriceBox = styled.ul`
  display: block;
  margin-top: 24px;
  margin-block-end: 0;
  padding: 0;
  color: rgb(34, 34, 34);

  .flexbox {
    display: flex;
    justify-content: space-evenly;
  }
`;

const PriceDetail = ({ infoRes, totalSchedule }) => {
  const roomPrice = `${moneyfilter(infoRes.roomCost)} X ${totalSchedule}박`;

  return (
    <PriceBox>
      <PriceListItem
        icon="₩"
        detail={roomPrice}
        price={moneyfilter(infoRes.roomCost * totalSchedule)}
      />
      <PriceListItem detail="청소비" price={moneyfilter(infoRes.cleaningCost)} />
      <PriceListItem
        detail="서비스 수수료"
        price={moneyfilter((infoRes.roomCost * totalSchedule) / 10)}
      />
      <PriceListItem detail="숙박세와 수수료" price={moneyfilter(infoRes.tax)} />
    </PriceBox>
  );
};

export default PriceDetail;
