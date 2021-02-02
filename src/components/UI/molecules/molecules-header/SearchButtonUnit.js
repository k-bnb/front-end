import React from 'react';
import SearchButton from '../../atoms/atoms-header/SearchButton';
import styled from 'styled-components';

const GuestNumberUnitOuterBlock = styled.div`
  cursor: pointer;
  width: auto;
  padding-top: 10px;
  padding-right: 10px;
  background-color: #fff;
  border: 0;
`;

const SearchButtonUnit = () => {
  return (
    <GuestNumberUnitOuterBlock>
      <SearchButton />
    </GuestNumberUnitOuterBlock>
  );
};

export default SearchButtonUnit;
