import React from 'react';
import styled, { css } from 'styled-components';

const StyledSpan = styled.span`
  // 공통 로직
  font-size: 16px;

  ${(props) =>
    props.schedule &&
    css`
      font-size: 10px;
      font-weight: bold;
      color: rgb(34, 34, 34);
    `}

  ${(props) =>
    props.day &&
    css`
      display: block;
      padding-left: 15px;
      font-size: 22px;
      font-weight: 600;
    `}
`;

function CommonText({ children, ...rest }) {
  return <StyledSpan {...rest}>{children}</StyledSpan>;
}

export default CommonText;
