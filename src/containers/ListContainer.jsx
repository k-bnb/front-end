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

  //진솔.
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

  //여기까지.
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

  let numberOfPages = [];

  Array.from({ length: totalPage.totalPages }, (_, i) => {
    return numberOfPages.push(i);
  });
  console.log(numberOfPages);
  let dotsInitial = '...';
  let dotsLeft = '... ';
  let dotsRight = ' ...';
  if (numberOfPages.length > 6) {
    //[0, 1, 2, 3, "...", 22]
    const newArr1 = numberOfPages.slice(0, 4);
    numberOfPages = [...newArr1, dotsInitial, numberOfPages.length - 1];
  } else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
    //[0, "...", 21, 22, "...", 23] && [0, "...", 19, 21, 22, "...", 23]
    const newArr1 = numberOfPages.slice(0, 1);
    const newArr2 = numberOfPages.slice(currentButton - 2, currentButton);
    const newArr3 = numberOfPages.slice(currentButton, currentButton + 1);
    numberOfPages = [
      ...newArr1,
      dotsLeft,
      ...newArr2,
      ...newArr3,
      dotsRight,
      numberOfPages.length - 1,
    ];
  } else if (currentButton > numberOfPages.length - 3) {
    //[0, "...", 19, 20, 21, 22]
    const newArr1 = numberOfPages.slice(0, 1);
    const newArr2 = numberOfPages.slice(
      numberOfPages.length - 4,
      numberOfPages.length - 1,
    );
    numberOfPages = [...newArr1, dotsLeft, ...newArr2];
  }

  const pageNationClick = (e) => {
    setCurrentButton(e.target.name);
    const id = e.target.name;
    if (numberOfPages[id + 1] === '...') {
      console.log('ddd');
    }
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
        pageNationClick={pageNationClick}
        roomMap={roomMap}
        locationSearch={locationSearch}
        checkDateSearch={checkDateSearch}
        guestSearch={guestSearch}
        currentButton={currentButton}
        setCurrentButton={setCurrentButton}
        arrOfcurrButtons={arrOfcurrButtons}
        setArrOfCurrButtons={setArrOfCurrButtons}
        numberOfPages={numberOfPages}
        isLoading={isLoading}
      />
    </>
  );
};

export default ListContainer;
