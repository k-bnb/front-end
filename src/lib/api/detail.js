import client from './client';

export const detailInformation = (roomId) =>
  client.get(
    `https://kbnb-backend.herokuapp.com/room/detail?roomId=${roomId}`,
    {
      headers: {
        Authorization: `Bearer`,
        'Content-Type': 'application/json',
      },
    },
  );

export const requestComments = (roomId, pageNum) =>
  client.get(
    `https://kbnb-backend.herokuapp.com/comment?roomId=${roomId}&page=${pageNum}&size=6`,
  );
