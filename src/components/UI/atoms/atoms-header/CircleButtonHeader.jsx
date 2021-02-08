import React from 'react';
import styled, { css } from 'styled-components';

const CircleButtonBlock = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid rgb(113, 113, 113);
  color: rgb(113, 113, 113);
  background-color: transparent;
  font-size: 25px;
  cursor: pointer;

  ${(props) =>
    props.disabled &&
    css`
      border: 1px solid lightgray;
      color: lightgray;
    `}
`;

const CircleButton = ({ minus, onIncrease, onDecrease, disable }) => {
  return (
    <>
      {minus ? (
        <CircleButtonBlock onClick={onDecrease} disabled={disable}>
          <span>-</span>
        </CircleButtonBlock>
      ) : (
        <CircleButtonBlock onClick={onIncrease} disabled={disable}>
          <span>+</span>
        </CircleButtonBlock>
      )}
    </>
  );
};

export default CircleButton;
