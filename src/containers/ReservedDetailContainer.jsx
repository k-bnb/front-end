import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReservedDetail from '../components/ReservedDetailComponent/ReservedDetail';
import { getReservedDetail } from '../modules/reservedDetail';
import qs from 'query-string';
import { useHistory } from 'react-router-dom';

const ReservedDetailContainer = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { token } = useSelector((state) => state.auth);

  const { reservationId } = qs.parse(history.location.search);

  useEffect(() => {
    dispatch(getReservedDetail(token, +reservationId));
  }, [dispatch, token, reservationId]);

  return <ReservedDetail />;
};

export default ReservedDetailContainer;
