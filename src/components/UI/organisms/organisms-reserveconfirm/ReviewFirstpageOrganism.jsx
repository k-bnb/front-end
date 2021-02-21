import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';
import CommonButton from '../../atoms/atoms-reservation/atoms-modal/CommonButton';
import AdjustHeightTeatarea from '../../atoms/atoms-reserveconfirm/AdjustHeightTeatarea';
import StarRating from '../../atoms/atoms-reserveconfirm/StarRating';
import CommonTitle from '../../atoms/atoms-reserveconfirm/CommonTitle';
import StarRatingReviewModa from '../../molecules/molecules-reserveConfirm/StarRatingReviewModa';

const ani = keyframes`
0% {
  opacity: 0;
  transform: translateY(100%);
}

100% {
  opacity: 1;
}
`;

const Container = styled.div`
  position: relative;
  width: 30%;
  min-height: 70%;
  background-color: #fff;
  padding: 64px 24px 40px;
  border-radius: 12px;
  z-index: 2;

  ${(props) => {
    return (
      props.disappear &&
      css`
        animation: ${ani} 0.2s ease-in alternate forwards;
      `
    );
  }}
`;

const MainContainer = styled.div`
  margin: 30px 0;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function ReviewFirstpageOrganism({
  reviewName,
  reviewModalState,
  cancelModalButton,
}) {
  return (
    <Container disappear={reviewModalState}>
      {/* header */}
      <CommonButton reviewClose roomInfo cancelModalButton={cancelModalButton}>
        <BiArrowBack />
      </CommonButton>
      <CommonTitle>호스트 xxx님의 숙소를 평가해주세요.</CommonTitle>

      {/* main */}
      <MainContainer>
        <StarRatingReviewModa children={reviewName.cleanliness} />
        <StarRatingReviewModa children={reviewName.accuracy} />
        <StarRatingReviewModa children={reviewName.communication} />
        <StarRatingReviewModa children={reviewName.locationRate} />
        <StarRatingReviewModa children={reviewName.checkIn} />
        <StarRatingReviewModa children={reviewName.priceSatisfaction} />
      </MainContainer>

      {/* footer(next page) */}
      {/* <div>
        <h2>후기 작성하기</h2>
        <AdjustHeightTeatarea />
      </div> */}
      <FooterContainer>
        <CommonButton reviewNext>다음</CommonButton>
      </FooterContainer>
    </Container>
  );
}

export default ReviewFirstpageOrganism;
