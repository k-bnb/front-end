import React from 'react';
import styled, { css } from 'styled-components';

const TextBlock = styled.span`
  padding: 10px 12px 10px 0;
  font-size: 14px;
  line-height: 16px;

  ${(props) =>
    props.white &&
    css`
      color: white;
    `}

  ${(props) =>
    props.small &&
    css`
      font-size: 12px;
    `}

  ${(props) =>
    props.bold &&
    css`
      font-weight: 600;
    `}

    ${(props) =>
    props.gray &&
    css`
      color: gray;
    `}

    ${(props) =>
    props.big &&
    css`
      font-size: 16px;
    `}

    ${(props) =>
    props.bigger &&
    css`
      font-size: 20px;
    `}

    ${(props) =>
    props.middlebold &&
    css`
      font-weight: 500;
    `}
    ${(props) =>
    props.noPadding &&
    css`
      padding: 0;
    `}

    ${(props) =>
    props.block &&
    css`
      display: block;
    `}
    ${(props) =>
    props.after &&
    props.black &&
    css`
      position: relative;
      &::after {
        content: '';
        display: inline-block;
        width: 17px;
        height: 3px;
        position: absolute;
        top: 25px;
        left: 4px;
        background-color: black;
      }
    `}

    ${(props) =>
    props.after &&
    props.white &&
    css`
      position: relative;
      &::after {
        content: '';
        display: inline-block;
        width: 17px;
        height: 3px;
        position: absolute;
        top: 25px;
        left: 4px;
        background-color: white;
      }
    `}
`;

const Text = (props) => {
  return <TextBlock {...props}>{props.children}</TextBlock>;
};

export default Text;
