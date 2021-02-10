import client from './client';
// 검색
export const search = ({
  locationSearch,
  checkDateSearch,
  guestSearch,
  costSearch,
  roomType,
  bedNum,
  bedRoomNum,
  bathRoomNum,
}) =>
  client.post(`http://3.34.198.174:8080/room/list?page=0&size=5`, {
    locationSearch: {
      latitude: 37.5451891,
      longitude: 127.0574869,
      latitudeMax: 37.5851891,
      latitudeMin: 37.5051891,
      longitudeMax: 127.1374869,
      longitudeMin: 126.9774869,
    },
    checkDateSearch,
    guestSearch,
    costSearch,
    roomType,
    bedNum,
    bedRoomNum,
    bathRoomNum,
  });
