import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setState } from '../../node_modules/expect/build/index';
import Reservation from '../components/templates/templates-reservation/Reservation';
import { clientMessageChange, reserving } from '../modules/reserve';

const ReservationContainer = () => {
  // store 에서 관리하는 state
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const { roomId, guestNumber, infantNumber, totalCost, message } = useSelector(
    (state) => state.reserve,
  );
  const { checkDateSearch } = useSelector(({ search }) => search.searchReq);
  const { startDate: checkIn, endDate: checkOut } = checkDateSearch;

  // reserve container 에서만 사용하는 state(local state)
  const [modal, setModal] = useState(false); // modal on/off state

  // modal state 변경 event function
  const manageModal = () => {
    setModal(!modal);
  };

  console.log(checkDateSearch);
  console.log(checkIn);
  console.log(checkOut);

  // textArea state 관리하는 event function
  const change = (e) => {
    const value = e.target.value;

    dispatch(clientMessageChange(value));
  };

  // 확인 button 클릭해서 예약하기 event function
  const click = () => {
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

  return (
    <Reservation
      change={change}
      click={click}
      manageModal={manageModal}
      value={message}
      modal={modal}
    />
  );
};

export default ReservationContainer;
