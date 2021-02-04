import React from 'react';
import styled from 'styled-components';
import PriceListItem from './PriceList';

const PriceBox = styled.ul`
  display: block;
  margin-top: 24px;
  margin-block-end: 0;
  padding: 0;
  color: rgb(34, 34, 34);
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;

const PriceDetail = () => (
  <PriceBox>
    <PriceListItem detail="82,000 x 2박" price="164,000" />
    <PriceListItem detail="청소비" price="10,000" />
    <PriceListItem detail="서비스 수수료" price="24,565" />
    <PriceListItem detail="숙박세와 수수료" price="2,456" />
  </PriceBox>
);

export default PriceDetail;
