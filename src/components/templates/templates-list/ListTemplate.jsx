import ListStyle from '../../UI/organisms/organisms-list/ListsSt';
import GoogleMapContainer from '../../../containers/google-map-container/GoogleMapContainer';
import FooterFake from '../../UI/organisms/organisms-list/FooterFake';
import HeadStyle from '../../UI/organisms/organisms-list/HeadStyle';
import LoadingModal from '../LoadingModal';
import React from 'react';
import styled from 'styled-components';

const ListTemplateStyled = styled.div`
  .list:hover {
    .map {
      background: black;
    }
  }
`;

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
  localMinCost,
  setLocalMinCost,
  localMaxCost,
  setLocalMaxCost,
}) => {
  return (
    <ListTemplateStyled>
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
          search={search}
          localMinCost={localMinCost}
          setLocalMinCost={setLocalMinCost}
          localMaxCost={localMaxCost}
          setLocalMaxCost={setLocalMaxCost}
        />
        <div className="list-map" style={{ display: 'flex' }}>
          <div className="list" style={{ display: 'block' }}>
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
          <div className="map">
            <GoogleMapContainer />
          </div>
        </div>
        <FooterFake />
      </div>
      {isLoading && <LoadingModal />}
    </ListTemplateStyled>
  );
};

export default ListTemplate;
