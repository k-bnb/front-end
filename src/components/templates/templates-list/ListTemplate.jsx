import ListStyle from '../../UI/organisms/organisms-list/ListsSt';
import GoogleStyle from '../../UI/organisms/organisms-list/GoogleMapSt';
import FooterFake from '../../UI/organisms/organisms-list/FooterFake';
import HeadStyle from '../../UI/organisms/organisms-list/HeadStyle';
import LoadingModal from '../LoadingModal';

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
            />
          </div>
          <GoogleStyle
            locationSearch={locationSearch}
            roomMap={roomMap}
            room={room}
            checkDateSearch={checkDateSearch}
            guestSearch={guestSearch}
            costSearch={costSearch}
            roomType={roomType}
            bedNum={bedNum}
            bedRoomNum={bedRoomNum}
            bathRoomNum={bathRoomNum}
            style={{ flexShrink: '1' }}
          />
        </div>
        <FooterFake />
      </div>
      {isLoading && <LoadingModal />}
    </>
  );
};

export default ListTemplate;
