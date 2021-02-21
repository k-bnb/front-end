import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ReserveConfirmTemplate from '../components/templates/templates-reseveconfirm/ReserveConfirmTemplate';

const ReserveConfirmContainer = () => {
  const [active, setActive] = useState('예약 완료');
  const [list, setList] = useState([]);
  const [reservationId, setReservationId] = useState('');
  const reserveRes = useSelector((state) => state.user);

  useEffect(() => {
    if (reserveRes.reserveRes === null) return;
    const next = reserveRes.reserveRes.filter(
      (item) => item.status === '예약 완료',
    );
    if (next === null) return;

    setList(next);
  }, []);

  const activClick = (e) => {
    if (e.target.name === '예약 완료') {
      setActive('예약 완료');
      if (reserveRes.reserveRes === null) return;
      const next = reserveRes.reserveRes.filter(
        (item) => item.status === '예약 완료',
      );
      if (next === null) return;
      setList(next);
    } else if (e.target.name === '이전 예약') {
      setActive('완료된 여정');
      if (reserveRes.reserveRes === null) return;
      const prev = reserveRes.reserveRes.filter(
        (item) => item.status === '완료된 여정',
      );
      if (prev === null) return;
      setList(prev);
    }
  };

  const [modalState, setModalState] = useState(false);
  const [cancelModal, setCancelModal] = useState('');

  const cancel = (e) => {
    if (e.target.name === '예약 취소') {
      setReservationId(e.target.value);
      setCancelModal('예약 취소');
      console.log(reservationId);
    }
    setModalState(true);
  };

  // 취소 x 버튼
  const cancelBtn = (e) => {
    setModalState(false);
  };
  const reservationConfirmBtn = (e) => {
    // console.log(e);
    console.log(list.filter((item) => item.reservationId === e.target.value));
    console.log(e.target.name, e.target.value);
  };

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // review modal 상태
  const [reviewModalState, setReviewModalState] = useState(false);
  const [roomId, setRoomId] = useState('');

  const review = (e) => {
    setCancelModal('후기 작성');
    const openModalId =
      list.find((item) => +item.reservationId === +e.target.value)
        .reservationId + '';
    setRoomId(openModalId);
    setReviewModalState(!reviewModalState);
  };

  console.log(roomId);

  return (
    <ReserveConfirmTemplate
      list={list}
      active={active}
      activClick={activClick}
      modalState={modalState}
      cancel={cancel}
      cancelBtn={cancelBtn}
      cancelModal={cancelModal}
      reservationConfirmBtn={reservationConfirmBtn}
      reservationId={reservationId}
      reviewModalState={reviewModalState}
      setReviewModalState={setReviewModalState}
      review={review}
      roomId={roomId}
    />
  );
};

export default ReserveConfirmContainer;
