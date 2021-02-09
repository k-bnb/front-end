import React from 'react';
import styled from 'styled-components';
import { BiWon } from 'react-icons/bi';
import Grade from '../../atoms/atoms-detail/Grade';

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
  white-space: nowrap;
  padding-left: 4px;
  margin-top: 5px;
  vertical-align: bottom;
`;

const OneDayPrice = ({ roomCost }) => (
  <PriceInfo>
    <PriceBox>
      <BiWon font-size="22px" />
      <Price>82,000{roomCost}</Price>
      <PriceInner>/박</PriceInner>
    </PriceBox>
    <Grade />
  </PriceInfo>
);

export default OneDayPrice;
