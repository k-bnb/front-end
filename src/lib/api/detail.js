import client from './client';

export const detailInformation = (roomId) =>
  client.get(`/room/detail?roomId=${roomId}`, {
    headers: {
      Authorization: `Bearer`,
      'Content-Type': 'application/json',
    },
  });

export const requestComments = (roomId, pageNum) =>
  client.get(`/comment?roomId=${roomId}&page=${pageNum}&size=6&sort=date,DESC`);
