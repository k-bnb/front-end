import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import HeaderMain from '../../components/templates/templates-header/HeaderMain';
import HeaderList from '../../components/templates/templates-header/HeaderList';

const HeaderContainer = (props) => {
  const history = useHistory();

  const [isScrolled, setIsScrolled] = useState(false); // scrollY값이 80이상이면 UI 변경
  const [isClicked, setIsClicked] = useState(false); // HeaderMainSearchNav가 클릭되면 스크롤된 상태에서 UI 원래대로 변경.
  const initialNavModalState = {
    location: false,
    checkIn: false,
    checkOut: false,
    guest: false,
  };
  const [navModalState, setNavModalState] = useState(initialNavModalState);
  const [isClickedOutside, setIsClickedOutside] = useState(false);

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

  const headerRef = useRef();
  useEffect(() => {
    const clickOutsideHeader = (e) => {
      if (headerRef.current && headerRef.current.contains(e.target)) {
        return;
      }
      if (!isClicked && isScrolled) {
        setIsClicked(false); // 헤더 바깥 영역이 클릭된 상태로 전환.
      }
      // if (isClicked && isScrolled) {
      //   // setIsClicked()
      // }
    };
    clickOutsideHeader();
  });

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
          ref={headerRef}
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
    </>
  );
};

export default HeaderContainer;
