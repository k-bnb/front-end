import ListStyle from '../../UI/organisms/organisms-list/ListsSt';
import GoogleStyle from '../../UI/organisms/organisms-list/GoogleMapSt';
import FooterFake from '../../UI/organisms/organisms-list/FooterFake';
import HeadStyle from '../../UI/organisms/organisms-list/HeadStyle';

const ListTemplate = ({
  searchModalState,
  setSearchModalState,
  RoomSearchClick,
  cashSearchClick,
  bedroomSearchClick,
  roomTypes,
  cost,
  roomType,
  bedNum,
  bedRoomNum,
  bathRoomNum,
  minusBtn,
  plusBtn,
  costSearch,
  searchBtn,
  costState,
  room,
  totalPage,
  pageNationClick,
}) => {
  return (
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
          />
        </div>
        <GoogleStyle style={{ flexShrink: '1' }} />
      </div>
      <FooterFake />
    </div>
  );
};

export default ListTemplate;
