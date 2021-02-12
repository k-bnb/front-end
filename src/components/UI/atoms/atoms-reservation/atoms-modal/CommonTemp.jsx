import React from 'react';
import styled, { css } from 'styled-components';

const StyledTemp = styled.div`
  background: transparent;

  ${(props) =>
    props.dateModal &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 660px;
      min-height: 500px;
      background: #fff;
      border-radius: 16px;
      padding: 16px 28px;
    `}

  ${(props) =>
    props.guestModal &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 365px;
      min-height: 300px;
      display: flex;
      flex-direction: column;
      background: #fff;
      border-radius: 12px;
    `}
  
  ${(props) =>
    props.comfirmModal &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      min-height: 300px;
      display: flex;
      flex-direction: column;
      background: #fff;
      box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
      padding: 50px 150px;
    `}
`;

function CommonTemp({ children, ...rest }) {
  return <StyledTemp {...rest}>{children}</StyledTemp>;
}

export default CommonTemp;
