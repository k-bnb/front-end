import React from 'react';
import styled from 'styled-components';
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from '../../molecules/molecules-detail/react-icons/ai';

const CircleButtonBlock = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid rgb(113, 113, 113);
  color: rgb(113, 113, 113);
`;

const CircleButton = ({ minus }) => {
  return (
    <CircleButtonBlock>
      {minus ? <span>-</span> : <span>+</span>}
    </CircleButtonBlock>
  );
};

export default CircleButton;
