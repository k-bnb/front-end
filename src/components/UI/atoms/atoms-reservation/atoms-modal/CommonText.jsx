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

  ${(props) =>
    props.guestTitle &&
    css`
      font-size: 22px;
      font-weight: 800;
      color: rgba(34, 34, 34, 0.8);
    `}

  ${(props) =>
    props.guestLimitInfo &&
    css`
      font-size: 12px;
      line-height: 16px;
      color: #484848;
    `}

  ${(props) =>
    props.furniture &&
    css`
      display: block;
      font-size: 14px;
      padding-left: 15px;
      padding-top: 10px;
      color: rgb(113, 113, 113);
    `}
`;

function CommonText({ children, ...rest }) {
  return <StyledSpan {...rest}>{children}</StyledSpan>;
}

export default CommonText;
