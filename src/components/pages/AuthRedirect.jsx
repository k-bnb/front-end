import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import qs from 'query-string';
import { useDispatch, useSelector } from 'react-redux';

const AuthRedirect = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const parsed = qs.parse(history.location.search);
  localStorage.setItem('token', parsed.token ? parsed.token : null);
  const accessToken = localStorage.getItem('token');
  const roomId = useSelector(({ detail }) => detail.infoRes.id);
  const { startDate, endDate, numOfAdult, numOfInfant, numOfKid } = useSelector(
    ({ detail }) => detail,
  );

  if (accessToken) {
    dispatch({ type: 'auth/REGISTER_SUCCESS', payload: { accessToken } });
    if (localStorage.getItem('DGR')) {
      <Redirect
        to={{
          pathname: `/reserve?roomId=${roomId}&check_in=${startDate}&check_out=${endDate}&adults=${numOfAdult}&children=${numOfKid}&infants=${numOfInfant}`,
          state: { from: history.location },
        }}
      />;
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
