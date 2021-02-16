import React, { useEffect, useState } from 'react';
import ReserveConfirmTemplate from '../components/templates/templates-reseveconfirm/ReserveConfirmTemplate';

const ReserveConfirmContainer = () => {
  const state = [
    {
      reservationId: 0,
      roomId: 1,
      imgUrl: 'this is demo url',
      status: '예약 완료',
      roomName: 'this is room name',
      roomLocation: '모험들 현실과 답도없는 열쇠 찾아라 비밀의',
      hostName: 'this is host name',
      checkIn: '2020-11-11',
      checkOut: '2021-11-11',
    },
    {
      reservationId: 1,
      roomId: 1,
      imgUrl: 'this is demo url',
      status: '예약 완료',
      roomName: 'this is room name',
      roomLocation: '모험들 현실과 답도없는 열쇠 찾아라 비밀의',
      hostName: 'this is host name',
      checkIn: '2020-10-13',
      checkOut: '2021-11-16',
    },
  ];

  const [active, setActive] = useState('예약 완료');
  const [list, setList] = useState([]);

  useEffect(() => {
    const next = state.filter((item) => item.status === '예약 완료');
    console.log(next);
    setList(next);
  }, []);

  console.log(list);
  const activClick = (e) => {
    console.log(e.target.name);
    const prev = state.filter((item) => item.status === '이전 예약');
    const next = state.filter((item) => item.status === '예약 완료');
    if (e.target.name === '예약 완료') {
      setActive('예약 완료');
      setList(next);

      console.log(state);
    } else if (e.target.name === '이전 예약') {
      setActive('이전 예약');
      setList(prev);
    }
  };
  console.log(list);

  return (
    <ReserveConfirmTemplate
      list={list}
      active={active}
      activClick={activClick}
    />
  );
};

export default ReserveConfirmContainer;
