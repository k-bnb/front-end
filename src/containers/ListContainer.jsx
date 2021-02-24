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

const ListContainer = React.memo(() => {
  const [searchModalState, setSearchModalState] = useState(null);
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
  const search = useSelector((state) => state.search);

  const dispatch = useDispatch();

  const keyup = e => {
    if (e.key === 'Enter')
    setSearchModalState('room');
  }
  
  const RoomSearchClick = (e) => {
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

  const [formState, setFormState] = useState(null); // 초기값은 null, 로그인 버튼 누르면 login으로, 회원가입 누르면 'register'

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
  const [localMinCost, setLocalMinCost] = useState(costSearch.minCost);
  const [localMaxCost, setLocalMaxCost] = useState(costSearch.maxCost);
  const [isFirst, setIsFirst] = useState(true);

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
    if (+e.target.value === 16) return;
    dispatch(roomnumInput(e.target.name, ++e.target.value));
  };

  const searchBtn = () => {
    // if (costSearch.minCost) {
    //   setCostcState((state) => ({
    //     ...state,
    //     minCostState: true,
    //     minCostPay: costSearch.minCost,
    //   }));
    // }
    // if (costSearch.maxCost) {
    //   setCostState((state) => ({
    //     ...state,
    //     maxCostState: true,
    //     maxCostPay: costSearch.maxCost,
    //   }));
    // }
    // else{setCostState((state) => ({
    //     minCostState: false,
    //     minCostPay: '',
    //     maxCostState: false,
    //     maxCostPay: '',
    //   }))
    // };
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

  // console.log(costState);
  // pageNation

  const [currentButton, setCurrentButton] = useState(0);
  const [arrOfcurrButtons, setArrOfCurrButtons] = useState([]);

  const [pageNationState, setPageNationState] = useState({ currentPage: 0 });

  const changeCurrentPage = (numPage) => {
    setPageNationState({ currentPage: numPage });

    const id = numPage.selected - 1;

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

  useEffect(() => {
    window.scrollTo(0, 0);
    changeCurrentPage(0);
  }, []);

  useEffect(()=>{
    
  },[isLoading])



  return (
    <>
      <HeaderContainer formState={formState} setFormState={setFormState} />
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
        // searchBtn={searchBtn}
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
        search={search}
        localMinCost={localMinCost}
        setLocalMinCost={setLocalMinCost}
        localMaxCost={localMaxCost}
        setLocalMaxCost={setLocalMaxCost}
        keyup={keyup}
      />
    </>
  );
});

export default ListContainer;
