import React from 'react';
import styled from 'styled-components';
import Score from '../../atoms/atoms-detail/Score';
import WhiteBtn from '../../atoms/atoms-detail/WhiteBtn';
import ReviewItem from '../../molecules/molecules-detail/ReviewItem';
import ScoreAverage from '../../molecules/molecules-detail/ScoreAverage';
import { TypeTitle } from '../../molecules/molecules-detail/TypeInfo';

const ReveiwSectionWrapper = styled.div`
  padding: 0 80px;
`;

const ReviewContainer = styled.div`
  margin: 0 auto;
  padding: 48px 0;
  height: 100%;
  max-width: 1128px;
`;

const ReviewTitle = styled(TypeTitle)`
  margin: 0;
  padding-bottom: 32px;
`;

const ReviewItemBox = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
`;

const Review = () => (
  <ReveiwSectionWrapper>
    <ReviewContainer>
      <ReviewTitle>
        <Score />{' '}
      </ReviewTitle>
      <ScoreAverage />
      <ReviewItemBox>
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </ReviewItemBox>
      <WhiteBtn text="후기 38개 모두 보기" />
    </ReviewContainer>
  </ReveiwSectionWrapper>
);

export default Review;
