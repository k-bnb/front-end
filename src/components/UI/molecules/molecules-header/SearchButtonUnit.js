import React from 'react';
import SearchButton from '../../atoms/atoms-header/SearchButton';
import styled, { css } from 'styled-components';

const GuestNumberUnitOuterBlock = styled.div`
  cursor: pointer;
  width: auto;
  padding-top: 10px;
  padding-right: 10px;
  background-color: #fff;
  border: 0;
  border-radius: 30px;
  background-color: transparent;
`;

const SearchButtonUnit = ({ isClicked }) => {
  return (
    <GuestNumberUnitOuterBlock className="search-button-unit">
      <SearchButton isClicked={isClicked} />
    </GuestNumberUnitOuterBlock>
  );
};

export default SearchButtonUnit;
