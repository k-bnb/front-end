import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderContainer from './header-containers/HeaderContainer';
import ListTemplate from '../components/templates/templates-list/ListTemplate';
import {
  costInput,
  roomnumInput,
  roomTypeInput,
  searching,
} from '../modules/search';

const ListContainer = () => {
  const [searchModalState, setSearchModalState] = useState(null);
  const [costState, setCostState] = useState({
    minCostState: false,
    minCostPay: '',
  });
  
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

  const isLoading = useSelector((state) => state.loading['search/SEARCHING']);

  const dispatch = useDispatch();

  const RoomSearchClick = () => {
    setSearchModalState('room');
  };
  const cashSearchClick = () => {
    setSearchModalState('cash');
  };
  const bedroomSearchClick = () => {
    setSearchModalState('bedroom');
  };

  const room = useSelector((state) => state.search.searchRes);
  const totalPage = useSelector((state) => state.search.totalPage);
  console.log(room);
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

  const roomTypes = useCallback(
    (e) => {
      if (e.target.checked) {
        dispatch(roomTypeInput({ roomType: e.target.name }));
      } else {
        dispatch(roomTypeInput({ roomType: '' }));
      }
    },
    [dispatch],
  );

  const num = /^[0-9]*$/;

  const cost = (e) => {
    if (!num.test(e.target.value)) return;

    dispatch(costInput(e.target.name, e.target.value));
  };
  const minusBtn = (e) => {
    if (e.target.matches('button > span')) return;
    if (+e.target.value === 0) return;
    dispatch(roomnumInput(e.target.name, --e.target.value));
  };

  const plusBtn = (e) => {
    if (e.target.matches('button > span')) return;
    dispatch(roomnumInput(e.target.name, ++e.target.value));
  };

  const searchBtn = () => {
    if (costSearch.minCost) {
      setCostState((state) => ({
        minCostState: true,
        minCostPay: costSearch.minCost,
      }));
    } else {
      setCostState((state) => ({
        minCostState: false,
        minCostPay: '',
      }));
    }
    const id = 0;
    dispatch(
      searching({
        id,
        locationSearch,
        checkDateSearch,
        guestSearch,
        costSearch,
        roomType,
        bedNum,
        bedRoomNum,
        bathRoomNum,
      }),
    );
    setSearchModalState(null);
  };

  // pageNation

  const [currentButton, setCurrentButton] = useState(0);
  const [arrOfcurrButtons, setArrOfCurrButtons] = useState([]);

  const [pageNationState, setPageNationState] = useState({ currentPage: 0 });

  const changeCurrentPage = (numPage) => {
    setPageNationState({ currentPage: numPage });
    console.log(numPage);
  
    const id = numPage - 1;

    dispatch(
      searching({
        id,
        locationSearch,
        checkDateSearch,
        guestSearch,
        costSearch,
        roomType,
        bedNum,
        bedRoomNum,
        bathRoomNum,
      }),
    );
  };

  return (
    <>
      <HeaderContainer />
      <ListTemplate
        searchModalState={searchModalState}
        setSearchModalState={setSearchModalState}
        roomTypes={roomTypes}
        RoomSearchClick={RoomSearchClick}
        cashSearchClick={cashSearchClick}
        bedroomSearchClick={bedroomSearchClick}
        costSearch={costSearch}
        cost={cost}
        roomType={roomType}
        bedNum={bedNum}
        bedRoomNum={bedRoomNum}
        bathRoomNum={bathRoomNum}
        minusBtn={minusBtn}
        plusBtn={plusBtn}
        searchBtn={searchBtn}
        costState={costState}
        room={room}
        totalPage={totalPage}
        roomMap={roomMap}
        locationSearch={locationSearch}
        checkDateSearch={checkDateSearch}
        guestSearch={guestSearch}
        currentButton={currentButton}
        setCurrentButton={setCurrentButton}
        arrOfcurrButtons={arrOfcurrButtons}
        setArrOfCurrButtons={setArrOfCurrButtons}
        isLoading={isLoading}
        changeCurrentPage={changeCurrentPage}
        pageNationState={pageNationState}
      />
    </>
  );
};

export default ListContainer;
