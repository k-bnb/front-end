import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import HeaderListTop from '../../UI/organisms/organisms-header/HeaderListTop';
import HeaderListSearchNavContainer from '../../../containers/header-containers/HeaderListSearchNavContainer';
import { useClickOutside } from '../../../lib/useClickOutside';

const BlackOutsideRange = styled.div`
  ${(props) =>
    !props.isClickedOutside &&
    css`
      .black-outside-boundary {
        position: fixed;
        color: red;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.4);
      }
    `}
`;

const HeaderListBlock = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  position: fixed;
  background-color: white;
  transition: 0.1s ease;
  z-index: 9999;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.1);

  ${(props) =>
    props.isClicked &&
    props.isScrolled &&
    css`
      background-color: white;
      height: 180px;
    `}
`;

const HeaderList = ({
  isScrolled,
  setIsScrolled,
  isClicked,
  setIsClicked,
  navModalState,
  setNavModalState,
  initialNavModalState,
  isClickedOutside,
  setIsClickedOutside,
  SearchTypeHandler,
  locationSearch,
  checkDateSearch,
  guestSearch,
  moveFocusNext,
  clickHandler,
}) => {
  const blackOutsideRef = useClickOutside(() => {
    if (isClicked && isScrolled && !isClickedOutside) {
      setIsClickedOutside(true);
      setIsClicked(false);
    }
  });

  return (
    <>
      {isScrolled && isClicked && (
        <BlackOutsideRange ref={blackOutsideRef}>
          <div className="black-outside-boundary">hi</div>
        </BlackOutsideRange>
      )}
      <HeaderListBlock
        isClicked={isClicked}
        isScrolled={isScrolled}
        isClickedOutside={isClickedOutside}
      >
        <HeaderListTop
          isScrolled={isScrolled}
          isClicked={isClicked}
          isClickedOutside={isClickedOutside}
        >
          MainTop
        </HeaderListTop>
        <HeaderListSearchNavContainer
          isScrolled={isScrolled}
          isClicked={isClicked}
          isClickedOutside={isClickedOutside}
          setIsClicked={setIsClicked}
          navModalState={navModalState}
          setNavModalState={setNavModalState}
          initialNavModalState={initialNavModalState}
          SearchTypeHandler={SearchTypeHandler}
          locationSearch={locationSearch}
          checkDateSearch={checkDateSearch}
          guestSearch={guestSearch}
          moveFocusNext={moveFocusNext}
          clickHandler={clickHandler}
        />
      </HeaderListBlock>
    </>
  );
};

export default HeaderList;
