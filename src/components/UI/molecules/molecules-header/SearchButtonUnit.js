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

const SearchButtonUnit = ({ locationSearch, dispatch, SearchTypeHandler }) => {
  const history = useHistory();
  const buttonRef = useRef();

  return (
    <GuestNumberUnitOuterBlock className="search-button-unit">
      <SearchButton
        onClick={() => {
          // 위치정보값이 비어있을 경우는, 위치정보 모달창을 띄워주고 검색이 되는것을 막는다.
          if (!locationSearch.latitude) {
            SearchTypeHandler('location');
            return;
          }
          history.push('/rooms');
        }}
      />
    </GuestNumberUnitOuterBlock>
  );
};

export default SearchButtonUnit;
