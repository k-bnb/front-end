import React from 'react';
import styled from 'styled-components';
import LocationSearchInput from './LocationSearchInput';
import Text from './Text';

const LabelBlock = styled.div`
  width: 100%;

  .location-label {
    cursor: pointer;
    border-radius: 30px;
    padding: 14px 32px;
    display: block;

    span {
      margin-left: 2px;
    }
  }
`;
const SearchNavLocationUnitLabel = ({
  SearchTypeHandler,
  locationSearch,
  destinationName,
  setNavModalState,
  moveFocusNext,
}) => {
  return (
    <LabelBlock>
      <label className="location-label" htmlFor="locationInput">
        <Text small bold>
          위치
        </Text>
        <LocationSearchInput
          SearchTypeHandler={SearchTypeHandler}
          setNavModalState={setNavModalState}
          moveFocusNext={moveFocusNext}
        />
      </label>
    </LabelBlock>
  );
};

export default SearchNavLocationUnitLabel;
