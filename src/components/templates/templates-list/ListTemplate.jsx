import ListStyle from '../../UI/organisms/organisms-list/ListsSt';
import GoogleStyle from '../../UI/organisms/organisms-list/GoogleMapSt';
import FooterFake from '../../UI/organisms/organisms-list/FooterFake';
import HeadStyle from '../../UI/organisms/organisms-list/HeadStyle';
import LoadingModal from '../LoadingModal';
import React from 'react';
import GoogleMapContainer from '../../../containers/google-map-container/GoogleMapContainer';
const ListTemplate = ({
  searchModalState,
  setSearchModalState,
  RoomSearchClick,
  cashSearchClick,
  bedroomSearchClick,
  roomTypes,
  cost,
  minusBtn,
  plusBtn,

  searchBtn,
  costState,
  room,
  totalPage,
  pageNationClick,
  roomMap,
  locationSearch,
  checkDateSearch,
  guestSearch,
  costSearch,
  roomType,
  bedNum,
  bedRoomNum,
  bathRoomNum,
  currentButton,
  setCurrentButton,
  arrOfcurrButtons,
  setArrOfCurrButtons,
  numberOfPages,
  isLoading,
  changeCurrentPage,
  pageNationState,
  search,
}) => {
  console.log(numberOfPages);
  return (
    <>
      <div>
        <HeadStyle
          searchModalState={searchModalState}
          setSearchModalState={setSearchModalState}
          RoomSearchClick={RoomSearchClick}
          cashSearchClick={cashSearchClick}
          bedroomSearchClick={bedroomSearchClick}
          roomTypes={roomTypes}
          cost={cost}
          costSearch={costSearch}
          roomType={roomType}
          bedNum={bedNum}
          bedRoomNum={bedRoomNum}
          bathRoomNum={bathRoomNum}
          minusBtn={minusBtn}
          plusBtn={plusBtn}
          searchBtn={searchBtn}
          costState={costState}
          search={search}
        />
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'block' }}>
            <ListStyle
              room={room}
              totalPage={totalPage}
              pageNationClick={pageNationClick}
              currentButton={currentButton}
              setCurrentButton={setCurrentButton}
              arrOfcurrButtons={arrOfcurrButtons}
              setArrOfCurrButtons={setArrOfCurrButtons}
              numberOfPages={numberOfPages}
              changeCurrentPage={changeCurrentPage}
              pageNationState={pageNationState}
              checkDateSearch={checkDateSearch}
              guestSearch={guestSearch}
            />
          </div>
          <GoogleMapContainer />
        </div>
        <FooterFake />
      </div>
      {isLoading && <LoadingModal />}
    </>
  );
};
// function areEqual1(prevProps, nextProps) {
//   console.log(prevProps === nextProps)
// if ( prevProps.room === nextProps.room) {
//     return false;
//   }
//   else if ( prevProps.locationSearch === nextProps.locationSearch) {
//     return false;
//   }
//  return true;
// console.log('ddddd');
// }
export default ListTemplate;
