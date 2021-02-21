import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getTotalPrice } from '../../../../modules/detail';

const TotalPriceBox = styled.ul`
  margin: 4px 0 0;
  padding: 24px 0 0;
  display: flex;
  font-weight: 700;
  border-top: 1px solid rgb(221, 221, 221);
`;
const TotalText = styled.span`
  flex-shrink: 1;
  flex-grow: 1;
  white-space: normal;
`;

const Total = styled.span`
  padding-left: 16px;
  white-space: nowrap;
`;

const TotalPrice = ({ infoRes, totalSchedule }) => {
  const entireCost =
    infoRes.roomCost * totalSchedule +
    infoRes.cleaningCost +
    (infoRes.roomCost * totalSchedule) / 10 +
    infoRes.tax;
  //console.log(entireCost);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalPrice({ totalCost: entireCost }));
  }, [dispatch, entireCost]);

  return (
    <TotalPriceBox>
      <TotalText>총 합계</TotalText>
      <Total>₩ {entireCost}</Total>
    </TotalPriceBox>
  );
};

export default TotalPrice;
