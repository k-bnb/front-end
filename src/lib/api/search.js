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
  client.post(`http://3.34.198.174:8080/room/list?page=${id}&size=20`, {
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
  
