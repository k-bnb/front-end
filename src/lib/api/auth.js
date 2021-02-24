import client from './client';

// 로그인
export const login = ({ email, password }) =>
  client.post('https://kbnb-backend.herokuapp.com/auth/login', {
    email,
    password,
  });

// 회원가입
export const register = ({ name, email, password, birth }) =>
  client.post('https://kbnb-backend.herokuapp.com/auth/signup', {
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
