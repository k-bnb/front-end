import React, { useEffect, useRef, useState } from 'react';
import HeaderDetailScrolled from '../../components/UI/organisms/organisms-header/HeaderDetailScrolled';
import { useGetBounding, useOnScreen } from '../../lib/useOnScreen';

const HeaderDetailScrolledContainer = ({
  showButton,
  reviewRef,
  facilityRef,
}) => {
  const scrollToHandler = (Ycoord) => {
    window.scrollTo({ top: Ycoord, behavior: 'smooth' }); // 전달받은 y 좌표로 스크롤 이동
  };

  const scrollToElement = (elem) => {
    elem.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <HeaderDetailScrolled
      showButton={!showButton}
      scrollToHandler={scrollToHandler}
      scrollToElement={scrollToElement}
      reviewRef={reviewRef}
      facilityRef={facilityRef}
    />
  );
};

export default HeaderDetailScrolledContainer;
