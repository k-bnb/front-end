import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import ProfileButton from '../../UI/atoms/atoms-header/ProfileButton';
import Logo from '../../UI/atoms/atoms-header/Logo';
import SearchNavbar from '../../UI/organisms/organisms-header/SearchNavbar';
import Text from '../../UI/atoms/atoms-header/Text';

const HeaderMainBlock = styled.header`
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
    top: 75%;
    left: 50%;
    transform: translateX(-50%);
  }
  .accomodation {
    position: absolute;
    display: inline-block;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0 8px 0;
  }
  .accomodation::after {
    content: '';
    display: inline-block;
    width: 100%;
    height: 3px;
    background-color: white;
  }
  ${(props) =>
    props.isScrolled &&
    css`
      background: white;
      h1 {
        color: black;
      }
      span {
        color: black;
      }
      nav {
        top: 0%;
        border: 1px solid lightgray;
      }
    `}
  ${(props) =>
    props.isClicked &&
    css`
      nav {
        position: absolute;
        top: 75%;
        left: 50%;
        transform: translateX(-50%);
      }
      ${(props) =>
        props.isClicked &&
        props.isScrolled &&
        css`
          .accomodation {
            color: black;
          }
        `}
    `}
`;

const HeaderMain = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const initialCondition = {
    location: false,
    checkIn: false,
    checkOut: false,
    guestNum: false,
  };
  const [condition, setCondition] = useState(initialCondition); // 조건 중 네 가지 하나라도 열려있으면 검색 버튼 병경

  const onClickHandler = () => {
    console.log('click');
    if (!isClicked && isScrolled) {
      setIsClicked(true);
    }
  };

  useEffect(() => {
    window.onscroll = () => {
      setIsClicked(false);
      console.log(window.scrollY);
      if (window.scrollY >= 80) {
        setCondition(initialCondition);
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      return;
    };
  }, []);

  return (
    <HeaderMainBlock isScrolled={isScrolled} isClicked={isClicked}>
      {(isClicked || !isScrolled) && (
        <Text className="accomodation" bold>
          숙소
        </Text>
      )}
      <Logo />
      <ProfileButton />
      <SearchNavbar
        initialCondition={initialCondition}
        isScrolled={isScrolled}
        isClicked={isClicked}
        onClickHandler={onClickHandler}
        condition={condition}
        setCondition={setCondition}
      />
    </HeaderMainBlock>
  );
};

export default HeaderMain;
