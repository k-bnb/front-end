import React from 'react';
import styled from 'styled-components';
import '../../atoms/atoms-detail/DetailBasicStyle.css';
import Text from '../../atoms/atoms-detail/DetailText';

const ReviewListItem = styled.div`
  width: 41.66%;
  margin-right: 8.3%;
  margin-bottom: 40px;
  padding: 0 8px;
  font-size: 16px;
  min-width: 390px;
`;

const ImgDataContainer = styled.div`
  margin-bottom: 16px;
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

const WriterData = styled(Text)`
  margin-left: 12px;
`;

const ReviewText = styled(Text)`
  line-height: 24px;
`;

const ReviewItem = () => (
  <ReviewListItem>
    <ImgDataContainer className="basic-flex">
      <WriterPhoto></WriterPhoto>
      <WriterOfReview>
        <WriterData big bold block noPadding>
          name
        </WriterData>
        <WriterData gray block noPadding>
          date
        </WriterData>
      </WriterOfReview>
    </ImgDataContainer>
    <ReviewText big block>
      깨끗하고 좋습니다~
    </ReviewText>
  </ReviewListItem>
);

export default ReviewItem;
