import React from 'react';
import SearchInput from '../../atoms/atoms-header/SearchInput';
import styled, { css } from 'styled-components';
import Text from '../../atoms/atoms-header/Text';
import LocationSearchInput from '../../atoms/atoms-header/LocationSearchInput';

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
  ${(props) =>
    props.condition &&
    css`
      border-radius: 32px;
      background: linear-gradient(145deg, #f0f0f0, #cacaca);
      box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
    `}
`;

const SearchUnit = ({ onClick, condition }) => {
  return (
    <>
      <SearchUnitOuterBlock onClick={onClick} condition={condition}>
        <SearchUnitBlock>
          <Text small bold noPadding>
            위치
          </Text>
          <LocationSearchInput />
        </SearchUnitBlock>
      </SearchUnitOuterBlock>
    </>
  );
};

export default SearchUnit;
