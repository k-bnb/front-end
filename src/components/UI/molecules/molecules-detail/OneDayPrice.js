import React from 'react';
import styled from 'styled-components';
import { BiWon } from 'react-icons/bi';
import Score from '../../atoms/atoms-detail/Score';

const PriceInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 24px;
`;

const PriceBox = styled.div`
  display: flex;
`;

const Price = styled.div`
  font-size: 22px;
  line-height: 26px;
  font-weight: 600;
`;
const PriceInner = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  white-space: nowrap;
  padding-left: 4px;
  margin-top: 5px;
  vertical-align: bottom;
`;

const OneDayPrice = () => (
  <PriceInfo>
    <PriceBox>
      <BiWon font-size="22px" />
      <Price>82,000</Price>
      <PriceInner>/박</PriceInner>
    </PriceBox>
    <Score />
  </PriceInfo>
);

export default OneDayPrice;
