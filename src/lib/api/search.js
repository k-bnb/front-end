import client from './client';
// 검색
export const search = ({
  id,
  locationSearch,
  checkDateSearch,
  guestSearch,
  costSearch,
  roomType,
  bedNum,
  bedRoomNum,
  bathRoomNum,
}) =>
  client.post(`https://backend.kbnb.tk/room/list?page=${id}&size=20`, {
    locationSearch,
    checkDateSearch,
    guestSearch,
    costSearch,
    roomType,
    bedNum,
    bedRoomNum,
    bathRoomNum,
  });
// https://kbnb-backend.herokuapp.com/
