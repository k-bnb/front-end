import React from 'react';
import styled, { css } from 'styled-components';

const StyledTemp = styled.div`
  background: transparent;

  ${(props) =>
    props.modal &&
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
`;

function CommonTemp({ children, ...rest }) {
  return <StyledTemp {...rest}>{children}</StyledTemp>;
}

export default CommonTemp;
