import React, { useState, forwardRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import CheckDateUnit from '../../molecules/molecules-header/CheckDateUnit';
import GuestNumber from '../../molecules/molecules-header/GuestNumber';
import SearchUnit from '../../molecules/molecules-header/SearchUnit';
import SearchButtonUnit from '../../molecules/molecules-header/SearchButtonUnit';
import LocationModal from '../../../templates/templates-header/LocationModal';
import CalendarModal from '../../../templates/templates-header/CalendarModal';
import GuestNumberModal from '../../../templates/templates-header/GuestNumberModal';
import SearchSelectedButton from '../../atoms/atoms-header/SearchSelectedButton';

const SearchNavbarBlock = styled.nav`
  overflow: hidden;
  width: 761px;
  border-radius: 40px;
  background: white;
  margin: 20px auto 0;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  transition-duration: 0.2s;
  text-align: left;
  .closer {
    position: absolute;
    width: 100vw;
    height: 100vh;
    /* background-color: rgba(0, 0, 0, 0.2); */
    background-color: red;
    z-index: 10;
  }
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
  setIsScrolled,
  isClicked,
  setIsClicked,
  onClickHandler,
  initialCondition,
  condition,
  setCondition,
}) => {
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
              condition={condition.location}
              onClick={() => {
                setCondition({ ...initialCondition, location: true });
              }}
            ></SearchUnit>
            <CheckDateUnit
              condition={condition.checkIn}
              onClick={() => {
                setCondition({ ...initialCondition, checkIn: true });
              }}
            >
              체크인
            </CheckDateUnit>
            <CheckDateUnit
              condition={condition.checkOut}
              setCondition={setCondition}
              onClick={() => {
                console.log('djsdfkfnnvnvnvn');
                setCondition({ ...initialCondition, checkOut: true });
              }}
            >
              체크아웃
            </CheckDateUnit>
            <GuestNumber
              condition={condition.guestNum}
              onClick={() => {
                setCondition({ ...initialCondition, guestNum: true });
              }}
            />
            {isClicked ||
            condition.location ||
            condition.checkIn ||
            condition.checkOut ||
            condition.guestNum ? (
              <SearchSelectedButton />
            ) : (
              <SearchButtonUnit isClicked={isClicked} />
            )}
          </>
        )}

        {isScrolled && !isClicked && (
          <>
            <SearchButtonUnit isClicked={isClicked} />
            <span className="start-search-text">검색 시작하기</span>
          </>
        )}
      </SearchNavbarBlock>
      {(!isScrolled || isClicked) && condition.location && (
        <LocationModal
          isClicked={isClicked}
          isScrolled={isScrolled}
          setIsClicked={setIsClicked}
          setIsScrolled={setIsScrolled}
          setCondition={setCondition}
          initialCondition={initialCondition}
          condition={condition}
        />
      )}
      {(!isScrolled || isClicked) && condition.checkIn && (
        <CalendarModal
          isClicked={isClicked}
          isScrolled={isScrolled}
          setIsClicked={setIsClicked}
          setIsScrolled={setIsScrolled}
          setCondition={setCondition}
          initialCondition={initialCondition}
          condition={condition}
        />
      )}
      {(!isScrolled || isClicked) && condition.checkOut && (
        <CalendarModal
          isClicked={isClicked}
          isScrolled={isScrolled}
          setIsClicked={setIsClicked}
          setIsScrolled={setIsScrolled}
          setCondition={setCondition}
          initialCondition={initialCondition}
          condition={condition}
        />
      )}
      {(!isScrolled || isClicked) && condition.guestNum && (
        <GuestNumberModal
          isClicked={isClicked}
          isScrolled={isScrolled}
          setIsClicked={setIsClicked}
          setIsScrolled={setIsScrolled}
          setCondition={setCondition}
          initialCondition={initialCondition}
          condition={condition}
        />
      )}
    </>
  );
};

export default SearchNavbar;
