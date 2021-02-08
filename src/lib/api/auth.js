import client from './client';

// 로그인
export const login = ({ email, password }) =>
  client.post('http://3.34.198.174:8080/auth/login', {
    email,
    password,
  });

// 회원가입
export const register = ({ name, email, password, birth }) =>
  client.post('http://3.34.198.174:8080/auth/signup', {
    name,
    email,
    password,
    birth,
  });

// 유저 정보 조회
export const userMe = (token) =>
  client.get('http://3.34.198.174:8080/user/me', {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
