import React from 'react';
import styled from 'styled-components';
import PointItemBox from './PointItemBox';

const ScoreAverageBox = styled.div`
  margin-bottom: 24px;
  display: flex;
`;

const ScoreAverageItem = styled.div`
  width: 41.6%;
  margin-right: 8.3%;
  padding: 0 8px;
  align-items: stretch;
  flex-wrap: wrap;
`;

const ScoreAverage = () => (
  <ScoreAverageBox>
    <ScoreAverageItem>
      <PointItemBox textItem="청결도" point="4.9" />
      <PointItemBox textItem="정확성" point="4.8" />
      <PointItemBox textItem="의사소통" point="5.0" />
    </ScoreAverageItem>
    <ScoreAverageItem>
      <PointItemBox textItem="위치" point="4.8" />
      <PointItemBox textItem="체크인" point="4.9" />
      <PointItemBox textItem="가격 대비 만족도" point="4.8" />
    </ScoreAverageItem>
  </ScoreAverageBox>
);

export default ScoreAverage;
