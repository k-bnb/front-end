import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import HeaderMain from '../../components/templates/templates-header/HeaderMain';
import HeaderList from '../../components/templates/templates-header/HeaderList';
import HeaderDetail from '../../components/templates/templates-header/HeaderDetail';

const HeaderContainer = (props) => {
  const history = useHistory();

  console.log(history);

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
  const [isScrolledDetail, setIsScrolledDetail] = useState({
    resToFixed: false, // 헤더가 고정에서 fixed로 프로퍼티 수정
    renderButton: false, // 예약하기 버튼이 보인다.
  }); // detail 페이지에서 사진 하단부 까지 스크롤되면 헤더를 교체해준다.

  useEffect(() => {
    const scrollHandler = () => {
      console.log(window.scrollY);
      setIsClicked(false);

      // detail 페이지 일 경우에만 실행되는 조건문, 513 <= scroll <= 1127 -> resToFixed만 true
      if (history.location.pathname === '/detail' && window.scrollY >= 513) {
        setIsScrolledDetail(true);
      } else if (
        history.location.pathname === '/detail' &&
        window.scrollY < 513
      ) {
        setIsScrolledDetail(false);
      }

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
        />
      )}
      {history.location.pathname === '/detail' && (
        <HeaderDetail
          isScrolled={isScrolled}
          setIsScrolled={setIsScrolled}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          navModalState={navModalState}
          setNavModalState={setNavModalState}
          initialNavModalState={initialNavModalState}
          isScrolledDetail={isScrolledDetail}
          setIsScrolledDetail={setIsScrolledDetail}
        />
      )}
    </>
  );
};

export default HeaderContainer;
