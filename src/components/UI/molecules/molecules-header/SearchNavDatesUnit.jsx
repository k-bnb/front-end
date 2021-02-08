import styled from 'styled-components';
import React from 'react';
import CalendarModal from '../../../templates/templates-header/CalendarModal';
import SearchNavCheckInUnit from './SearchNavCheckInUnit';
import SearchNavCheckOutUnit from './SearchNavCheckOutUnit';

const SearchNavDatesUnitLi = styled.li`
  position: relative;
  cursor: pointer;
  width: 40%;
  ul {
    display: flex;
  }
  li {
    width: 50%;
  }
`;

const SearchNavDatesUnit = ({
  SearchTypeHandler,
  navModalState,
  setNavModalState,
  initialNavModalState,
}) => {
  return (
    <SearchNavDatesUnitLi>
      <ul>
        <SearchNavCheckInUnit
          SearchTypeHandler={SearchTypeHandler}
          navModalState={navModalState}
        ></SearchNavCheckInUnit>
        <SearchNavCheckOutUnit
          SearchTypeHandler={SearchTypeHandler}
          navModalState={navModalState}
        ></SearchNavCheckOutUnit>
      </ul>
      {(navModalState.checkIn || navModalState.checkOut) && (
        <CalendarModal
          SearchTypeHandler={SearchTypeHandler}
          setNavModalState={setNavModalState}
          initialNavModalState={initialNavModalState}
          navModalState={navModalState}
        />
      )}
    </SearchNavDatesUnitLi>
  );
};

export default SearchNavDatesUnit;
