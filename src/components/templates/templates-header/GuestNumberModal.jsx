import React from 'react';
import styled, { css } from 'styled-components';

const StyledGuestModal = styled.div`
  position: absolute;
  top: 165px;
  left: 59%;
  transform: translate(-50%, 0);
  width: 400px;
  height: 400px;
  border: 1px solid lightgray;
  margin: 0 auto;
  border-radius: 40px;
  background-color: white;

  ${(props) =>
    props.isScrolled &&
    props.isClicked &&
    css`
      top: 180px;
    `}
`;

const GuestNumberModal = ({ isScrolled, isClicked }) => {
  return (
    <StyledGuestModal isScrolled={isScrolled} isClicked={isClicked}>
      GuestNumber Modal
    </StyledGuestModal>
  );
};

export default GuestNumberModal;
