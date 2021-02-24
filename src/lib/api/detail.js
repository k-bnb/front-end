import client from './client';

export const detailInformation = (roomId) =>
  client.get(`https://backend.kbnb.tk/room/detail?roomId=${roomId}`, {
    headers: {
      Authorization: `Bearer`,
      'Content-Type': 'application/json',
    },
  });

export const requestComments = (roomId, pageNum) =>
  client.get(
    `https://backend.kbnb.tk/comment?roomId=${roomId}&page=${pageNum}&size=6`,
  );
