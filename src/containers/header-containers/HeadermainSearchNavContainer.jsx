import React, { useRef } from 'react';
import HeaderMainSearchNav from '../../components/UI/organisms/organisms-header/HeaderMainSearchNav';

const HeadermainSearchNavContainer = ({
  isScrolled,
  isClicked,
  setIsClicked,
  navModalState,
  setNavModalState,
  initialNavModalState,
  SearchTypeHandler,
  moveFocusNext,
  clickHandler,
}) => {
  return (
    <HeaderMainSearchNav
      isScrolled={isScrolled}
      isClicked={isClicked}
      setIsClicked={setIsClicked}
      navModalState={navModalState}
      setNavModalState={setNavModalState}
      clickHandler={clickHandler}
      SearchTypeHandler={SearchTypeHandler}
      initialNavModalState={initialNavModalState}
      moveFocusNext={moveFocusNext}
    />
  );
};

export default HeadermainSearchNavContainer;
