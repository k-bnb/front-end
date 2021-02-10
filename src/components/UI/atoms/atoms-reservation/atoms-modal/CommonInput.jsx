import React from 'react';
import styled, { css } from 'styled-components';

const StyledInput = styled.input`
  // input 기본 setting
  padding: 0;
  border: none;
  outline: none;
  background: transparent;
  width: 100%;

  ${(props) =>
    props.date &&
    css`
      display: inline;
      font-size: 14px;
      font-weight: 400;
      color: #222;
      margin-top: 3px;
    `}
`;

function CommonInput({ scheduleDate, ...rest }) {
  return <StyledInput {...rest} value={scheduleDate} />;
}

export default CommonInput;
