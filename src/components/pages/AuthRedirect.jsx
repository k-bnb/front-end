import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import qs from 'query-string';
import { useDispatch } from 'react-redux';

const AuthRedirect = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const parsed = qs.parse(history.location.search);
  localStorage.setItem('token', parsed.token);
  const accessToken = localStorage.getItem('token');

  if (accessToken) {
    dispatch({ type: 'auth/REGISTER_SUCCESS', payload: { accessToken } });
    return (
      <Redirect
        to={{
          pathname: '/',
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
