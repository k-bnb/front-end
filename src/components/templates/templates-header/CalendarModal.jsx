import React from 'react';
import styled, { css } from 'styled-components';

const StyledCalModal = styled.div`
  position: absolute;
  top: 165px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 740px;
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

const CalendarModal = ({ isScrolled, isClicked }) => {
  return (
    <StyledCalModal isScrolled={isScrolled} isClicked={isClicked}>
      Calendar Modal
    </StyledCalModal>
  );
};

export default CalendarModal;
