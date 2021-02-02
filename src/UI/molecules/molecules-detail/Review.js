import React from 'react';
import styled from 'styled-components';

const ReviewListItem = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 40px;
  padding: 0 8px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;

  & > .dataContainer {
    display: flex;
  }
`;

const WriterOfReview = styled.div`
  align-items: center;
  margin-bottom: 12px;
`;

const WriterPhoto = styled.div`
  height: 56px;
  width: 56px;
  border-radius: 50%;
  background-color: lightgray;
`;

const WriterData = styled.div`
  display: block;
  margin-left: 12px;
  line-height: 20px;
  &:first-child {
    color: rgb(34, 34, 34);
    font-weight: 600;
    font-size: 16px;
  }
  &:last-child {
    color: rgb(113, 113, 113);
    font-weight: 400;
    font-size: 14px;
  }
`;

const ReviewText = styled.span`
  display: block;
  color: rgb(34, 34, 34);
  font-weight: 400;
  line-height: 24px;
`;

const Review = () => (
  <ReviewListItem>
    <div className="dataContainer">
      <WriterPhoto></WriterPhoto>
      <WriterOfReview>
        <WriterData>name</WriterData>
        <WriterData>date</WriterData>
      </WriterOfReview>
    </div>
    <ReviewText>깨끗하고 좋습니다~</ReviewText>
  </ReviewListItem>
);

export default Review;
