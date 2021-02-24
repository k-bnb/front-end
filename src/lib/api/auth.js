import client from './client';

// 로그인
export const login = ({ email, password }) =>
  client.post('https://kbnb-backend.herokuapp.com/auth/login', {
    email,
    password,
  });

// 회원가입
export const register = ({ name, email, password, birth }) =>
  client.post('https://backend.kbnb.tk/auth/signup', {
    name,
    email,
    password,
    birth,
  });

// 유저 정보 조회
export const userMe = (token) =>
  client.get('https://kbnb-backend.herokuapp.com/user/me', {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

export const userReservation = ({ token }) =>
  client.get('https://kbnb-backend.herokuapp.com/reservation', {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

// 유저 수정 이름
export const userInfoNameRemake = ({ token, name }) => {
  const body = { name };

  const headers = { headers: { Authorization: `Bearer ${token}` } };
  console.log(body);
  return client.post(
    'http://3.34.198.174:8080/user/update/name',
    body,
    headers,
  );
};
// 유저 수정 생일
export const userInfoBirthRemake = ({ token, birth }) => {
  const body = { birth };

  const headers = { headers: { Authorization: `Bearer ${token}` } };
  console.log(body);
  return client.post(
    'http://3.34.198.174:8080/user/update/birth',
    body,
    headers,
  );
};

// 유저 수정 이메일
export const userInfoEmailRemake = ({ token, email }) => {
  const body = { email };

  const headers = { headers: { Authorization: `Bearer ${token}` } };
  console.log(body);
  return client.post(
    'https://kbnb-backend.herokuapp.com/user/update',
    body,
    headers,
  );
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

  return client.delete(
    `https://kbnb-backend.herokuapp.com/reservation`,
    config,
  );
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

  return client.post(
    `https://kbnb-backend.herokuapp.com/comment`,
    data,
    headers,
  );
};
