import React from 'react';
import HeaderDetailSearchNav from '../../components/UI/organisms/organisms-header/HeaderDetailSearchNav';

const HeaderDetailSearchNavContainer = ({
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
    <HeaderDetailSearchNav
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
      moveFocusNext={moveFocusNext}
      clickHandler={clickHandler}
    />
  );
};

export default HeaderDetailSearchNavContainer;
