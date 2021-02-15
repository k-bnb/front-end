import client from './client';

export const detailInformation = (roomId) =>
  client.get(`http://3.34.198.174:8080/room/detail?roomId=${roomId}`, {
    headers: {
      Authorization: `Bearer`,
      'Content-Type': 'application/json',
    },
  });
