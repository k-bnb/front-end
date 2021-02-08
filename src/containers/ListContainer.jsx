import React, { useCallback, useEffect, useState } from 'react';
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

  const dispatch = useDispatch();
  console.log(costSearch);
  const RoomSearchClick = () => {
    setSearchModalState('room');
  };
  const cashSearchClick = () => {
    setSearchModalState('cash');
  };
  const bedroomSearchClick = () => {
    setSearchModalState('bedroom');
  };

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

    dispatch(
      searching({
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
      />
    </>
  );
};

export default ListContainer;
