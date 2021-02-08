import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import HeaderMainTop from '../../UI/organisms/organisms-header/HeaderMainTop';
import HeaderMainSearchNav from '../../UI/organisms/organisms-header/HeaderMainSearchNav';
import HeadermainSearchNavContainer from '../../../containers/header-containers/HeadermainSearchNavContainer';
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
        z-index: 1;
      }
    `}
`;

const HeaderMainBlock = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 80px;
  background-color: transparent;
  transition: 0.1s ease;

  ${(props) =>
    props.isClicked &&
    props.isScrolled &&
    css`
      background-color: white;
      height: 180px;
    `}
`;

const HeaderMain = ({
  isScrolled,
  setIsScrolled,
  isClicked,
  setIsClicked,
  navModalState,
  setNavModalState,
  initialNavModalState,
  isClickedOutside,
  setIsClickedOutside,
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
      <HeaderMainBlock
        isClicked={isClicked}
        isScrolled={isScrolled}
        isClickedOutside={isClickedOutside}
      >
        <HeaderMainTop
          isScrolled={isScrolled}
          isClicked={isClicked}
          isClickedOutside={isClickedOutside}
        >
          MainTop
        </HeaderMainTop>
        <HeadermainSearchNavContainer
          isScrolled={isScrolled}
          isClicked={isClicked}
          isClickedOutside={isClickedOutside}
          setIsClicked={setIsClicked}
          navModalState={navModalState}
          setNavModalState={setNavModalState}
          initialNavModalState={initialNavModalState}
        />
      </HeaderMainBlock>
    </>
  );
};

export default HeaderMain;
