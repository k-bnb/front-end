import client from './client';

export const detailInformation = () =>
  client.get('http://3.34.198.174:8080/room/detail?roomId=', {
    headers: {
      Authorization: `Bearer`,
      'Content-Type': 'application/json',
    },
  });
