import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import {
  destinationInput,
  specificInputClear,
} from '../../../../modules/search';
import LocationModal from '../../../templates/templates-header/LocationModal';
import RemoveButton from '../../../templates/templates-header/RemoveButton';
import SearchNavLocationUnitLabel from '../../atoms/atoms-header/SearchNavLocationUnitLabel';

const SearchNavLocationUnitLi = styled.li`
  position: relative;
  color: black;
  width: 35%;
  border-radius: 30px;
  &:hover {
    background-color: rgb(235, 231, 231);
  }

  &:hover input {
    background-color: transparent;
  }

  ${(props) =>
    props.navModalState.location &&
    css`
      background-color: rgb(235, 231, 231);
    `}
`;
const SearchNavLocationUnit = ({
  navModalState,
  SearchTypeHandler,
  setNavModalState,
}) => {
  const dispatch = useDispatch();
  const locationSearch = useSelector(
    ({ search: { searchReq } }) => searchReq.locationSearch,
  );
  const destinationName = useSelector(
    ({ search: { destinationName } }) => destinationName,
  );

  return (
    <SearchNavLocationUnitLi navModalState={navModalState}>
      <SearchNavLocationUnitLabel
        SearchTypeHandler={SearchTypeHandler}
        locationSearch={locationSearch}
        destinationName={destinationName}
      />
      {!!destinationName && navModalState.location && (
        <RemoveButton
          location
          onClick={() => {
            dispatch(specificInputClear('locationSearch')); // 위치정보 초기화
            dispatch(destinationInput('')); // destinationInput초기화
          }}
        />
      )}
      {navModalState.location && !destinationName && (
        <LocationModal
          dispatch={dispatch}
          SearchTypeHandler={SearchTypeHandler}
          setNavModalState={setNavModalState}
        />
      )}
    </SearchNavLocationUnitLi>
  );
};

export default SearchNavLocationUnit;
