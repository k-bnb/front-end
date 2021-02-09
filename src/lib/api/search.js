import client from './client';

// 검색
export const search = (page, {locationSearch, checkDateSearch, guestSearch, costSearch, roomType, bedNum, bedRoomNum, bathRoomNum})=>
  client.post(`http://3.34.198.174:8080/room/list?page=${page}&size=5`,{
    locationSearch,
    checkDateSearch,
    guestSearch,
    costSearch,
    roomType,
    bedNum,
    bedRoomNum,
    bathRoomNum,
  });
