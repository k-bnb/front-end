import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Reservation from '../components/templates/templates-reservation/Reservation';
import { clientMessageChange, reserving } from '../modules/reserve';
import { dateInput } from '../modules/search';

const ReservationContainer = () => {
  // store 에서 관리하는 state
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);
  const {
    roomId,
    guestNumber,
    infantNumber,
    totalCost,
    message,
    checkDateSearch: checkDate,
  } = useSelector((state) => state.reserve);
  const { checkDateSearch, guestSearch } = useSelector(
    ({ search }) => search.searchReq,
  );

  const { startDate: checkIn, endDate: checkOut } = checkDateSearch;

  const { startDate, endDate } = checkDate;

  //  리펙토링시 객체로 묶기
  const [dateModal, setDateModal] = useState(false);
  const [guestModal, setGuestModal] = useState(false);
  const [comfirmModal, setComfirmModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const manageDateModal = () => {
    setDateModal(!dateModal);
  };

  const manageGuestModal = () => {
    setGuestModal(!guestModal);
  };

  // textArea state 관리하는 event function
  const change = (e) => {
    const value = e.target.value;

    dispatch(clientMessageChange(value));
  };

  // 확인 button 클릭해서 예약하기 event function
  const click = () => {
    setComfirmModal(true);
    dispatch(
      reserving(
        roomId,
        checkIn,
        checkOut,
        guestNumber,
        infantNumber,
        totalCost,
        message,
        token,
      ),
    );
  };

  const saveDate = () => {
    setDateModal(!dateModal);
    dispatch(dateInput('startDate', startDate)); // 시작일만 선택시 시작일 dispatch
    dispatch(dateInput('endDate', endDate)); // 시작일만 선택시 시작일 dispatch
  };

  // const deleteDate = () => {
  //   dispatch(initialDate());
  // };

  useState(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Reservation
      change={change}
      click={click}
      value={message}
      dateModal={dateModal}
      manageDateModal={manageDateModal}
      guestModal={guestModal}
      manageGuestModal={manageGuestModal}
      setGuestModal={setGuestModal}
      comfirmModal={comfirmModal}
      checkDateSearch={checkDateSearch}
      guestSearch={guestSearch}
      checkDate={checkDate}
      saveDate={saveDate}
      isLoading={isLoading}
    />
  );
};

export default ReservationContainer;
