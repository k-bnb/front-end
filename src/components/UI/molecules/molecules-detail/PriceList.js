import React from 'react';
import styled from 'styled-components';
import { BiWon } from 'react-icons/bi';
import TotalPrice from './TotalPrice';

const PriceList = styled.li`
  display: flex;
  padding-bottom: 12px;

  &::last-child {
    padding-bottom: 0;
  }
`;

const DetailItem = styled.span`
  flex-shrink: 1;
  flex-grow: 1;
  white-space: normal;
  color: rgb(34, 34, 34);
`;

const DetailItemBtn = styled.button`
  font-size: inherit;
  font-weight: 400;
  background: transparent;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  border-radius: 4px;
  outline: none;
  text-align: left;
  color: rgb(34, 34, 34);
`;

const PriceItem = styled.span`
  padding-left: 16px;
  white-space: nowrap;
`;

const PriceListItem = ({ detail, price }) => (
  <>
    <PriceList>
      <DetailItem>
        <DetailItemBtn>{detail}</DetailItemBtn>
      </DetailItem>
      <PriceItem>
        <BiWon />
        {price}
      </PriceItem>
    </PriceList>
  </>
);

export default PriceListItem;
