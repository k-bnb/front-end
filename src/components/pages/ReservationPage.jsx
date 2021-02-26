import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ReservationContainer from '../../containers/ReservationContainer';

const ReservationPage = () => {
  const { token } = useSelector((state) => state.auth);
  return (
    <>
      {!token && <Redirect to="/" />};
      <ReservationContainer />;
    </>
  );
};

export default ReservationPage;
