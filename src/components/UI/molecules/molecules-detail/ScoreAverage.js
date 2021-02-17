import React from 'react';
import styled, { css } from 'styled-components';
import PointItemBox from './PointItemBox';

const ScoreAverageBox = styled.div`
  margin-bottom: 24px;
  display: flex;
  ${(props) => props.reviewModal && css``};
`;

const ScoreAverageItem = styled.div`
  width: 41.6%;
  margin-right: 8.3%;
  padding: 0 8px;
  align-items: stretch;
  flex-wrap: wrap;
  /* ${(props) =>
    props.reviewModal &&
    css`
      width: 40%;

      /* margin-right: 0; */
      /* padding: 0; */
      align-items: initial;
      background-color: tomato;
      padding: 0;
    `} */
`;

const ScoreAverage = ({ reviewModal }) => (
  <ScoreAverageBox reviewModal={reviewModal}>
    <ScoreAverageItem reviewModal={reviewModal}>
      <PointItemBox textItem="청결도" point="4.9" reviewModal={reviewModal} />
      <PointItemBox textItem="정확성" point="4.8" reviewModal={reviewModal} />
      <PointItemBox textItem="의사소통" point="5.0" reviewModal={reviewModal} />
    </ScoreAverageItem>
    <ScoreAverageItem reviewModal={reviewModal}>
      <PointItemBox textItem="위치" point="4.8" reviewModal={reviewModal} />
      <PointItemBox textItem="체크인" point="4.9" reviewModal={reviewModal} />
      <PointItemBox
        textItem="가격 대비 만족도"
        point="4.8"
        reviewModal={reviewModal}
      />
    </ScoreAverageItem>
  </ScoreAverageBox>
);

export default ScoreAverage;
