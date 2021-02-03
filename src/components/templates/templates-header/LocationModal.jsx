import React from 'react';
import styled, { css } from 'styled-components';

const StyledLocModal = styled.div`
  position: absolute;
  top: 165px;
  left: 40vw;
  transform: translate(-50%, 0);
  width: 400px;
  height: 400px;
  border: 1px solid lightgray;
  margin: 0 auto;
  border-radius: 40px;
  background-color: white;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.6) !important;

  ${(props) =>
    props.isScrolled &&
    props.isClicked &&
    css`
      top: 180px;
    `}
`;

const LocationModal = ({ isScrolled, isClicked }) => {
  return (
    <StyledLocModal isScrolled={isScrolled} isClicked={isClicked}>
      Location Modal
    </StyledLocModal>
  );
};

export default LocationModal;
