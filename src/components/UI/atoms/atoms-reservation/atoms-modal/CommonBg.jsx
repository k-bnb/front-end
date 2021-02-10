import React from 'react';
import styled, { css } from 'styled-components';

const StyledCommonBg = styled.div`
  background: transparent;

  ${(props) =>
    props.modalBg &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
    `}
`;

function CommonBg({ children, ...rest }) {
  return <StyledCommonBg {...rest}>{children}</StyledCommonBg>;
}

export default CommonBg;
