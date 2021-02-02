import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Logo from '../../UI/atoms/atoms-header/Logo';
import ProfileButton from '../../UI/atoms/atoms-header/ProfileButton';
import SearchNavbarDetail from '../../UI/organisms/organisms-header/SearchNavbarDetail';

const HeaderDetailBlock = styled.header`
  text-align: center;
  padding: 0;
  background: pink;
  width: 100%;
  height: 80px;
  position: fixed;
  transition-duration: 0.3s;

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

const HeaderDetail = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  }, []);

  return (
    <HeaderDetailBlock isScrolled={scroll}>
      <Logo />
      <ProfileButton />
      <SearchNavbarDetail>검색 시작하기</SearchNavbarDetail>
    </HeaderDetailBlock>
  );
};

export default HeaderDetail;
