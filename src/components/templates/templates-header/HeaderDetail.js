import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import HeaderDetailTop from '../../UI/organisms/organisms-header/HeaderDetailTop';
import HeaderDetailSearchNavContainer from '../../../containers/header-containers/HeaderDetailSearchNavContainer';
import { useClickOutside } from '../../../lib/useClickOutside';
import HeaderDetailScrolled from '../../UI/organisms/organisms-header/HeaderDetailScrolled';
import HeaderDetailScrolledContainer from '../../../containers/header-containers/HeaderDetailScrolledContainer';

const HeaderDetailBlock = styled.div`
  position: absolute;
  width: 100%;
  height: 80px;
  background-color: transparent;
  transition: 0.1s ease-out;
  z-index: 101;
  background-color: white;
`;

const HeaderDetail = ({
  isScrolled,
  setIsScrolled,
  isClicked,
  setIsClicked,
  navModalState,
  setNavModalState,
  initialNavModalState,
  isClickedOutside,
  setIsClickedOutside,
  isScrolledDetail,
  setIsScrolledDetail,
}) => {
  const blackOutsideRef = useClickOutside(() => {
    if (isClicked && isScrolled && !isClickedOutside) {
      setIsClickedOutside(true);
      setIsClicked(false);
    }
  });
  return (
    <>
      {!isScrolledDetail && (
        <HeaderDetailBlock
          isClicked={isClicked}
          isScrolled={isScrolled}
          isClickedOutside={isClickedOutside}
          detailHeader={true}
        >
          <HeaderDetailTop
            isScrolled={isScrolled}
            isClicked={isClicked}
            isClickedOutside={isClickedOutside}
            detailHeader={true}
          >
            MainTop
          </HeaderDetailTop>
          <HeaderDetailSearchNavContainer
            isScrolled={isScrolled}
            isClicked={isClicked}
            isClickedOutside={isClickedOutside}
            setIsClicked={setIsClicked}
            navModalState={navModalState}
            setNavModalState={setNavModalState}
            initialNavModalState={initialNavModalState}
          />
        </HeaderDetailBlock>
      )}
      {isScrolledDetail && <HeaderDetailScrolledContainer />}
    </>
  );
};

export default HeaderDetail;
