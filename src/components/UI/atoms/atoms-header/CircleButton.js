import React from 'react';
import styled from 'styled-components';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

const CircleButtonBlock = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid rgb(113, 113, 113);
  color: rgb(113, 113, 113);
  background-color: transparent;
  font-size: 25px;
`;

const CircleButton = ({ minus, ...rest }) => {
  return (
    <CircleButtonBlock {...rest}>
      {minus ? <span>-</span> : <span>+</span>}
    </CircleButtonBlock>
  );
};

export default CircleButton;
