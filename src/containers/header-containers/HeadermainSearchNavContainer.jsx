import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderMainSearchNav from '../../components/UI/organisms/organisms-header/HeaderMainSearchNav';

const HeadermainSearchNavContainer = ({
  isScrolled,
  isClicked,
  setIsClicked,
  navModalState,
  setNavModalState,
  initialNavModalState,
}) => {
  // 어떤것을 선택했는가 상태를 바꿔주는 함수
  const SearchTypeHandler = (searchType) => {
    setNavModalState({ ...initialNavModalState, [searchType]: true }); // 전달받은 타입값만 true로 설정.
  };

  // 클릭하면 nav bar가 다시 커지게 해주는 함수.
  const clickHandler = () => {
    // click하면 nav bar가 다시 커지도록 상태 바꿔주는 함수.
    setIsClicked(true);
  };

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
    />
  );
};

export default HeadermainSearchNavContainer;
