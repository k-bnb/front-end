import React from 'react';
import styled, { css } from 'styled-components';

const RemoveButtonBlock = styled.button`
  position: absolute;
  top: 50%;
  right: 60px;
  transform: translate(-50%, -50%);
  width: 22px;
  height: 22px;
  line-height: 18px;
  text-align: center;
  border-radius: 50%;
  background-color: lightgray;
  color: black;
  font-size: 17px;
  border: 0;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }

  ${(props) =>
    props.guest &&
    css`
      top: 50%;
      right: 95px;
      transform: translate(-50%, -50%);
    `}
  ${(props) =>
    props.location &&
    css`
      top: 50%;
      left: 240px;
      transform: translate(-50%, -50%);
    `}
      ${(props) =>
    props.checkInDate &&
    css`
      top: 50%;
      left: 135px;
      transform: translate(-50%, -50%);
    `}
      ${(props) =>
    props.checkOutDate &&
    css`
      top: 50%;
      right: 5px;
      transform: translate(-50%, -50%);
    `}
`;

const RemoveButton = (props) => {
  return <RemoveButtonBlock {...props}>x</RemoveButtonBlock>;
};

export default RemoveButton;
