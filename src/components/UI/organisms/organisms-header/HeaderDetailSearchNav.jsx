import React from 'react';
import styled, { css } from 'styled-components';
import SearchButton from '../../atoms/atoms-header/SearchButton';
import Text from '../../atoms/atoms-header/Text';
import SearchNavDatesUnit from '../../molecules/molecules-header/SearchNavDatesUnit';
import SearchNavGuestUnit from '../../molecules/molecules-header/SearchNavGuestUnit';
import SearchNavLocationUnit from '../../molecules/molecules-header/SearchNavLocationUnit';

const HeaderDetailSearchNavBlock = styled.div`
  height: 66px;
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  border-radius: 30px;
  transition: 0.2s ease;
  white-space: nowrap;
  z-index: 9999;
  ul {
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
  }

  ${(props) =>
    !props.isClicked &&
    css`
      padding: 8px 8px 14px 15px;
      width: 300px;
      height: 48px;
      border: 1px solid lightgray;
      transform: translateY(-65px);

      &:hover {
        cursor: pointer;
        box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
      }

      .isScrolled {
        display: flex;
        justify-content: space-between;
      }
      span {
        line-height: 30px;
        margin-left: 10px;
      }
    `}

  /* nav bar 클릭하는 경우 */
  ${(props) =>
    props.isClicked &&
    css`
      height: 66px;
      width: 100%;
      max-width: 850px;
      margin: 0 auto;
      border-radius: 30px;
      background-color: white;
      transition: 0.2s ease;
      border: 1px solid lightgray;
      transform: translateY(-100px);

      ul {
        height: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
      }
    `}
`;

const HeaderDetailSearchNav = ({
  isScrolled,
  isClicked,
  navModalState,
  setNavModalState,
  SearchTypeHandler,
  clickHandler,
}) => {
  return (
    <>
      <HeaderDetailSearchNavBlock
        isScrolled={isScrolled}
        isClicked={isClicked}
        onClick={clickHandler}
      >
        {!isClicked && (
          <div className="isScrolled">
            <Text bold noPadding>
              검색 시작하기
            </Text>
            <SearchButton isScrolled={true} />
          </div>
        )}
        {isClicked && (
          <ul>
            <SearchNavLocationUnit
              SearchTypeHandler={SearchTypeHandler}
              navModalState={navModalState}
              setNavModalState={setNavModalState}
            />
            <SearchNavDatesUnit
              SearchTypeHandler={SearchTypeHandler}
              navModalState={navModalState}
              setNavModalState={setNavModalState}
            />
            <SearchNavGuestUnit
              SearchTypeHandler={SearchTypeHandler}
              navModalState={navModalState}
              setNavModalState={setNavModalState}
            />
          </ul>
        )}
      </HeaderDetailSearchNavBlock>
    </>
  );
};

export default HeaderDetailSearchNav;
