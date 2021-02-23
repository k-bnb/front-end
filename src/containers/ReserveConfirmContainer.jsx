import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReserveConfirmTemplate from '../components/templates/templates-reseveconfirm/ReserveConfirmTemplate';
import { reservationCancel, reserveConfirm } from '../modules/user';
const ReserveConfirmContainer = () => {
  const [active, setActive] = useState('예약 완료');
  const [list, setList] = useState([]);
  const [reason, setReason] = useState('');
  // const [reservationId, setReservationId] = useState('');
  const [modalState, setModalState] = useState(false);
  const [cancelModal, setCancelModal] = useState('');
  const reserveRes = useSelector((state) => state.user);
  const [listModal, setListModal] = useState([]);
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
  useEffect(() => {
    // if (reserveRes.reserveRes === null) return;
    const next = reserveRes?.reserveRes?.filter((item) =>
      active === '예약 완료'
        ? item.status === '예약 완료'
        : item.status === '완료된 여정',
    );
    setList(next);
    if (next === null) return;
  }, [reserveRes, active]);

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
  const [miniModal, setMiniModal] = useState(false);

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

  // 모달 안에 작은 모달
  const miniModalCancelBtn = () => {
    setMiniModal(!miniModal);

    dispatch(reserveConfirm({ token }));
  };

  const resonChange = (e) => {
    setReason(e.target.value);
  };
  const { token } = useSelector((state) => state.auth);

  const reservationConfirmBtn = (e) => {
    dispatch(
      reservationCancel({
        token,
        reservationId: +e.target.value,
        name: userInfo?.name,
        reason: reason,
      }),
    );
    // 아 왜 404가 뜨는 거야

    setMiniModal(!miniModal);
    setcancelModalState(!cancelModalState);
  };
  const reserveconfirmLoading = useSelector((lo) => lo.loading);

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
      listModal={listModal}
      cancelModalState={cancelModalState}
      roomId={roomId}
      resonChange={resonChange}
      miniModal={miniModal}
      miniModalCancelBtn={miniModalCancelBtn}
      reserveconfirmLoading={reserveconfirmLoading}
    />
  );
};

export default ReserveConfirmContainer;
