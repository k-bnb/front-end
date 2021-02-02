import React from 'react';
import styled from 'styled-components';

const StyledCalModal = styled.div`
  position: absolute;
  top: 165px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 740px;
  height: 400px;
  border: 1px solid black;
  margin: 0 auto;
  border-radius: 40px;
`;

const CalendarModal = () => {
  return <StyledCalModal>Calendar Modal</StyledCalModal>;
};

export default CalendarModal;
