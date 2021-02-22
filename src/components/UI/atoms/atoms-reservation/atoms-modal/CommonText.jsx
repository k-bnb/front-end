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

  ${(props) =>
    props.starName &&
    css`
      display: block;
      font-size: 18px;
      font-weight: 700;
      color: #484848;
      padding-left: 5px;
      margin: 10px 0;
    `}

  ${(props) =>
    props.reviewName &&
    css`
      display: block;
      font-size: 12px;
      font-weight: 600;
      color: rgb(113, 113, 113);
      margin-top: 5px;
    `}

  ${(props) =>
    props.reviewNameBold &&
    css`
      display: block;
      font-size: 13px;
      font-weight: 600;
      color: #a4a4a4;
      margin-bottom: 25px;
    `}
`;

function CommonText({ children, ...rest }) {
  return <StyledSpan {...rest}>{children}</StyledSpan>;
}

export default CommonText;
