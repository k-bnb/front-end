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
const UserImg = styled.img`
  height: 56px;
  width: 56px;
  border-radius: 50%;
  object-fit: cover;
`;

const WriterData = styled(Text)`
  margin-left: 12px;
  margin-bottom: 3px;
  line-height: 20px;
`;

const ReviewText = styled(Text)`
  line-height: 24px;
`;

const ReviewItem = ({
  name = '사람1',
  date = '2020년 1월',
  content = '너무 좋았고, 편안하게 머물렀습니다.',
  userImgUrl,
}) => {
  const commentDate = date.split('-');
  console.log(commentDate[0]);
  return (
    <ReviewListItem>
      <ImgDataContainer className="basic-flex">
        <UserImg src={userImgUrl} alt="user 사진" />
        <WriterOfReview>
          <WriterData big bold block noPadding>
            {name}
          </WriterData>
          <WriterData gray block noPadding>
            {commentDate[0]}년 {commentDate[1]}월
          </WriterData>
        </WriterOfReview>
      </ImgDataContainer>
      <ReviewText big block>
        {content}
      </ReviewText>
    </ReviewListItem>
  );
};

export default ReviewItem;
