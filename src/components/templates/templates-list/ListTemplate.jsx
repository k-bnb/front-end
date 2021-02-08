import HeaderList from '../templates-header/HeaderList';
import HeadStyle from '../../UI/organisms/organisms-list/HeadStyle';
import ListStyle from '../../UI/organisms/organisms-list/ListsSt';
import GoogleStyle from '../../UI/organisms/organisms-list/GoogleMapSt';
import FooterFake from '../../UI/organisms/organisms-list/FooterFake';

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
}) => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        {/* <MainStyle /> */}
        <div style={{ display: 'block' }}>
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
          <ListStyle />
        </div>
        <GoogleStyle style={{ flexShrink: '1' }} />
      </div>
      <FooterFake />
    </>
  );
};

export default ListTemplate;
