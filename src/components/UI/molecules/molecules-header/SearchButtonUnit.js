import React, { useRef } from 'react';
import SearchButton from '../../atoms/atoms-header/SearchButton';
import styled, { css } from 'styled-components';
import { useHistory } from 'react-router-dom';

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

const SearchButtonUnit = (props) => {
  const history = useHistory();
  const buttonRef = useRef();

  return (
    <GuestNumberUnitOuterBlock className="search-button-unit">
      <SearchButton
        onClick={() => {
          history.push('/rooms');
        }}
      />
    </GuestNumberUnitOuterBlock>
  );
};

export default SearchButtonUnit;
