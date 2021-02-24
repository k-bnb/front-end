import React from 'react';
// import styled, { css } from 'styled-components';
import CalendarNew from '../../../calendar/CalendarNew';

const CalendarModal = ({ navModalState, setNavModalState, moveFocusNext }) => {
  // const [selected, setSelected] = useState(false);

  return (
    <CalendarNew
      setNavModalState={setNavModalState}
      moveFocusNext={moveFocusNext}
    />
  );
};

export default CalendarModal;
