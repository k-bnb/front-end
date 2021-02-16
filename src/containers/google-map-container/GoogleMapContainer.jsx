import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GoogleStyle from "../../components/UI/organisms/organisms-list/GoogleMapSt";

const GoogleMapContainer = () => {
  const room = useSelector((state) => state.search.searchRes);
  const {
    locationSearch,
    checkDateSearch,
    guestSearch,
    costSearch,
    roomType,
    bedNum,
    bedRoomNum,
    bathRoomNum,
  } = useSelector((state) => state.search.searchReq);
  const [roomMap, setRoomMap] = useState([]);

  useEffect(() => {
    const roomMap = room.map((item) => {
      return {
        id: item.id,
        name: item.name,
        latitude: item.latitude,
        longitude: item.longitude,
        commentCount: item.commentCount,
        cost: item.cost,
        roomImgUrlList: item.roomImgUrlList,
        roomType: item.roomType,
      };
    });
    setRoomMap(roomMap)
  }, [])


  console.log(roomMap);
  const moveChange = () => {
    return { 
      roomMap,
      locationSearch,
      room,
      checkDateSearch,
      guestSearch,
      costSearch,
      roomType,
      bedNum,
      bedRoomNum,
      bathRoomNum
    } 
  }
  return  <GoogleStyle moveChange={moveChange} style={{ flexShrink: '1' }} />
}

export default GoogleMapContainer;