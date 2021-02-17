import React from 'react';
import styled, { css } from 'styled-components';
import '../../atoms/atoms-detail/DetailBasicStyle.css';
import Text from '../../atoms/atoms-detail/DetailText';

const ItemBox = styled.div`
  margin-bottom: 16px;
  justify-content: space-between;
  width: 100%;
`;
const TextBox = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const PointContainer = styled.div`
  max-width: 150px;
  min-width: 107px;
  width: 100%;
  margin-left: 12px;
`;
const PointBar = styled.div`
  position: relative;
  height: 4px;
  width: 100%;
  margin-right: 4px;
  background: rgb(221, 221, 221);
  border-radius: 2px;
`;

const Point = styled.span`
  position: absolute;
  width: 98%;
  top: 0;
  left: 0;
  bottom: 0;
  border-radius: 2px;
  background: rgb(34, 34, 34);
`;

const Pointnumber = styled(Text)`
  line-height: 16px;
  margin-left: 6px;
  padding: 0;
  ${(props) =>
    props.reviewModal &&
    css`
      font-size: 11px;
    `}
`;

const PointItemBox = ({ textItem, point, reviewModal }) => (
  <ItemBox className="basic-flex">
    <TextBox>
      <Text big reviewModal={reviewModal}>
        {textItem}
      </Text>
    </TextBox>
    <PointContainer className="basic-flex">
      <PointBar>
        <Point />
      </PointBar>
      <Pointnumber big bold reviewModal={reviewModal}>
        {point}
      </Pointnumber>
    </PointContainer>
  </ItemBox>
);

export default PointItemBox;
