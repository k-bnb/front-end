import React from 'react';
import styled from 'styled-components';
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

const OneDayPrice = ({ infoRes }) => (
  <PriceInfo>
    {/* endDate가 null 일 경우에는 roomCost 띄우지 않기 */}
    <PriceBox>
      <Price> ₩ {infoRes.roomCost}</Price>
      <PriceInner>/박</PriceInner>
    </PriceBox>
    <Grade grade={infoRes.grade} infobox={true} />
    {/* ({infoRes.commentCount}) */}
  </PriceInfo>
);

export default OneDayPrice;
