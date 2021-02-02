import React from 'react';
import styled from 'styled-components';
import Score from '../../atoms/atoms-detail/Score';
import ReviewItem from '../../molecules/molecules-detail/ReviewItem';
import { TypeTitle } from '../../molecules/molecules-detail/TypeInfo';

const ReviewContainer = styled.div`
  padding: 48px 80px;
  height: 100%;
`;

const Review = () => (
  <ReviewContainer>
    <TypeTitle>
      <Score />{' '}
    </TypeTitle>
    <ReviewItem />
  </ReviewContainer>
);

export default Review;
