import React from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

const ClickedSearchButtonBlock = styled.button`
  background: linear-gradient(
    to right,
    rgb(230, 30, 77) 0%,
    rgb(227, 28, 95) 50%,
    rgb(215, 4, 102) 100%
  );
  width: 90px;
  height: 48px;
  border-radius: 23px;
  border: 0;
  line-height: 48px;
  cursor: pointer;
  svg {
    vertical-align: sub;
    color: white;
    font-size: 18px;
  }
  .search-button-text {
    font-size: 16px;
    font-weight: 600;
    color: white;
  }
`;

const ClickedSearchButton = () => {
  return (
    <ClickedSearchButtonBlock>
      <BiSearch className="search-button-unit" />
      <span className="search-button-text"> 검색</span>
    </ClickedSearchButtonBlock>
  );
};

export default ClickedSearchButton;
