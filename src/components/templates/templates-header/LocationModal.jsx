import React from 'react';
import styled from 'styled-components';

const StyledLocModal = styled.div`
  position: absolute;
  top: 165px;
  left: 40vw;
  transform: translate(-50%, 0);
  width: 400px;
  height: 400px;
  border: 1px solid black;
  margin: 0 auto;
  border-radius: 40px;
`;

const LocationModal = () => {
  return <StyledLocModal>Location Modal</StyledLocModal>;
};

export default LocationModal;
