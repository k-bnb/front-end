import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import qs from 'query-string';
import { useDispatch } from 'react-redux';

const AuthRedirect = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const parsed = qs.parse(history.location.search);
  localStorage.setItem('token', parsed.token ? parsed.token : null);
  const accessToken = localStorage.getItem('token');

  if (accessToken) {
    dispatch({ type: 'auth/REGISTER_SUCCESS', payload: { accessToken } });
    if (localStorage.getItem('DGR')) {
      return (
        <Redirect
          push
          to={`/reserve?roomId=${localStorage.getItem(
            'roomId',
          )}&check_in=${localStorage.getItem(
            'startDate',
          )}&check_out=${localStorage.getItem(
            'endDate',
          )}&adults=${localStorage.getItem(
            'numOfAdult',
          )}&children=${localStorage.getItem(
            'numOfKid',
          )}&infants=${localStorage.getItem('numOfInfant')}`}
        />
      );
    }
    return (
      <Redirect
        to={{
          pathname: `${localStorage.getItem('LFT')}`,
          state: { from: history.location },
        }}
      />
    );
  }

  // 토큰을 빼서 스토리지 저장
  // 스토리지에 있으면, 리다이렉트 -> 메인
  return <div>ERROR</div>;
};

export default AuthRedirect;
