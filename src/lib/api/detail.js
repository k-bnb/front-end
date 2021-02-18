import client from './client';

export const detailInformation = (roomId) =>
  client.get(`http://3.34.198.174:8080/room/detail?roomId=${roomId}`, {
    headers: {
      Authorization: `Bearer`,
      'Content-Type': 'application/json',
    },
  });

<<<<<<< HEAD
export const requestComments = (roomId, pageNum) =>
  client.get(
    `http://3.34.198.174:8080/comment?roomId=${roomId}&page=${pageNum}&size=6`,
  );
=======
export const requestComments = (roomId) => {
  console.log(typeof roomId);
  return client.get(
    `http://3.34.198.174:8080/comment?roomId=840&page=1&size=8`,
  );
};
>>>>>>> 237b2252aa45bfe34c04180ba8f0afd31a4d8517
