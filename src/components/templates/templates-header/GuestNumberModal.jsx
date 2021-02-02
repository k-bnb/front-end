import React from 'react';
import styled from 'styled-components';

const StyledGuestModal = styled.div`
  position: absolute;
  top: 165px;
  left: 59%;
  transform: translate(-50%, 0);
  width: 400px;
  height: 400px;
  border: 1px solid black;
  margin: 0 auto;
  border-radius: 40px;
`;

const GuestNumberModal = () => {
  return <StyledGuestModal>GuestNumber Modal</StyledGuestModal>;
};

export default GuestNumberModal;
