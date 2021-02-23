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

export const userReservation = ({ token }) =>
  client.get('http://3.34.198.174:8080/reservation', {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

// 유저 수정
export const userInfoRemake = ({
  token,
  name = null,
  birth = null,
  email = null,
}) => {
  const body = { name, birth, email };

  const headers = { headers: { Authorization: `Bearer ${token}` } };
  console.log(body);
  return client.post('http://3.34.198.174:8080/user/update', body, headers);
};

export const reserveCancel = ({ token, reservationId, name, reason }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      reservationId,
      name,
      reason,
    },
  };

  return client.delete(`http://3.34.198.174:8080/reservation`, config);
};

// 리뷰 작성
export const writeReview = ({
  token,
  reservationId,
  cleanliness,
  accuracy,
  communication,
  locationRate,
  checkIn,
  priceSatisfaction,
  description,
}) => {
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const data = {
    reservationId,
    cleanliness,
    accuracy,
    communication,
    locationRate,
    checkIn,
    priceSatisfaction,
    description,
  };

  return client.post(`http://3.34.198.174:8080/comment`, data, headers);
};
