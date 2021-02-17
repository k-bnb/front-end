import React from 'react';
import HeaderListSearchNav from '../../components/UI/organisms/organisms-header/HeaderListSearchNav';

const HeadermainSearchNavContainer = ({
  isScrolled,
  isClicked,
  setIsClicked,
  navModalState,
  setNavModalState,
  initialNavModalState,
  SearchTypeHandler,
  locationSearch,
  checkDateSearch,
  guestSearch,
  moveFocusNext,
  clickHandler,
}) => {
  return (
    <HeaderListSearchNav
      isScrolled={isScrolled}
      isClicked={isClicked}
      setIsClicked={setIsClicked}
      navModalState={navModalState}
      setNavModalState={setNavModalState}
      initialNavModalState={initialNavModalState}
      SearchTypeHandler={SearchTypeHandler}
      locationSearch={locationSearch}
      checkDateSearch={checkDateSearch}
      guestSearch={guestSearch}
      clickHandler={clickHandler}
      moveFocusNext={moveFocusNext}
    />
  );
};

export default HeadermainSearchNavContainer;
