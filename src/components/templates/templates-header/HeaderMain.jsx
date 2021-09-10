import React from 'react';
import styled, { css } from 'styled-components';
import HeaderMainTop from '../../UI/organisms/organisms-header/HeaderMainTop';
import HeadermainSearchNavContainer from '../../../containers/header-containers/HeadermainSearchNavContainer';

const BlackOutsideRange = styled.div`
  .black-outside-boundary {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const HeaderMainBlock = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: transparent;
  transition: 0.1s ease-out;

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
  SearchTypeHandler,
  locationSearch,
  checkDateSearch,
  guestSearch,
  moveFocusNext,
  clickHandler,
  formState,
  setFormState,
  serchBtn,
}) => {
  return (
    <>
      {isScrolled && isClicked && (
        <BlackOutsideRange
          className="black-outside-boundary"
          onClick={(e) => {
            if (e.target.classList.contains('black-outside-boundary')) {
              setIsClicked(false);
              setIsScrolled(true);
            }
          }}
        >
          {' '}
          <div className="black-outside-boundary"></div>
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
          formState={formState}
          setFormState={setFormState}
        />
        <HeadermainSearchNavContainer
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
          serchBtn={serchBtn}
        />
      </HeaderMainBlock>
    </>
  );
};

export default HeaderMain;
