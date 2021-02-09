import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Reservation from '../components/templates/templates-reservation/Reservation';
import { clientMessageChange, reserving } from '../modules/reserve';

const ReservationContainer = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const {
    roomId,
    checkIn,
    checkOut,
    guestNumber,
    infantNumber,
    totalCost,
    message,
  } = useSelector((state) => state.reserve);

  const change = (e) => {
    const value = e.target.value;

    dispatch(clientMessageChange(value));
  };

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

  return <Reservation change={change} click={click} value={message} />;
};

export default ReservationContainer;
