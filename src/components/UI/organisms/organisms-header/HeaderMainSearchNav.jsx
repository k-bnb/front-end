import React from 'react';
import styled, { css } from 'styled-components';
import SearchButton from '../../atoms/atoms-header/SearchButton';
import Text from '../../atoms/atoms-header/Text';
import SearchNavDatesUnit from '../../molecules/molecules-header/SearchNavDatesUnit';
import SearchNavGuestUnit from '../../molecules/molecules-header/SearchNavGuestUnit';
import SearchNavLocationUnit from '../../molecules/molecules-header/SearchNavLocationUnit';

const HeaderMainSearchNavBlock = styled.div`
  height: 66px;
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  border-radius: 30px;
  background-color: white;
  transition: 0.2s ease;
  white-space: nowrap;
  z-index: -1;
  ul {
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
  }
  ${(props) =>
    props.isScrolled &&
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
  /* scroll 된 상태에서 nav bar 클릭하는 경우 */
  ${(props) =>
    props.isClicked &&
    props.isScrolled &&
    css`
      height: 66px;
      width: 100%;
      max-width: 850px;
      margin: 0 auto;
      border-radius: 30px;
      background-color: white;
      transition: 0.2s ease;
      border: 1px solid lightgray;

      ul {
        height: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
      }
    `}
`;

const HeaderMainSearchNav = ({
  isScrolled,
  isClicked,
  navModalState,
  setNavModalState,
  SearchTypeHandler,
  clickHandler,
  moveFocusNext,
}) => {
  return (
    <>
      <HeaderMainSearchNavBlock
        isScrolled={isScrolled}
        isClicked={isClicked}
        onClick={clickHandler}
      >
        {(!isScrolled || isClicked) && (
          <ul>
            <SearchNavLocationUnit
              SearchTypeHandler={SearchTypeHandler}
              navModalState={navModalState}
              setNavModalState={setNavModalState}
              moveFocusNext={moveFocusNext}
            />
            <SearchNavDatesUnit
              SearchTypeHandler={SearchTypeHandler}
              navModalState={navModalState}
              setNavModalState={setNavModalState}
              moveFocusNext={moveFocusNext}
            />
            <SearchNavGuestUnit
              SearchTypeHandler={SearchTypeHandler}
              navModalState={navModalState}
              setNavModalState={setNavModalState}
            />
          </ul>
        )}
        {isScrolled && !isClicked && (
          <div className="isScrolled">
            <Text bold noPadding>
              검색 시작하기
            </Text>
            <SearchButton isScrolled={isScrolled} />
          </div>
        )}
      </HeaderMainSearchNavBlock>
    </>
  );
};

export default HeaderMainSearchNav;
