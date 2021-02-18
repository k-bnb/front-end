import React, { useState } from 'react';
// import styled, { css } from 'styled-components';
import CalendarNew from '../../../calendar/CalendarNew';

// const StyledCalModal = styled.div`
//   ${(props) => props.detail && css``}
//   background-color: red;
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 200px;
//   width: 100vw;
// `;

const CalendarModal = ({ navModalState, setNavModalState, moveFocusNext }) => {
  const [selected, setSelected] = useState(false);

  return (
    <CalendarNew
      setNavModalState={setNavModalState}
      moveFocusNext={moveFocusNext}
    />
  );
};

export default CalendarModal;
