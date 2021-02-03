import React from 'react';
import SearchInput from '../../atoms/atoms-header/SearchInput';
import styled from 'styled-components';
import Text from '../../atoms/atoms-header/Text';

const SearchUnitBlock = styled.div`
  display: inline-block;
  box-sizing: border-box;
`;

const SearchUnitOuterBlock = styled.div`
  cursor: pointer;
  text-align: left;
  min-width: 230px;
  padding: 15px 0 15px 25px;
  background-color: #fff;
  border: 0;
  & > div {
    padding-left: 10px;
  }
  &:hover > div {
    border: 0;
  }
  &:hover {
    border-radius: 32px;
    background-color: lightgray;
  }
`;

const SearchUnit = ({ onClick, condition }) => {
  return (
    <>
      <SearchUnitOuterBlock onClick={onClick}>
        <SearchUnitBlock>
          <Text small bold noPadding>
            위치
          </Text>
          <SearchInput />
        </SearchUnitBlock>
      </SearchUnitOuterBlock>
    </>
  );
};

export default SearchUnit;
