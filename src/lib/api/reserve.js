import client from './client';

export const reserve = ({
  roomId,
  checkIn,
  checkOut,
  guestNumber,
  infantNumber,
  totalCost,
  message,
  token,
  price,
  receipt_id,
}) => {
  const body = {
    roomId,
    checkIn,
    checkOut,
    guestNumber,
    infantNumber,
    totalCost,
    message,
    payment: {
      price,
      receipt_id,
    },
  };

  const headers = { headers: { Authorization: `Bearer ${token}` } };

  return client.post(
    'https://kbnb-backend.herokuapp.com/reservation',
    body,
    headers,
  );
};
