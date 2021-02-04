import React from 'react';
import styled from 'styled-components';

const ItemBox = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Text = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;
const PointContainer = styled.div`
  max-width: 150px;
  min-width: 107px;
  width: 100%;
  display: flex;
  align-items: center;
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

const Pointnumber = styled.span`
  color: rgb(34, 34, 34);
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  margin-left: 6px;
`;

const PointItemBox = ({ textItem, point }) => (
  <ItemBox>
    <Text>{textItem}</Text>
    <PointContainer>
      <PointBar>
        <Point />
      </PointBar>
      <Pointnumber>{point}</Pointnumber>
    </PointContainer>
  </ItemBox>
);

export default PointItemBox;
