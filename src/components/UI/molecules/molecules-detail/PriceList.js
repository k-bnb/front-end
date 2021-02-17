import React from 'react';
import styled from 'styled-components';
import { BiWon } from 'react-icons/bi';
import Text from '../../atoms/atoms-detail/DetailText';

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
`;

const DetailItemBtn = styled.span`
  display: inline-block;
  font-size: inherit;
  font-weight: 400;
  background: transparent;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  border-radius: 4px;
  outline: none;
  text-align: left;
  padding: 0;
`;

const PriceItem = styled.span`
  padding-left: 16px;
  white-space: nowrap;
`;

const WonIcon = styled(BiWon)`
  display: inline;
  margin-right: 0px;
  color: #444;
`;

const PriceListItem = ({ icon, detail, price }) => (
  <>
    <PriceList>
      <DetailItem>
        <DetailItemBtn>
          {icon}
          {detail}
        </DetailItemBtn>
      </DetailItem>
      <PriceItem>
        <Text gray big>
          <WonIcon />
        </Text>
        {price}{' '}
      </PriceItem>
    </PriceList>
  </>
);

export default PriceListItem;
