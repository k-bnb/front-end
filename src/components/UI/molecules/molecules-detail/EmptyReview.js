import React from 'react';
import styled from 'styled-components';
import Text from '../../atoms/atoms-detail/DetailText';
import { VscGlobe } from 'react-icons/vsc';

const EmptyReviewContainer = styled.div`
  max-width: 1128px;
  padding: 48px 0;
  margin: 0 auto;
  border: 1px solid rgb(221, 221, 221);
`;

const NoReviewHeader = styled.h2`
  padding-bottom: 24px;
  font-size: 22px;
  line-height: 26px;
  font-weight: 600;
`;
const NoReviewInfo = styled.div`
  padding: 0 8px;
  width: 33.33%auto;
  margin-right: 8.3%;
  font-size: 24px;
  display: flex;
`;
const InfoText = styled(Text)`
  margin-right: 16px;
  line-height: 24px;
  word-break: break-word;
`;

const EmptyReview = () => (
  <EmptyReviewContainer>
    <NoReviewHeader>후기 (아직) 없음</NoReviewHeader>
    <NoReviewInfo>
      <VscGlobe />
      <div>
        <InfoText big>
          여행에 차질이 없도록 최선을 다해 도와드리겠습니다. 모든 예약은{' '}
          <Text big underline bold>
            에어비앤비의 게스트 환불 정책
          </Text>
          에 따라 보호를 받습니다.
        </InfoText>
      </div>
    </NoReviewInfo>
  </EmptyReviewContainer>
);

export default EmptyReview;
