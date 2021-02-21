import React from 'react';
import ReviewModalOrganism from '../../components/UI/organisms/organisms-reserveconfirm/ReviewModalOrganism';

const ReviewModalContainer = ({
  reviewModalState,
  setReviewModalState,
  roomId,
  list,
  review,
}) => {
  // 서버에서 받은 모든 사용자 정보 배열과 각 방의 reservationId가 일치하는 사용자 정보를 계산하는 로직
  //  useMemo 사용가능한지 확인하기,
  const roomInfo = list.filter((room) => +room.reservationId === +roomId);

  console.log(roomInfo);
  // 평점 이름
  const reviewName = {
    cleanliness: '청결도',
    accuracy: '정확성',
    communication: '의사소통',
    locationRate: '위치',
    checkIn: '체크인',
    priceSatisfaction: '가격 대비 만족도',
  };

  //  리뷰 작성 모달 닫기 버튼 event function
  const cancelModalButton = () => {
    // 모달 밖의 화면 클릭시 꺼지는 기능 추가해야한다.

    setReviewModalState(false);
  };

  return (
    <ReviewModalOrganism
      reviewName={reviewName}
      reviewModalState={reviewModalState}
      cancelModalButton={cancelModalButton}
      roomId={roomId}
    />
  );
};

export default ReviewModalContainer;
