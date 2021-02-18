import client from './client';

export const detailInformation = (roomId) =>
  client.get(`http://3.34.198.174:8080/room/detail?roomId=${roomId}`, {
    headers: {
      Authorization: `Bearer`,
      'Content-Type': 'application/json',
    },
  });

export const requestComments = (roomId) => {
  console.log(typeof roomId);
  return client.get(
    `http://3.34.198.174:8080/comment?roomId=840&page=1&size=8`,
  );
};
