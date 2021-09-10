import React from 'react';
import styled, { css } from 'styled-components';
import { BiSearch } from 'react-icons/bi';

const SearchButtonBlock = styled.button`
  background: linear-gradient(
    to right,
    rgb(230, 30, 77) 0%,
    rgb(227, 28, 95) 50%,
    rgb(215, 4, 102) 100%
  );
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  svg {
    color: white;
    font-size: 18px;
  }

  ${(props) =>
    (props.isScrolled || props.rooms) &&
    css`
      width: 32px;
      height: 32px;
      padding: 8px;
      svg {
        line-height: 15px;
        font-size: 16px;
      }
    `}
`;

const SearchButton = ({ isScrolled, onClick, rooms, searchBtnRef }) => {
  return (
    <>
      <SearchButtonBlock
        isScrolled={isScrolled}
        className="search-button-unit"
        onClick={onClick}
        rooms={rooms}
        ref={searchBtnRef}
      >
        <BiSearch className="search-button-unit" onClick={onClick} />
      </SearchButtonBlock>
    </>
  );
};

export default SearchButton;
