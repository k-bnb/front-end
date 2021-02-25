import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReviewModalOrganism from '../../components/UI/organisms/organisms-reserveconfirm/ReviewModalOrganism';
import { finishLoading, startLoading } from '../../modules/loading';
import {
  review,
  changeInputReview,
  initialInputReview,
  // reserveConfirm,
} from '../../modules/user';
import * as API from '../../lib/api/auth';

const ReviewModalContainer = ({
  reviewModalState,
  setReviewModalState,
  reviewRoomId,
  list,
  reserveconfirmLoading,
}) => {
  const dispatch = useDispatch();

  // review action create function 인자
  const { token } = useSelector(({ auth }) => auth);

  // review action create function 인자 or textarea value의 상태 관리
  const { description } = useSelector(({ user }) => user.reserveReviewReq);

  // catch에서 에러 잡기 위한 상태
  const { reserveError, reserveReviewError } = useSelector(({ user }) => user);

  // 리뷰 작성 유무 확인 상태
  const userIfoConFirm = JSON.parse(sessionStorage.getItem('userInfoConFirm'));

  // star rating 초기화 및 초기값
  const initialRating = {
    cleanliness: null,
    accuracy: null,
    communication: null,
    locationRate: null,
    checkIn: null,
    priceSatisfaction: null,
  };

  // 각 star rating 상태
  const [rating, setRating] = useState(initialRating);

  // review action create function 인자
  const {
    cleanliness,
    accuracy,
    communication,
    locationRate,
    checkIn,
    priceSatisfaction,
  } = rating;

  // 어떤 모달 페이지 보여주지는지 알려 주는 상태
  const [formState, setFormState] = useState('starForm');

  // 서버에서 받은 모든 사용자 정보 배열과 각 방의 reservationId가 일치하는 사용자 정보를 계산하는 로직
  //  useMemo 사용가능한지 확인하기,
  const roomInfo = list.find((room) => +room.reservationId === +reviewRoomId);

  const reservationId = roomInfo.reservationId;

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

  // 리뷰 작성시 textarea 상태를 관리하는 event function
  const wirteReview = (e) => {
    dispatch(changeInputReview(e.target.value));
  };

  // 각 star rating의 상태를 관리하는 event function (name props로 식별)
  const changeStarRating = (starValue) => (e) => {
    const form = e.target.name;
    setRating({ ...rating, [form]: starValue });
  };

  // 모달 밖의 화면 클릭시 모달 닫히는 event function
  const removeModalBg = (e) => {
    if (e.target.classList.contains('remove-modal')) {
      setReviewModalState(false);
    }
  };

  // 후기 작성 완료 버튼 event function 및 모달 닫기, 초기화
  const completeReviewModal = async (e) => {
    e.preventDefault();
    if (e.target.name !== 'complete') return;
    // star rating 초기화
    setRating(initialRating);

    // textarea 초기화
    dispatch(initialInputReview());

    dispatch(startLoading('user/REVIEW'));

    try {
      const postResponse = await API.writeReview({
        token,
        reservationId,
        cleanliness,
        accuracy,
        communication,
        locationRate,
        checkIn,
        priceSatisfaction,
        description,
      });

      const getResponse = await API.userReservation({ token });

      dispatch({
        type: 'user/REVIEW_SUCCESS',
        payload: postResponse.data,
      });

      dispatch({
        type: 'user/RESERVE_CONFIRM_SUCCESS',
        payload: getResponse.data,
      });

      setReviewModalState(false);
      delay(1000).then(() => dispatch(finishLoading('user/REVIEW')));
    } catch (error) {
      console.log(error);
    }

    setFormState('complete');
  };

  return (
    <ReviewModalOrganism
      reviewName={reviewName}
      reviewModalState={reviewModalState}
      cancelModalButton={cancelModalButton}
      reviewRoomId={reviewRoomId}
      hostName={hostName}
      formState={formState}
      moveNextComponent={moveNextComponent}
      backButtonRef={backButtonRef}
      removeModalBg={removeModalBg}
      wirteReview={wirteReview}
      description={description}
      changeStarRating={changeStarRating}
      rating={rating}
      completeReviewModal={completeReviewModal}
      reserveconfirmLoading={reserveconfirmLoading}
    />
  );
};

export default ReviewModalContainer;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
