import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ReserveConfirmTemplate from '../components/templates/templates-reseveconfirm/ReserveConfirmTemplate';

const ReserveConfirmContainer = () => {
  const [active, setActive] = useState('예약 완료');
  const [list, setList] = useState([]);
  // const [reservationId, setReservationId] = useState('');
  const [modalState, setModalState] = useState(false);
  const [cancelModal, setCancelModal] = useState('');
  const reserveRes = useSelector((state) => state.user);
  const [listModal, setListModal] = useState([]);

  useEffect(() => {
    if (reserveRes.reserveRes === null) return;
    const next = reserveRes.reserveRes.filter(
      (item) => item.status === '예약 완료',
    );
    if (next === null) return;

    setList(next);
  }, []);

  // 예정된 예약 이전예약 nav
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

  const [cancelModalState, setcancelModalState] = useState(false);
  const [roomId, setRoomId] = useState('');

  let reservationId = null;
  const cancel = (e) => {
    setCancelModal('후기 작성');
    const openModalId =
      list.find((item) => +item.reservationId === +e.target.value)
        .reservationId + '';
    setRoomId(openModalId);
    setcancelModalState(!cancelModalState);
  };

  // 취소 x 버튼
  const cancelBtn = (e) => {
    setcancelModalState(!cancelModalState);
  };

  const reservationConfirmBtn = (e) => {
    console.log(e.target.name, e.target.value);
  };
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
      listModal={listModal}
      cancelModalState={cancelModalState}
      roomId={roomId}
    />
  );
};

export default ReserveConfirmContainer;
