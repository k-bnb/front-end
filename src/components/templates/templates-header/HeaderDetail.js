import React, { useRef } from 'react';
import styled from 'styled-components';
import HeaderDetailTop from '../../UI/organisms/organisms-header/HeaderDetailTop';
import HeaderDetailSearchNavContainer from '../../../containers/header-containers/HeaderDetailSearchNavContainer';
import { useClickOutside } from '../../../lib/useClickOutside';
import HeaderDetailScrolledContainer from '../../../containers/header-containers/HeaderDetailScrolledContainer';
import { useOnScreen } from '../../../lib/useOnScreen';

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
  SearchTypeHandler,
  locationSearch,
  checkDateSearch,
  guestSearch,
  moveFocusNext,
  clickHandler,
  DetailHeaderRef,
  ImageContainerRef,
  reviewRef,
  facilityRef,
}) => {
  const showButton = useOnScreen(DetailHeaderRef, '-80px'); // detail header가 스크롤 된 경우, 예약하기 버튼이 가려지면 헤더에 뜬다
  const showDetailHeader = useOnScreen(ImageContainerRef, '0px'); // 사진5개 가지고있는 컨테이너를 뷰포트가 지나면 헤더가 생긴다.
  return (
    <>
      {showDetailHeader && (
        <HeaderDetailBlock
          isClicked={isClicked}
          isScrolled={isScrolled}
          detailHeader={true}
        >
          <HeaderDetailTop
            isScrolled={isScrolled}
            isClicked={isClicked}
            detailHeader={true}
          />
          <HeaderDetailSearchNavContainer
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
        </HeaderDetailBlock>
      )}
      {!showDetailHeader && (
        <HeaderDetailScrolledContainer
          DetailHeaderRef={DetailHeaderRef}
          showButton={showButton}
          reviewRef={reviewRef}
          facilityRef={facilityRef}
        />
      )}
    </>
  );
};

export default HeaderDetail;
