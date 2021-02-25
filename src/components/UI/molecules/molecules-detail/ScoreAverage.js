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
`;

const ScoreAverage = ({ reviewModal, infoRes, detailObj }) => {
  return (
    <ScoreAverageBox reviewModal={reviewModal}>
      <ScoreAverageItem reviewModal={reviewModal}>
        <PointItemBox
          textItem="청결도"
          reviewModal={reviewModal}
          point={detailObj?.roomAverageScore?.cleanliness.toFixed(1)} // 옵셔널 체이닝
        />
        <PointItemBox
          textItem="정확성"
          reviewModal={reviewModal}
          point={detailObj?.roomAverageScore?.accuracy.toFixed(1)}
        />
        <PointItemBox
          textItem="의사소통"
          reviewModal={reviewModal}
          point={detailObj?.roomAverageScore?.communication.toFixed(1)}
        />
      </ScoreAverageItem>
      <ScoreAverageItem reviewModal={reviewModal}>
        <PointItemBox
          textItem="위치"
          reviewModal={reviewModal}
          point={detailObj?.roomAverageScore?.locationRate.toFixed(1)}
        />
        <PointItemBox
          textItem="체크인"
          reviewModal={reviewModal}
          point={detailObj?.roomAverageScore?.checkIn.toFixed(1)}
        />
        <PointItemBox
          textItem="가격 대비 만족도"
          reviewModal={reviewModal}
          point={detailObj?.roomAverageScore?.priceSatisfaction.toFixed(1)}
        />
      </ScoreAverageItem>
    </ScoreAverageBox>
  );
};

export default ScoreAverage;
