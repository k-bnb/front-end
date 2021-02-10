import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Logo from '../../UI/atoms/atoms-header/Logo';
import ProfileButton from '../../UI/atoms/atoms-header/ProfileButton';
import Text from '../../UI/atoms/atoms-header/Text';
import SearchNavbarList from '../../UI/organisms/organisms-header/SearchNavbarList';

const HeaderListBlock = styled.header`
  text-align: center;
  padding: 0;
  background: pink;
  width: 100%;
  height: 80px;
  position: fixed;
  transition-duration: 0.3s;
  z-index:100;

  h1 {
    position: absolute;
    top: 50%;
    left: 3%;
    transform: translateY(-50%);
    margin: 0;
  }
  & > button {
    position: absolute;
    top: 50%;
    right: 3%;
    transform: translateY(-50%);
    margin: 0;
  }
  & > nav {
    position: absolute;
    height: 48px;
    top: -5%;
    left: 50%;
    transform: translateX(-50%);
    button {
      width: 32px;
      height: 32px;
      font-size: 12px;
      position: absolute;
      right: 2%;
    }
  }
`;
const StyledText = styled(Text)`
  display: inline-block;
  padding: 5px 10px;
  &:first-child {
    margin-left: 10px;
  }
  & + & {
    border-left: 1px solid lightgray;
  }
  ${(props) =>
    props.wide &&
    css`
      width: 135px;
    `}
`;

const HeaderList = () => {
  const [scroll, setScroll] = useState(false);

  const scrollFunc = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollFunc);
    return () => {
      window.removeEventListener('scroll', scrollFunc);
    };
  }, []);

  const StyledSearchNavbarList = styled(SearchNavbarList)``;

  return (
    <HeaderListBlock isScrolled={scroll}>
      <Logo />
      <ProfileButton />
      <StyledSearchNavbarList>
        <StyledText bold>근처 추천 장소</StyledText>
        <StyledText bold>날짜 입력</StyledText>
        <StyledText wide>게스트 추가</StyledText>
      </StyledSearchNavbarList>
    </HeaderListBlock>
  );
};

export default HeaderList;
