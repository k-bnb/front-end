import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import CheckDateUnit from '../../molecules/molecules-header/CheckDateUnit';
import GuestNumber from '../../molecules/molecules-header/GuestNumber';
import SearchUnit from '../../molecules/molecules-header/SearchUnit';
import SearchButtonUnit from '../../molecules/molecules-header/SearchButtonUnit';
import LocationModal from '../../../templates/templates-header/LocationModal';
import CalendarModal from '../../../templates/templates-header/CalendarModal';
import GuestNumberModal from '../../../templates/templates-header/GuestNumberModal';

const SearchNavbarBlock = styled.nav`
  overflow: hidden;
  border-radius: 40px;
  background: white;
  margin: 20px auto 0;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  transition-duration: 0.2s;
  text-align: left;
  ${(props) =>
    props.isScrolled &&
    !props.isClicked &&
    css`
      width: 300px;
      height: 48px;
      button {
        width: 32px;
        height: 32px;
        font-size: 12px;
        position: absolute;
        right: 2%;
        top: 15%;
      }
      .start-search-text {
        position: absolute;
        top: 50%;
        left: 5%;
        transform: translateY(-50%);
      }
    `}
  ${(props) =>
    props.isClicked &&
    css`
      overflow: hidden;
      border-radius: 40px;
      background: white;
      margin: 20px auto 0;
      border: 1px solid lightgray;
      display: flex;
      justify-content: center;
      transition-duration: 0.2s;
      text-align: left;
    `}
`;

const SearchNavbar = ({
  isScrolled,
  isClicked,
  onClickHandler,
  initialCondition,
  condition,
  setCondition,
}) => {
  const isSelected = // 현재 하나라도 선택되어 있는상태인가? -> 선택되어 있으면 검색 버튼 변경하는 용도.
    initialCondition.location ||
    initialCondition.checkIn ||
    initialCondition.checkOut ||
    initialCondition.guestNum;

  return (
    <>
      <SearchNavbarBlock
        isScrolled={isScrolled}
        isClicked={isClicked}
        onClick={onClickHandler}
      >
        {(!isScrolled || isClicked) && (
          <>
            <SearchUnit
              onClick={() => {
                setCondition({ ...initialCondition, location: true });
              }}
            ></SearchUnit>
            <CheckDateUnit
              both
              onClick={() => {
                setCondition({ ...initialCondition, checkIn: true });
              }}
            >
              체크인
            </CheckDateUnit>
            <CheckDateUnit
              onClick={() => {
                setCondition({ ...initialCondition, checkOut: true });
              }}
            >
              체크아웃
            </CheckDateUnit>
            <GuestNumber
              onClick={() => {
                setCondition({ ...initialCondition, guestNum: true });
              }}
            />
            <SearchButtonUnit />
          </>
        )}

        {isScrolled && !isClicked && (
          <>
            <SearchButtonUnit />
            <span className="start-search-text">검색 시작하기</span>
          </>
        )}
      </SearchNavbarBlock>
      {(!isScrolled || isClicked) && condition.location && (
        <LocationModal isClicked={isClicked} isScrolled={isScrolled} />
      )}
      {(!isScrolled || isClicked) && condition.checkIn && (
        <CalendarModal isClicked={isClicked} isScrolled={isScrolled} />
      )}
      {(!isScrolled || isClicked) && condition.checkOut && (
        <CalendarModal isClicked={isClicked} isScrolled={isScrolled} />
      )}
      {(!isScrolled || isClicked) && condition.guestNum && (
        <GuestNumberModal isClicked={isClicked} isScrolled={isScrolled} />
      )}
    </>
  );
};

export default SearchNavbar;
