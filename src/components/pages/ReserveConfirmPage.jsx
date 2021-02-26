import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ReserveConfirmContainer from '../../containers/ReserveConfirmContainer';

const ReserveConfirmPage = () => {
  console.log(localStorage.getItem('token'));
  const { token } = useSelector((state) => state.auth);

  return (
    <>
      {!token && <Redirect to="/" />};
      <ReserveConfirmContainer />;
    </>
  );
};

export default ReserveConfirmPage;
