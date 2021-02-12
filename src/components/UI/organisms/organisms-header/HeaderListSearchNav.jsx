import React from 'react';
import { useSelector } from 'react-redux';
import styled, { css, keyframes } from 'styled-components';
import SearchButton from '../../atoms/atoms-header/SearchButton';
import Text from '../../atoms/atoms-header/Text';
import SearchNavDatesUnit from '../../molecules/molecules-header/SearchNavDatesUnit';
import SearchNavGuestUnit from '../../molecules/molecules-header/SearchNavGuestUnit';
import SearchNavLocationUnit from '../../molecules/molecules-header/SearchNavLocationUnit';

const HeaderListSearchNavBlock = styled.div`
  height: 66px;
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  border-radius: 30px;
  transition: 0.2s ease;
  white-space: nowrap;
  z-index: -1;
  ul {
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
  }
  li {
    /* border-right: 1px solid black; */
  }
  ${(props) =>
    !props.isClicked &&
    css`
      padding: 8px 0 14px 0;
      min-width: 370px;
      width: 390px;
      max-width: 395px;
      height: 48px;
      border: 1px solid lightgray;
      transform: translateY(-65px);

      &:hover {
        cursor: pointer;
        box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
      }

      .non-clicked {
        display: flex;
        justify-content: space-evenly;
        position: relative;
      }
      span {
        text-align: center;
        line-height: 30px;
        padding: 0 5px;
        /* background-color: green; */
      }
      span:first-child {
        width: 30%;
        border-right: 1px solid lightgray;
      }
      span:nth-child(2) {
        width: 40%;
        border-right: 1px solid lightgray;
      }
      .guest-button-comp {
        width: 29%;
        display: flex;
        /* background-color: pink; */
        justify-content: space-between;
        span {
          border: 0;
        }
        button {
          margin-right: 3px;
        }
      }
    `}
  /* scroll 된 상태에서 nav bar 클릭하는 경우 */
  ${(props) =>
    props.isClicked &&
    css`
      height: 66px;
      width: 100%;
      max-width: 850px;
      margin: 0 auto;
      border-radius: 30px;
      background-color: white;
      transition: 0.2s ease;
      border: 1px solid lightgray;
      transform: translateY(-100px);
      padding: ul {
        height: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
      }
    `}
`;

const HeaderMainSearchNav = ({
  isScrolled,
  isClicked,
  navModalState,
  setNavModalState,
  SearchTypeHandler,
  clickHandler,
}) => {
  const destinationName = useSelector((state) => state.search.destinationName);
  const { checkDateSearch, guestSearch } = useSelector(
    (state) => state.search.searchReq,
  );
  console.log('ㅇ', destinationName);

  const { startDate, endDate } = checkDateSearch;
  const { numOfAdult, numOfKid } = guestSearch;
  return (
    <>
      <HeaderListSearchNavBlock
        isScrolled={isScrolled}
        isClicked={isClicked}
        onClick={clickHandler}
      >
        {isClicked && (
          <ul>
            <SearchNavLocationUnit
              SearchTypeHandler={SearchTypeHandler}
              navModalState={navModalState}
              setNavModalState={setNavModalState}
            />
            <SearchNavDatesUnit
              SearchTypeHandler={SearchTypeHandler}
              navModalState={navModalState}
              setNavModalState={setNavModalState}
            />
            <SearchNavGuestUnit
              SearchTypeHandler={SearchTypeHandler}
              navModalState={navModalState}
              setNavModalState={setNavModalState}
            />
          </ul>
        )}
        {!isClicked && (
          <div className="non-clicked">
            <Text
              bold
              noPadding
              onClick={() => {
                SearchTypeHandler('location');
              }}
            >
              {destinationName}
            </Text>
            <Text
              bold
              noPadding
              onClick={() => {
                SearchTypeHandler('checkIn');
              }}
            >
              {startDate && endDate
                ? `${startDate.slice(5, 7)}월${startDate.slice(
                    8,
                  )}일-${endDate.slice(5, 7)}월${endDate.slice(8)}일`
                : '날짜 추가'}
            </Text>
            <div
              className="guest-button-comp"
              onClick={() => {
                SearchTypeHandler('guest');
              }}
            >
              <Text noPadding gray>
                {numOfAdult && numOfKid
                  ? `게스트 ${numOfAdult + numOfKid}명`
                  : '게스트 추가'}
              </Text>
              <SearchButton isScrolled={isScrolled} rooms={true} />
            </div>
          </div>
        )}
      </HeaderListSearchNavBlock>
    </>
  );
};

export default HeaderMainSearchNav;
