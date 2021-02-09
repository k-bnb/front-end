// import Button from "../atoms/Button"
import { useEffect } from 'react';
import styled from 'styled-components';

import Button from '../../atoms/atoms-list/Button';
import TextStyled from '../../atoms/atoms-list/Text';
import FooterBtn from './FooterBtn';
import RoomReSearch from './RoomReSearch';
import SearchModal from './SearchModal';
// import TextStyled from '../atoms/Text';
const SearchPlace = styled.div`
  margin-top: 100px;
  /* /* width: 100%; */
  padding: 20px;
  /* display: flex; */
  .filter-style {
    display: flex;
    .roomType {
      position: relative;
      margin-right: 10px;
      button {
        display: flex;
        /* justify-content: center; */
        align-items: center;
        &.blackBorder {
          border: 2px solid #000;
        }
      }
    }
  }
`;
const SearchData = ({
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
  // const modal = useRef();
  const handleClickOutside = ({ target }) => {
    if (!target.matches('.modals')) return;
    // if (!modal.current.contains(target)) {
    setSearchModalState(null);
  };
  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <>
      <SearchPlace className="SearchData">
        <TextStyled size="blackSmall">
          숙박130건. 2월1일~2월3일. 게스트3명
        </TextStyled>
        <h1>
          <TextStyled size="blackLargeBold">춘천시의 숙소</TextStyled>
        </h1>
        <div className="filter-style">
          <div className="roomType">
            <Button
              className={roomType && 'blackBorder'}
              size="large"
              onClick={RoomSearchClick}
            >
              <TextStyled size="blackSmall">숙소유형</TextStyled>
            </Button>
            {searchModalState === 'room' && (
              <SearchModal room>
                <RoomReSearch
                  roomTypes={roomTypes}
                  searchModalState={searchModalState}
                  roomType={roomType}
                  className="modals"
                />
                <FooterBtn searchBtn={searchBtn} />
              </SearchModal>
            )}
          </div>
          <div className="roomType">
            <Button
              className={
                costSearch &&
                (costSearch.minCost || costSearch.minCost) &&
                'blackBorder'
              }
              size="large"
              onClick={cashSearchClick}
            >
              <TextStyled size="blackSmall">
                {/* {costState.minCostState
                  ? '$' + costState.minCostPay + '+'
                  : '요금'} */}
              </TextStyled>
            </Button>
            {searchModalState === 'cash' && (
              <SearchModal cash>
                <RoomReSearch
                  roomTypes={roomTypes}
                  searchModalState={searchModalState}
                  cost={cost}
                  costSearch={costSearch}
                />
                <FooterBtn searchBtn={searchBtn} />
              </SearchModal>
            )}
          </div>
          <div className="roomType">
            <Button
              className={(bedNum || bedRoomNum || bathRoomNum) && 'blackBorder'}
              size="large"
              onClick={bedroomSearchClick}
            >
              <TextStyled size="blackSmall">침실과 침대</TextStyled>
            </Button>
            {searchModalState === 'bedroom' && (
              <SearchModal bedroom>
                <RoomReSearch
                  roomTypes={roomTypes}
                  searchModalState={searchModalState}
                  bedNum={bedNum}
                  bedRoomNum={bedRoomNum}
                  bathRoomNum={bathRoomNum}
                  minusBtn={minusBtn}
                  plusBtn={plusBtn}
                />
                <FooterBtn searchBtn={searchBtn} />
              </SearchModal>
            )}
          </div>
        </div>
      </SearchPlace>
    </>
  );
};
export default SearchData;