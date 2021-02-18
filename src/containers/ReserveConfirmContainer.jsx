import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ReserveConfirmTemplate from '../components/templates/templates-reseveconfirm/ReserveConfirmTemplate';

const ReserveConfirmContainer = () => {
  const [active, setActive] = useState('예약 완료');
  const [list, setList] = useState([]);
  const reserveRes = useSelector((state) => state.user);
  console.log(reserveRes.reserveRes);
  useEffect(() => {
    if (reserveRes.reserveRes === null) return;
    const next = reserveRes.reserveRes.filter(
      (item) => item.status === '예약 완료',
    );
    if (next === null) return;

    setList(next);
  }, []);

  console.log(list);
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
      setActive('이전 예약');
      if (reserveRes.reserveRes === null) return;
      const prev = reserveRes.reserveRes.filter(
        (item) => item.status === '이전 예약',
      );
      if (prev === null) return;
      setList(prev);
    }
    console.log(e.target.name);
  };
  console.log(list);
  const [modalState, setModalState] = useState(false);
  const [cancelModal, setCancelModal] = useState('');

  const cancel = (e) => {
    console.log(e.target.name);
    if (e.target.name === cancel) {
      setModalState(false);
      return;
    }
    setModalState(true);
  };
  const cancelBtn = (e) => {
    setModalState(false);
  };
  console.log(cancelModal);
  return (
    <ReserveConfirmTemplate
      list={list}
      active={active}
      activClick={activClick}
      modalState={modalState}
      cancel={cancel}
      cancelBtn={cancelBtn}
      cancelModal={cancelModal}
    />
  );
};

export default ReserveConfirmContainer;
