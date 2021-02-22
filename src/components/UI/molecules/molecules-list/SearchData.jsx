import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import TextStyled from '../../atoms/atoms-list/Text';
import Button from '../../atoms/atoms-list/Button';
import FooterBtn from './FooterBtn';
import RoomReSearch from './RoomReSearch';
import SearchModal from './SearchModal';
import { extractMonthDate } from '../../../../lib/extractMonthDate';
import { moneyfilter } from '../../../../lib/moneyfilter';

const SearchPlace = styled.div`
  div:focus{
    transition: box-shadow 0.2s ease 0s;
    border-color: rgb(34,34,34);
    box-shadow: rgb(255,255,255) 0px 0px 0px 2px, red(34,34,34) 0px 0px 0px 4px;
  }
  padding: 100px 30px 40px 30px;
  /* margin-top:100px; */

  .filter-style {
    display: flex;
    .roomType {
      position: relative;
      margin-right: 15px;
      button {
        display: flex;
        /* justify-content: center; */
        align-items: center;
        &.blackBorder {
          /* border: 2px solid #000; */
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
  search,
  localMinCost,
  setLocalMinCost,
  localMaxCost,
  setLocalMaxCost,
  keyup,
}) => {
  const modal = useRef();
  const {
    destinationName,
    searchReq: {
      checkDateSearch: { startDate, endDate },
      guestSearch: { numOfAdult, numOfKid },
    },
    totalPage: { totalElements },
  } = search;

  const startMonthDate = extractMonthDate(startDate);
  const endMonthDate = extractMonthDate(endDate);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = ({ target }) => {
      if (modal.current && !modal.current.contains(target)) {
        setSearchModalState(null);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);
console.log(keyup);
  return (
    <>
      <SearchPlace className="SearchData">
        <TextStyled size="blackSmall">
          {(totalElements ? `숙박${totalElements}건` : '') +
            (startDate && endDate
              ? ` · ${startMonthDate.month}월 ${startMonthDate.date}일 - 
            ${endMonthDate.month}월 ${endMonthDate.date}일`
              : '') +
            (numOfAdult ? ` · 게스트${numOfAdult + numOfKid}명` : '')}
        </TextStyled>
        <h1>
          <TextStyled size="blackLargeBold">
            {destinationName === '가까운 여행지 둘러보기'
              ? '근처의 숙소'
              : `${destinationName}의 숙소`}
          </TextStyled>
        </h1>
        <div className="filter-style" ref={modal}>
          <div className="roomType" tabIndex="0">
            <Button
              className={roomType && 'blackBorder'}
              size="large"
              onClick={RoomSearchClick}
              onkeyup={keyup}
            >
              <TextStyled size="blackSmall" >숙소유형</TextStyled>
            </Button>
            {searchModalState === 'room' && (
              <SearchModal room>
                <RoomReSearch
                  roomTypes={roomTypes}
                  searchModalState={searchModalState}
                  roomType={roomType}
                  className="modals"
                />
                <FooterBtn
                  tabIndex='0'
                  searchBtn={searchBtn}
                  dispatch={dispatch}
                  setSearchModalState={setSearchModalState}
                />
              </SearchModal>
            )}
          </div>
          <div className="roomType" tabIndex="0">
            <Button
              className={
                costSearch &&
                (costSearch.minCost || costSearch.minCost) &&
                'blackBorder'
              }
              size="large"
              onClick={cashSearchClick}
            >
              <>
                {costSearch.minCost === 10000 &&
                  costSearch.maxCost === 1000000 && (
                    <TextStyled size="blackSmall">요금</TextStyled>
                  )}
                {costSearch.minCost !== 10000 &&
                  costSearch.maxCost === 1000000 && (
                    <TextStyled size="blackSmall">
                      ₩{moneyfilter(costSearch.minCost)}+
                    </TextStyled>
                  )}
                {costSearch.minCost === 10000 &&
                  costSearch.maxCost !== 1000000 && (
                    <TextStyled size="blackSmall">
                      최대 ₩{moneyfilter(costSearch.maxCost)}
                    </TextStyled>
                  )}
                {costSearch.minCost !== 10000 &&
                  costSearch.maxCost !== 1000000 && (
                    <TextStyled size="blackSmall">
                      ₩
                      {`${moneyfilter(costSearch.minCost)} - ₩${moneyfilter(
                        costSearch.maxCost,
                      )}`}
                    </TextStyled>
                  )}
              </>
            </Button>
            {searchModalState === 'cash' && (
              <SearchModal cash>
                <RoomReSearch
                  roomTypes={roomTypes}
                  searchModalState={searchModalState}
                  cost={cost}
                  costSearch={costSearch}
                  localMinCost={localMinCost}
                  setLocalMinCost={setLocalMinCost}
                  localMaxCost={localMaxCost}
                  setLocalMaxCost={setLocalMaxCost}
                />
                <FooterBtn tabIndex='0'
                  localMinCost={localMinCost}
                  localMaxCost={localMaxCost}
                  dispatch={dispatch}
                  searchBtn={searchBtn}
                  setSearchModalState={setSearchModalState}
                  modalType={'cash'}
                />
              </SearchModal>
            )}
          </div>
          <div className="roomType" tabIndex="0">
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
                <FooterBtn
                  tabIndex='0'
                  searchBtn={searchBtn}
                  dispatch={dispatch}
                  setSearchModalState={setSearchModalState}
                />
              </SearchModal>
            )}
          </div>
        </div>
      </SearchPlace>
    </>
  );
};
export default SearchData;
