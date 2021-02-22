import React, { useRef, useState } from 'react';
import ReviewModalOrganism from '../../components/UI/organisms/organisms-reserveconfirm/ReviewModalOrganism';

const ReviewModalContainer = ({
  reviewModalState,
  setReviewModalState,
  roomId,
  list,
}) => {
  // 어떤 모달 페이지 보여주지는지 알려 주는 상태
  const [formState, setFormState] = useState('starForm');

  // 서버에서 받은 모든 사용자 정보 배열과 각 방의 reservationId가 일치하는 사용자 정보를 계산하는 로직
  //  useMemo 사용가능한지 확인하기,
  const roomInfo = list.find((room) => +room.reservationId === +roomId);

  const { hostName } = roomInfo;

  // react icons의 path까지 포함하는지 확인하기 위한 로직
  const backButtonRef = useRef();

  // 평점 이름
  const reviewName = {
    cleanliness: '청결도',
    accuracy: '정확성',
    communication: '의사소통',
    locationRate: '위치',
    checkIn: '체크인',
    priceSatisfaction: '가격 대비 만족도',
  };

  // next button 클릭시 다음 components가 보여지기 위해서 formState를 변경
  const moveNextComponent = (e) => {
    try {
      if (backButtonRef.current && backButtonRef.current.contains(e.target)) {
        setFormState('starForm');
      }

      if (e.target.name === 'star') setFormState('writeForm');
      if (e.target.name === 'write') setFormState('starForm');
    } catch (err) {
      console.log(err);
    }
  };

  // 리뷰 작성 모달 닫기 버튼 event function
  const cancelModalButton = (e) => {
    try {
      // CommonButton components가 공통으로 사용되어서 name props로 구분
      if (e.target.name === 'star' || e.target.name === 'write') return;

      // 모달 밖의 화면 클릭시 꺼지는 기능 추가해야한다.
      setReviewModalState(false);
    } catch (err) {
      console.log(err);
    }
  };

  const removeModalBg = (e) => {
    if (e.target.classList.contains('remove-modal')) {
      setReviewModalState(false);
    }
  };

  return (
    <ReviewModalOrganism
      reviewName={reviewName}
      reviewModalState={reviewModalState}
      cancelModalButton={cancelModalButton}
      roomId={roomId}
      hostName={hostName}
      formState={formState}
      moveNextComponent={moveNextComponent}
      backButtonRef={backButtonRef}
      removeModalBg={removeModalBg}
    />
  );
};

export default ReviewModalContainer;
