import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import ClickedSearchButton from '../../atoms/atoms-header/ClickedSearchButton';

const GuestNumberUnitOuterBlock = styled.div`
  cursor: pointer;
  width: auto;
  padding-top: 10px;
  padding-right: 10px;
  background-color: #fff;
  border: 0;
  border-radius: 30px;
  background-color: transparent;
  position: relative;
`;

const SearchButtonUnit = ({
  locationSearch,
  dispatch,
  SearchTypeHandler,
  searchBtnRef,
  navModalState,
  setNavModalState,
}) => {
  const history = useHistory();

  return (
    <GuestNumberUnitOuterBlock className="search-button-unit">
      <ClickedSearchButton
        isModalOpen={
          navModalState.location ||
          navModalState.checkIn ||
          navModalState.checkOut ||
          navModalState.guest
        }
        SearchTypeHandler={SearchTypeHandler}
        locationSearch={locationSearch}
        history={history}
      />
    </GuestNumberUnitOuterBlock>
  );
};

export default SearchButtonUnit;
