import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import HeaderMain from '../../components/templates/templates-header/HeaderMain';
import HeaderList from '../../components/templates/templates-header/HeaderList';
import HeaderDetail from '../../components/templates/templates-header/HeaderDetail';
import { useSelector } from 'react-redux';
import SkipNavigation from '../../components/templates/templates-header/SkipNabigation';

const HeaderContainer = ({
  DetailHeaderRef,
  ImageContainerRef,
  reviewRef,
  facilityRef,
  modal,
  setModal,
  isOpen,
  setIsOpen,
  formState,
  setFormState,
  bookingInfoRef,
  isCalendarOpen,
  setIsCalendarOpen,
}) => {
  const history = useHistory();
  const match = useRouteMatch();

  useEffect(() => {
    console.log(history.location.pathname);
  }, []);

  // 어떤것을 선택했는가 상태를 바꿔주는 함수
  const { locationSearch, checkDateSearch, guestSearch } = useSelector(
    (state) => state.search.searchReq,
  );

  const [isScrolled, setIsScrolled] = useState(false); // scrollY값이 80이상이면 UI 변경
  const [isClicked, setIsClicked] = useState(false); // HeaderMainSearchNav가 클릭되면 스크롤된 상태에서 UI 원래대로 변경.
  const initialNavModalState = {
    location: false,
    checkIn: false,
    checkOut: false,
    guest: false,
  };
  const [navModalState, setNavModalState] = useState(initialNavModalState); // 조건검색 모달 4개 open 여부
  const [isClickedOutside, setIsClickedOutside] = useState(false); // 어두운 영역 클릭시 전체 조건 초기화

  const SearchTypeHandler = (searchType) => {
    setNavModalState({ ...initialNavModalState, [searchType]: true }); // 전달받은 타입값만 true로 설정.
  };

  // 조건을 입력할 경우 다음 칸으로 초점을 옮겨주는 함수, selectedType = 방금 조건 입력 완료한 검색조건 타입.
  const moveFocusNext = (selectedType) => {
    if (selectedType === 'location') SearchTypeHandler('checkIn');
    // 위치입력완료 -> 체크인 입력모달 오픈시킴
    else if (selectedType === 'checkIn') SearchTypeHandler('checkOut');
    // 체크인 입력 완료 -> 체크아웃 입력 모달 오픈시킴
    else if (selectedType === 'checkOut' && !checkDateSearch.checkIn)
      SearchTypeHandler('checkIn');
    // 체크아웃 입력 완료 & 체크인 스토어가 비어있을 경우 -> 체크인 입력 모달 오픈 시킴
    return;
  };

  // 클릭하면 nav bar가 다시 커지게 해주는 함수.
  const clickHandler = () => {
    // click하면 nav bar가 다시 커지도록 상태 바꿔주는 함수.
    setIsClicked(true);
  };

  useEffect(() => {
    const scrollHandler = () => {
      setIsClicked(false);

      if (window.scrollY >= 80) {
        setIsScrolled(true);
        return;
      }
      setIsScrolled(false);
    };

    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  useEffect(() => {
    if (isScrolled && isClicked) {
      setNavModalState({ ...initialNavModalState, location: true });
      return;
    }
  }, [isScrolled, isClicked]);

  return (
    <>
      <SkipNavigation />
      {history.location.pathname === '/' && (
        <HeaderMain
          isScrolled={isScrolled}
          setIsScrolled={setIsScrolled}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          navModalState={navModalState}
          setNavModalState={setNavModalState}
          initialNavModalState={initialNavModalState}
          isClickedOutside={isClickedOutside}
          setIsClickedOutside={setIsClickedOutside}
          SearchTypeHandler={SearchTypeHandler}
          locationSearch={locationSearch}
          checkDateSearch={checkDateSearch}
          guestSearch={guestSearch}
          moveFocusNext={moveFocusNext}
          clickHandler={clickHandler}
          formState={formState}
          setFormState={setFormState}
        />
      )}

      {history.location.pathname === '/rooms' && (
        <HeaderList
          isScrolled={isScrolled}
          setIsScrolled={setIsScrolled}
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
          formState={formState}
          setFormState={setFormState}
          modal={modal}
          setModal={setModal}
        />
      )}
      {match.params.roomId && (
        <HeaderDetail
          isScrolled={isScrolled}
          setIsScrolled={setIsScrolled}
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
          DetailHeaderRef={DetailHeaderRef}
          ImageContainerRef={ImageContainerRef}
          reviewRef={reviewRef}
          facilityRef={facilityRef}
          modal={modal}
          setModal={setModal}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          formState={formState}
          setFormState={setFormState}
          bookingInfoRef={bookingInfoRef}
          isCalendarOpen={isCalendarOpen}
          setIsCalendarOpen={setIsCalendarOpen}
        />
      )}
    </>
  );
};

export default HeaderContainer;
