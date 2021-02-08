import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import CalendarNew from '../../../calendar/CalendarNew';
import '../../../calendar/CalendarTemplate.css';
import { useClickOutside } from '../../../lib/useClickOutside';

const StyledCalModal = styled.div`
  background-color: red;
  position: absolute;
  top: 0;
  left: 0;
  height: 200px;
  width: 100vw;
`;

const CalendarModal = ({
  SearchTypeHandler,
  navModalState,
  setNavModalState,
  initialNavModalState,
}) => {
  const [selected, setSelected] = useState(false);
  console.log('상태', navModalState);

  return <CalendarNew setNavModalState={setNavModalState} />;
};

export default CalendarModal;
