import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import CalendarNew from '../../../calendar/CalendarNew';
import '../../../calendar/CalendarTemplate.css';

const StyledCalModal = styled.div`
  position: absolute;
  top: 98px;
  left: 26%;
  width: 1px;
  height: 1px;
  border: 1px solid lightgray;
  margin: 0 auto;
  border-radius: 40px;
  background-color: white;
  ${(props) =>
    props.isScrolled &&
    props.isClicked &&
    css`
      top: 115px;
    `}
`;

const CalendarModal = ({
  isScrolled,
  isClicked,
  setIsClicked,
  setCondition,
  initialCondition,
}) => {
  const clickOutSide = (e) => {
    console.log(e.target.matches('.calendar-modal'));
    if (e.target.matches('.calendar-modal')) {
      return;
    }
    console.log('djksdjf');
    setIsClicked(false);
    // setCondition(initialCondition);
    // setCondition({ ...initialCondition });
  };

  useEffect(() => {
    window.addEventListener('click', clickOutSide);

    return () => {
      window.removeEventListener('click', clickOutSide);
    };
  }, []);

  return (
    <StyledCalModal
      isScrolled={isScrolled}
      isClicked={isClicked}
      className="calendar-modal"
    >
      <CalendarNew />
    </StyledCalModal>
  );
};

export default CalendarModal;
