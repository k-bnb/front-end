import React, { useRef } from 'react';
import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';

import CommonButton from '../../atoms/atoms-reservation/atoms-modal/CommonButton';
import AdjustHeightTeatarea from '../../atoms/atoms-reserveconfirm/AdjustHeightTeatarea';
import CommonText from '../../atoms/atoms-reservation/atoms-modal/CommonText';
import CommonTitle from '../../atoms/atoms-reserveconfirm/CommonTitle';
import { useClickOutside } from '../../../../lib/useClickOutside';
import MovePageButton from '../../atoms/atoms-reservation/atoms-modal/MovePageButton';
import { useSelector } from 'react-redux';

const Container = styled.div`
  position: relative;
  width: 30%;
  min-height: 70%;
  background-color: #fff;
  padding: 64px 24px 40px;
  border-radius: 12px;
  z-index: 2;
`;

const HeaderContainer = styled.div`
  margin-bottom: 50px;
`;
const MainContainer = styled.div``;
const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 240px;
`;

const ReviewSecondOrganism = ({
  cancelModalButton,
  moveNextComponent,
  backButtonRef,
  wirteReview,
  description,
  completeReviewModal,
}) => {
  const reviewDescription = useSelector(
    (state) => state.user.reserveReviewReq.description,
  );
  return (
    <Container>
      <MovePageButton
        name="write"
        reviewPrev
        moveNextComponent={moveNextComponent}
        backButtonRef={backButtonRef}
      >
        <BiArrowBack onClick={() => moveNextComponent} />
      </MovePageButton>

      <HeaderContainer>
        <CommonTitle>후기 작성하기</CommonTitle>
        <CommonText reviewName>
          xxx님에의 숙소에 관해 다른 게스트가 참고할 점을 알려주세요.{' '}
        </CommonText>
      </HeaderContainer>
      <MainContainer>
        <CommonText reviewNameBold>후기를 작성해주세요.(20자 이상)</CommonText>
        <AdjustHeightTeatarea
          wirteReview={wirteReview}
          description={description}
          length={reviewDescription.length}
        />
        <CommonText
          reviewNameBold
          style={{ marginTop: '10px', textAlign: 'right' }}
        >
          {' '}
          {`${reviewDescription.length} / 200`}
        </CommonText>
      </MainContainer>
      <FooterContainer>
        <MovePageButton
          name="complete"
          reviewNext
          completeReviewModal={completeReviewModal}
          disabled={
            reviewDescription.length >= 20 && reviewDescription.length <= 200
              ? false
              : true
          }
        >
          저장 후 닫기
        </MovePageButton>
      </FooterContainer>
    </Container>
  );
};

export default ReviewSecondOrganism;
