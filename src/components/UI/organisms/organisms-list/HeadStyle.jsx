import SearchData from '../../molecules/molecules-list/SearchData';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

const PcSize = styled.main`
  /* width: 100%;
  padding-top:100px; */
  display: flex;
`;
const TabletSize = styled.main``;
const MobileSize = styled.main``;
const HeadStyle = ({
  searchModalState,
  setSearchModalState,
  RoomSearchClick,
  cashSearchClick,
  bedroomSearchClick,
  roomTypes,
  cost,
  costSearch,
  roomType,
  bedNum,
  bedRoomNum,
  bathRoomNum,
  minusBtn,
  plusBtn,
  searchBtn,
  costState,
}) => {
  const isPc = useMediaQuery({
    query: '(min-width: 1025px)', //1128px 이상인 경우에만 적용
  });
  const isTablet = useMediaQuery({
    query: `(min-width: 677px)and (max-width: 1025px)`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width: 677px)`, //744px 이하인 경우에만 적용
  });

  return (
    <>
      {isPc && (
        <PcSize className="Listheader">
          <SearchData
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
        </PcSize>
      )}
      {isTablet && (
        <TabletSize className="Listheader">
          <SearchData
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
        </TabletSize>
      )}
      {isMobile && (
        <MobileSize className="Listheader">
          <SearchData
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
        </MobileSize>
      )}
    </>
  );
};
export default HeadStyle;
